### `services.json`

 * `provider` -- Palveluntarjoaja
 * `name` -- Tuotteen tai palvelun nimi
 * `href` -- Linkki mistä tuotteen voi tilata
 * `price_start` -- Aloitusmaksu, joka peritään tuotteen tai `null`, jos ei peritä ollenkaan
   * `price_start.sum` -- Hinta ALV 0%, euroissa.
   * `price_start.vat` -- ALV-prosentti joka lisätään hintaan
 * `price_month` -- Kuukausihinta. Katso formaatti `price_start`.
 * `price_year` -- Hinta kerralla koko vuodesta. Katso formaatti `price_start`.
 * `conditions` -- Jos tuotteessa/palvelussa on ehtoja
 * `ft_disk` -- Levytila gigatavuina. Pienemmät määreet voi merkitä desimaaleina.
 * `ft_ssh` -- Palvelimelle voi ottaa yhteyttä SSH:lla ja ajaa komentoja.
 * `ft_scp` -- Palvelimelle voi ottaa yhteyttä SCP:lla.
 * `ft_noncommercial` -- Jos määritetty, ainoastaan ei-kaupallinen toiminta on sallittua.
 * `ft_phpmyadmin` -- Onko tietokannoilla käytettävissä PHPMyAdmin?
 * `ft_webmail` -- Onko webbipohjainen sähköpostiohjelma käytettävissä sähköpostilla?
 * `ft_pop3` -- Onko webmail käytettävissä sähköpostilla?
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
 * `ft_dns` -- Sisältyykö palveluun verkkotunnuksen nimipalvelimia?
 * `ft_domain` -- Sisältyykö palveluun verkkotunnuksen rekisteröintimaksua ilman lisämaksua?
 * `ft_email` -- Sisältyykö palveluun sähköpostilaatikoita?
 * `ft_ssi` -- Onko webpalvelimella käytettävissä SSI-tukea?
 * `delivery_days` -- Kuinka monessa päivässä viimeistään tilaus käsitellään?
 
`ft_` -alkuiset arvot voivat olla: 

 * `false` tai `null` -- Ominaisuus ei ole käytettävissä
 * `true` -- Ominaisuus on käytettävissä, eikä kappalemäärällä ole ylärajaa.
 * `N` -- Numero, joka kertoo kappalemäärän ylärajan.
