---
sidebar_position: 1
---

---

## sidebar_position: 1

# Docker-Commands

### How to Clear Log Files of A Docker Container

Truncate the log files of all docker containers in your system

```
truncate -s 0 /var/lib/docker/containers/*/*-json.log
```

then restart all docker container
