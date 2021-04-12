---
layout: ueber-uns
title: About
description: Since 2003, multimedia and authorship is a master program of the Department of Media and Communication Science at the Martin-Luther University Halle-Wittenberg.
lang: en
aktueller_jahrgang: "2019"
---

## Facts & Backgrounds

The master's degree program _Multimedia and Authorship_ was created in the first years of the 21st century. The founders wanted **to actively shape technical and digital progress** in our society. In 2003 they tested the program for the first time at the [Martin-Luther-University Halle-Wittenberg](https://www.uni-halle.de/?lang=en). Since then, the master program belongs to the Department of [Media and Communication Science](https://www.medienkomm.uni-halle.de/english_version/).

This could be realized by the **initiative of the publisher Alfred Neven Dumont**. With his idea of ​​a _Halleschen Europäischen Journalistenschule für multimediale Autorschaft / Alfred Neven DuMont_ ([HALESMA A.N.D.](https://mb.sachsen-anhalt.de/presse/pressemitteilungen/?tx_tsarssinclude_pi1%5Buid%5D=13393&tx_tsarssinclude_pi1%5Baction%5D=single&tx_tsarssinclude_pi1%5Bcontroller%5D=Static&cHash=e1f185d703bc7437adf68194bbb16bd7)), he enabled together with employees and professors of media and communication science such as [Reinhold Viehoff](https://www.medienkomm.uni-halle.de/abteilung/mitarbeiter/viehoff/?ref=mmautor.net), [Ingrid Brück](https://www.researchgate.net/scientific-contributions/Ingrid-Brueck-2120429660) and [Matthias Buck](https://www.ikare.uni-halle.de/kunstgeschichte/personen/buck/?ref=mmautor.net) the development and establishment of the master program. Inspired by a **pan-european perspective** the idea is based on the conviction that the **job image of journalists is undergoing a profound change process**. The _Mitteldeutsche Zeitung_, until 2020 part of the _DuMont Media Group_ supports the masters program and the students for media projects and the entry into the profession.

In Halle (Saale), a degree program was created, which has developed in recent years to which is _Multimedia and Authorship_ today: a **contemporary and future-oriented study program with practical training in compliance with current theoretical contents of the digital present**. _Multimedia and Authorship_ offers a space for **trial & error, discussions and creating**. Students work together with various cooperation partners. In addition to the _Mitteldeutsche Zeitung_ they include among others _Vice_, the _Mitteldeutsche broadcasting (MDR)_ or the _Fraunhofer Society_. There is also a project-related exchange with physicians, ethnologist and other students of _Martin-Luther-Universität_, aswell as with guests of other institutions.

The responsibility of the study program is currently at [Maren Schuster](https://www.medienkomm.uni-halle.de/abteilung/mitarbeiter/schuster/?ref=mmautor.net) and [Patrick Vondereu](https://www.medienkomm.uni-halle.de/abteilung/mitarbeiter/vonderau/?ref=mmautor.net), which contribute its respective expertise from science and media practice to the teaching and research projects of the Master's program. The accreditation of the study program is completed in 2021.

## Advisory Board

Scientifically accompanied and advised is the masters program _Multimedia and Authorship_ by renowned colleagues from Europe.

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

## Kooperationspartner:innen

Many projects can only be realized, because of our cooperation with media partners, academic partners or civil society actors. Are you interested in the implementation of a joint project or do you even have a concrete idea? Do not hesitate to [contact us](/imprint).

<section class="cooperations">
{% for partner in site.data.cooperations.partner %}
{% if partner.url %}<a href="{{ partner.url }}">{% endif %}
<img src="{{ site.url | append: "/assets/images/" | append: partner.image }}" alt="{{ partner.name }}" loading="lazy">
{% if partner.url %}</a>{% endif %}
{% endfor %}
</section>

## Who studies MMA & why?

In the master _Multimedia and Authorship_ **people from different disciplines** come together. Also we are a class composed of graduates in humanities, social scienes, cultural studies and natural sciences. We bring **different interests, experiences and motivations** and ensure an exciting mixture in the seminar room.

What we would not have accopmlished without _Multimedia and Authorship_, which insights have impressed us in our studies and what things do not fit together at first glance, but come together in the study program? Read on.

{% assign students = site.data.students[page.aktueller_jahrgang] %}
{% assign off = 0 %}
{% for i in (1..5) %}
<section class="students">
    {% for student in students.students offset:off limit:3 %}
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src="{{ site.url }}/assets/images/{{ student.image }}" alt="{{ student.name }}">
            </div>
            <div class="flip-card-back">
                <h3>{{ student.name | split: " " | first }}</h3>
            </div>
        </div>
    </div>
    {% endfor -%}
</section>
<section>
{%- for student in students.students offset:off limit:3 %}
<p>
<u>{{ student.name }}</u><br>
{{- student.mmaist | markdownify | remove: '<p>' | remove: '</p>' }}
</p>
{% endfor -%}
</section>
{% assign off = off | plus: 3 %}
{% endfor %}

## Wer hat MMA studiert?

These ways go [former students](/alumni) of the program _Multimedia and Authorship_.

{% for jahrgang in all_students reversed %}
{%- for student in jahrgang[1].students %}
{%- if student.highlight %}
<section class="alumni">
<figure>
<img src="{{ site.url | append: site.imageurl | append: student.image }}" alt="{{ student.name }}">
</figure>
<div>
    <strong>{{ student.name }}</strong><br>
    {{ student.now.description | markdownify }}
</div>
</section>
{% endif -%}
{% endfor -%}
{% endfor %}
