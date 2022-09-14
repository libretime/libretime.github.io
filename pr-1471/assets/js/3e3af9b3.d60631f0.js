"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7662],{1620:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var a=n(7462),s=(n(7294),n(3905));n(1839);const i={title:"Configuration",sidebar_position:20},o=void 0,r={unversionedId:"admin-manual/setup/configuration",id:"admin-manual/setup/configuration",title:"Configuration",description:"To configure LibreTime, you need to edit the /etc/libretime/config.yml file. This page describe the available options to configure your installation.",source:"@site/../docs/admin-manual/setup/configuration.md",sourceDirName:"admin-manual/setup",slug:"/admin-manual/setup/configuration",permalink:"/pr-1471/docs/next/admin-manual/setup/configuration",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/../docs/admin-manual/setup/configuration.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"Configuration",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Install",permalink:"/pr-1471/docs/next/admin-manual/setup/install"},next:{title:"Reverse proxy",permalink:"/pr-1471/docs/next/admin-manual/setup/reverse-proxy"}},u={},l=[{value:"General",id:"general",level:2},{value:"Storage",id:"storage",level:2},{value:"Database",id:"database",level:2},{value:"RabbitMQ",id:"rabbitmq",level:2},{value:"Playout",id:"playout",level:2},{value:"Liquidsoap",id:"liquidsoap",level:2},{value:"Stream",id:"stream",level:2},{value:"Inputs",id:"inputs",level:3},{value:"Outputs",id:"outputs",level:3},{value:"Icecast",id:"icecast",level:4},{value:"Shoutcast",id:"shoutcast",level:4},{value:"System",id:"system",level:4},{value:"LDAP",id:"ldap",level:2}],d={toc:l};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"To configure LibreTime, you need to edit the ",(0,s.kt)("inlineCode",{parentName:"p"},"/etc/libretime/config.yml")," file. This page describe the available options to configure your installation."),(0,s.kt)("p",null,"Don't forget to restart the services after you made changes to the configuration file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"sudo systemctl restart libretime.target\n")),(0,s.kt)("h2",{id:"general"},"General"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"general")," section configure anything related to the legacy and API services."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},'general:\n  # The public url.\n  # > this field is REQUIRED\n  public_url: "https://example.com"\n  # The internal API authentication key.\n  # > this field is REQUIRED\n  api_key: "some_random_generated_secret!"\n\n  # List of origins allowed to access resources on the server,\n  # the [general.public_url] origin is automatically included.\n  # > default is []\n  allowed_cors_origins: []\n\n  # How many hours ahead Playout should cache scheduled media files.\n  # > default is 1\n  cache_ahead_hours: 1\n\n  # Authentication adaptor to use for the legacy service, specify a class like\n  # LibreTime_Auth_Adaptor_FreeIpa to replace the built-in adaptor.\n  # > default is local\n  auth: "local"\n')),(0,s.kt)("h2",{id:"storage"},"Storage"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"storage")," section configure the project storage."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},'storage:\n  # Path of the storage directory.\n  # > default is /srv/libretime\n  path: "/srv/libretime"\n')),(0,s.kt)("h2",{id:"database"},"Database"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"database")," section configure the PostgreSQL connection."),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"Before editing this section be sure to update the PostgreSQL server with the desired values."),(0,s.kt)("h4",{parentName:"admonition",id:"changing-a-postgresql-user-password"},"Changing a PostgreSQL user password"),(0,s.kt)("p",{parentName:"admonition"},"You can change the ",(0,s.kt)("inlineCode",{parentName:"p"},"libretime")," PostgreSQL user password using:"),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u postgres psql -c \"ALTER USER libretime PASSWORD 'new-password';\"\n"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},'database:\n  # The hostname of the PostgreSQL server.\n  # > default is localhost\n  host: "localhost"\n  # The port of the PostgreSQL server.\n  # > default is 5432\n  port: 5432\n  # The name of the PostgreSQL database.\n  # > default is libretime\n  name: "libretime"\n  # The username of the PostgreSQL user.\n  # > default is libretime\n  user: "libretime"\n  # The password of the PostgreSQL user.\n  # > default is libretime\n  password: "some_random_generated_secret!"\n')),(0,s.kt)("h2",{id:"rabbitmq"},"RabbitMQ"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"rabbitmq")," section configure the RabbitMQ connection."),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"Before editing this section be sure to update the RabbitMQ server with the desired values."),(0,s.kt)("h4",{parentName:"admonition",id:"changing-a-rabbitmq-user-password"},"Changing a RabbitMq user password"),(0,s.kt)("p",{parentName:"admonition"},"You can change the ",(0,s.kt)("inlineCode",{parentName:"p"},"libretime")," RabbitMQ user password using:"),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'sudo rabbitmqctl change_password "libretime" "new-password"\n'))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},'rabbitmq:\n  # The hostname of the RabbitMQ server.\n  # > default is localhost\n  host: "localhost"\n  # The port of the RabbitMQ server.\n  # > default is 5672\n  port: 5672\n  # The virtual host of RabbitMQ server.\n  # > default is /libretime\n  vhost: "/libretime"\n  # The username of the RabbitMQ user.\n  # > default is libretime\n  user: "libretime"\n  # The password of the RabbitMQ user.\n  # > default is libretime\n  password: "some_random_generated_secret!"\n')),(0,s.kt)("h2",{id:"playout"},"Playout"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"playout")," section configure anything related to the playout service."),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"When changing the ",(0,s.kt)("inlineCode",{parentName:"p"},"playout.liquidsoap_*")," entries, make sure to also configure the ",(0,s.kt)("inlineCode",{parentName:"p"},"liquidsoap.server_listen_*")," entries accordingly.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},'playout:\n  # Liquidsoap connection host.\n  # > default is localhost\n  liquidsoap_host: "localhost"\n  # Liquidsoap connection port.\n  # > default is 1234\n  liquidsoap_port: 1234\n\n  # The format for recordings.\n  # > must be one of (ogg, mp3)\n  # > default is ogg\n  record_file_format: ogg\n  # The bitrate for recordings.\n  # > default is 256\n  record_bitrate: 256\n  # The samplerate for recordings.\n  # > default is 44100\n  record_samplerate: 44100\n  # The number of channels for recordings.\n  # > default is 2\n  record_channels: 2\n  # The sample size for recordings.\n  # > default is 16\n  record_sample_size: 16\n')),(0,s.kt)("h2",{id:"liquidsoap"},"Liquidsoap"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"liquidsoap")," section configure anything related to the liquidsoap service."),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"When changing the ",(0,s.kt)("inlineCode",{parentName:"p"},"liquidsoap.server_listen_*")," entries, make sure to also configure the ",(0,s.kt)("inlineCode",{parentName:"p"},"playout.liquidsoap_*")," entries accordingly.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},'liquidsoap:\n  # Liquidsoap server listen address.\n  # > default is 127.0.0.1\n  server_listen_address: "127.0.0.1"\n  # Liquidsoap server listen port.\n  # > default is 1234\n  server_listen_port: 1234\n\n  # Input harbor listen address.\n  # > default is ["0.0.0.0"]\n  harbor_listen_address: ["0.0.0.0"]\n')),(0,s.kt)("h2",{id:"stream"},"Stream"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"stream")," section configures anything related to the input and output streams."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},"stream:\n  inputs: # See the [stream.inputs] section.\n  outputs: # See the [stream.outputs] section.\n")),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"To help you simplify your stream configuration, you can use yaml anchors to define a common properties and reuse them in your output definitions:"),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-yml"},'stream:\n  outputs:\n    # This can be reused to define multiple outputs without duplicating data\n    .default_icecast_output: &default_icecast_output\n      source_password: "hackme"\n      admin_password: "hackme"\n      name: "LibreTime!"\n      description: "LibreTime Radio!"\n      website: "https://libretime.org"\n      genre: "various"\n\n    icecast:\n      - <<: *default_icecast_output\n        enabled: true\n        mount: "main.ogg"\n        audio:\n          format: "ogg"\n          bitrate: 256\n\n      - <<: *default_icecast_output\n        enabled: true\n        mount: "main.mp3"\n        audio:\n          format: "mp3"\n          bitrate: 256\n'))),(0,s.kt)("h3",{id:"inputs"},"Inputs"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"stream.inputs")," section configures anything related to the input streams."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},'stream:\n  # Inputs sources.\n  inputs:\n    # Main harbor input.\n    main:\n      # Harbor input public url. If not defined, the value will be generated from\n      # the [general.public_url] hostname, the input port and mount.\n      public_url:\n      # Mount point for the main harbor input.\n      # > default is main\n      mount: "main"\n      # Listen port for the main harbor input.\n      # > default is 8001\n      port: 8001\n\n    # Show harbor input.\n    show:\n      # Harbor input public url. If not defined, the value will be generated from\n      # the [general.public_url] hostname, the input port and mount.\n      public_url:\n      # Mount point for the show harbor input.\n      # > default is show\n      mount: "show"\n      # Listen port for the show harbor input.\n      # > default is 8002\n      port: 8002\n')),(0,s.kt)("h3",{id:"outputs"},"Outputs"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"stream.outputs")," section configures anything related to the output streams."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},"stream:\n  # Output streams.\n  outputs:\n    icecast: # See the [stream.outputs.icecast] section.\n    shoutcast: # See the [stream.outputs.shoutcast] section.\n    system: # See the [stream.outputs.system] section.\n")),(0,s.kt)("h4",{id:"icecast"},"Icecast"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"stream.outputs.icecast")," section configures the icecast output streams."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},'stream:\n  outputs:\n    # Icecast output streams.\n    # > max items is 3\n    icecast:\n      - # Whether the output is enabled.\n        # > default is false\n        enabled: false\n        # Output public url, If not defined, the value will be generated from\n        # the [general.public_url] hostname, the output port and mount.\n        public_url:\n        # Icecast server host.\n        # > default is localhost\n        host: "localhost"\n        # Icecast server port.\n        # > default is 8000\n        port: 8000\n        # Icecast server mount point.\n        # > this field is REQUIRED\n        mount: "main"\n        # Icecast source user.\n        # > default is source\n        source_user: "source"\n        # Icecast source password.\n        # > this field is REQUIRED\n        source_password: "hackme"\n        # Icecast admin user.\n        # > default is admin\n        admin_user: "admin"\n        # Icecast admin password. If not defined, statistics will not be collected.\n        admin_password: "hackme"\n\n        # Icecast output audio.\n        audio:\n          # Icecast output audio format.\n          # > must be one of (aac, mp3, ogg, opus)\n          # > this field is REQUIRED\n          format: "ogg"\n          # Icecast output audio bitrate.\n          # > must be one of (32, 48, 64, 96, 128, 160, 192, 224, 256, 320)\n          # > this field is REQUIRED\n          bitrate: 256\n\n          # format=ogg only field: Embed metadata (track title, artist, and show name)\n          # in the output stream. Some bugged players will disconnect from the stream\n          # after every songs when playing ogg streams that have metadata information\n          # enabled.\n          # > default is false\n          enable_metadata: false\n\n        # Icecast stream name.\n        name: "LibreTime!"\n        # Icecast stream description.\n        description: "LibreTime Radio!"\n        # Icecast stream website.\n        website: "https://libretime.org"\n        # Icecast stream genre.\n        genre: "various"\n')),(0,s.kt)("h4",{id:"shoutcast"},"Shoutcast"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"stream.outputs.shoutcast")," section configures the shoutcast output streams."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},'stream:\n  outputs:\n    # Shoutcast output streams.\n    # > max items is 1\n    shoutcast:\n      - # Whether the output is enabled.\n        # > default is false\n        enabled: false\n        # Output public url. If not defined, the value will be generated from\n        # the [general.public_url] hostname and the output port.\n        public_url:\n        # Shoutcast server host.\n        # > default is localhost\n        host: "localhost"\n        # Shoutcast server port.\n        # > default is 8000\n        port: 8000\n        # Shoutcast source user.\n        # > default is source\n        source_user: "source"\n        # Shoutcast source password.\n        # > this field is REQUIRED\n        source_password: "hackme"\n        # Shoutcast admin user.\n        # > default is admin\n        admin_user: "admin"\n        # Shoutcast admin password. If not defined, statistics will not be collected.\n        admin_password: "hackme"\n\n        # Shoutcast output audio.\n        audio:\n          # Shoutcast output audio format.\n          # > must be one of (aac, mp3)\n          # > this field is REQUIRED\n          format: "mp3"\n          # Shoutcast output audio bitrate.\n          # > must be one of (32, 48, 64, 96, 128, 160, 192, 224, 256, 320)\n          # > this field is REQUIRED\n          bitrate: 256\n\n        # Shoutcast stream name.\n        name: "LibreTime!"\n        # Shoutcast stream website.\n        website: "https://libretime.org"\n        # Shoutcast stream genre.\n        genre: "various"\n')),(0,s.kt)("h4",{id:"system"},"System"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"stream.outputs.system")," section configures the system outputs."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},'stream:\n  outputs:\n    # System outputs.\n    # > max items is 1\n    system:\n      - # Whether the output is enabled.\n        # > default is false\n        enabled: false\n        # System output kind.\n        # > must be one of (alsa, ao, oss, portaudio, pulseaudio)\n        # > default is alsa\n        kind: "alsa"\n')),(0,s.kt)("h2",{id:"ldap"},"LDAP"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"ldap")," section provide additional configuration for the authentication mechanism defined in ",(0,s.kt)("inlineCode",{parentName:"p"},"general.auth"),", please see the ",(0,s.kt)("a",{parentName:"p",href:"/pr-1471/docs/next/admin-manual/custom-authentication"},"custom authentication documentation")," for more details."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},'ldap:\n  # Hostname of LDAP server.\n  hostname: "ldap.example.org"\n  # Complete DN of user used to bind to LDAP.\n  binddn: "uid=libretime,cn=sysaccounts,cn=etc,dc=int,dc=example,dc=org"\n  # Password for binddn user.\n  password: "hackme"\n  # Domain part of username.\n  account_domain: "INT.EXAMPLE.ORG"\n  # Base search DN.\n  basedn: "cn=users,cn=accounts,dc=int,dc=example,dc=org"\n  # Name of the uid field for searching. Usually uid, may be cn.\n  filter_field: "uid"\n\n  # Map user types to LDAP groups. Assign user types based on the group of a given user\n  # Key format is groupmap_*.\n  groupmap_superadmin: "cn=superadmin,cn=groups,cn=accounts,dc=int,dc=example,dc=org"\n  groupmap_admin: "cn=admin,cn=groups,cn=accounts,dc=int,dc=example,dc=org"\n  groupmap_program_manager: "cn=program_manager,cn=groups,cn=accounts,dc=int,dc=example,dc=org"\n  groupmap_host: "cn=host,cn=groups,cn=accounts,dc=int,dc=example,dc=org"\n  groupmap_guest: "cn=guest,cn=groups,cn=accounts,dc=int,dc=example,dc=org"\n')))}p.isMDXComponent=!0}}]);