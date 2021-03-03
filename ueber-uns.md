---
layout: ueber-uns
title: Über uns
description: false
aktueller_jahrgang: "2019"
---

## Fakten & Hintergründe

Der Masterstudiengang _Multimedia und Autorschaft_ ist in den ersten Jahren des 21. Jahrhunderts entstanden. Die Gründer:innen wollten den technischen und digitalen Fortschritt in unserer Gesellschaft aktiv mitgestalten und haben im Jahr 2003 den  Studiengang erstmals an der [Martin-Luther-Universität Halle-Wittenberg](https://www.uni-halle.de) erprobt. Seitdem gehört das Masterprogramm der Abteilung der [Medien- und Kommunikationswissenschaft](https://www.medienkomm.uni-halle.de) an.

Realisiert werden konnte dies durch die Initiative des Verlegers Alfred Neven DuMont, der mit seiner Idee einer _Halleschen Europäischen Journalistenschule für multimediale Autorschaft / Alfred Neven DuMont_ (HALESMA A.N.D.) die Entwicklung und Etablierung des Masterprogramms ermöglichte. Angelehnt an eine gesamteuropäische Perspektive basiert diese Idee auf der Überzeugung, dass sich das Berufsbild von Journalist:innen in einem tiefgreifenden Wandel befindet. Noch bis 2020 gehörte zum _DuMont-Verlag_ auch die _Mitteldeutsche Zeitung_, die bis heute mit den Studierenden kooperiert und sowohl bei der Ausbildung als auch beim Einstieg in den Beruf unterstützt.

In Halle (Saale) konnte daraus ein Studiengang entstehen, der sich in den vergangenen Jahren zu dem entwickelte, was _Multimedia und Autorschaft_ heute ausmacht: ein zeitgemäßes und zukunftsorientiertes Studienprogramm mit praxisbezogener Ausbildung unter Beachtung aktueller theoretischer Inhalte der digitalen Gegenwart. Multimedia und Autorschaft bietet Raum zum Ausprobieren, Diskutieren und Mitgestalten. Studierende arbeiten mit verschiedenen Kooperationspartner:innen zusammen. Neben der Mitteldeutschen Zeitung gehören dazu unter anderem VICE, der Mitteldeutsche Rundfunk oder die Fraunhofer-Gesellschaft. Außerdem besteht ein projektbezogener Austausch mit Mediziner:innen, Ethnolog:innen und anderen Studierenden der Martin-Luther-Universität sowie mit Gästen anderer Institutionen.

Die Studiengangsleitung verantworten derzeit [Maren Schuster](https://www.medienkomm.uni-halle.de/abteilung/mitarbeiter/schuster/) und [Prof. Dr. Patrick Vonderau](https://www.medienkomm.uni-halle.de/abteilung/mitarbeiter/vonderau/), die ihre jeweilige Expertise aus Wissenschaft und Medienpraxis in die Lehr- und Forschungsprojekte des Masterstudiengangs einbringen. Die Akkreditierung des Studiengangs wird 2021 abgeschlossen.

## Wer studiert MMA & warum eigentlich?

Bei uns kommen Studierende aus unterschiedlichen Disziplinen zusammen. Der Jahrgang {{ page.aktueller_jahrgang }} - {{ page.aktueller_jahrgang | plus: 2 }} setzt sich aus Absolvent:innen geistes-, sozial-, kultur- und naturwissenschaftlicher Studiengänge zusammen. Wir bringen verschiedene Interessen, Erfahrungen und Ideen mit und sorgen so für eine spannende Mischung im Seminarraum.

Was wir ohne Multimedia und Autorschaft nie gemacht hätten, welche Erkenntnisse uns beeindruckt haben und welche drei Dinge den Studiengang für uns ausmachen, siehst du hier: 

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

Viele Projekte können erst in Zusammenarbeit mit Medienpartner:innen, akademischen Partner:innen oder zivilgesellschaftlichen Akteur:innen realisiert werden. Haben Sie Interesse an der Umsetzung eines gemeinsamen Projektes oder gar eine konkrete Idee, zögern Sie nicht uns zu [kontaktieren](/impressum).

<section class="cooperations">
{% for partner in site.data.cooperations.partner %}
{% if partner.url %}<a href="{{ partner.url }}">{% endif %}
<img src="{{ site.url | append: "/assets/images/" | append: partner.image }}" alt="{{ partner.name }}" loading="lazy">
{% if partner.url %}</a>{% endif %}
{% endfor %}
</section>