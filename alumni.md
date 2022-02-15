---
layout: ueber-uns
title: Alumni
description: "Wer hat alles Multimedia und Autorschaft an der Uni Halle studiert? Hier eine Liste aller Absolvent:innen, die unser umfassendes Alumni-Netzwerk aufzeigt."
exclude: true
footer: true
lang-ref: alumni
---

{% assign all_students = site.data.students | sort %}

# Alumni-Netzwerk

{% for jahrgang in all_students reversed %}
<section>
{% assign year = jahrgang[0] %}
<h2>Jahrgang {{ year }} - {{ year | plus: 2 }}</h2>
<ul>
{% for student in jahrgang[1].students %}
<li itemscope itemtype="http://schema.org/Person"><link itemprop="alumniOf" href="{{ site.url }}/#organization" /><span itemprop="name">{{ student.name }}</span>{% if student.references %} ({% for reference in student.references %}<a itemprop="sameAs" href="{{ reference.url }}">{{ reference.handle }}</a>{% if forloop.last == false %}, {% endif %}{% endfor %}){% endif %}
{% if student.description %}<p>{{ student.description }}</p>{% endif %}
</li>
{% endfor %}
</ul>
</section>
{% endfor %}
