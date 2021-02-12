---
layout: default
lang: de
title: Über
description: 
---

## Fakten & Hintergründe 

Der Masterstudiengang MultiMedia & Autorschaft ist mit dem digitalen Wandel in den ersten Jahren des 21. Jahrhunderts entstanden. Das Ziel der Gründer:innen war es den technischen und digitalen Fortschritt in unserer Gesellschaft aktiv mitzugestalten. Der Studiengang wurde im Jahr 2003 erstmals an der Martin-Luther-Universität Halle-Wittenberg erprobt und gehört seitdem der Abteilung der Medien- und Kommunikationswissenschaften an.

Der Verleger Alfred Neven DuMont hat mit seiner Idee einer _Halleschen Europäischen Journalistenschule für multimediale Autorschaft / Alfred Neven DuMont_ die Entwicklung und Etablierung des Masterprogramms ermöglicht. Angelehnt an eine gesamteuropäischen Perspektive, basierte diese Idee auf der Überzeugung, dass sich das Berufsbild von Journalist:innen in einem tiefgreifenden Veränderungsprozess befindet. 
Zum _DuMont-Verlag_ gehörte bis 2020 auch die _Mitteldeutsche Zeitung_. Diese kooperierte eng mit den Studierenden, unterstützte bei der Ausbildung, der Veröffentlichungen von Beiträgen sowie beim Einstieg in den Beruf. 

Daraus konnte in Halle (Saale) ein Studiengang entstehen, der sich in den letzten Jahren zu dem entwickeln konnte, was MultiMedia & Autorschaft heute ausmacht: ein zeitgemäßes und zukunftsorientiertes Studienprogramm mit konsequenter Orientierung auf eine praxisbezogene Ausbildung unter Beachtung aktueller theoretischer Inhalte. MultiMedia & Autorschaft bietet Raum zum Ausprobieren, zum Diskutieren und Mitgestalten. Studierende arbeiten mit verschiedenen Kooperationspartner:innen zusammen, unter anderem mit dem MDR, der MZ, VICE oder der Fraunhofer-Gesellschaft. Es besteht außerdem ein projektbezogener Austausch mit Mediziner:innen, Ethnolog:innen und anderen Studierenden der Martin-Luther-Universität, sowie mit Gästen anderer Institutionen. 

Die Studiengangsleitung verantworten derzeit [Maren Schuster](https://www.medienkomm.uni-halle.de/abteilung/mitarbeiter/schuster/) und [Prof. Dr. Patrick Vonderau](https://www.medienkomm.uni-halle.de/abteilung/mitarbeiter/vonderau/), die ihre jeweilige Expertise aus Wissenschaft und Praxis in Organisation und Lehre integrieren. Eine Akkreditierung für den Studiengang MultiMedia & Autorschaft wird voraussichtlich 2021 erfolgreich abgeschlossen sein.

## Wer studiert MMA & warum eigentlich?

Na wir. Ein Hallo und herzliches Willkommen vom Jahrgang 2019-2021. 
Bei uns kommen Menschen aus unterschiedlichen Disziplinen zusammen. Deshalb sind wir ein Jahrgang, der sich aus Absolvent:innen geistes-, sozial-, kultur- und naturwissenschaftlicher Studiengänge zusammensetzt. Wir bringen verschiedenste Interessen und Motivationen mit und sorgen für eine spannende Mischung im Seminarraum.

Was wir ohne MMA nie gemacht hätten, welche Erkenntnis uns im Studium beeindruckt haben und welche 3 Zutaten, die auf den ersten Blick nicht zusammen passen, in MMA zusammenkommen, seht ihr hier: 

<section class="students">
    {% for student in site.data.students[2019] %}
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src="{{ site.url }}/assets/images/{{ student.image }}" alt="{{ student.name }}">
            </div>
            <div class="flip-card-back">
                <h3>{{ student.name | split: " " | first }}</h3>
                <p>{{ student.statement }}</p>
            </div>
        </div>
    </div>
    {% endfor %}
</section>

## Kooperationspartner:innen 

Logos der Partner*innen können wir aus der Präsi von Maren vom 01.02. übernehmen. 
Ergänzen durch 1. areweeurope 2. Institute Medizin und 3. Ethnologie bzw. schaut Maren nochmal.

<section>
{% for partner in site.data.cooperations.partner %}
<img src="{{ site.url | append: "/assets/images/" | append: partner.image }}" alt="{{ partner.name }}">
{% endfor %}
</section>