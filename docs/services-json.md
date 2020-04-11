### Yleistä tietojen päivityksestä

Tämä projekti sijaitsee [Githubissa](https://github.com/sendanor/hostingvertailu.info) AGPL-lisenssillä vapaan lähdekoodin projektina.

Vertailun tietoja voi kuka tahansa päivittää ja otamme muutoksia vastaan pull-requesteja tavalliseen tapaan Githubissa. Tämä on maksutonta.

Jos olette palveluntarjoaja ja haluatte meidän lisäävän puolestanne tietoja avaimet käteen -ratkaisuna, ottakaa yhteyttä 
[asiakaspalveluumme](https://ohjelmistoarkkitehti.fi/). Tästä veloitamme kuitenkin työn perusteella tuntihinnastomme 
mukaisen korvauksen.

### [`services.json`](https://github.com/sendanor/hostingvertailu.info/blob/master/docs/_data/services.json)

 * `provider` -- Palveluntarjoaja
 * `name` -- Tuotteen tai palvelun nimi
 * `href` -- Linkki mistä tuotteen voi tilata
 * `price_start` -- Aloitusmaksu, joka peritään tuotteen tai `null`, jos ei peritä ollenkaan
   * `price_start.sum` -- Hinta ALV 0%, euroissa.
   * `price_start.vat` -- ALV-prosentti joka lisätään hintaan
 * `price_month` -- Kuukausihinta. Katso formaatti `price_start`.
 * `price_year` -- Hinta kerralla koko vuodesta. Katso formaatti `price_start`.
 * `conditions` -- Jos tuotteessa/palvelussa on ehtoja
 * `ft_virtuals` -- Numero. Virtuaalipalvelimien määrä (full virtualization, esim. KVM)
 * `ft_containers` -- Numero. Kevyiden virtuaalipalvelimien määrä (kontit, esim. LXC)
 * `ft_root` -- Boolean. Onko asiakkaalla palvelimelle pääkäyttäjän oikeudet?
 * `ft_disk` -- Levytila gigatavuina. Pienemmät määreet voi merkitä desimaaleina.
 * `ft_memory` -- Muistin määrä (GB).
 * `ft_cpu` -- CPU corejen määrä.
 * `ft_ssh` -- Palvelimelle voi ottaa yhteyttä SSH:lla ja ajaa komentoja.
 * `ft_scp` -- Palvelimelle voi ottaa yhteyttä SCP:lla.
 * `ft_noncommercial` -- Jos määritetty, ainoastaan ei-kaupallinen toiminta on sallittua.
 * `ft_phpmyadmin` -- Onko tietokannoilla käytettävissä PHPMyAdmin?
 * `ft_webmail` -- Onko webbipohjainen sähköpostiohjelma käytettävissä sähköpostilla?
 * `ft_pop3` -- Onko POP3 käytettävissä sähköpostilla?
 * `ft_imap` -- Onko IMAP käytettävissä sähköpostilla?
 * `ft_mutt` -- Onko `mutt` -ohjelma käytettävissä?
 * `ft_alpine` -- Onko `alpine` -ohjelma käytettävissä?
 * `ft_sftp` -- Palvelimelle voi ottaa yhteyttä SFTP:lla.
 * `ft_shell` -- Shellitunnuksien määrä, jotka toimivat myös pitkäkestoisten ohjelmien ajamiseen, esimerkiksi IRC-käytössä.
 * `ft_backup` -- Varmuuskopioidaanko levytila?
 * `ft_backup_disk` -- Sisältyykö hintaan ylimääräistä varmuuskopiotilaa, ja kuinka paljon gigatavuissa?
 * `ft_apache` -- Onko webbipalvelimella Apache? Eli tavalliset `.htaccess` -asetukset ja `mod_rewrite` toimivat.
 * `ft_php5` -- Onko palvelimella tukea PHP5:lle?
 * `ft_mysql` -- Sisältyykö palveluun MySQL-tietokantoja?
 * `ft_postgresql` -- Sisältyykö palveluun PostgreSQL-tietokantoja?
 * `ft_python` -- Onko palvelimella Python-tukea?
 * `ft_ror` -- Onko palvelimella Ruby On Rails -tukea?
 * `ft_dns` -- Numero. Monelleko verkkotunnukselle palveluun sisältyy nimipalvelimet?
 * `ft_domain` -- Numero. Monelleko verkkotunnukselle palveluun sisältyy rekisteröintimaksu ilman lisämaksua?
 * `ft_email` -- Sisältyykö palveluun sähköpostilaatikoita?
 * `ft_ssi` -- Onko webpalvelimella käytettävissä SSI-tukea?
 * `ft_traffic` -- Liikenteen suositeltu määrä tai maksimimäärä (GB/kk)
 * `delivery_days` -- Kuinka monessa päivässä viimeistään tilaus käsitellään?
 
`ft_` -alkuiset arvot voivat olla: 

 * `false` tai `null` -- Ominaisuus ei ole käytettävissä
 * `true` -- Ominaisuus on käytettävissä, eikä kappalemäärällä ole ylärajaa.
 * `N` -- Numero, joka kertoo kappalemäärän ylärajan.
