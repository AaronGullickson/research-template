
```mermaid
flowchart LR
    A((Raw Data)):::real --> B[Data Organization\nScripts]:::real
    B([Data Organization\nScripts]):::real --> C((Analytical\nData)):::artifact
    C((Analytical\nData)):::artifact --> D([Analysis Scripts]):::real
    C((Analytical\nData)):::artifact --> E([Reproducible Reports]):::real
    E([Reproducible Reports]):::real --> G[Final Products]:::artifact
    E([Reproducible Reports]):::real --> F[Intermediate Output]:::artifact
    D([Analysis Scripts]):::real --> F[Intermediate Output]:::artifact
    classDef real fill:green,color:#fff
    classDef artifact fill:yellow,color:#000
```