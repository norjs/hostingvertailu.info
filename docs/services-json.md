### Yleistä tietojen päivityksestä

Tämä sivusto sijaitsee [Githubissa](https://github.com/sendanor/hostingvertailu.info) AGPL-lisenssillä vapaan lähdekoodin projektina.

Vertailun tietoja voi kuka tahansa päivittää ja otamme muutoksia vastaan pull-requesteina tavalliseen tapaan Githubissa. Tämä on maksutonta.

Jos olette palveluntarjoaja ja haluatte meidän lisäävän puolestanne tietoja avaimet käteen -ratkaisuna, ottakaa yhteyttä 
[asiakaspalveluumme](https://ohjelmistoarkkitehti.fi/). Tästä veloitamme kuitenkin työn perusteella tuntihinnastomme 
mukaisen korvauksen.

Muutoksia tai lisäkenttiä dataformaattiin voi ehdottaa [Githubissa](https://github.com/sendanor/hostingvertailu.info/issues).

### [`services.json`](https://github.com/sendanor/hostingvertailu.info/blob/master/docs/_data/services.json)

 * `provider` -- Palveluntarjoajan nimi
 * `name` -- Tuotteen tai palvelun nimi. Merkkijono.
 * `href` -- Linkki mistä tuotteen voi tilata.
 * `price_start` -- Aloitusmaksu, joka peritään tuotteen tilauksen yhteydessä tai `null`, jos ei peritä ollenkaan
   * `price_start.sum` -- Hinta verottomana, euroissa.
   * `price_start.vat` -- ALV-prosentti joka lisätään hintaan: 24% merkitään `0.24`.
 * `price_month` -- Kuukausihinta. Sama formaatti kuin `price_start`.
 * `price_year` -- Hinta kerralla koko vuodesta. Sama formaatti kuin `price_start`.
 * `conditions` -- Merkkijono, jos tuotteessa/palvelussa on ylimääräisiä ehtoja
 * `ft_fi` -- Boolean. Ovatko palvelimet Suomessa?
 * `ft_eu` -- Boolean. Ovatko palvelimet EU:ssa?
 * `ft_virtuals` -- Numero. Virtuaalipalvelimien määrä (full virtualization, esim. KVM)
 * `ft_containers` -- Numero. Kevyiden virtuaalipalvelimien määrä (kontit, esim. LXC)
 * `ft_root` -- Boolean. Onko asiakkaalla palvelimelle pääkäyttäjän oikeudet?
 * `ft_disk` -- Numero. Levytila gigatavuina. Pienemmät määreet voi merkitä desimaaleina.
 * `ft_memory` -- Numero. Muistin määrä (GB). Megatavut merkitään desimaaleina.
 * `ft_cpu` -- Numero. CPU corejen määrä.
 * `ft_ssh` -- Numero. Kuinka monta ehtoa vastaavaa tunnusta sisältyy: Palvelimelle voi ottaa yhteyttä SSH:lla ja ajaa komentoja.
 * `ft_scp` -- Numero. Kuinka monta ehtoa vastaavaa tunnusta sisältyy: Palvelimelle voi ottaa yhteyttä SCP:lla.
 * `ft_sftp` -- Numero. Kuinka monta ehtoa vastaavaa tunnusta sisältyy: Palvelimelle voi ottaa yhteyttä SFTP:lla.
 * `ft_noncommercial` -- Boolean. Jos määritetty, ainoastaan ei-kaupallinen toiminta on sallittua.
 * `ft_phpmyadmin` -- Boolean. Onko tietokannoilla käytettävissä PHPMyAdmin?
 * `ft_webmail` -- Boolean. Onko webbipohjainen sähköpostiohjelma käytettävissä sähköpostilla?
 * `ft_email` -- Numero. Montako sähköpostilaatikkoa palveluun sisältyy?
 * `ft_pop3` -- Boolean. Onko POP3 käytettävissä sähköpostilaatikoilla?
 * `ft_imap` -- Boolean. Onko IMAP käytettävissä sähköpostilaatikoilla?
 * `ft_mutt` -- Boolean. Onko `mutt` -ohjelma käytettävissä sähköpostin lukemiseen shellissä?
 * `ft_alpine` -- Boolean. Onko `alpine` -ohjelma käytettävissä sähköpostin lukemiseen shellissä?
 * `ft_shell` -- Numero. Shellitunnuksien määrä, jotka toimivat myös pitkäkestoisten ohjelmien ajamiseen, esimerkiksi IRC-käytössä.
 * `ft_backup` -- Boolean. Varmuuskopioidaanko levytila lisämaksutta? (Palautus voi olla lisämaksullinen.)
 * `ft_backup_disk` -- Numero. Sisältyykö hintaan ylimääräistä varmuuskopiotilaa, ja kuinka paljon gigatavuissa? Tämä on ylimääräistä levytilaa, jonka käyttäjä itse ottaa käyttöön.
 * `ft_apache` -- Boolean. Onko webbipalvelimella Apache? Eli tavalliset `.htaccess` -asetukset ja `mod_rewrite` toimivat.
 * `ft_php` -- Boolean. Onko palvelimella tukea PHP:lle?
 * `ft_php7` -- Boolean. Onko palvelimella tukea PHP7:lle?
 * `ft_php5` -- Boolean. Onko palvelimella tukea PHP5:lle?
 * `ft_mysql` -- Numero. Sisältyykö palveluun MySQL-tietokantoja?
 * `ft_postgresql` -- Numero. Sisältyykö palveluun PostgreSQL-tietokantoja?
 * `ft_python` -- Boolean. Onko palvelimella Python-tukea?
 * `ft_ror` -- Boolean. Onko palvelimella Ruby On Rails -tukea?
 * `ft_dns` -- Numero. Monelleko verkkotunnukselle palveluun sisältyy nimipalvelimet?
 * `ft_domain` -- Numero. Monelleko verkkotunnukselle palveluun sisältyy rekisteröintimaksu ilman lisämaksua?
 * `ft_ssi` -- Boolean. Onko webpalvelimella käytettävissä SSI-tukea?
 * `ft_traffic` -- Numero. Liikenteen suositeltu määrä tai maksimimäärä ennen lisämaksua (GB/kk)
 * `delivery_days` -- Numero. Kuinka monessa päivässä viimeistään tilaus käsitellään?
 