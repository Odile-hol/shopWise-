graph TD
    %% Configuration des styles globaux et des liens
    classDef client fill:#E1F5FE,stroke:#0288D1,stroke-width:2px,color:#01579B;
    classDef gateway fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#311B92;
    classDef service fill:#E8F5E9,stroke:#2E7D32,stroke-width:2px,color:#1B5E20;
    classDef database fill:#FFF3E0,stroke:#EF6C00,stroke-width:2px,color:#E65100;
    classDef broker fill:#FFFDE7,stroke:#FBC02D,stroke-width:2px,color:#F57F17;
    classDef monitor fill:#FFEBEE,stroke:#C62828,stroke-width:2px,color:#B71C1C;

    %% COUCHE CLIENTS
    subgraph Layer_Clients ["📱 COUCHE PRÉSENTATION (CLIENTS)"]
        direction LR
        AppMobile["📱 App Mobile <br>(React Native)"]:::client
        AppWeb["💻 App Web <br>(React)"]:::client
    end

    %% COUCHE PASSERELLE & SÉCURITÉ
    subgraph Layer_Gateway ["🔒 COUCHE ROUTAGE & SÉCURITÉ"]
        Nginx["🌐 Reverse Proxy <br>(Nginx - HTTPS)"]:::gateway
        ApiGateway["🔑 API Gateway <br>(Spring Cloud / Kong)"]:::gateway
    end

    %% COUCHE SERVICES (BUSINESS LOGIC)
    subgraph Layer_Services ["⚙️ COUCHE MICROSERVICES"]
        IdentitySvc["👤 Identity Service <br>(JWT Auth)"]:::service
        CatalogSvc["🔍 Catalog & Search <br>Service"]:::service
        LogisticsSvc["🚚 Logistics & Delivery <br>Service (Cameroun)"]:::service
        VendorSvc["🛡️ Vendor Verification <br>Service"]:::service
        IngestionSvc["🕷️ Ingestion & Crawler <br>Service (Python)"]:::service
    end

    %% COUCHE STOCKAGE & BASES DE DONNÉES
    subgraph Layer_Databases ["💾 COUCHE DE STOCKAGE (Database-per-Service)"]
        UserDB[("🗄️ PostgreSQL <br>[Users DB]")]:::database
        SearchIndex[("🔎 Elasticsearch <br>[Search Index]")]:::database
        CacheDB[("⚡ Redis <br>[Cache DB]")]:::database
        GeoDB[("🗺️ PostGIS <br>[Geo DB]")]:::database
        VendorDB[("📋 PostgreSQL <br>[Vendors DB]")]:::database
        RawDB[("🍃 MongoDB <br>[Raw Products DB]")]:::database
    end

    %% COUCHE MESSAGE BROKER
    subgraph Layer_Broker ["✉️ COMMUNICATION ÉVÉNEMENTIELLE (ASYNCHRONE)"]
        RabbitMQ[["📣 RabbitMQ <br>(Message Broker)"]]:::broker
    end

    %% COUCHE MONITORING
    subgraph Layer_Monitoring ["📊 COUCHE MONITORING (METRICS)"]
        Prometheus["🔥 Prometheus <br>(Metrics Scraper)"]:::monitor
        Grafana["📈 Grafana <br>(Dashboards & Alerts)"]:::monitor
    end

    %% FLUX ET LIAISONS DE COMMUNICATION

    %% 1. Connexions Clients vers Passerelle
    AppMobile -->|"1. Requête HTTPS"| Nginx
    AppWeb -->|"1. Requête HTTPS"| Nginx
    Nginx -->|"Proxy Pass"| ApiGateway

    %% 2. Routage Gateway vers Services et validation JWT
    ApiGateway -->|"2. Valide & Décode JWT"| IdentitySvc
    ApiGateway -->|"Route Requête"| CatalogSvc
    ApiGateway -->|"Route Requête"| LogisticsSvc
    ApiGateway -->|"Route Requête"| VendorSvc

    %% 3. Liaisons Microservices vers leurs bases dédiées
    IdentitySvc --> UserDB
    CatalogSvc --> SearchIndex
    CatalogSvc --> CacheDB
    LogisticsSvc --> GeoDB
    VendorSvc --> VendorDB
    IngestionSvc --> RawDB

    %% 4. Communication Inter-service Synchrone (gRPC/HTTP)
    CatalogSvc ==>|"3. Demande coût envoi (gRPC/HTTP)"| LogisticsSvc

    %% 5. Flux Asynchrones via RabbitMQ
    IngestionSvc -->|"4. Publie 'PriceUpdated'"| RabbitMQ
    RabbitMQ -->|"5. Consomme Event"| CatalogSvc

    %% 6. Scrape Monitoring
    Prometheus -.->|"Scrape metrics"| ApiGateway
    Prometheus -.->|"Scrape metrics"| IdentitySvc
    Prometheus -.->|"Scrape metrics"| CatalogSvc
    Prometheus -.->|"Scrape metrics"| LogisticsSvc
    Prometheus -.->|"Scrape metrics"| IngestionSvc
    Prometheus -->|"Envoie Données"| Grafana
