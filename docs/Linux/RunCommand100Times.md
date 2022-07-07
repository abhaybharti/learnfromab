---
sidebar_position: 1
---

# Shell Script to run command 100 times on interval of 60 seconds

Run below code in linux console

```
for i in {1..100}; do echo -n "restarting docker $i "; date ; docker restart xxx1; docker restart xxx2; sleep 60; done
```

- output
  restarting docker 1 Wed Jul 6 09:59:50 EDT 2022
  xxx1
  xxx2
  restarting docker 2 Wed Jul 6 10:01:11 EDT 2022
