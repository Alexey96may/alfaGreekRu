<?php 
/*
Template Name: Фонетика
*/
?>

<?php
    get_header();
?>

        <main>
          <hr class="hr_title_page" size="3">
          <h1 class="title_page"><?php the_title(); ?></h1>
          <hr class="hr_title_page" size="3">
          <section class="sectionPhonetic">
            <div class="content-hr-text-big"><hr class="hr-text-big"></div>
                <h2 class="text-center"><?php the_field('fon_podzagolovok_1');?></h2>
            <div class="content-hr-text-big"><hr class="hr-text-big"></div>

            <br>
            <div class="inform">
                <p class="text_paragraph">Греческий язык содержит <b>24 буквы</b>: <b>17 согласных</b> и <b>7 гласных</b>, а также <b>диграфы</b> (сочетания двух букв, которые вместе составляют иной звук или звуки, нежели они составляли бы по отдельности):</p>
                <br>
                <ul style="ulCircle">
                    <li>Гласные: <strong>α, ε, η, ι, ο, υ, ω</strong>;</li>
                    <li>Согласные звонкие: <strong>β, γ, δ, ζ, λ, μ, ν, ρ</strong>;</li>
                    <li>Согласные глухие: <strong>θ, κ, ξ , π, σ, τ, φ, χ, ψ</strong>;</li>
                    <li>Гласные диграфы: <strong>αι, ει, οι, ου, αυ, ευ</strong>;</li>
                    <li>Согласные диграфы: <strong>γγ, γκ, γχ, μπ, ντ, τζ, τς, σμ, σβ</strong>.</li>
                </ul>
                <hr>
                <p>В новогреческой орфографии есть две особенности: </p>
                <br>
                    <ol>
                        <li>Наличие в алфавите нескольких букв для передачи одного и того же звука:
                            <ul style="ulCircle">
                                <li>Звук <b>[и]</b>: буквы <strong>η, ι, υ</strong> и диграфы <strong>ει, οι</strong>;</li>
                                <li>Звук <b>[э]</b>: буква <strong>ε</strong> и диграф <strong>αι</strong>;</li>
                                <li>Звук <b>[о]</b>: буквы <strong>ο, ω</strong>.</li>
                            </ul>
                        </li>
                        <li>Наличие звуков, для которых не нашлось отдельных букв в греческом алфавите, и они передаются диграфами:
                            <ul style="ulCircle">
                                <li>Звук <b>[у]</b>: диграф <strong>ου</strong>;</li>
                                <li>Звук <b>[ц]</b>: диграф <strong>τσ</strong>;</li>
                                <li>Звук <b>[г] (как в русском языке)</b>: диграф <strong>γκ</strong> (в начале слова), а также диграфы <strong>γκ, γγ</strong> (в середине слов, которые дают звук <b>[нг]</b>).</li>
                                <li>Звук <b>[д]</b>: диграф <strong>ντ</strong> (в начале слова), диграф <strong>ντ</strong> (в середине слова, дающий звук <b>[нд]</b>), и диграф <strong>τζ</strong> (дающий звук <b>[дз]</b>);</li><li>Звук <b>[б]</b>: диграф <strong>μπ</strong> (в начале слова), и диграф <strong>μπ</strong> (в середине слова, дающий звук <b>[мб]</b>);</li>
                            </ul>
                        </li>
                    </ol>
            </div>
          </section>

          <section class="sectionPhonetic">
            <div class="under_title">
                <div class="content-hr-text-big"><hr class="hr-text-big"></div>
                    <h2 class="text-center"><?php the_field('fon_podzagolovok_2');?></h2>
                <div class="content-hr-text-big"><hr class="hr-text-big"></div>
            </div>

            <div class="table-content">
                <table class="table text-center">
                    <caption><em>Таблица: Алфавит греческого языка</em></caption>
                    <thead>
                        <tr class="table-dark">
                            <th scope="col" width="30%">Буква</th>
                            <th scope="col" width="30%">Звук</th>
                            <th scope="col">Греческое название</th>
                            <th scope="col">Русское название</th>
                        </tr>
                      </thead>
                    <tbody>
                        <tr>
                            <td scope="row"><strong>&Alpha; &alpha;</strong></th>
                            <td scope="row"><strong>&#91;а&#93;</strong></th>
                            <td>άλφα</td>
                            <td>альфа</td>
                        </tr>
                        <tr>
                            <td scope="row"><strong>&Beta; &beta;</strong></td>
                            <td scope="row"><strong>&#91;в&#93;</strong></td>
                            <td>βήτα</td>
                            <td>вита (бета)</td>
                        </tr>
                        <tr>
                            <td scope="row"><strong>&Gamma; &gamma;</strong></td>
                            <td scope="row"><i>1.</i> <strong>&#91;г&#93;</strong> <br><span class="selected-text2">(как украинская "г")</span>
                                <br><i>2.</i> <strong>&#91;й&#93;</strong><br><span class="selected-text2">(перед ε, η, ι, υ, αι, ει, οι)</span></td>
                            <td>γάμμα</td>
                            <td>гамма</td>
                        </tr>
                        <tr>
                            <td scope="row"><strong>&Delta; &delta;</strong></td>
                            <td scope="row"><strong>&#91;д&#93;</strong><br><span class="selected-text2">(как английская межзубная "th" в слове the)</span></td>
                            <td>δέλτα</td>
                            <td>дельта</td>
                        </tr>
                        <tr>
                            <td scope="row"><strong>&Epsilon; &epsilon;</strong></th>
                            <td scope="row"><strong>&#91;э&#93;</strong></th>
                            <td>έψιλον</td>
                            <td>эпсилон</td>
                        </tr>
                        <tr>
                            <td scope="row"><strong>&Zeta; &zeta;</strong></th>
                            <td scope="row"><strong>&#91;з&#93;</strong> <br><span class="selected-text2">("з" имеет тенденцию звучать мягко, близко к "ж")</span></th>
                            <td>ζήτα</td>
                            <td>зита (дзета)</td>
                        </tr>
                        <tr>
                            <td scope="row"><strong>&Eta; &eta;</strong></th>
                            <td scope="row"><strong>&#91;и&#93;</strong> <br><span class="selected-text2">(после звука "τ" читается между "и" и "ы" по твёрдости)</span></th>
                            <td>ήτα</td>
                            <td>ита (эта)</td>
                        </tr>
                        <tr>
                            <td scope="row"><strong>&Theta; &theta;</strong></th>
                            <td scope="row"><strong>&#91;т&#93;</strong><br><span class="selected-text2">(как английская межзубная "th" в слове depth)</span></th>
                            <td>θήτα</td>
                            <td>фита (тета)</td>
                        </tr>
                        <tr>
                            <td scope="row"><strong>&Iota; &iota;</strong></th>
                            <td scope="row"><strong>&#91;и&#93;</strong> <br><span class="selected-text2">(после звука "τ" читается между "и" и "ы" по твёрдости)</span></th>
                            <td>γιώτα</td>
                            <td>йота</td>
                        </tr>
                        <tr>
                            <td scope="row"><strong>&Kappa; &kappa;</strong></th>
                            <td scope="row"><strong>&#91;к&#93;</strong></th>
                            <td>κάππα</td>
                            <td>каппа</td>
                        </tr>
                        <tr>
                            <td scope="row"><strong>&Lambda; &lambda;</strong></td>
                            <td scope="row"><strong>&#91;л&#93;</strong> <br><span class="selected-text2">(мягче русской "л", язык к нёбу)</span></td>
                            <td>λάμ(β)δα</td>
                            <td>ламда (лямбда)</td>
                        </tr>
                        <tr>
                            <td scope="row"><strong>&Mu; &mu;</strong></td>
                            <td scope="row"><strong>&#91;м&#93;</strong></td>
                            <td>μι</td>
                            <td>ми (мю)</td>
                        </tr>
                        <tr>
                            <td scope="row"><strong>&Nu; &nu;</strong></td>
                            <td scope="row"><strong>&#91;н&#93;</strong></td>
                            <td>νι</td>
                            <td>ни (ню)</td>
                        </tr>
                        <tr>
                            <td scope="row"><strong>&Xi; &xi;</strong></td>
                            <td scope="row"><strong>&#91;кс&#93;</strong> <br><span class="selected-text2">(где "с" имеет тенденцию звучать мягко, близко к "ш")</span></td>
                            <td>ξι</td>
                            <td>кси</td>
                        </tr>
                        <tr>
                            <td scope="row"><strong>&Omicron; &omicron;</strong></td>
                            <td scope="row"><strong>&#91;о&#93;</strong></td>
                            <td>όμικρον</td>
                            <td>омикрон</td>
                        </tr>
                        <tr>
                            <td scope="row"><strong>&Pi; &pi;</strong></td>
                            <td scope="row"><strong>&#91;п&#93;</strong></td>
                            <td>πι</td>
                            <td>пи</td>
                        </tr>
                        <tr>
                            <td scope="row"><strong>&Rho; &rho;</strong></td>
                            <td scope="row"><strong>&#91;р&#93;</strong></td>
                            <td>ρο, ρω</td>
                            <td>ро</td>
                        </tr>
                        <tr>
                            <td scope="row"><strong>&Sigma; &sigma; &sigmaf;</strong></td>
                            <td scope="row"><strong>&#91;с&#93;</strong> <br><span class="selected-text2">("с" имеет тенденцию звучать мягко, близко к "ш")</span></td>
                            <td>σίγμα</td>
                            <td>сигма</td>
                        </tr>
                        <tr>
                            <td scope="row"><strong>&Tau; &tau;</strong></td>
                            <td scope="row"><strong>&#91;т&#93;</strong></td>
                            <td>ταυ</td>
                            <td>таф (тау)</td>
                        </tr>
                        <tr>
                            <td scope="row"><strong>&Upsilon; &upsilon;</strong></td>
                            <td scope="row"><strong>&#91;и&#93;</strong> <br><span class="selected-text2">(после звука "τ" читается между "и" и "ы" по твёрдости)</span></td>
                            <td>ύψιλον</td>
                            <td>ипсилон</td>
                        </tr>
                        <tr>
                            <td scope="row"><strong>&Phi; &phi;</strong></td>
                            <td scope="row"><strong>&#91;ф&#93;</strong></th>
                            <td>φι</td>
                            <td>фи</td>
                        </tr>
                        <tr>
                            <td scope="row"><strong>&Chi; &chi;</strong></td>
                            <td scope="row"><strong>&#91;х&#93;</strong></td>
                            <td>χι</td>
                            <td>хи</td>
                        </tr>
                        <tr>
                            <td scope="row"><strong>&Psi; &psi;</strong></td>
                            <td scope="row"><strong>&#91;пс&#93;</strong> <br><span class="selected-text2">(где "с" имеет тенденцию звучать мягко, близко к "ш")</span></td>
                            <td>ψι</td>
                            <td>пси</td>
                        </tr>
                        <tr>
                            <td scope="row"><strong>&Omega; &omega;</strong></td>
                            <td scope="row"><strong>&#91;о&#93;</strong></td>
                            <td>ωμέγα</td>
                            <td>омега</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <span class="badge bg-secondary">Кроме того:</span>
            <ol class="ol-text ol-text-star">
                <li>В греческом языке гласные буквы звучат без редукции (независимо от ударения, или как если бы они всегда стояли под ударением);</li>
                <li>Гласная <strong>ε</strong> (как и диграф <strong>αι</strong>) влияет на мягкость некоторых согласных (и диграфов) - <strong>κ, λ, γ, γκ, χ</strong>. После них она даёт звук <b>[е]</b>: κε, λε, γε, γκε, χε [ке, ле, йе, ге, хе];</li>
                <li>Двойные согласные читаются как один звук, кроме диграфа <strong>γγ</strong>, который даёт два звука: <b>[нг]</b>;</li>
                <li>В конце слов сигма принимает вид - <strong>"&sigmaf;"</strong>.</li>
            </ol>
        </section>

        <section class="sectionPhonetic">
            <div class="under_title">
                <div class="content-hr-text-big"><hr class="hr-text-big"></div>
                    <h2 class="text-center"><?php the_field('fon_podzagolovok_3');?></h2>
                <div class="content-hr-text-big"><hr class="hr-text-big"></div>
            </div>
            
            <div class="table-content">
                <table class="table text-center">
                    <caption><em>Таблица: Диграфы в греческом языке</em></caption>
                    <thead>
                        <tr>
                            <th scope="col" width="35%">Диграф</th>
                            <th scope="col" width="35%">Звук</th>
                            <th scope="col">Пример</th>
                        </tr>
                        </thead>
                    <tbody>
                        <tr>
                            <td><strong>αι</strong></td>
                            <td><strong>&#91;э&#93;</strong></td>
                            <td>καλοκαίρι, παιδαγωγική, Αίγυπτος</td>
                        </tr>
                        <tr>
                            <td><strong>ει</strong></td>
                            <td><strong>&#91;и&#93;</strong></td>
                            <td>σχολείο, ειρήνη, ειρωνεία</td>
                        </tr>
                        <tr>
                            <td><strong>οι</strong></td>
                            <td><strong>&#91;и&#93;</strong></td>
                            <td>δρόμοι, φίλοι, όλοι</td>
                        </tr>
                        <tr>
                            <td><strong>ου</strong></td>
                            <td><strong>&#91;у&#93;</strong></td>
                            <td>λουλούδι, μου, Ουκρανία</td>
                        </tr>
                        <tr>
                            <td><strong>αυ</strong></td>
                            <td><i>1.</i> <strong>&#91;ав&#93;</strong> <br><i>2.</i> <strong>&#91;аф&#93;</strong> <br><span class="selected-text2">(перед глухими согласными θ,κ,ξ,π,σ,τ,φ,χ,ψ)</span></td>
                            <td><i>1.</i> αύριο, παύω <br><i>2.</i> αυτό, Αυστραλία</td>
                        </tr>
                        <tr>
                            <td><strong>ευ</strong></td>
                            <td><i>1.</i> <strong>&#91;эв&#93;</strong> <br><i>2.</i> <strong>&#91;эф&#93;</strong> <br><span class="selected-text2">(перед глухими согласными θ,κ,ξ,π,σ,τ,φ,χ,ψ)</span></th>
                            <td><i>1.</i> δουλεύω, εύρηκα<br><i>2.</i> ευτυχία, θεραπευτικός</td>
                        </tr>
                        <tr>
                            <td><strong>γγ</strong> <br><span class="selected-text2">(в начале слова не употребляется)</span></td>
                            <td><strong>&#91;нг&#93;</strong> <br><span class="selected-text2">(в середине слова)(н - заднеязычное)</span></td>
                            <td>άγγελος, φεγγάρι, αγγελία</td>
                        </tr>
                        <tr>
                            <td><strong>γκ</strong></td>
                            <td><i>1.</i> <strong>&#91;г&#93;</strong> <br><span class="selected-text2">(в начале слова),</span> <br><i>2.</i> <strong>&#91;нг&#93;</strong> <br><span class="selected-text2">(в середине)(н - заднеязычное)</span></td>
                            <td><i>1.</i> γκάζι, γκρίζος<br><i>2.</i> άγκυρα, αγκώνας</td>
                        </tr>
                        <tr>
                            <td><strong>γχ </strong><br><span class="selected-text2">(в начале слова не употребляется)</span></td>
                            <td><strong>&#91;нх&#93;</strong> <br><span class="selected-text2">(в середине слова)(н - заднеязычное)</span></td>
                            <td>συγχωρώ, έλεγχος, έγχρωμος</td>
                        </tr>
                        <tr>
                            <td><strong>μπ</strong></td>
                            <td><i>1.</i> <strong>&#91;б&#93;</strong> <br><span class="selected-text2">(в начале слова, и везде в иностранных именах и названиях),</span> <br><i>2.</i> <strong>&#91;мб&#93;</strong> <br><span class="selected-text2">(в середине)</span> <br><i>3.</i> <strong>&#91;мп&#93;</strong> <br><span class="selected-text2">(в середине перед глухим согласным)</span></td>
                            <td><i>1.</i> μπύρα, μπότα<br><i>2.</i> λάμπα, εμπειρία<br><i>3.</i> σύμπτωμα, άμεμπτος</td>
                        </tr>
                        <tr>
                            <td><strong>ντ</strong></td>
                            <td><i>1.</i> <strong>&#91;д&#93;</strong> <br><span class="selected-text2">(в начале слова, и везде в иностранных именах и названиях),</span> <br><i>2.</i><strong> &#91;нд&#93;</strong> <br><span class="selected-text2">(в середине) </span><br><i>3.</i> <strong>&#91;нт&#93;</strong> <br><span class="selected-text2">(иногда в иностранных словах)</span></td>
                            <td><i>1.</i> ντομάτα, ντιβάνι<br><i>2.</i> πάντα, γέροντας <br><i>3.</i> κομπλιμέντο, κόντρα</td>
                        </tr>
                        <tr>
                            <td><strong>τζ</strong></td>
                            <td><strong>&#91;дз&#93;</strong></td>
                            <td>τζάμι, τζάκι</td>
                        </tr>
                        <tr>
                            <td><strong>τσ</strong></td>
                            <td><strong>&#91;ц&#93;</strong></td>
                            <td>τσάι, πετσέτα, έτσι</td>
                        </tr>
                        <tr>
                            <td><strong>σμ</strong></td>
                            <td><strong>&#91;зм&#93;</strong></td>
                            <td>σμέουρο, κόσμος</td>
                        </tr>
                        <tr>
                            <td><strong>σβ</strong></td>
                            <td><strong>&#91;зв&#93;</strong></td>
                            <td>σβήνω</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <span class="badge bg-secondary">Кроме того:</span>
            <ol class="ol-text ol-text-star">
                <li>Диграф <strong>αι</strong> (как и гласная <strong>ε</strong>) влияет на мягкость некоторых согласных (и диграфов) - <strong>κ, λ, γ, γκ, χ</strong>. После них он даёт звук <b>[е]</b>: κε, λε, γε, γκε, χε [ке, ле, йе, ге, хе];</li>
                <li>Диграфы <strong>άι, έι, όι</strong> или <strong>αϊ, εϊ, οϊ</strong> – читаются как <strong>[ай, эй, ой]</strong></li>
            </ol>
        </section>

        <section class="sectionPhonetic">
            <div class="under_title">
                <div class="content-hr-text-big"><hr class="hr-text-big"></div>
                    <h2 class="text-center"><?php the_field('fon_podzagolovok_5');?></h2>
                <div class="content-hr-text-big"><hr class="hr-text-big"></div>
            </div>

            <div class="text_stream">
                <p>Ударение - одна из самых запутанных тем греческого языка, но мы можем уже сейчас пролить свет на её основную логику.</p>
                <br>
                <p>Начать стоит с того, что невозможно, не зная слово, определить, где именно у него стоит ударение. Существуют некоторые определённые <a href="<?php echo get_permalink(1148);?>">правила смены ударения при склонении существительных</a> или спряжении глаголов, но изначальную позицию ударения в слове нужно запоминать в частном порядке.</p>
                <br>
                <p>К счастью, есть одно очень строгое правило: ударение в слове греческого языка может быть либо на 1-м, либо на 2-м, либо на 3-м слоге с конца слова, то есть на одном из трёх конечных слогов. Но если при склонении существительного или спряжении глагола к слову, у которого ударение уже было на 3-м слоге, добавляется ещё один слог (что бывает часто), то тогда ударение падает на новый третий слог, то есть автоматически меняется.
                <p>Но здесь есть маленькое исключение: иногда в греческом можно встретить два ударения в одном слове! Это объясняется тем, что притяжательные местоимения "мой, твой, его и т.д." в греческом языке фонетически сливаются с существительным, к которому они относятся, становясь его новым слогом, и в ситуации, где ударение существительного изначально падало на 3-й слог, с притяжательным местоимением его ударение НЕ сдвигается, но добавляется ещё одно ударение на его последний слог, которое фонетически будет сильнее первого ударения.</p> 
                <br>
                <p>Кстати, нужно помнить, что притяжательные местоимения в греческом ставятся ПОСЛЕ существительного.</p>
                <br>
                <p>Например, слово "семья": <strong>η οικογένεια</strong> - ударение на 3-м слоге с конца (<em>с диграфом ει - один слог</em>), но "моя семья": <strong>η οικογένειά μου</strong> - за счёт притяжательного местоимения в конце существительного появляется ещё одно ударение.</p>
            </div>
        </section>

        <section class="sectionPhonetic">
            <div class="under_title">
                <div class="content-hr-text-big"><hr class="hr-text-big"></div>
                    <h2 class="text-center"><?php the_field('fon_podzagolovok_4');?></h2>
                <div class="content-hr-text-big"><hr class="hr-text-big"></div>
            </div>

            <div class="text_stream">
                <p>В разговорной речи при встрече некоторых звуков на стыке слов происходят такие изменения:</p>
                <br>
                <ol>
                    <li>Выпадение гласной буквы одного из слов (на письме обозначается апострофом <b>[’]</b>):
                        <ul style="margin:0;">
                            <li>Не произносится конечный звук начального слова: <br>Τα άστρα – τ’άστρα;</li>
                            <li>Не произносится начальный гласный звук последующего слова (не для всех слов на письме!):<br> Εγώ είμαι – εγώ’μαι.</li>
                        </ul>
                    </li>
                    <li>Слияние гласных с образованием нового звука: θα έρθω – θα 'ρθω.</li>
                    <li>После буквы <strong>ν</strong> согласные <strong>κ, ξ, π, ψ, τ, τσ</strong> озвончаются и читаются так:
                        <ul style="margin:0;">
                            <li>Буква <strong>κ</strong> после ν – <b>[нг]</b>: τον κόσμο;</li>
                            <li>Буква <strong>ξ</strong> после ν – <b>[нгз]</b>: δεν ξέρω;</li>
                            <li>Буква <strong>π</strong> после ν – <b>[нб]</b>: την πόλη;</li>
                            <li>Буква <strong>ψ</strong> после ν – <b>[нб]</b>: την ψυχή;</li>
                            <li>Буква <strong>τ</strong> после ν – <b>[нд]</b>: τον τόνο;</li>
                            <li>Буква <strong>τσ</strong> после ν – <b>[ндз]</b>: την τσάντα;</li>
                        </ul>
                    </li>
                </ol>
            </div>
        </section>

        <section class="sectionPhonetic">
            <div class="under_title">
                <div class="content-hr-text-big"><hr class="hr-text-big"></div>
                    <h2 class="text-center">IPA чарт гласных звуков</h2>
                <div class="content-hr-text-big"><hr class="hr-text-big"></div>
            </div>

            <div class="text_stream">
                <p>IPA чарт гласных звуков позволяет максимально точно охарактеризовать гласный звук путём его изображения на рисунке, на котором 
                    обозначено расположение языка в ротовой полости при произношении этого звука. Использовать IPA чарт в изучении греческого языка для русскоговорящих учеников не обязательно, но будет очень показательно, а в будущем может стать особенно полезным для изучения языков с относительно сложной фонетикой, таких как английский, немецкий, французский и т.п.
                </p>
                <p>IPA чарт гласных звуков, как уже было сказано, это схема расположения языка во рту при произношении определённого звука. В целом, произношение гласного звука зависит от расположения языка во рту и от округленности губ. Рассмотрим эти зависимости подробнее, и как они передаются на рисунках: 
                    <ul>
                        <li><b>Положение языка по вертикали (сюда же входит степень открытости рта).</b> <br> 
                            Здесь мы имеем деление гласных на <strong>закрытые и открытые звуки</strong>. 
                            Например, русский звук "а" - открытый, потому что для его произношения рот должен быть сильно открыт, а язык прижат к нижним зубам, или находится рядом с ними. 
                            Тогда, русский и греческий звуки "и" - закрытые, так как рот должен быть лишь немного приоткрытым для их произношения, а язык находится у верхних зубов. 
                            Звуки "э" занимают промежуточное положение: рот открывается не широко, язык в середине рта. 
                            На рисунках данные звуки обозначаюся так: закрытые наверху, полуоткрытые - в середине по вертикали, открытые внизу.
                            Звуки "и", "а", "э" являются также неогубленными и передними, о чём мы поговорим далее.
                        </li>
                        <li><b>Положение языка в глубине рта.</b> <br>
                            Здесь мы имеем деление гласных на <strong>передние и задние звуки</strong>. 
                            Например, русский и греческий звуки "и" передние, так как язык располагается в передней части рта.
                            Тогда звуки "о" - задние, так как язык будет располагаться в глубине рта для их произношения.
                            На рисунках данные звуки обозначаюся так: передние слева, средние - в середине по горизонтали, задние - справа.
                        </li>
                        <li><b>Скруглённость губ.</b> <br>
                            Здесь мы имеем деление гласных на <strong>огубленные и неогубленные звуки</strong>. 
                            Например, русский и греческий звуки "и" неогубленные, так как произносятся без участия или напряжения губ.
                            Тогда звуки "о" - огубленные, так как губы при их произношении придётся округлить.
                            На рисунках данные звуки обозначаюся так: огубленные - кружочком, а неогубленные - квадратиком.
                        </li>
                    </ul>
                    <p>Таким образом, IPA чарт позволяет нам рассмотреть некоторые несущественные отличия между русскими гласными звуками и греческими:
                        <ul>
                            <li><strong>Звук i </strong>(русский "и", греческий "ι").<br>
                                Данные звуки в греческом и русском практически совпадают. Греческий вариант чуть более открыт.
                                Также после звука "τ" греческая "ι" становится более задней, совпадающей с английским коротким звуком "i" (что-то среднее между русскими "и" и "ы", но рот открывается чуть больше). 
                                Данное правило с изменением звука "и" перед "т" характерно и для некоторых других языков, например, для испанского.
                            </li>
                            <li><strong>Звук u </strong>(русский "у", греческий "ου").<br>
                                Данные звуки в греческом и русском языках практически совпадают. Греческий вариант чуть более закрыт.
                            </li>
                            <li><strong>Звук ε </strong> (русский "э", греческий "ε").<br>
                                Данные звуки в греческом и русском языках практически совпадают. Греческий вариант чуть более открыт.
                            </li>
                            <li><strong>Звук o </strong>(русский "о", греческий "ο").<br>
                                Данные звуки в греческом и русском языках практически совпадают. Греческий вариант чуть более закрыт.
                            </li>
                            <li><strong>Звук a </strong>(русский "а", греческий "α").<br>
                                Данные звуки в греческом и русском языках несколько отличаются. 
                                Греческий вариант уже считается средним, то есть более задним по отношению к русскому "а".
                                Также греческий вариант чуть более закрыт, и он напоминает скорее не полноценный русский звук "а", который в русском языке бывает под ударением, а один из его безударных аналогов (аллофонов), например, звук "а" в слове "например", если произносить его быстро и естественно.
                                То есть греческий вариант чуть менее отчётливый и "сильный" по отношению к основному русскому звуку "а".
                            </li>
                            <li><strong>Звук ɨ (русский "ы")</strong>.<br>
                                В греческом языке подобный звук отсутствует.
                            </li>
                        </ul>
                    </p>
                    <p><b>В итоге:</b> греческие гласные звуки почти идентичны своим русским аналогам, хотя передние звуки чуть более открыты, а задние - чуть более закрыты.</p>
                        Греческий звук "α" средний и более закрыт - менее отчётливый - в сравнении с русским вариантом.
                    </p>
                    <div class="image_wrapper">
                        <figcaption>IPA чарт гласных звуков греческого языка</figcaption>
                        <img src="<?php echo bloginfo('template_url'); ?>/assets/img/IPA_Greek.png" alt="Greek IPA vowel chart">
                    </div>
                    <div id="stat_page" class="stat_topic" name="<?php global $post; echo $post->ID;?>">
                        <img src="<?php echo bloginfo('template_url'); ?>/assets/img/viewers.png" alt="просмотры"> <span class="views_counter"><?php echo $post->post_viewers; ?></span>
                    </div>
            </section>


    </main>

    <article class="all_offert">
        <h3 class="text-center">Смотрите также!</h3>
        <br>
        <div class="offers">
            <?php
                global $post;

                $myposts = get_posts([ 
                    'numberposts' => 4,
                    'orderby'     => 'rand'
                ]);

                if( $myposts ){
                    foreach( $myposts as $post ){
                        setup_postdata( $post );
                        ?>
                        <a href="<?php the_permalink(); ?>" class="offer">
                            <div class="container_image_offer">
                                <?php the_post_thumbnail();?>
                            </div>
                            <div class="container_text_offer">
                                <div class="title_text_offer"><span class="offer_text"><?php the_title();?></span></div>
                                <div class="field_text_offer"><?php the_excerpt();?></div>
                            </div>
                        </a>
                        <?php 
                    } } wp_reset_postdata(); // Сбрасываем $post
            ?>
        </div>
    </article>

    </div>
    </div>


<?php
    get_footer();
?>