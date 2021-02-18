---
title: Über
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

**Prof. Richard Rogers**,
Digital Methods Initiative

**Dr. Jonathan Gray**
**Dr. Liliana Bounegru**
Dpt. of Digital Humanities

**Dr. Mirko Tobias Schäfer**,
Utrecht Data School

## Kooperationspartner:innen

Logos der Partner*innen können wir aus der Präsi von Maren vom 01.02. übernehmen. 
Ergänzen durch 1. areweeurope 2. Institute Medizin und 3. Ethnologie bzw. schaut Maren nochmal.

<section>
{% for partner in site.data.cooperations.partner %}
<img src="{{ site.url | append: "/assets/images/" | append: partner.image }}" alt="{{ partner.name }}">
{% endfor %}
</section>