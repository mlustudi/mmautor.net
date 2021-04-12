---
layout: ueber-uns
title: Über uns
description: "Seit 2003 ist Multimedia und Autorschaft ein Masterprogramm der Abteilung für Medien- und Kommunikationswissenschaft an der Martin-Luther-Universität Halle-Wittenberg."
aktueller_jahrgang: "2019"
---

{% assign all_students = site.data.students | sort %}

## Fakten & Hintergründe

Der Masterstudiengang _Multimedia und Autorschaft_ ist in den ersten Jahren des 21. Jahrhunderts entstanden. Die Gründer:innen wollten den **technischen und digitalen Fortschritt in unserer Gesellschaft aktiv mitgestalten** und haben **im Jahr 2003** den  Studiengang erstmals an der [Martin-Luther-Universität Halle-Wittenberg](https://www.uni-halle.de) **erprobt**. Seitdem gehört das Masterprogramm der Abteilung der [Medien- und Kommunikationswissenschaft](https://www.medienkomm.uni-halle.de) an.

Realisiert werden konnte dies durch die **Initiative des Verlegers Alfred Neven DuMont**. Mit seiner Idee einer _Halleschen Europäischen Journalistenschule für multimediale Autorschaft / Alfred Neven DuMont_ ([HALESMA A.N.D.](https://mb.sachsen-anhalt.de/presse/pressemitteilungen/?tx_tsarssinclude_pi1%5Buid%5D=13393&tx_tsarssinclude_pi1%5Baction%5D=single&tx_tsarssinclude_pi1%5Bcontroller%5D=Static&cHash=e1f185d703bc7437adf68194bbb16bd7)) ermöglichte er gemeinsam mit Mitarbeitenden und Professoren der Medien- und Kommunikationswissenschaft wie [Reinhold Viehoff](https://www.medienkomm.uni-halle.de/abteilung/mitarbeiter/viehoff/?ref=mmautor.net), [Ingrid Brück](https://www.researchgate.net/scientific-contributions/Ingrid-Brueck-2120429660) und [Matthias Buck](https://www.ikare.uni-halle.de/kunstgeschichte/personen/buck/?ref=mmautor.net) die Entwicklung und Etablierung des Masterprogramms. Angelehnt an eine **gesamteuropäische Perspektive** basiert die Idee auf der Überzeugung, dass sich das **Berufsbild von Journalist:innen in einem tiefgreifenden Wandel** befindet. Die _Mitteldeutsche Zeitung_, bis 2020 Teil der_DuMont Mediengruppe_ unterstützt bis heute mit den Master und die Studierenden bei Medienprojekten und beim Einstieg in den Beruf.

In Halle (Saale) konnte ein Studiengang entstehen, der sich in den vergangenen Jahren zu dem entwickelte, was _Multimedia und Autorschaft_ heute ausmacht: ein **zeitgemäßes und zukunftsorientiertes Studienprogramm mit praxisbezogener Ausbildung unter Beachtung aktueller theoretischer Inhalte der digitalen Gegenwart**. _Multimedia und Autorschaft_ bietet Raum zum **Ausprobieren, Diskutieren und Mitgestalten**. Studierende arbeiten mit verschiedenen Kooperationspartner:innen zusammen. Neben der _Mitteldeutschen Zeitung_ gehören dazu unter anderem _VICE_, der _Mitteldeutsche Rundfunk_ oder die _Fraunhofer-Gesellschaft_. Außerdem besteht ein projektbezogener Austausch mit Mediziner:innen, Ethnolog:innen und anderen Studierenden der _Martin-Luther-Universität_ sowie mit Gästen anderer Institutionen.

Die Studiengangsleitung verantworten derzeit [Maren Schuster](https://www.medienkomm.uni-halle.de/abteilung/mitarbeiter/schuster/?ref=mmautor.net) und [Patrick Vonderau](https://www.medienkomm.uni-halle.de/abteilung/mitarbeiter/vonderau/?ref=mmautor.net), die ihre jeweilige Expertise aus Wissenschaft und Medienpraxis in die Lehr- und Forschungsprojekte des Masterstudiengangs einbringen. Die Akkreditierung des Studiengangs wird 2021 abgeschlossen.

## Advisory Board

Wissenschaftlich begleitet und beraten wird der Studiengang _Multimedia und Autorschaft_ durch renommierte Kolleg:innen aus Europa.

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

Viele Projekte können erst in Zusammenarbeit mit Medienpartner:innen, akademischen Partner:innen oder zivilgesellschaftlichen Akteur:innen realisiert werden. Hast du Interesse an der Umsetzung eines gemeinsamen Projektes oder gar eine konkrete Idee, zögere nicht uns zu [kontaktieren](/impressum).

<section class="cooperations">
{% for partner in site.data.cooperations.partner %}
{% if partner.url %}<a href="{{ partner.url }}?ref=mmautor.net">{% endif %}
<img src="{{ site.url | append: "/assets/images/" | append: partner.image }}" alt="{{ partner.name }}" loading="lazy">
{% if partner.url %}</a>{% endif %}
{% endfor %}
</section>

## Wer studiert MMA & warum eigentlich?

Im Master _Multimedia und Autorschaft_ kommen **Menschen aus unterschiedlichen Disziplinen** zusammen. Auch wir sind ein Jahrgang, der sich aus Absolvent:innen geistes-, sozial-, kultur- und naturwissenschaftlicher Studiengänge zusammensetzt. Wir bringen **verschiedene Interessen, Erfahrungen und Motivationen** mit und sorgen für eine aufregende Mischung im Seminarraum.

Was wir ohne _Multimedia und Autorschaft_ nicht gemacht hätten, welche Erkenntnisse uns im Studium beeindruckt haben und welche Dinge auf den ersten Blick nicht zusammen passen, aber im Studiengang zusammenkommen, liest du hier:

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

Diese Wege gehen [ehemalige Studierende](/alumni) des Studiengangs Multimedia und Autorschaft.

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
