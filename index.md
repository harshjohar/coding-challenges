---
layout: default
title: "Coding Challenges"
permalink: /
---

This repository contains the different challenges of creative coding that i learn or do by myself as a `leisure` activity.

<small>What kinda person code as leisure?</small>

> Yes, you are in a nerd zone right now.

```js
life = Life.fromDaysAndDob(process.env.NUMBER_OF_DAYS, process.env.DOB);

function dayInLife(day) {
    if (life.days == day) {
        return "Bye Bye";
    }

    wakeUp();
    code();
    sleep();

    dayInLife(day + 1);
}

dayInLife(0);
```

## List of challenges

Here is the link to all the challenges

> Latest to oldest:

- [Ulam Spiral](./challenges/165-ulam_spiral/index.html)

- [Starfield](./challenges/1-starfield/index.html)
