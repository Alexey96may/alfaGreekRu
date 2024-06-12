<?php

    require_once($_SERVER['DOCUMENT_ROOT'].'/wp-load.php');
    if ($_POST["view"] || $_POST["viewPage"]) {
        global $wpdb;
        if ($_POST["view"]) {
            echo $_POST["viewedTopic"];
            $sql = $wpdb->prepare(
                "
                UPDATE wp_mytable_authors_topics SET topic_view = topic_view + 1
                WHERE topic_id='%d'
                ",
                $_POST["viewedTopic"]
            );
            $object_row = $wpdb->get_results($sql);
        }
        if ($_POST["viewPage"]) {
            echo $_POST["viewedPage"];
            $sql = $wpdb->prepare(
            "
            UPDATE wp_posts SET post_viewers = post_viewers + 1
            WHERE ID='%d'
            ",
            $_POST["viewedPage"]
            );
            $object_row = $wpdb->get_results($sql);
        }

    } else {
    require_once(__DIR__.'/author.php');

    $topic_content = trim($_POST["topic-content"]);
    $author_id = $_POST["topic-author"];
    $topic_photo = $_FILES["topic-photo"]["name"];
    date_default_timezone_set("Europe/Moscow");
    $topic_time = date("Y-m-d H:i:s");
    $topic_view = 0;
    
    $error = $success = '';
    
    //проверка на содержание в ссылке запроса get
    if (str_contains($_SERVER['HTTP_REFERER'], '?')) {
        $getClear = strstr($_SERVER['HTTP_REFERER'], '?', true);
    }else{
        $getClear = $_SERVER['HTTP_REFERER'];
    }
    
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
        global $wpdb;
    
        // Название <input type="file">
        $input_name = 'topic-photo';
        
        // Разрешенные расширения файлов.
        $allow = array('jpg', 'png', 'jpeg', 'svg', 'gif', 'bmp', 'webp');
        
        // Запрещенные расширения файлов.
        $deny = array(
            'phtml', 'php', 'php3', 'php4', 'php5', 'php6', 'php7', 'phps', 'cgi', 'pl', 'asp', 
            'aspx', 'shtml', 'shtm', 'htaccess', 'htpasswd', 'ini', 'log', 'sh', 'js', 'html', 
            'htm', 'css', 'sql', 'spl', 'scgi', 'fcgi'
        );
        
        // Директория куда будут загружаться файлы.
        $path = __DIR__ . '/assets/img/uploads/';
    
        if ($topic_content || $topic_photo) {
    
            if ($topic_photo !== "") {
                if (isset($_FILES[$input_name])) {
    
                    // Проверим директорию для загрузки.
                    if (!is_dir($path)) {
                        mkdir($path, 0777, true);
                    }
                
                    // Преобразуем массив $_FILES в удобный вид для перебора в foreach.
                    $files = array();
                    $diff = count($_FILES[$input_name]) - count($_FILES[$input_name], COUNT_RECURSIVE);
                    if ($diff == 0) {
                        $files = array($_FILES[$input_name]);
                    } else {
                        foreach($_FILES[$input_name] as $k => $l) {
                            foreach($l as $i => $v) {
                                $files[$i][$k] = $v;
                            }
                        }		
                    }	
                    
                    foreach ($files as $file) {
                
                        // Проверим на ошибки загрузки.
                        if (!empty($file['error']) || empty($file['tmp_name'])) {
                            switch (@$file['error']) {
                                case 1:
                                case 2: $error = 'Превышен размер загружаемого файла.'; break;
                                case 3: $error = 'Файл был получен только частично.'; break;
                                case 4: $error = 'Файл не был загружен.'; break;
                                case 6: $error = 'Файл не загружен - отсутствует временная директория.'; break;
                                case 7: $error = 'Не удалось записать файл на диск.'; break;
                                case 8: $error = 'PHP-расширение остановило загрузку файла.'; break;
                                case 9: $error = 'Файл не был загружен - директория не существует.'; break;
                                case 10: $error = 'Превышен максимально допустимый размер файла.'; break;
                                case 11: $error = 'Данный тип файла запрещен.'; break;
                                case 12: $error = 'Ошибка при копировании файла.'; break;
                                default: $error = 'Файл не был загружен - неизвестная ошибка.'; break;
                            }
                        } elseif ($file['tmp_name'] == 'none' || !is_uploaded_file($file['tmp_name'])) {
                            $error = 'Не удалось загрузить файл.';
                            header('location:' . $getClear . "?theError=$error");
                        } else {
                            // Оставляем в имени файла только буквы, цифры и некоторые символы.
                            $pattern = "[^a-zа-яё0-9,~!@#%^-_\$\?\(\)\{\}\[\]\.]";
                            $name = mb_eregi_replace($pattern, '-', $file['name']);
                            $name = mb_ereg_replace('[-]+', '-', $name);
                            
                            // Т.к. есть проблема с кириллицей в названиях файлов (файлы становятся недоступны).
                            // Сделаем их транслит:
                            $converter = array(
                                'а' => 'a',   'б' => 'b',   'в' => 'v',    'г' => 'g',   'д' => 'd',   'е' => 'e',
                                'ё' => 'e',   'ж' => 'zh',  'з' => 'z',    'и' => 'i',   'й' => 'y',   'к' => 'k',
                                'л' => 'l',   'м' => 'm',   'н' => 'n',    'о' => 'o',   'п' => 'p',   'р' => 'r',
                                'с' => 's',   'т' => 't',   'у' => 'u',    'ф' => 'f',   'х' => 'h',   'ц' => 'c',
                                'ч' => 'ch',  'ш' => 'sh',  'щ' => 'sch',  'ь' => '',    'ы' => 'y',   'ъ' => '',
                                'э' => 'e',   'ю' => 'yu',  'я' => 'ya', 
                            
                                'А' => 'A',   'Б' => 'B',   'В' => 'V',    'Г' => 'G',   'Д' => 'D',   'Е' => 'E',
                                'Ё' => 'E',   'Ж' => 'Zh',  'З' => 'Z',    'И' => 'I',   'Й' => 'Y',   'К' => 'K',
                                'Л' => 'L',   'М' => 'M',   'Н' => 'N',    'О' => 'O',   'П' => 'P',   'Р' => 'R',
                                'С' => 'S',   'Т' => 'T',   'У' => 'U',    'Ф' => 'F',   'Х' => 'H',   'Ц' => 'C',
                                'Ч' => 'Ch',  'Ш' => 'Sh',  'Щ' => 'Sch',  'Ь' => '',    'Ы' => 'Y',   'Ъ' => '',
                                'Э' => 'E',   'Ю' => 'Yu',  'Я' => 'Ya',
                            );
                
                            $name = strtr($name, $converter);
                            $parts = pathinfo($name);
                
                            if (empty($name) || empty($parts['extension'])) {
                                $error = 'Загрузите фото!';
                                header('location:' . $getClear . "?theError=$error");
                            } elseif (!empty($allow) && !in_array(strtolower($parts['extension']), $allow)) {
                                $error = 'Загрузите фото!';
                                header('location:' . $getClear . "?theError=$error");
                            } elseif (!empty($deny) && in_array(strtolower($parts['extension']), $deny)) {
                                $error = 'Загрузите фото!';
                                header('location:' . $getClear . "?theError=$error");
                            } else {
                                // Чтобы не затереть файл с таким же названием, добавим префикс.
                                $i = 0;
                                $prefix = '';
                                while (is_file($path . $parts['filename'] . $prefix . '.' . $parts['extension'])) {
                                    $prefix = '(' . ++$i . ')';
                                }
                                $name = $parts['filename'] . $prefix . '.' . $parts['extension'];
                
                                // Перемещаем файл в директорию.
                                if (move_uploaded_file($file['tmp_name'], $path . $name)) {
                                    // Далее можно сохранить название файла в БД и т.п.
                                    $success = 'Файл «' . $name . '» успешно загружен.';
                                    $wpdb->query(
                                        $wpdb->prepare(
                                            "
                                            INSERT INTO wp_mytable_authors_topics
                                            ( author_id, topic_content, topic_photo, topic_date, topic_view )
                                            VALUES ( %d, %s, %s, %s, %d )
                                            ",
                                            $author_id,
                                            $topic_content,
                                            $name,
                                            $topic_time,
                                            $topic_view
                                        )
                                    );
                                    header('location:' . $getClear . "?theSuccess=$success");
                                } else {
                                    $error = 'Не удалось загрузить файл.';
                                    header('location:' . $getClear . "?theError=$error");
                                }
                            }
                        }
                    
                    }
                } 
            } else {
                $wpdb->query(
                    $wpdb->prepare(
                        "
                        INSERT INTO wp_mytable_authors_topics
                        ( author_id, topic_content, topic_date )
                        VALUES ( %d, %s, %s )
                        ",
                        $author_id,
                        $topic_content,
                        $topic_time
                    )
                );
                $success = 'Запись успешно загружена';
                header('location:' . $getClear . "?theSuccess=$success");
            }
        } else {
            $error = 'Введите текст или загрузите фото!';
            header('location:' . $getClear . "?theError=$error");
        };
    
        // Заходим через удаление поста
        if ($_POST["topic_id"]) {
            $topic_id = $_POST["topic_id"];
            $topic_ph = $_POST["topic_ph"];
            $wpdb->query( 
                $wpdb->prepare(
                    "
                    DELETE FROM wp_mytable_authors_topics
                    WHERE topic_id = '%d'
                    ",
                    $topic_id
                )
            );
            unlink (__DIR__.'/assets/img/uploads/'.$topic_ph);
            header('location:' . $getClear);
        };
    
    }
}


