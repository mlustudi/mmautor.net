---
title: Showroom
layout: showroom
lang: en
description: "In the Master's program Multimedia and Authorship, the students develop films, podcasts, journalistic social media channels, websites and much more. A selection of student media projects."
splide: true
---

Within the two years of the master's program, the students develop and realize, in part in cooperation with the different partners, projects on a variety of topics. So it has been a tradition of filming the stories, destinies and biographies of the victims of National Socialism in Halle since 2007. The film series _Stolpersteine ​​- movies against forgetting_ can be found on [YouTube](https://www.youtube.com/playlist?list=PLxt_Og7CuhTYAPvq2aYLgvHPvZojaJh45).

Each year also develops a digital, mostly journalistic vintage project in the 3rd semester, in which social, political and scientific relationships are processed. At the end of the study, in addition to a thesis also belongs to a practical master project. In it, students alone or in the team work out a self-selected topic and implement it digitally journalistic. The projects range from dossiers to podcasts to journalistic instagram channels and media pedagogical projects. In the showroom, the projects of recent years are compiled.

# Showroom

{% assign posts = site.posts | where:"lang", page.lang %}

## Graffiti, Tofu, Futures

What influences our lives and what do we strive for? The great issues of existence are the focus of these projects.

{% assign leben = posts | where: "categories","leben" %}
<ul class="showroom-list">
{% for post in leben %}
<li><a href="{% if post.ext_url %}{{ post.ext_url }}{% else %}{{ post.url }}{% endif %}" data-storefront-image="{{ post.image }}" data-storefront-title="{{ post.title }}" data-storefront-description="{{ post.description | smartify }}" class="storefront-anchor">{{ post.title }}</a></li>
{% endfor %}</ul>

## Stories that wrote history

Which events shaped the city of Halle (Saale), the region around Saxony-Anhalt and Germany? A confrontation with the persecuted and murdered in National Socialism, with social circumstances after the fall of the Berlin Wall and persons and events of the past, which still continue to work. This is about regional importance.

{% assign zeitgeschichte = posts | where: "categories","zeitgeschichte" %}
<ul class="showroom-list">
{% for post in zeitgeschichte %}
<li><a href="{{ post.ext_url }}" data-storefront-image="{{ post.image }}" data-storefront-title="{{ post.title }}" data-storefront-description="{{ post.description }}" class="storefront-anchor">{{ post.title }}</a></li>
{% endfor %}</ul>

## Filters, wind turbines, enlightenment

How can an environmentally conscious and healthy life look like? Fine dust, sustainability and renewable energies are focused on these projects.

{% assign klimawandel = posts | where: "categories","klimawandel" %}
<ul class="showroom-list">
{% for post in klimawandel %}
<li><a href="{{ post.ext_url }}" data-storefront-image="{{ post.image }}" data-storefront-title="{{ post.title }}" data-storefront-description="{{ post.description }}" class="storefront-anchor">{{ post.title }}</a></li>
{% endfor %}</ul>

## Right outside the door

From chickens, legends or the fall of the Berlin Wall: These stories from Saxony-Anhalt, Halle (Saale) and the surrounding area have moved our students.

{% assign sachsenanhalt = posts | where: "categories","sachsenanhalt" %}
<ul class="showroom-list">
{% for post in sachsenanhalt %}
<li><a href="{{ post.ext_url }}" data-storefront-image="{{ post.image }}" data-storefront-title="{{ post.title }}" data-storefront-description="{{ post.description }}" class="storefront-anchor">{{ post.title }}</a></li>
{% endfor %}</ul>

## Experience and Remembrance

Between memorial culture and future perspectives, these projects deal with individual biographies and life stories of Hallenser.

{% assign biografien = posts | where: "categories","biografien" %}
<ul class="showroom-list">
{% for post in biografien %}
<li><a href="{{ post.ext_url }}" data-storefront-image="{{ post.image }}" data-storefront-title="{{ post.title }}" data-storefront-description="{{ post.description }}" class="storefront-anchor">{{ post.title }}</a></li>
{% endfor %}</ul>
