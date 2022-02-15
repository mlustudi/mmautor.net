---
layout: ueber-uns
title: About
description: Since 2003, Multimedia and Authorship has been a master's program of the Department of Media and Communication Studies at the Martin Luther University Halle-Wittenberg.
lang: en
lang-ref: about
order: 4
---

## Facts & Background

The Multimedia and Authorship master's degree program was created at the beginning of the 21st century. The founders wanted **to actively shape technical and digital progress** in our society. In 2003, they tested the program for the first time at the [Martin Luther University Halle-Wittenberg](https://www.uni-halle.de/?lang=en). Since then, the program has been part of the Department of [Media and Communication Science](https://www.medienkomm.uni-halle.de/english_version/).

This was done at the **initiative of the publisher Alfred Neven DuMont**. With his idea of ​​a Hallesche Europäischen Journalistenschule für multimediale Autorschaft (Halle European Journalism School for Multimedia Authorship) / Alfred Neven DuMont ([HALESMA A.N.D.](https://mb.sachsen-anhalt.de/presse/pressemitteilungen/?tx_tsarssinclude_pi1%5Buid%5D=13393&tx_tsarssinclude_pi1%5Baction%5D=single&tx_tsarssinclude_pi1%5Bcontroller%5D=Static&cHash=e1f185d703bc7437adf68194bbb16bd7)), he enabled together with employees and professors of media and communication science such as [Reinhold Viehoff](https://www.medienkomm.uni-halle.de/abteilung/mitarbeiter/viehoff/?ref=mmautor.net), [Ingrid Brück](https://www.researchgate.net/scientific-contributions/Ingrid-Brueck-2120429660) and [Matthias Buck](https://www.ikare.uni-halle.de/kunstgeschichte/personen/buck/?ref=mmautor.net) the development and establishment of the master's program. Inspired by a **pan-European perspective**, the idea is based on the conviction that the **career of journalist is undergoing profound change**. The _Mitteldeutsche Zeitung_, until 2020 part of the DuMont Media Group, supports the master's program and students' entry into the profession through media projects.

In Halle an der Saale, a program was created which has developed in recent years to what Multimedia and Authorship is today: a **contemporary and future-oriented program with practical training in compliance with current theoretical contents of the digital present**. Multimedia and Authorship offers a space for **trial & error, discussions and creation**. Students work together with various cooperation partners. In addition to the _Mitteldeutsche Zeitung_, they include _Vice_, the Mitteldeutsche Rundfunk (MDR) and the Fraunhofer Society. There is also project-related exchange with physicians, ethnologists and other students of Martin Luther University as well as with guests from other institutions.

[Maren Schuster](https://www.medienkomm.uni-halle.de/abteilung/mitarbeiter/schuster/?ref=mmautor.net) and [Patrick Vonderau](https://www.medienkomm.uni-halle.de/abteilung/mitarbeiter/vonderau/?ref=mmautor.net) are currently responsible for the program and contribute their expertise from the fields of science and media praxis to teaching and research projects in the master's program. The program was accredited in 2021.

## Advisory board

Renowned European colleagues provide scientific input and advice.

<section class="advisory-board">
{% for advisor in site.data.advisory_board %}
    <section>
        <img src="{{ site.url | append: site.imageurl | append: advisor.image }}" alt="{{ advisor.organization }}" loading="lazy">
        <div>
        {% for member in advisor.member %}
        <strong>{{ member.name }}</strong>,<br>
        {% endfor %}
        {{ advisor.organization }}
        </div>
    </section>
{% endfor %}
</section>


<h2 id="kooperationspartnerinnen">Partners</h2>

Many projects can only be realized because of our cooperation with media partners, academic partners or civil-society actors. Are you interested in realizing a project or do you have a concrete idea? Do not hesitate to [contact us](/imprint).

<section class="cooperations">
{% for partner in site.data.cooperations.partner %}
{% if partner.url %}<a href="{{ partner.url }}">{% endif %}
<img src="{{ site.url | append: "/assets/images/" | append: partner.image }}" alt="{{ partner.name }}" loading="lazy">
{% if partner.url %}</a>{% endif %}
{% endfor %}
</section>

## Who studies MMA & why?

In the Multimedia and Authorship master's program, **people from different disciplines** come together. We are also composed of graduates in humanities, social sciences, cultural studies and natural sciences. We contribute **different interests, experiences and motivations**, ensuring an exciting mixture in the seminar room.

What we never would have accomplished without Multimedia and Authorship, which insights have impressed us in our studies, and what does not fit together at first glance but comes together in the program can be found here.

<!-- Bereich 1 -->
<section class="students">
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src="{{ site.url | append: site.imageurl }}students/2019/meret-aupperle.png" alt="Meret Aupperle">
            </div>
            <div class="flip-card-back">
                <h3>Meret</h3>
            </div>
        </div>
    </div>
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src="{{ site.url | append: site.imageurl }}students/2019/soeren-engels.jpg" alt="Sören Engels">
            </div>
            <div class="flip-card-back">
                <h3>Sören</h3>
            </div>
        </div>
    </div>
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src="{{ site.url | append: site.imageurl }}students/2019/milena-giskes.jpg" alt="Milena Giskes">
            </div>
            <div class="flip-card-back">
                <h3>Milena</h3>
            </div>
        </div>
    </div>
</section>
<section>
<p>
<u>Meret Aupperle</u><br>
If your <strong>heart rate</strong> remains normal after four cups of coffee, you've <em>#mmarrived</em>.
</p>
<p>
<u>Sören Engels</u><br>
Without MMA I never would've started a <strong>journalism book club</strong> with other students.
</p>
<p>
<u>Milena Giskes</u><br>
Journalism, university and praxis-based projects: not an obvious combination at first glance, but a perfect opportunity to <strong>try out something new</strong>.
</p>
</section>

<!-- Bereich 2 -->
<section class="students">
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src="{{ site.url | append: site.imageurl }}students/2019/maike-grabow.jpg" alt="Maike Grabow">
            </div>
            <div class="flip-card-back">
                <h3>Maike</h3>
            </div>
        </div>
    </div>
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src="{{ site.url | append: site.imageurl }}students/2019/oliver-haupt.jpg" alt="Oliver Haupt">
            </div>
            <div class="flip-card-back">
                <h3>Oliver</h3>
            </div>
        </div>
    </div>
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src="{{ site.url | append: site.imageurl }}students/2019/sarah-maria-koepf.jpg" alt="Sarah-Maria Köpf">
            </div>
            <div class="flip-card-back">
                <h3>Sarah-Maria</h3>
            </div>
        </div>
    </div>
</section>
<section>
<p>
<u>Maike Grabow</u><br>
MMA is when <strong>vampires, health and walks</strong> come together.
</p>
<p>
<u>Oliver Haupt</u><br>
The MMA program combines a variety of different subjects (including in the course content), plenty of major projects and both <strong>social distancing and group work</strong>.
</p>
<p>
<u>Sarah-Maria Köpf</u><br>
MMA unites creative media design and <strong>interesting discussions</strong>, and also provides the knowledge of journalism needed for your own projects.
</p>
</section>

<!-- Bereich 3 -->
<section class="students">
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src="{{ site.url | append: site.imageurl }}students/2019/jenny-lehmann.jpg" alt="Jenny Lehmann">
            </div>
            <div class="flip-card-back">
                <h3>Jenny</h3>
            </div>
        </div>
    </div>
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src="{{ site.url | append: site.imageurl }}students/2019/alexandra-pubantz.jpg" alt="Alexandra Pubantz">
            </div>
            <div class="flip-card-back">
                <h3>Alexandra</h3>
            </div>
        </div>
    </div>
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src="{{ site.url | append: site.imageurl }}students/2019/frauke-rummler.jpg" alt="Frauke Rummler">
            </div>
            <div class="flip-card-back">
                <h3>Frauke</h3>
            </div>
        </div>
    </div>
</section>
<section>
<p>
<u>Jenny Lehmann</u><br>
Students from all kinds of scientific areas and with <strong>different levels of media expertise</strong> and experience in journalism are thrown together and shape a master's degree in media together. And it works.
</p>
<p>
<u>Alexandra Pubantz</u><br>
What impressed me about this program was that we were able to <strong>accomplish everything in spite of online courses</strong> during the pandemic.
</p>
<p>
<u>Frauke Rummler</u><br>
Without MMA I never would've tried such a range of formats, <strong>made a film</strong>, <strong>programmed</strong>, or gotten to know about <strong>social media</strong>.
</p>
</section>

<!-- Bereich 4 -->
<section class="students">
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src="{{ site.url | append: site.imageurl }}students/2019/irene-schulz.jpg" alt="Irene Schulz">
            </div>
            <div class="flip-card-back">
                <h3>Irene</h3>
            </div>
        </div>
    </div>
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src="{{ site.url | append: site.imageurl }}students/2019/yevgeniya-shcherbakova.jpg" alt="Yevgeniya Shcherbakova">
            </div>
            <div class="flip-card-back">
                <h3>Yevgeniya</h3>
            </div>
        </div>
    </div>
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src="{{ site.url | append: site.imageurl }}students/2019/denise-stell.jpg" alt="Denise Stell">
            </div>
            <div class="flip-card-back">
                <h3>Denise</h3>
            </div>
        </div>
    </div>
</section>
<section>
<p>
<u>Irene Schulz</u><br>
Funnily enough, without MMA I probably never would've started working with my analogue camera so often. That's the great thing: this program has room for <strong>experiments with old technologies</strong>.
</p>
<p>
<u>Yevgeniya Shcherbakova</u><br>
I was impressed by how different kinds of ideas can complement each other in group work, producing great results, and <strong>how much can be accomplished as a team</strong> in a short period of time.
</p>
<p>
<u>Denise Stell</u><br>
In this program, I was mainly impressed when realizing what unique projects are possible when you're willing to <strong>pool a variety of skills rather than compete with them</strong>.
</p>
</section>

<!-- Bereich 5 -->
<section class="students">
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src="{{ site.url | append: site.imageurl }}students/2019/david-sticker.jpg" alt="David Sticker">
            </div>
            <div class="flip-card-back">
                <h3>David</h3>
            </div>
        </div>
    </div>
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src="{{ site.url | append: site.imageurl }}students/2019/maren-wilczek.jpg" alt="Maren Wilczek">
            </div>
            <div class="flip-card-back">
                <h3>Maren</h3>
            </div>
        </div>
    </div>
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src="{{ site.url | append: site.imageurl }}students/2019/britta-zwigart.jpg" alt="Britta Zwigart">
            </div>
            <div class="flip-card-back">
                <h3>Britta</h3>
            </div>
        </div>
    </div>
</section>
<section>
<p>
<u>David Sticker</u><br>
Without MMA, I never would've conducted a <strong>Skype interview with a porn actress</strong>.
</p>
<p>
<u>Maren Wilczek</u><br>
MMA means <strong>courage</strong>, tons of <strong>reading and friendship</strong>.
</p>
<p>
<u>Britta Zwigart</u><br>
I've always wanted to <strong>program a website</strong> or <strong>make a documentary</strong>, but without  MMA that probably never would've happened.
</p>
</section>

## Who studied MMA?

These are some of the things [former students](/alumni) of the Multimedia and Authorship program have to say.

<!-- Alisa Sonntag -->
<section class="alumni">
    <figure>
        <img src="{{ site.url | append: site.imageurl }}students/2017/alisa-sonntag.jpg" alt="Alisa Sonntag">
    </figure>
    <div>
        <strong>Alisa Sonntag</strong><br>
        <p>While at school, I started writing for the local newspaper. Now I'm a freelance <strong>journalist and photographer</strong> and work for MDR Sachsen-Anhalt, Krautreporter, Freitag, and other organizations.</p>
    </div>
</section>
<!-- Daniel Heißenstein -->
<section class="alumni">
    <figure>
        <img src="{{ site.url | append: site.imageurl }}students/2013/daniel-heissenstein.jpg" alt="Daniel Heißenstein">
    </figure>
    <div>
        <strong>Daniel Heißenstein</strong><br>
        <p>After getting the Multimedia and Authorship master's, I became a  <strong>sports journalist</strong>. I write about soccer, make reports on tennis, and produce programs for Sky Sport News.</p>
    </div>
</section>
<!-- Evi Lemberger -->
<section class="alumni">
    <figure>
        <img src="{{ site.url | append: site.imageurl }}students/2013/evi-lemberger.jpg" alt="Evi Lemberger">
    </figure>
    <div>
        <strong>Evi Lemberger</strong><br>
        <p>Since finishing my degree in 2015, my work ranges from <strong>art to journalism and commercial tasks, both online and offline</strong>: a book publication, a postcard competition, a year on Fuerteventura and commercial photography. I was full time at Getty Images for a while, opened a photography studio, and then started teaching in the Multimedia and Authorship master's program – and in between have done photo exhibits, conceptual projects for money or the heart, and also a little journalism. Right now, I'm working on a book about hiking.</p>
    </div>
</section>
<!-- Jessica Zanner -->
<section class="alumni">
    <figure>
        <img src="{{ site.url | append: site.imageurl }}students/2013/jessica-zanner.jpg" alt="Jessica Zanner">
    </figure>
    <div>
        <strong>Jessica Zanner</strong><br>
        <p>After graduating, I got a job in  <strong>IT in the public sector</strong> and am now working at the  State Office of Statistics. On the side, I work on a charity website – my former master's project.</p>
    </div>
</section>
<!-- Marco Härtl -->
<section class="alumni">
    <figure>
        <img src="{{ site.url | append: site.imageurl }}students/2009/marco-haertl.jpg" alt="Marco Härtl">
    </figure>
    <div>
        <strong>Marco Härtl</strong><br>
        <p>While studying, I registered my <strong>media and video-production business</strong>. My  company was launched right after graduation in May 2012 – first as a sole proprietorship in cooperation with a traditional advertising agency. In 2017, I returned to my hometown of Wernersreuth and moved my company into a protected heritage building, a rectory. We now provide creative and production services for a number of different companies, both in  <strong>content marketing</strong> and  <strong>performance marketing</strong>.</p>
    </div>
</section>
<!-- Sadasivam Y. Rao -->
<section class="alumni">
    <figure>
        <img src="{{ site.url | append: site.imageurl }}students/2003/sadasivam-rao.jpg" alt="Sadasivam Y. Rao">
    </figure>
    <div>
        <strong>Sadasivam Y. Rao</strong><br>
        <p>I work as a <strong>filmmaker</strong> in Leipzig, producing <strong>features and documentaries</strong>. Since studying multimedia in Halle, I've found new creative pathways and, for example, regularly include 3D animations with visual effects in my films.</p>
    </div>
</section>
