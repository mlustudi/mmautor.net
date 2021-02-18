---
title: Showroom
layout: showroom
---

<!-- Der Inhalt dieser Seite wird über _layouts/showroom.html generiert. -->

# Showroom

Innerhalb der zwei Jahre des Masterstudiums entwickeln und realisieren die Studierende, zum Teil in Kooperation mit den verschiedenen Partner:innen, Projekte zu vielfältigen Themenschwerpunkten. So ist es auch seit 2007 Tradition, die Geschichten, Schicksale und Biografien der Opfer des Nationalsozialismus in Halle filmisch aufzuarbeiten. Die Filmreihe _Stolpersteine - Filme gegen das Vergessen_ ist auf unserem [Youtube-Kanal](https://www.youtube.com/playlist?list=PLxt_Og7CuhTYAPvq2aYLgvHPvZojaJh45) zu finden.

Jeder Jahrgang entwickelt im 3. Semester außerdem ein digitales, zumeist journalistisches Jahrgangsprojekt, bei dem gesellschaftliche, politische und wissenschaftliche Zusammenhänge bearbeitet werden. Zum Abschluss des Studiums gehört neben einer Thesis auch ein praktisches Masterprojekt. Darin erarbeiten die Studierenden allein oder im Team ein selbstgewähltes Thema und setzen es digitaljournalistisch um. Die Projekte reichen von Dossiers über Podcasts bis hin zu journalistischen Instagramkanälen und medienpädagogischen Projekten. Im Showroom sind die Projekte der vergangenen Jahre zusammengestellt.

{% assign posts = site.posts | where:"lang", page.lang %}

## Leben

Was beeinflusst unser Leben und wonach streben wir? Die großen Fragen des Daseins stehen im Mittelpunkt dieser Projekte.

{% assign leben = posts | where: "categories","leben" %}
<ul class="showroom-list">
{% for post in leben %}
<li><a href="{{ post.url }}" data-storefront-image="{{ post.image }}" data-storefront-title="{{ post.title }}" data-storefront-description="{{ post.description }}" class="storefront-anchor">{{ post.title }}</a></li>
{% endfor %}</ul>

## Zeitgeschichte

Welche Ereignisse prägten die Stadt Halle (Saale), das Land Sachsen-Anhalt und Deutschland? Eine Auseinandersetzung mit den Verfolgten und Ermordeten im Nationalsozialismus, mit gesellschaftlichen Umbrüchen nach dem Mauerfall und Personen und Ereignissen der Vergangenheit, die bis heute nachwirken. Hier geht es um Regionales mit überregionaler Bedeutung.

{% assign zeitgeschichte = posts | where: "categories","zeitgeschichte" %}
<ul class="showroom-list">
{% for post in zeitgeschichte %}
<li><a href="{{ post.url }}" data-storefront-image="{{ post.image }}" data-storefront-title="{{ post.title }}" data-storefront-description="{{ post.description }}" class="storefront-anchor">{{ post.title }}</a></li>
{% endfor %}</ul>

## Klimawandel

Wie kann ein umweltbewusstes und gesundes Leben aussehen? Feinstaub, Nachhaltigkeit und erneuerbare Energien stehen bei diesen Projekten im Fokus.

{% assign klimawandel = posts | where: "categories","klimawandel" %}
<ul class="showroom-list">
{% for post in klimawandel %}
<li><a href="{{ post.url }}" data-storefront-image="{{ post.image }}" data-storefront-title="{{ post.title }}" data-storefront-description="{{ post.description }}" class="storefront-anchor">{{ post.title }}</a></li>
{% endfor %}</ul>

## Orte in Sachsen-Anhalt

Von Hühnern, Sagen oder dem Mauerfall: diese Stories aus Sachsen-Anhalt haben unsere Studierenden bewegt. 

{% assign sachsenanhalt = posts | where: "categories","sachsenanhalt" %}
<ul class="showroom-list">
{% for post in sachsenanhalt %}
<li><a href="{{ post.url }}" data-storefront-image="{{ post.image }}" data-storefront-title="{{ post.title }}" data-storefront-description="{{ post.description }}" class="storefront-anchor">{{ post.title }}</a></li>
{% endfor %}</ul>

## Stadtgeschichten Halle

Die Stadt Halle (Saale) ist nicht nur der Standort von _Multimedia und Autorschaft_, sondern auch Schauplatz verschiedener Ereignisse. In diesen Projekten geht es um ein tragisches Unglück, hyperlokale Experimente und Naturschutzgebiete. 

{% assign halle = posts | where: "categories","halle" %}
<ul class="showroom-list">
{% for post in halle %}
<li><a href="{{ post.url }}" data-storefront-image="{{ post.image }}" data-storefront-title="{{ post.title }}" data-storefront-description="{{ post.description }}" class="storefront-anchor">{{ post.title }}</a></li>
{% endfor %}</ul>

## Biografien

Zwischen Erinnerungskultur und Zukunftsperspektive beschäftigen sich diese Projekte mit individuellen Biografien und Lebensgeschichten von Hallenser:innen.

{% assign biografien = posts | where: "categories","biografien" %}
<ul class="showroom-list">
{% for post in biografien %}
<li><a href="{{ post.url }}" data-storefront-image="{{ post.image }}" data-storefront-title="{{ post.title }}" data-storefront-description="{{ post.description }}" class="storefront-anchor">{{ post.title }}</a></li>
{% endfor %}</ul>
