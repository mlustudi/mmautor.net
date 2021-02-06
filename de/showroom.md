---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
title: Showroom
layout: showroom
lang: de
---

<!-- Der Inhalt dieser Seite wird über _layouts/showroom.html generiert. -->

# Showroom

Im Laufe des Masterstudiums werden von den Studierenden und zum Teil in Kooperation mit unseren Partner*innen, Projekte zu vielfältigen Themenschwerpunkten entwickelt und realisiert. Die Geschichten, Schicksale, Biografien der Opfer des Nationalsozialismus in Halle filmisch aufzuarbeiten, ist seit 2007 Tradition. Die [Filmreihe “Stolpersteine - Filme gegen das Vergessen”](https://www.youtube.com/playlist?list=PLxt_Og7CuhTYAPvq2aYLgvHPvZojaJh45) findet man auf MMA-Youtube-Kanal. Jeder Jahrgang entwickelt im 3. Semester außerdem ein digitales, zumeist journalistisches Jahrgangsprojekt, bei dem gesellschaftliche, politische und wissenschaftliche Zusammenhänge präsentiert werden. Zum Abschluss im Masterstudiengang Multimedia und Autorschaft gehört neben einer Thesis auch ein praktisches Masterprojekt. Im Abschlussprojekt erarbeiten die Studierenden allein oder im Team eine selbstgewähltes Thema und setzen es digitaljournalistisch um. Die Projekte reichen von Dossier, über Podcasts bis hin zu journalistischen Instagramkanälen und medienpädagogische Projekte. Am Ende des Studiums erarbeiten die Studierenden neben der Masterarbeit ihr eigenes praktisches Abschlussprojekt. Im Showroom sind die vielfältigen Projekte der vergangenen Jahre zusammengestellt.

{% assign posts = site.posts | where:"lang", page.lang %}

## Leben

Für was Leben wir und was beeinflusst unser Leben? Die großen Fragen des Daseins stehen im Mittelpunkt dieser Projekte.

{% assign leben = posts | where: "categories","leben" %}
<ul class="showroom-list">
{% for post in leben %}
<li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}</ul>

## Zeitgeschichte

Welche Ereignisse prägten die Stadt Halle und das Land Sachsen-Anhalt in der Vergangenheit? Eine Beschäftigung mit den Verfolgten und Ermordeten des Nationalsozialismus, den gesellschaftlichen Umbrüchen nach dem Mauerfall und den Personen und Strömungen, die die vergangenen Jahrzehnte mitgestaltet haben. 

{% assign zeitgeschichte = posts | where: "categories","zeitgeschichte" %}
<ul class="showroom-list">
{% for post in zeitgeschichte %}
<li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}</ul>

## Klimawandel

Wie sieht ein Leben aus, das nicht zu Lasten der Umwelt und der eigenen Gesundheit geht? Feinstaub, Nachhaltigkeit und erneuerbare Energien stehen bei diesen Projekten im Fokus.

{% assign klimawandel = posts | where: "categories","klimawandel" %}
<ul class="showroom-list">
{% for post in klimawandel %}
<li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}</ul>

## Orte in Sachsen-Anhalt

Von Hühnern, Sagen und dem Mauerfall: diese Stories aus Sachsen-Anhalt haben unsere Studierenden bewegt.

{% assign sachsenanhalt = posts | where: "categories","sachsenanhalt" %}
<ul class="showroom-list">
{% for post in sachsenanhalt %}
<li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}</ul>

## Stadtgeschichten Halle

Die Stadt Halle ist nicht nur der Standort des MMA, sondern auch Schauplatz verschiedenster Geschichten. In diesen Projekten geht es um ein tragisches Unglück, hyperlokale Experimente und Naturschutzgebiete.

{% assign halle = posts | where: "categories","halle" %}
<ul class="showroom-list">
{% for post in halle %}
<li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}</ul>

## Biografien

Zwischen Erinnerungskultur und Zukunftsperspektive beschäftigen sich diese Projekte mit individuellen Biografien und Lebensgeschichten von Hallenser*innen.

{% assign biografien = posts | where: "categories","biografien" %}
<ul class="showroom-list">
{% for post in biografien %}
<li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}</ul>
