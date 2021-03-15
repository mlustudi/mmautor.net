---
layout: ueber-uns
title: About
description: false
lang: en
aktueller_jahrgang: "2019"
---

## Facts & Background

The master’s degree _Multimedia and Authorship_ was created in the first years of the 21st century. The founders wanted to actively shape the technical and digital progress in our society and in 2003 they tested the course for the first time at the [Martin Luther University Halle-Wittenberg](https://www.uni-halle.de/?lang=en). Since then, the master’s program has belonged to the Department of [Media and Communication Studies](https://www.medienkomm.uni-halle.de/english_version/).

This could be realized through the initiative of the publisher Alfred Neven DuMont, who with his idea of ​​a _Halleschen Europäischen Journalistenschule für multimediale Autorschaft / Alfred Neven DuMont_ (HALESMA A.N.D.) enabled the development and establishment of the master’s program. Based on a pan-European perspective, this idea is based on the conviction that the job description of journalists is undergoing profound changes. Until 2020, the DuMont publishing house also owned the Mitteldeutsche Zeitung, which continues to cooperate with students to this day and support them both with their training and when they start their careers.

In Halle (Saale), this resulted in a course of study that has developed over the past few years into what multimedia and authorship are today: a contemporary and future-oriented study program with practical training taking into account the current theoretical content of the digital present. _Multimedia and Authorship_ offer space to try out, discuss and help shape. Students work with various cooperating partners. In addition to the Mitteldeutsche Zeitung, these include VICE, Mitteldeutsche Rundfunk and the Fraunhofer Society. There is also a project-related exchange with physicians, ethnologists and other students at _Martin Luther University_ as well as with guests from other institutions.

Maren Schuster and Prof. Dr. Patrick Vonderau, who bring their respective expertise from science and media practice to the teaching and research projects of the master’s degree. The accreditation of the degree program will be completed in 2021.

## Who studies MMA & why?

We bring together students from different disciplines. The {{ page.aktueller_jahrgang }} - {{ page.aktueller_jahrgang | plus: 2 }} class consists of graduates from humanities, social, cultural and natural sciences courses. We bring different interests, experiences and ideas with us and thus ensure an exciting mix in the seminar room.

{% assign students = site.data.students[page.aktueller_jahrgang] %}
<section class="students">
    {% for student in students.students %}
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
    {% endfor %}
</section>

## Advisory Board

The _Multimedia and Authorship_ course is scientifically supported and advised by renowned colleagues from Europe.

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

Many projects can only be realized in cooperation with media partners, academic partners or civil society actors. If you are interested in the implementation of a joint project or even have a specific idea, please do not hesitate to [contact us](/impressum).

<section class="cooperations">
{% for partner in site.data.cooperations.partner %}
{% if partner.url %}<a href="{{ partner.url }}">{% endif %}
<img src="{{ site.url | append: "/assets/images/" | append: partner.image }}" alt="{{ partner.name }}" loading="lazy">
{% if partner.url %}</a>{% endif %}
{% endfor %}
</section>
