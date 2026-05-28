document.addEventListener("DOMContentLoaded", function () {

/* ========================
   DATA
======================== */

let equipos = [
  {
    "liga": "Europa - Inglaterra",
    "equipo": "Arsenal",
    "rol": "Local",
    "prom": 5.89,
    "FD": 0.6079755938112879
  },
  {
    "liga": "Europa - Inglaterra",
    "equipo": "Arsenal",
    "rol": "Visitante",
    "prom": 5.47,
    "FD": 0.7138209870805836
  },
  {
    "liga": "Europa - Inglaterra",
    "equipo": "Aston Villa",
    "rol": "Local",
    "prom": 5.53,
    "FD": 1.078666376116801
  },
  {
    "liga": "Europa - Inglaterra",
    "equipo": "Aston Villa",
    "rol": "Visitante",
    "prom": 4.95,
    "FD": 0.9090064132354307
  },
  {
    "liga": "Europa - Inglaterra",
    "equipo": "Bournemouth",
    "rol": "Local",
    "prom": 6.0,
    "FD": 0.8716495968620613
  },
  {
    "liga": "Europa - Inglaterra",
    "equipo": "Bournemouth",
    "rol": "Visitante",
    "prom": 5.16,
    "FD": 1.2231620039037086
  },
  {
    "liga": "Europa - Inglaterra",
    "equipo": "Brentford",
    "rol": "Local",
    "prom": 4.37,
    "FD": 1.008934408367836
  },
  {
    "liga": "Europa - Inglaterra",
    "equipo": "Brentford",
    "rol": "Visitante",
    "prom": 5.21,
    "FD": 1.135793289339158
  },
  {
    "liga": "Europa - Inglaterra",
    "equipo": "Brighton",
    "rol": "Local",
    "prom": 4.95,
    "FD": 0.9871431684462846
  },
  {
    "liga": "Europa - Inglaterra",
    "equipo": "Brighton",
    "rol": "Visitante",
    "prom": 4.79,
    "FD": 0.9499024072869227
  },
  {
    "liga": "Europa - Inglaterra",
    "equipo": "Burnley",
    "rol": "Local",
    "prom": 3.74,
    "FD": 1.2835040313793853
  },
  {
    "liga": "Europa - Inglaterra",
    "equipo": "Burnley",
    "rol": "Visitante",
    "prom": 3.53,
    "FD": 1.115345292313412
  },
  {
    "liga": "Europa - Inglaterra",
    "equipo": "Chelsea",
    "rol": "Local",
    "prom": 6.84,
    "FD": 0.8476792329483547
  },
  {
    "liga": "Europa - Inglaterra",
    "equipo": "Chelsea",
    "rol": "Visitante",
    "prom": 5.05,
    "FD": 0.8699693280044613
  },
  {
    "liga": "Europa - Inglaterra",
    "equipo": "Crystal Palace",
    "rol": "Local",
    "prom": 4.37,
    "FD": 0.9522771845718021
  },
  {
    "liga": "Europa - Inglaterra",
    "equipo": "Crystal Palace",
    "rol": "Visitante",
    "prom": 4.0,
    "FD": 1.135793289339158
  },
  {
    "liga": "Europa - Inglaterra",
    "equipo": "Everton",
    "rol": "Local",
    "prom": 4.95,
    "FD": 1.008934408367836
  },
  {
    "liga": "Europa - Inglaterra",
    "equipo": "Everton",
    "rol": "Visitante",
    "prom": 3.89,
    "FD": 1.046565665954085
  },
  {
    "liga": "Europa - Inglaterra",
    "equipo": "Fulham",
    "rol": "Local",
    "prom": 5.47,
    "FD": 1.237742427544127
  },
  {
    "liga": "Europa - Inglaterra",
    "equipo": "Fulham",
    "rol": "Visitante",
    "prom": 4.37,
    "FD": 0.9982340366205038
  },
  {
    "liga": "Europa - Inglaterra",
    "equipo": "Leeds Utd",
    "rol": "Local",
    "prom": 5.58,
    "FD": 0.9174112006973196
  },
  {
    "liga": "Europa - Inglaterra",
    "equipo": "Leeds Utd",
    "rol": "Visitante",
    "prom": 3.26,
    "FD": 1.1060507482108002
  },
  {
    "liga": "Europa - Inglaterra",
    "equipo": "Liverpool",
    "rol": "Local",
    "prom": 6.26,
    "FD": 1.0438003922423185
  },
  {
    "liga": "Europa - Inglaterra",
    "equipo": "Liverpool",
    "rol": "Visitante",
    "prom": 5.95,
    "FD": 0.7435635282089413
  },
  {
    "liga": "Europa - Inglaterra",
    "equipo": "Manchester City",
    "rol": "Local",
    "prom": 7.11,
    "FD": 0.7234691653955109
  },
  {
    "liga": "Europa - Inglaterra",
    "equipo": "Manchester City",
    "rol": "Visitante",
    "prom": 5.74,
    "FD": 0.8030486104656567
  },
  {
    "liga": "Europa - Inglaterra",
    "equipo": "Manchester Utd",
    "rol": "Local",
    "prom": 5.26,
    "FD": 0.9740684244933535
  },
  {
    "liga": "Europa - Inglaterra",
    "equipo": "Manchester Utd",
    "rol": "Visitante",
    "prom": 4.26,
    "FD": 0.9777860395947578
  },
  {
    "liga": "Europa - Inglaterra",
    "equipo": "Newcastle Utd",
    "rol": "Local",
    "prom": 6.74,
    "FD": 1.078666376116801
  },
  {
    "liga": "Europa - Inglaterra",
    "equipo": "Newcastle Utd",
    "rol": "Visitante",
    "prom": 5.37,
    "FD": 0.9090064132354307
  },
  {
    "liga": "Europa - Inglaterra",
    "equipo": "Nottm Forest",
    "rol": "Local",
    "prom": 6.0,
    "FD": 0.8476792329483547
  },
  {
    "liga": "Europa - Inglaterra",
    "equipo": "Nottm Forest",
    "rol": "Visitante",
    "prom": 4.42,
    "FD": 1.0670136629798308
  },
  {
    "liga": "Europa - Inglaterra",
    "equipo": "Sunderland",
    "rol": "Local",
    "prom": 3.89,
    "FD": 1.0198300283286117
  },
  {
    "liga": "Europa - Inglaterra",
    "equipo": "Sunderland",
    "rol": "Visitante",
    "prom": 3.37,
    "FD": 1.0372711218514732
  },
  {
    "liga": "Europa - Inglaterra",
    "equipo": "Tottenham",
    "rol": "Local",
    "prom": 6.21,
    "FD": 1.1592939638265416
  },
  {
    "liga": "Europa - Inglaterra",
    "equipo": "Tottenham",
    "rol": "Visitante",
    "prom": 4.79,
    "FD": 0.8030486104656567
  },
  {
    "liga": "Europa - Inglaterra",
    "equipo": "West Ham Utd",
    "rol": "Local",
    "prom": 5.32,
    "FD": 1.191980823708869
  },
  {
    "liga": "Europa - Inglaterra",
    "equipo": "West Ham Utd",
    "rol": "Visitante",
    "prom": 4.53,
    "FD": 1.2417510921089319
  },
  {
    "liga": "Europa - Inglaterra",
    "equipo": "Wolverhampton",
    "rol": "Local",
    "prom": 3.11,
    "FD": 1.1592939638265416
  },
  {
    "liga": "Europa - Inglaterra",
    "equipo": "Wolverhampton",
    "rol": "Visitante",
    "prom": 3.68,
    "FD": 1.2138674598010968
  },
  {
    "liga": "Europa - España",
    "equipo": "Alaves",
    "rol": "Local",
    "prom": 6.16,
    "FD": 1.0088809946714028
  },
  {
    "liga": "Europa - España",
    "equipo": "Alaves",
    "rol": "Visitante",
    "prom": 3.95,
    "FD": 1.0551470588235294
  },
  {
    "liga": "Europa - España",
    "equipo": "Athletic Bilbao",
    "rol": "Local",
    "prom": 6.32,
    "FD": 0.8715216104203669
  },
  {
    "liga": "Europa - España",
    "equipo": "Athletic Bilbao",
    "rol": "Visitante",
    "prom": 5.21,
    "FD": 0.7352941176470589
  },
  {
    "liga": "Europa - España",
    "equipo": "Atletico Madrid",
    "rol": "Local",
    "prom": 7.79,
    "FD": 0.8975725281231496
  },
  {
    "liga": "Europa - España",
    "equipo": "Atletico Madrid",
    "rol": "Visitante",
    "prom": 5.16,
    "FD": 0.880514705882353
  },
  {
    "liga": "Europa - España",
    "equipo": "Celta Vigo",
    "rol": "Local",
    "prom": 4.53,
    "FD": 0.9094138543516871
  },
  {
    "liga": "Europa - España",
    "equipo": "Celta Vigo",
    "rol": "Visitante",
    "prom": 3.05,
    "FD": 0.9779411764705884
  },
  {
    "liga": "Europa - España",
    "equipo": "Elche",
    "rol": "Local",
    "prom": 4.79,
    "FD": 0.8478389579632917
  },
  {
    "liga": "Europa - España",
    "equipo": "Elche",
    "rol": "Visitante",
    "prom": 2.79,
    "FD": 0.9963235294117648
  },
  {
    "liga": "Europa - España",
    "equipo": "Espanyol",
    "rol": "Local",
    "prom": 5.16,
    "FD": 1.122557726465364
  },
  {
    "liga": "Europa - España",
    "equipo": "Espanyol",
    "rol": "Visitante",
    "prom": 4.21,
    "FD": 0.9099264705882354
  },
  {
    "liga": "Europa - España",
    "equipo": "FC Barcelona",
    "rol": "Local",
    "prom": 7.11,
    "FD": 0.9473060982830075
  },
  {
    "liga": "Europa - España",
    "equipo": "FC Barcelona",
    "rol": "Visitante",
    "prom": 6.68,
    "FD": 0.8897058823529412
  },
  {
    "liga": "Europa - España",
    "equipo": "Getafe",
    "rol": "Local",
    "prom": 4.16,
    "FD": 0.9094138543516871
  },
  {
    "liga": "Europa - España",
    "equipo": "Getafe",
    "rol": "Visitante",
    "prom": 4.42,
    "FD": 0.9963235294117648
  },
  {
    "liga": "Europa - España",
    "equipo": "Girona",
    "rol": "Local",
    "prom": 4.79,
    "FD": 0.9212551805802248
  },
  {
    "liga": "Europa - España",
    "equipo": "Girona",
    "rol": "Visitante",
    "prom": 3.58,
    "FD": 1.1893382352941178
  },
  {
    "liga": "Europa - España",
    "equipo": "Levante",
    "rol": "Local",
    "prom": 5.21,
    "FD": 1.122557726465364
  },
  {
    "liga": "Europa - España",
    "equipo": "Levante",
    "rol": "Visitante",
    "prom": 3.32,
    "FD": 1.3069852941176472
  },
  {
    "liga": "Europa - España",
    "equipo": "Mallorca",
    "rol": "Local",
    "prom": 4.0,
    "FD": 1.3949082297217283
  },
  {
    "liga": "Europa - España",
    "equipo": "Mallorca",
    "rol": "Visitante",
    "prom": 3.37,
    "FD": 1.2279411764705883
  },
  {
    "liga": "Europa - España",
    "equipo": "Osasuna",
    "rol": "Local",
    "prom": 4.53,
    "FD": 0.9094138543516871
  },
  {
    "liga": "Europa - España",
    "equipo": "Osasuna",
    "rol": "Visitante",
    "prom": 2.95,
    "FD": 1.0643382352941178
  },
  {
    "liga": "Europa - España",
    "equipo": "Rayo Vallecano",
    "rol": "Local",
    "prom": 6.63,
    "FD": 1.1580817051509766
  },
  {
    "liga": "Europa - España",
    "equipo": "Rayo Vallecano",
    "rol": "Visitante",
    "prom": 4.74,
    "FD": 1.0257352941176472
  },
  {
    "liga": "Europa - España",
    "equipo": "Real Betis",
    "rol": "Local",
    "prom": 4.63,
    "FD": 1.072824156305506
  },
  {
    "liga": "Europa - España",
    "equipo": "Real Betis",
    "rol": "Visitante",
    "prom": 4.37,
    "FD": 1.0551470588235294
  },
  {
    "liga": "Europa - España",
    "equipo": "Real Madrid",
    "rol": "Local",
    "prom": 6.47,
    "FD": 0.7104795737122556
  },
  {
    "liga": "Europa - España",
    "equipo": "Real Madrid",
    "rol": "Visitante",
    "prom": 6.11,
    "FD": 0.7941176470588237
  },
  {
    "liga": "Europa - España",
    "equipo": "Real Oviedo",
    "rol": "Local",
    "prom": 4.63,
    "FD": 1.146240378922439
  },
  {
    "liga": "Europa - España",
    "equipo": "Real Oviedo",
    "rol": "Visitante",
    "prom": 3.26,
    "FD": 1.1507352941176472
  },
  {
    "liga": "Europa - España",
    "equipo": "Real Sociedad",
    "rol": "Local",
    "prom": 5.95,
    "FD": 1.0586145648312608
  },
  {
    "liga": "Europa - España",
    "equipo": "Real Sociedad",
    "rol": "Visitante",
    "prom": 5.16,
    "FD": 0.8327205882352943
  },
  {
    "liga": "Europa - España",
    "equipo": "Sevilla FC",
    "rol": "Local",
    "prom": 4.58,
    "FD": 0.8715216104203669
  },
  {
    "liga": "Europa - España",
    "equipo": "Sevilla FC",
    "rol": "Visitante",
    "prom": 5.0,
    "FD": 0.9963235294117648
  },
  {
    "liga": "Europa - España",
    "equipo": "Valencia",
    "rol": "Local",
    "prom": 6.0,
    "FD": 1.023090586145648
  },
  {
    "liga": "Europa - España",
    "equipo": "Valencia",
    "rol": "Visitante",
    "prom": 4.16,
    "FD": 0.9669117647058824
  },
  {
    "liga": "Europa - España",
    "equipo": "Villarreal",
    "rol": "Local",
    "prom": 5.37,
    "FD": 1.096506808762581
  },
  {
    "liga": "Europa - España",
    "equipo": "Villarreal",
    "rol": "Visitante",
    "prom": 3.0,
    "FD": 0.948529411764706
  },
  {
    "liga": "Europa - EspañaB",
    "equipo": "Albacete",
    "rol": "Local",
    "prom": 5.38,
    "FD": 1.1350531107738997
  },
  {
    "liga": "Europa - EspañaB",
    "equipo": "Albacete",
    "rol": "Visitante",
    "prom": 4.85,
    "FD": 1.2059737569060776
  },
  {
    "liga": "Europa - EspañaB",
    "equipo": "Almeria",
    "rol": "Local",
    "prom": 6.1,
    "FD": 0.9419033167136353
  },
  {
    "liga": "Europa - EspañaB",
    "equipo": "Almeria",
    "rol": "Visitante",
    "prom": 3.76,
    "FD": 0.9685773480662984
  },
  {
    "liga": "Europa - EspañaB",
    "equipo": "Burgos",
    "rol": "Local",
    "prom": 4.3,
    "FD": 1.037285931064383
  },
  {
    "liga": "Europa - EspañaB",
    "equipo": "Burgos",
    "rol": "Visitante",
    "prom": 3.24,
    "FD": 0.9856698895027627
  },
  {
    "liga": "Europa - EspañaB",
    "equipo": "Cadiz",
    "rol": "Local",
    "prom": 5.48,
    "FD": 1.146975937567743
  },
  {
    "liga": "Europa - EspañaB",
    "equipo": "Cadiz",
    "rol": "Visitante",
    "prom": 3.35,
    "FD": 1.0920234806629836
  },
  {
    "liga": "Europa - EspañaB",
    "equipo": "Castellon",
    "rol": "Local",
    "prom": 6.1,
    "FD": 0.8226750487752005
  },
  {
    "liga": "Europa - EspañaB",
    "equipo": "Castellon",
    "rol": "Visitante",
    "prom": 6.29,
    "FD": 0.7140883977900553
  },
  {
    "liga": "Europa - EspañaB",
    "equipo": "Ceuta",
    "rol": "Local",
    "prom": 4.8,
    "FD": 1.037285931064383
  },
  {
    "liga": "Europa - EspañaB",
    "equipo": "Ceuta",
    "rol": "Visitante",
    "prom": 3.24,
    "FD": 1.021754143646409
  },
  {
    "liga": "Europa - EspañaB",
    "equipo": "Cordoba",
    "rol": "Local",
    "prom": 6.5,
    "FD": 0.8226750487752005
  },
  {
    "liga": "Europa - EspañaB",
    "equipo": "Cordoba",
    "rol": "Visitante",
    "prom": 6.14,
    "FD": 0.9856698895027627
  },
  {
    "liga": "Europa - EspañaB",
    "equipo": "Deportivo",
    "rol": "Local",
    "prom": 5.15,
    "FD": 0.9419033167136353
  },
  {
    "liga": "Europa - EspañaB",
    "equipo": "Deportivo",
    "rol": "Visitante",
    "prom": 5.05,
    "FD": 0.8774171270718234
  },
  {
    "liga": "Europa - EspañaB",
    "equipo": "Eibar",
    "rol": "Local",
    "prom": 4.95,
    "FD": 0.9299804899197918
  },
  {
    "liga": "Europa - EspañaB",
    "equipo": "Eibar",
    "rol": "Visitante",
    "prom": 3.6,
    "FD": 1.1395027624309393
  },
  {
    "liga": "Europa - EspañaB",
    "equipo": "FC Andorra",
    "rol": "Local",
    "prom": 5.62,
    "FD": 0.7153696076306091
  },
  {
    "liga": "Europa - EspañaB",
    "equipo": "FC Andorra",
    "rol": "Visitante",
    "prom": 4.25,
    "FD": 1.0730317679558012
  },
  {
    "liga": "Europa - EspañaB",
    "equipo": "Granada",
    "rol": "Local",
    "prom": 5.15,
    "FD": 0.9895946238890092
  },
  {
    "liga": "Europa - EspañaB",
    "equipo": "Granada",
    "rol": "Visitante",
    "prom": 3.67,
    "FD": 1.0673342541436466
  },
  {
    "liga": "Europa - EspañaB",
    "equipo": "Huesca",
    "rol": "Local",
    "prom": 5.14,
    "FD": 1.2161283329720354
  },
  {
    "liga": "Europa - EspañaB",
    "equipo": "Huesca",
    "rol": "Visitante",
    "prom": 3.9,
    "FD": 1.0065607734806632
  },
  {
    "liga": "Europa - EspañaB",
    "equipo": "Las Palmas",
    "rol": "Local",
    "prom": 4.57,
    "FD": 0.8846737481031866
  },
  {
    "liga": "Europa - EspañaB",
    "equipo": "Las Palmas",
    "rol": "Visitante",
    "prom": 4.15,
    "FD": 0.7311809392265195
  },
  {
    "liga": "Europa - EspañaB",
    "equipo": "Leganes",
    "rol": "Local",
    "prom": 5.7,
    "FD": 1.0611315846520701
  },
  {
    "liga": "Europa - EspañaB",
    "equipo": "Leganes",
    "rol": "Visitante",
    "prom": 3.71,
    "FD": 1.0046616022099448
  },
  {
    "liga": "Europa - EspañaB",
    "equipo": "Leonesa",
    "rol": "Local",
    "prom": 4.43,
    "FD": 0.9872100585302404
  },
  {
    "liga": "Europa - EspañaB",
    "equipo": "Leonesa",
    "rol": "Visitante",
    "prom": 3.35,
    "FD": 1.0160566298342542
  },
  {
    "liga": "Europa - EspañaB",
    "equipo": "Malaga",
    "rol": "Local",
    "prom": 4.14,
    "FD": 0.9299804899197918
  },
  {
    "liga": "Europa - EspañaB",
    "equipo": "Malaga",
    "rol": "Visitante",
    "prom": 4.25,
    "FD": 1.06353591160221
  },
  {
    "liga": "Europa - EspañaB",
    "equipo": "Mirandes",
    "rol": "Local",
    "prom": 5.29,
    "FD": 1.0897463689572946
  },
  {
    "liga": "Europa - EspañaB",
    "equipo": "Mirandes",
    "rol": "Visitante",
    "prom": 3.4,
    "FD": 1.0350483425414367
  },
  {
    "liga": "Europa - EspañaB",
    "equipo": "Racing",
    "rol": "Local",
    "prom": 7.15,
    "FD": 1.0730544114459135
  },
  {
    "liga": "Europa - EspañaB",
    "equipo": "Racing",
    "rol": "Visitante",
    "prom": 4.38,
    "FD": 0.9685773480662984
  },
  {
    "liga": "Europa - EspañaB",
    "equipo": "Real Sociedad B",
    "rol": "Local",
    "prom": 3.7,
    "FD": 1.1684370257966614
  },
  {
    "liga": "Europa - EspañaB",
    "equipo": "Real Sociedad B",
    "rol": "Visitante",
    "prom": 3.76,
    "FD": 1.1300069060773483
  },
  {
    "liga": "Europa - EspañaB",
    "equipo": "Real Zaragoza",
    "rol": "Local",
    "prom": 4.85,
    "FD": 1.228051159765879
  },
  {
    "liga": "Europa - EspañaB",
    "equipo": "Real Zaragoza",
    "rol": "Visitante",
    "prom": 5.24,
    "FD": 0.9761740331491714
  },
  {
    "liga": "Europa - EspañaB",
    "equipo": "Sporting Gijon",
    "rol": "Local",
    "prom": 5.24,
    "FD": 1.2042055061781918
  },
  {
    "liga": "Europa - EspañaB",
    "equipo": "Sporting Gijon",
    "rol": "Visitante",
    "prom": 3.85,
    "FD": 1.1110151933701657
  },
  {
    "liga": "Europa - EspañaB",
    "equipo": "Valladolid",
    "rol": "Local",
    "prom": 6.1,
    "FD": 0.636678950791242
  },
  {
    "liga": "Europa - EspañaB",
    "equipo": "Valladolid",
    "rol": "Visitante",
    "prom": 4.7,
    "FD": 0.826139502762431
  },
  {
    "liga": "Europa - Bulgaria",
    "equipo": "Arda",
    "rol": "Local",
    "prom": 5.27,
    "FD": 0.7781510150430846
  },
  {
    "liga": "Europa - Bulgaria",
    "equipo": "Arda",
    "rol": "Visitante",
    "prom": 3.0,
    "FD": 0.9523343925690542
  },
  {
    "liga": "Europa - Bulgaria",
    "equipo": "Beroe",
    "rol": "Local",
    "prom": 4.8,
    "FD": 1.448809697677815
  },
  {
    "liga": "Europa - Bulgaria",
    "equipo": "Beroe",
    "rol": "Visitante",
    "prom": 2.93,
    "FD": 1.550721095086776
  },
  {
    "liga": "Europa - Bulgaria",
    "equipo": "Botev Plovdiv",
    "rol": "Local",
    "prom": 5.73,
    "FD": 1.07492332408354
  },
  {
    "liga": "Europa - Bulgaria",
    "equipo": "Botev Plovdiv",
    "rol": "Visitante",
    "prom": 4.0,
    "FD": 0.9777560498655586
  },
  {
    "liga": "Europa - Bulgaria",
    "equipo": "Botev Vratsa",
    "rol": "Local",
    "prom": 4.0,
    "FD": 0.997809259529721
  },
  {
    "liga": "Europa - Bulgaria",
    "equipo": "Botev Vratsa",
    "rol": "Visitante",
    "prom": 3.33,
    "FD": 1.2124175018332928
  },
  {
    "liga": "Europa - Bulgaria",
    "equipo": "Cherno More",
    "rol": "Local",
    "prom": 6.4,
    "FD": 0.8879801372864028
  },
  {
    "liga": "Europa - Bulgaria",
    "equipo": "Cherno More",
    "rol": "Visitante",
    "prom": 3.67,
    "FD": 0.9523343925690542
  },
  {
    "liga": "Europa - Bulgaria",
    "equipo": "CSKA 1948 Sofia",
    "rol": "Local",
    "prom": 5.0,
    "FD": 1.0912808529282898
  },
  {
    "liga": "Europa - Bulgaria",
    "equipo": "CSKA 1948 Sofia",
    "rol": "Visitante",
    "prom": 5.33,
    "FD": 0.7430945978978245
  },
  {
    "liga": "Europa - Bulgaria",
    "equipo": "CSKA Sofia",
    "rol": "Local",
    "prom": 6.8,
    "FD": 0.5771870892361619
  },
  {
    "liga": "Europa - Bulgaria",
    "equipo": "CSKA Sofia",
    "rol": "Visitante",
    "prom": 5.47,
    "FD": 0.6785626986066977
  },
  {
    "liga": "Europa - Bulgaria",
    "equipo": "Dobrudzha",
    "rol": "Local",
    "prom": 4.67,
    "FD": 1.028187527384256
  },
  {
    "liga": "Europa - Bulgaria",
    "equipo": "Dobrudzha",
    "rol": "Visitante",
    "prom": 3.87,
    "FD": 1.0422879491566854
  },
  {
    "liga": "Europa - Bulgaria",
    "equipo": "Levski Sofia",
    "rol": "Local",
    "prom": 6.33,
    "FD": 0.514093763692128
  },
  {
    "liga": "Europa - Bulgaria",
    "equipo": "Levski Sofia",
    "rol": "Visitante",
    "prom": 7.2,
    "FD": 0.483011488633586
  },
  {
    "liga": "Europa - Bulgaria",
    "equipo": "Lok. Plovdiv",
    "rol": "Local",
    "prom": 3.67,
    "FD": 0.997809259529721
  },
  {
    "liga": "Europa - Bulgaria",
    "equipo": "Lok. Plovdiv",
    "rol": "Visitante",
    "prom": 3.6,
    "FD": 0.9523343925690542
  },
  {
    "liga": "Europa - Bulgaria",
    "equipo": "Lokomotiv Sofia",
    "rol": "Local",
    "prom": 5.47,
    "FD": 1.0585657952387908
  },
  {
    "liga": "Europa - Bulgaria",
    "equipo": "Lokomotiv Sofia",
    "rol": "Visitante",
    "prom": 4.33,
    "FD": 0.9132241505744317
  },
  {
    "liga": "Europa - Bulgaria",
    "equipo": "Ludogorets",
    "rol": "Local",
    "prom": 7.8,
    "FD": 0.5771870892361619
  },
  {
    "liga": "Europa - Bulgaria",
    "equipo": "Ludogorets",
    "rol": "Visitante",
    "prom": 6.53,
    "FD": 0.43021266194084584
  },
  {
    "liga": "Europa - Bulgaria",
    "equipo": "Montana",
    "rol": "Local",
    "prom": 3.8,
    "FD": 1.2151307141813934
  },
  {
    "liga": "Europa - Bulgaria",
    "equipo": "Montana",
    "rol": "Visitante",
    "prom": 3.67,
    "FD": 1.2378391591297973
  },
  {
    "liga": "Europa - Bulgaria",
    "equipo": "Septemvri Sofia",
    "rol": "Local",
    "prom": 3.47,
    "FD": 0.9814517306849716
  },
  {
    "liga": "Europa - Bulgaria",
    "equipo": "Septemvri Sofia",
    "rol": "Visitante",
    "prom": 3.4,
    "FD": 1.0305548765582988
  },
  {
    "liga": "Europa - Bulgaria",
    "equipo": "Slavia Sofia",
    "rol": "Local",
    "prom": 4.87,
    "FD": 1.338980575434497
  },
  {
    "liga": "Europa - Bulgaria",
    "equipo": "Slavia Sofia",
    "rol": "Visitante",
    "prom": 4.8,
    "FD": 1.4216572965045222
  },
  {
    "liga": "Europa - Bulgaria",
    "equipo": "Spartak Varna",
    "rol": "Local",
    "prom": 3.73,
    "FD": 1.4324521688330656
  },
  {
    "liga": "Europa - Bulgaria",
    "equipo": "Spartak Varna",
    "rol": "Visitante",
    "prom": 3.33,
    "FD": 1.4216572965045222
  },
  {
    "liga": "Europa - Polonia",
    "equipo": "Arka Gdynia",
    "rol": "Local",
    "prom": 4.12,
    "FD": 1.0898394411079788
  },
  {
    "liga": "Europa - Polonia",
    "equipo": "Arka Gdynia",
    "rol": "Visitante",
    "prom": 4.12,
    "FD": 1.1585220500595947
  },
  {
    "liga": "Europa - Polonia",
    "equipo": "Cracovia Krakow",
    "rol": "Local",
    "prom": 5.06,
    "FD": 0.8559872533398699
  },
  {
    "liga": "Europa - Polonia",
    "equipo": "Cracovia Krakow",
    "rol": "Visitante",
    "prom": 4.53,
    "FD": 1.0902589663018745
  },
  {
    "liga": "Europa - Polonia",
    "equipo": "Gornik Zabrze",
    "rol": "Local",
    "prom": 5.82,
    "FD": 0.8824610859173917
  },
  {
    "liga": "Europa - Polonia",
    "equipo": "Gornik Zabrze",
    "rol": "Visitante",
    "prom": 5.65,
    "FD": 0.8601148553472748
  },
  {
    "liga": "Europa - Polonia",
    "equipo": "Jagiellonia",
    "rol": "Local",
    "prom": 5.24,
    "FD": 0.792008824610859
  },
  {
    "liga": "Europa - Polonia",
    "equipo": "Jagiellonia",
    "rol": "Visitante",
    "prom": 5.24,
    "FD": 0.9069238270668545
  },
  {
    "liga": "Europa - Polonia",
    "equipo": "Katowice",
    "rol": "Local",
    "prom": 5.71,
    "FD": 1.1670547861257505
  },
  {
    "liga": "Europa - Polonia",
    "equipo": "Katowice",
    "rol": "Visitante",
    "prom": 3.59,
    "FD": 0.9985913966843645
  },
  {
    "liga": "Europa - Polonia",
    "equipo": "Korona Kielce",
    "rol": "Local",
    "prom": 5.65,
    "FD": 0.9993871798014462
  },
  {
    "liga": "Europa - Polonia",
    "equipo": "Korona Kielce",
    "rol": "Visitante",
    "prom": 4.12,
    "FD": 1.135117564199805
  },
  {
    "liga": "Europa - Polonia",
    "equipo": "Lech Poznan",
    "rol": "Local",
    "prom": 6.53,
    "FD": 1.0390979286677287
  },
  {
    "liga": "Europa - Polonia",
    "equipo": "Lech Poznan",
    "rol": "Visitante",
    "prom": 5.71,
    "FD": 0.8601148553472748
  },
  {
    "liga": "Europa - Polonia",
    "equipo": "Lechia Gdansk",
    "rol": "Local",
    "prom": 5.59,
    "FD": 1.0898394411079788
  },
  {
    "liga": "Europa - Polonia",
    "equipo": "Lechia Gdansk",
    "rol": "Visitante",
    "prom": 4.71,
    "FD": 0.8718170982771697
  },
  {
    "liga": "Europa - Polonia",
    "equipo": "Legia Warsaw",
    "rol": "Local",
    "prom": 6.18,
    "FD": 0.7147934795930874
  },
  {
    "liga": "Europa - Polonia",
    "equipo": "Legia Warsaw",
    "rol": "Visitante",
    "prom": 4.88,
    "FD": 0.8035540145194495
  },
  {
    "liga": "Europa - Polonia",
    "equipo": "Motor Lublin",
    "rol": "Local",
    "prom": 4.82,
    "FD": 1.076602524819218
  },
  {
    "liga": "Europa - Polonia",
    "equipo": "Motor Lublin",
    "rol": "Visitante",
    "prom": 5.71,
    "FD": 1.0668544804420845
  },
  {
    "liga": "Europa - Polonia",
    "equipo": "Piast Gliwice",
    "rol": "Local",
    "prom": 6.35,
    "FD": 0.8559872533398699
  },
  {
    "liga": "Europa - Polonia",
    "equipo": "Piast Gliwice",
    "rol": "Visitante",
    "prom": 4.0,
    "FD": 0.9069238270668545
  },
  {
    "liga": "Europa - Polonia",
    "equipo": "Pogon Szczecin",
    "rol": "Local",
    "prom": 5.82,
    "FD": 1.1295501899742615
  },
  {
    "liga": "Europa - Polonia",
    "equipo": "Pogon Szczecin",
    "rol": "Visitante",
    "prom": 4.24,
    "FD": 1.1702242929894895
  },
  {
    "liga": "Europa - Polonia",
    "equipo": "Radomiak Radom",
    "rol": "Local",
    "prom": 4.71,
    "FD": 1.0390979286677287
  },
  {
    "liga": "Europa - Polonia",
    "equipo": "Radomiak Radom",
    "rol": "Visitante",
    "prom": 4.47,
    "FD": 1.0668544804420845
  },
  {
    "liga": "Europa - Polonia",
    "equipo": "Rakow C.",
    "rol": "Local",
    "prom": 3.82,
    "FD": 0.7147934795930874
  },
  {
    "liga": "Europa - Polonia",
    "equipo": "Rakow C.",
    "rol": "Visitante",
    "prom": 4.53,
    "FD": 0.836710369487485
  },
  {
    "liga": "Europa - Polonia",
    "equipo": "Termalica",
    "rol": "Local",
    "prom": 4.06,
    "FD": 1.2972177962985658
  },
  {
    "liga": "Europa - Polonia",
    "equipo": "Termalica",
    "rol": "Visitante",
    "prom": 4.76,
    "FD": 1.0102936396142592
  },
  {
    "liga": "Europa - Polonia",
    "equipo": "Widzew Lodz",
    "rol": "Local",
    "prom": 4.53,
    "FD": 0.7787719083220981
  },
  {
    "liga": "Europa - Polonia",
    "equipo": "Widzew Lodz",
    "rol": "Visitante",
    "prom": 3.71,
    "FD": 0.9868891537544695
  },
  {
    "liga": "Europa - Polonia",
    "equipo": "Wisla Plock",
    "rol": "Local",
    "prom": 5.12,
    "FD": 1.270743963721044
  },
  {
    "liga": "Europa - Polonia",
    "equipo": "Wisla Plock",
    "rol": "Visitante",
    "prom": 3.59,
    "FD": 0.928377939104995
  },
  {
    "liga": "Europa - Polonia",
    "equipo": "Zaglebie Lubin",
    "rol": "Local",
    "prom": 3.18,
    "FD": 1.2067655349920332
  },
  {
    "liga": "Europa - Polonia",
    "equipo": "Zaglebie Lubin",
    "rol": "Visitante",
    "prom": 4.06,
    "FD": 1.3418571892946147
  },
  {
    "liga": "Europa - Alemania2",
    "equipo": "Bielefeld",
    "rol": "Local",
    "prom": 6.59,
    "FD": 0.7084579495154921
  },
  {
    "liga": "Europa - Alemania2",
    "equipo": "Bielefeld",
    "rol": "Visitante",
    "prom": 5.65,
    "FD": 0.9599505816946361
  },
  {
    "liga": "Europa - Alemania2",
    "equipo": "Bochum",
    "rol": "Local",
    "prom": 4.94,
    "FD": 0.9883957411173583
  },
  {
    "liga": "Europa - Alemania2",
    "equipo": "Bochum",
    "rol": "Visitante",
    "prom": 5.0,
    "FD": 1.3194687532173377
  },
  {
    "liga": "Europa - Alemania2",
    "equipo": "Braunschweig",
    "rol": "Local",
    "prom": 4.82,
    "FD": 1.2295729154205046
  },
  {
    "liga": "Europa - Alemania2",
    "equipo": "Braunschweig",
    "rol": "Visitante",
    "prom": 4.65,
    "FD": 1.0896736332749923
  },
  {
    "liga": "Europa - Alemania2",
    "equipo": "Darmstadt",
    "rol": "Local",
    "prom": 5.12,
    "FD": 1.2166527096542645
  },
  {
    "liga": "Europa - Alemania2",
    "equipo": "Darmstadt",
    "rol": "Visitante",
    "prom": 4.59,
    "FD": 1.002573870071039
  },
  {
    "liga": "Europa - Alemania2",
    "equipo": "Dusseldorf",
    "rol": "Local",
    "prom": 4.47,
    "FD": 0.7601387725804519
  },
  {
    "liga": "Europa - Alemania2",
    "equipo": "Dusseldorf",
    "rol": "Visitante",
    "prom": 4.41,
    "FD": 0.9914547513641511
  },
  {
    "liga": "Europa - Alemania2",
    "equipo": "Dynamo Dresden",
    "rol": "Local",
    "prom": 4.82,
    "FD": 1.1391314750568247
  },
  {
    "liga": "Europa - Alemania2",
    "equipo": "Dynamo Dresden",
    "rol": "Visitante",
    "prom": 5.24,
    "FD": 1.1452692268094307
  },
  {
    "liga": "Europa - Alemania2",
    "equipo": "Elversberg",
    "rol": "Local",
    "prom": 6.18,
    "FD": 0.798899389879172
  },
  {
    "liga": "Europa - Alemania2",
    "equipo": "Elversberg",
    "rol": "Visitante",
    "prom": 6.0,
    "FD": 0.861731699783795
  },
  {
    "liga": "Europa - Alemania2",
    "equipo": "FC Nurnberg",
    "rol": "Local",
    "prom": 5.18,
    "FD": 1.0766838138533315
  },
  {
    "liga": "Europa - Alemania2",
    "equipo": "FC Nurnberg",
    "rol": "Visitante",
    "prom": 5.12,
    "FD": 0.7635128178729538
  },
  {
    "liga": "Europa - Alemania2",
    "equipo": "Greuther Furth",
    "rol": "Local",
    "prom": 4.12,
    "FD": 1.2166527096542645
  },
  {
    "liga": "Europa - Alemania2",
    "equipo": "Greuther Furth",
    "rol": "Visitante",
    "prom": 5.0,
    "FD": 1.035931226191702
  },
  {
    "liga": "Europa - Alemania2",
    "equipo": "Hannover 96",
    "rol": "Local",
    "prom": 8.06,
    "FD": 0.773058978346692
  },
  {
    "liga": "Europa - Alemania2",
    "equipo": "Hannover 96",
    "rol": "Visitante",
    "prom": 4.35,
    "FD": 0.8506125810769073
  },
  {
    "liga": "Europa - Alemania2",
    "equipo": "Hertha Berlin",
    "rol": "Local",
    "prom": 4.76,
    "FD": 1.279100370857758
  },
  {
    "liga": "Europa - Alemania2",
    "equipo": "Hertha Berlin",
    "rol": "Visitante",
    "prom": 4.12,
    "FD": 1.0785545145681048
  },
  {
    "liga": "Europa - Alemania2",
    "equipo": "Holstein Kiel",
    "rol": "Local",
    "prom": 6.12,
    "FD": 1.0379231965546116
  },
  {
    "liga": "Europa - Alemania2",
    "equipo": "Holstein Kiel",
    "rol": "Visitante",
    "prom": 4.24,
    "FD": 0.9488314629877485
  },
  {
    "liga": "Europa - Alemania2",
    "equipo": "Kaiserslautern",
    "rol": "Local",
    "prom": 5.65,
    "FD": 0.798899389879172
  },
  {
    "liga": "Europa - Alemania2",
    "equipo": "Kaiserslautern",
    "rol": "Visitante",
    "prom": 3.76,
    "FD": 1.1230309893956554
  },
  {
    "liga": "Europa - Alemania2",
    "equipo": "Karlsruher SC",
    "rol": "Local",
    "prom": 4.76,
    "FD": 1.0896040196195713
  },
  {
    "liga": "Europa - Alemania2",
    "equipo": "Karlsruher SC",
    "rol": "Visitante",
    "prom": 4.41,
    "FD": 0.861731699783795
  },
  {
    "liga": "Europa - Alemania2",
    "equipo": "Magdeburg",
    "rol": "Local",
    "prom": 5.29,
    "FD": 0.8871874626151451
  },
  {
    "liga": "Europa - Alemania2",
    "equipo": "Magdeburg",
    "rol": "Visitante",
    "prom": 5.12,
    "FD": 1.035931226191702
  },
  {
    "liga": "Europa - Alemania2",
    "equipo": "Paderborn",
    "rol": "Local",
    "prom": 6.0,
    "FD": 1.0250029907883715
  },
  {
    "liga": "Europa - Alemania2",
    "equipo": "Paderborn",
    "rol": "Visitante",
    "prom": 4.24,
    "FD": 0.8061361062493565
  },
  {
    "liga": "Europa - Alemania2",
    "equipo": "Preuss. Munster",
    "rol": "Local",
    "prom": 4.88,
    "FD": 1.1391314750568247
  },
  {
    "liga": "Europa - Alemania2",
    "equipo": "Preuss. Munster",
    "rol": "Visitante",
    "prom": 3.41,
    "FD": 1.1878925151858335
  },
  {
    "liga": "Europa - Alemania2",
    "equipo": "Schalke 04",
    "rol": "Local",
    "prom": 5.35,
    "FD": 0.8355066395501852
  },
  {
    "liga": "Europa - Alemania2",
    "equipo": "Schalke 04",
    "rol": "Visitante",
    "prom": 4.29,
    "FD": 0.9377123442808607
  },
  {
    "liga": "Europa - Francia",
    "equipo": "Angers",
    "rol": "Local",
    "prom": 4.12,
    "FD": 1.1085251046025104
  },
  {
    "liga": "Europa - Francia",
    "equipo": "Angers",
    "rol": "Visitante",
    "prom": 3.0,
    "FD": 1.0644159072079533
  },
  {
    "liga": "Europa - Francia",
    "equipo": "Auxerre",
    "rol": "Local",
    "prom": 5.47,
    "FD": 1.037918410041841
  },
  {
    "liga": "Europa - Francia",
    "equipo": "Auxerre",
    "rol": "Visitante",
    "prom": 4.06,
    "FD": 0.9320629660314829
  },
  {
    "liga": "Europa - Francia",
    "equipo": "Brest",
    "rol": "Local",
    "prom": 4.65,
    "FD": 0.9273012552301255
  },
  {
    "liga": "Europa - Francia",
    "equipo": "Brest",
    "rol": "Visitante",
    "prom": 3.06,
    "FD": 1.4372410936205466
  },
  {
    "liga": "Europa - Francia",
    "equipo": "Le Havre",
    "rol": "Local",
    "prom": 4.82,
    "FD": 0.8025627615062763
  },
  {
    "liga": "Europa - Francia",
    "equipo": "Le Havre",
    "rol": "Visitante",
    "prom": 3.71,
    "FD": 1.1632145816072905
  },
  {
    "liga": "Europa - Francia",
    "equipo": "Lens",
    "rol": "Local",
    "prom": 6.76,
    "FD": 0.9696652719665273
  },
  {
    "liga": "Europa - Francia",
    "equipo": "Lens",
    "rol": "Visitante",
    "prom": 5.65,
    "FD": 0.7792046396023196
  },
  {
    "liga": "Europa - Francia",
    "equipo": "Lille",
    "rol": "Local",
    "prom": 6.35,
    "FD": 0.8449267782426778
  },
  {
    "liga": "Europa - Francia",
    "equipo": "Lille",
    "rol": "Visitante",
    "prom": 5.06,
    "FD": 0.7456503728251863
  },
  {
    "liga": "Europa - Francia",
    "equipo": "Lorient",
    "rol": "Local",
    "prom": 3.24,
    "FD": 1.2450313807531381
  },
  {
    "liga": "Europa - Francia",
    "equipo": "Lorient",
    "rol": "Visitante",
    "prom": 3.76,
    "FD": 1.019676884838442
  },
  {
    "liga": "Europa - Francia",
    "equipo": "Lyon",
    "rol": "Local",
    "prom": 6.53,
    "FD": 0.9555439330543932
  },
  {
    "liga": "Europa - Francia",
    "equipo": "Lyon",
    "rol": "Visitante",
    "prom": 5.24,
    "FD": 1.0961060480530238
  },
  {
    "liga": "Europa - Francia",
    "equipo": "Marseille",
    "rol": "Local",
    "prom": 5.59,
    "FD": 0.7484309623430963
  },
  {
    "liga": "Europa - Francia",
    "equipo": "Marseille",
    "rol": "Visitante",
    "prom": 4.76,
    "FD": 0.756835128417564
  },
  {
    "liga": "Europa - Francia",
    "equipo": "Metz",
    "rol": "Local",
    "prom": 4.94,
    "FD": 1.0096757322175733
  },
  {
    "liga": "Europa - Francia",
    "equipo": "Metz",
    "rol": "Visitante",
    "prom": 3.53,
    "FD": 1.1632145816072905
  },
  {
    "liga": "Europa - Francia",
    "equipo": "Monaco",
    "rol": "Local",
    "prom": 4.94,
    "FD": 0.9555439330543932
  },
  {
    "liga": "Europa - Francia",
    "equipo": "Monaco",
    "rol": "Visitante",
    "prom": 5.18,
    "FD": 0.8556338028169013
  },
  {
    "liga": "Europa - Francia",
    "equipo": "Nantes",
    "rol": "Local",
    "prom": 4.0,
    "FD": 1.2073744769874477
  },
  {
    "liga": "Europa - Francia",
    "equipo": "Nantes",
    "rol": "Visitante",
    "prom": 3.41,
    "FD": 1.1632145816072905
  },
  {
    "liga": "Europa - Francia",
    "equipo": "Nice",
    "rol": "Local",
    "prom": 5.53,
    "FD": 1.3556485355648535
  },
  {
    "liga": "Europa - Francia",
    "equipo": "Nice",
    "rol": "Visitante",
    "prom": 4.65,
    "FD": 1.0532311516155757
  },
  {
    "liga": "Europa - Francia",
    "equipo": "Paris FC",
    "rol": "Local",
    "prom": 5.53,
    "FD": 1.023797071129707
  },
  {
    "liga": "Europa - Francia",
    "equipo": "Paris FC",
    "rol": "Visitante",
    "prom": 3.24,
    "FD": 1.2601491300745649
  },
  {
    "liga": "Europa - Francia",
    "equipo": "Paris SG",
    "rol": "Local",
    "prom": 7.47,
    "FD": 0.6378138075313807
  },
  {
    "liga": "Europa - Francia",
    "equipo": "Paris SG",
    "rol": "Visitante",
    "prom": 5.24,
    "FD": 0.6692212096106046
  },
  {
    "liga": "Europa - Francia",
    "equipo": "Rennes",
    "rol": "Local",
    "prom": 6.47,
    "FD": 1.0802824267782427
  },
  {
    "liga": "Europa - Francia",
    "equipo": "Rennes",
    "rol": "Visitante",
    "prom": 5.53,
    "FD": 0.8556338028169013
  },
  {
    "liga": "Europa - Francia",
    "equipo": "Strasbourg",
    "rol": "Local",
    "prom": 4.94,
    "FD": 1.066161087866109
  },
  {
    "liga": "Europa - Francia",
    "equipo": "Strasbourg",
    "rol": "Visitante",
    "prom": 3.53,
    "FD": 0.8780033140016569
  },
  {
    "liga": "Europa - Francia",
    "equipo": "Toulouse",
    "rol": "Local",
    "prom": 5.06,
    "FD": 1.023797071129707
  },
  {
    "liga": "Europa - Francia",
    "equipo": "Toulouse",
    "rol": "Visitante",
    "prom": 3.81,
    "FD": 1.1072908036454017
  },
  {
    "liga": "Europa - Turquia",
    "equipo": "Alanyaspor",
    "rol": "Local",
    "prom": 5.41,
    "FD": 0.8166841004184101
  },
  {
    "liga": "Europa - Turquia",
    "equipo": "Alanyaspor",
    "rol": "Visitante",
    "prom": 3.94,
    "FD": 0.747511505940276
  },
  {
    "liga": "Europa - Turquia",
    "equipo": "Antalyaspor",
    "rol": "Local",
    "prom": 4.94,
    "FD": 1.2191422594142258
  },
  {
    "liga": "Europa - Turquia",
    "equipo": "Antalyaspor",
    "rol": "Visitante",
    "prom": 3.24,
    "FD": 1.2021834528524027
  },
  {
    "liga": "Europa - Turquia",
    "equipo": "Basaksehir",
    "rol": "Local",
    "prom": 4.41,
    "FD": 1.066161087866109
  },
  {
    "liga": "Europa - Turquia",
    "equipo": "Basaksehir",
    "rol": "Visitante",
    "prom": 5.24,
    "FD": 1.1212672589104142
  },
  {
    "liga": "Europa - Turquia",
    "equipo": "Besiktas",
    "rol": "Local",
    "prom": 6.29,
    "FD": 0.8731694560669456
  },
  {
    "liga": "Europa - Turquia",
    "equipo": "Besiktas",
    "rol": "Visitante",
    "prom": 4.65,
    "FD": 1.0885154661243712
  },
  {
    "liga": "Europa - Turquia",
    "equipo": "Eyupspor",
    "rol": "Local",
    "prom": 3.88,
    "FD": 1.205020920502092
  },
  {
    "liga": "Europa - Turquia",
    "equipo": "Eyupspor",
    "rol": "Visitante",
    "prom": 3.0,
    "FD": 1.2811730707481537
  },
  {
    "liga": "Europa - Turquia",
    "equipo": "F. Karagumruk",
    "rol": "Local",
    "prom": 3.12,
    "FD": 1.3156380753138075
  },
  {
    "liga": "Europa - Turquia",
    "equipo": "F. Karagumruk",
    "rol": "Visitante",
    "prom": 4.0,
    "FD": 0.9632880231189125
  },
  {
    "liga": "Europa - Turquia",
    "equipo": "Fenerbahce",
    "rol": "Local",
    "prom": 7.47,
    "FD": 0.7625523012552302
  },
  {
    "liga": "Europa - Turquia",
    "equipo": "Fenerbahce",
    "rol": "Visitante",
    "prom": 6.35,
    "FD": 0.9632880231189125
  },
  {
    "liga": "Europa - Turquia",
    "equipo": "Galatasaray",
    "rol": "Local",
    "prom": 6.53,
    "FD": 0.6919456066945607
  },
  {
    "liga": "Europa - Turquia",
    "equipo": "Galatasaray",
    "rol": "Visitante",
    "prom": 4.47,
    "FD": 0.7243925933854222
  },
  {
    "liga": "Europa - Turquia",
    "equipo": "Gaziantep",
    "rol": "Local",
    "prom": 6.59,
    "FD": 1.1202928870292888
  },
  {
    "liga": "Europa - Turquia",
    "equipo": "Gaziantep",
    "rol": "Visitante",
    "prom": 3.47,
    "FD": 1.0769560098469442
  },
  {
    "liga": "Europa - Turquia",
    "equipo": "Genclerbirligi",
    "rol": "Local",
    "prom": 4.53,
    "FD": 1.23326359832636
  },
  {
    "liga": "Europa - Turquia",
    "equipo": "Genclerbirligi",
    "rol": "Visitante",
    "prom": 3.35,
    "FD": 1.0653965535695173
  },
  {
    "liga": "Europa - Turquia",
    "equipo": "Goztepe",
    "rol": "Local",
    "prom": 5.06,
    "FD": 1.066161087866109
  },
  {
    "liga": "Europa - Turquia",
    "equipo": "Goztepe",
    "rol": "Visitante",
    "prom": 3.94,
    "FD": 1.0095258482286202
  },
  {
    "liga": "Europa - Turquia",
    "equipo": "Kasimpasa",
    "rol": "Local",
    "prom": 4.82,
    "FD": 0.8849372384937239
  },
  {
    "liga": "Europa - Turquia",
    "equipo": "Kasimpasa",
    "rol": "Visitante",
    "prom": 3.59,
    "FD": 0.9979663919511933
  },
  {
    "liga": "Europa - Turquia",
    "equipo": "Kayserispor",
    "rol": "Local",
    "prom": 5.65,
    "FD": 0.983786610878661
  },
  {
    "liga": "Europa - Turquia",
    "equipo": "Kayserispor",
    "rol": "Visitante",
    "prom": 4.71,
    "FD": 0.9401691105640585
  },
  {
    "liga": "Europa - Turquia",
    "equipo": "Kocaelispor",
    "rol": "Local",
    "prom": 4.53,
    "FD": 0.8990585774058577
  },
  {
    "liga": "Europa - Turquia",
    "equipo": "Kocaelispor",
    "rol": "Visitante",
    "prom": 3.82,
    "FD": 0.7706304184951299
  },
  {
    "liga": "Europa - Turquia",
    "equipo": "Konyaspor",
    "rol": "Local",
    "prom": 5.59,
    "FD": 0.8590481171548118
  },
  {
    "liga": "Europa - Turquia",
    "equipo": "Konyaspor",
    "rol": "Visitante",
    "prom": 4.24,
    "FD": 1.100074922401798
  },
  {
    "liga": "Europa - Turquia",
    "equipo": "Rizespor",
    "rol": "Local",
    "prom": 4.18,
    "FD": 1.066161087866109
  },
  {
    "liga": "Europa - Turquia",
    "equipo": "Rizespor",
    "rol": "Visitante",
    "prom": 4.29,
    "FD": 0.8958578615005887
  },
  {
    "liga": "Europa - Turquia",
    "equipo": "Samsunspor",
    "rol": "Local",
    "prom": 5.76,
    "FD": 0.7884414225941423
  },
  {
    "liga": "Europa - Turquia",
    "equipo": "Samsunspor",
    "rol": "Visitante",
    "prom": 5.59,
    "FD": 0.9979663919511933
  },
  {
    "liga": "Europa - Turquia",
    "equipo": "Trabzonspor",
    "rol": "Local",
    "prom": 4.65,
    "FD": 1.1485355648535565
  },
  {
    "liga": "Europa - Turquia",
    "equipo": "Trabzonspor",
    "rol": "Visitante",
    "prom": 4.59,
    "FD": 1.0538370972920903
  },
  {
    "liga": "Europa - FranciaB",
    "equipo": "Amiens",
    "rol": "Local",
    "prom": 5.47,
    "FD": 1.2886391007627458
  },
  {
    "liga": "Europa - FranciaB",
    "equipo": "Amiens",
    "rol": "Visitante",
    "prom": 3.94,
    "FD": 1.241446725317693
  },
  {
    "liga": "Europa - FranciaB",
    "equipo": "Annecy",
    "rol": "Local",
    "prom": 4.65,
    "FD": 0.8502609393817744
  },
  {
    "liga": "Europa - FranciaB",
    "equipo": "Annecy",
    "rol": "Visitante",
    "prom": 4.29,
    "FD": 0.9208211143695015
  },
  {
    "liga": "Europa - FranciaB",
    "equipo": "Boulogne",
    "rol": "Local",
    "prom": 4.24,
    "FD": 0.8936170212765958
  },
  {
    "liga": "Europa - FranciaB",
    "equipo": "Boulogne",
    "rol": "Visitante",
    "prom": 3.65,
    "FD": 1.18475073313783
  },
  {
    "liga": "Europa - FranciaB",
    "equipo": "Clermont",
    "rol": "Local",
    "prom": 4.12,
    "FD": 1.346447209955841
  },
  {
    "liga": "Europa - FranciaB",
    "equipo": "Clermont",
    "rol": "Visitante",
    "prom": 3.29,
    "FD": 1.2082111436950147
  },
  {
    "liga": "Europa - FranciaB",
    "equipo": "Grenoble",
    "rol": "Local",
    "prom": 4.29,
    "FD": 1.3030911280610198
  },
  {
    "liga": "Europa - FranciaB",
    "equipo": "Grenoble",
    "rol": "Visitante",
    "prom": 2.65,
    "FD": 1.264907135874878
  },
  {
    "liga": "Europa - FranciaB",
    "equipo": "Guingamp",
    "rol": "Local",
    "prom": 6.06,
    "FD": 0.879164993978322
  },
  {
    "liga": "Europa - FranciaB",
    "equipo": "Guingamp",
    "rol": "Visitante",
    "prom": 4.53,
    "FD": 0.7937438905180841
  },
  {
    "liga": "Europa - FranciaB",
    "equipo": "Laval",
    "rol": "Local",
    "prom": 6.35,
    "FD": 1.3319951826575673
  },
  {
    "liga": "Europa - FranciaB",
    "equipo": "Laval",
    "rol": "Visitante",
    "prom": 3.29,
    "FD": 1.1045943304007821
  },
  {
    "liga": "Europa - FranciaB",
    "equipo": "Le Mans",
    "rol": "Local",
    "prom": 5.47,
    "FD": 1.091128061019671
  },
  {
    "liga": "Europa - FranciaB",
    "equipo": "Le Mans",
    "rol": "Visitante",
    "prom": 5.29,
    "FD": 0.838709677419355
  },
  {
    "liga": "Europa - FranciaB",
    "equipo": "Montpellier",
    "rol": "Local",
    "prom": 5.71,
    "FD": 0.949016459253312
  },
  {
    "liga": "Europa - FranciaB",
    "equipo": "Montpellier",
    "rol": "Visitante",
    "prom": 5.06,
    "FD": 1.0576735092864127
  },
  {
    "liga": "Europa - FranciaB",
    "equipo": "Nancy",
    "rol": "Local",
    "prom": 5.35,
    "FD": 0.879164993978322
  },
  {
    "liga": "Europa - FranciaB",
    "equipo": "Nancy",
    "rol": "Visitante",
    "prom": 3.47,
    "FD": 1.1163245356793745
  },
  {
    "liga": "Europa - FranciaB",
    "equipo": "Pau FC",
    "rol": "Local",
    "prom": 5.94,
    "FD": 0.821356884785227
  },
  {
    "liga": "Europa - FranciaB",
    "equipo": "Pau FC",
    "rol": "Visitante",
    "prom": 3.82,
    "FD": 1.1045943304007821
  },
  {
    "liga": "Europa - FranciaB",
    "equipo": "Red Star",
    "rol": "Local",
    "prom": 4.94,
    "FD": 0.7659574468085107
  },
  {
    "liga": "Europa - FranciaB",
    "equipo": "Red Star",
    "rol": "Visitante",
    "prom": 4.31,
    "FD": 0.8191593352883677
  },
  {
    "liga": "Europa - FranciaB",
    "equipo": "Reims",
    "rol": "Local",
    "prom": 5.18,
    "FD": 0.5949417904456042
  },
  {
    "liga": "Europa - FranciaB",
    "equipo": "Reims",
    "rol": "Visitante",
    "prom": 5.41,
    "FD": 0.7820136852394918
  },
  {
    "liga": "Europa - FranciaB",
    "equipo": "Rodez Aveyron",
    "rol": "Local",
    "prom": 4.94,
    "FD": 1.3608992372541149
  },
  {
    "liga": "Europa - FranciaB",
    "equipo": "Rodez Aveyron",
    "rol": "Visitante",
    "prom": 4.12,
    "FD": 1.1260997067448681
  },
  {
    "liga": "Europa - FranciaB",
    "equipo": "Saint-Etienne",
    "rol": "Local",
    "prom": 5.29,
    "FD": 0.949016459253312
  },
  {
    "liga": "Europa - FranciaB",
    "equipo": "Saint-Etienne",
    "rol": "Visitante",
    "prom": 4.82,
    "FD": 0.758553274682307
  },
  {
    "liga": "Europa - FranciaB",
    "equipo": "SC Bastia",
    "rol": "Local",
    "prom": 4.5,
    "FD": 0.9947812123645123
  },
  {
    "liga": "Europa - FranciaB",
    "equipo": "SC Bastia",
    "rol": "Visitante",
    "prom": 4.29,
    "FD": 0.9305962854349952
  },
  {
    "liga": "Europa - FranciaB",
    "equipo": "Troyes",
    "rol": "Local",
    "prom": 4.65,
    "FD": 0.7226013649136893
  },
  {
    "liga": "Europa - FranciaB",
    "equipo": "Troyes",
    "rol": "Visitante",
    "prom": 4.71,
    "FD": 0.8621700879765397
  },
  {
    "liga": "Europa - FranciaB",
    "equipo": "USL Dunkerque",
    "rol": "Local",
    "prom": 4.94,
    "FD": 0.9779205138498595
  },
  {
    "liga": "Europa - FranciaB",
    "equipo": "USL Dunkerque",
    "rol": "Visitante",
    "prom": 3.76,
    "FD": 0.8856304985337246
  },
  {
    "liga": "Europa - HolandaB ",
    "equipo": "ADO Den Haag",
    "rol": "Local",
    "prom": 8.0,
    "FD": 0.6778276847692936
  },
  {
    "liga": "Europa - HolandaB ",
    "equipo": "ADO Den Haag",
    "rol": "Visitante",
    "prom": 6.63,
    "FD": 0.6355680176735491
  },
  {
    "liga": "Europa - HolandaB ",
    "equipo": "Almere City",
    "rol": "Local",
    "prom": 7.58,
    "FD": 0.8595345038791344
  },
  {
    "liga": "Europa - HolandaB ",
    "equipo": "Almere City",
    "rol": "Visitante",
    "prom": 6.26,
    "FD": 0.7341320418047412
  },
  {
    "liga": "Europa - HolandaB ",
    "equipo": "Cambuur",
    "rol": "Local",
    "prom": 7.05,
    "FD": 0.6451612903225807
  },
  {
    "liga": "Europa - HolandaB ",
    "equipo": "Cambuur",
    "rol": "Visitante",
    "prom": 5.63,
    "FD": 0.6984450675503441
  },
  {
    "liga": "Europa - HolandaB ",
    "equipo": "De Graafschap",
    "rol": "Local",
    "prom": 7.05,
    "FD": 1.0208248264597797
  },
  {
    "liga": "Europa - HolandaB ",
    "equipo": "De Graafschap",
    "rol": "Visitante",
    "prom": 6.11,
    "FD": 1.0994986829807119
  },
  {
    "liga": "Europa - HolandaB ",
    "equipo": "FC Den Bosch",
    "rol": "Local",
    "prom": 5.79,
    "FD": 1.1923233973050225
  },
  {
    "liga": "Europa - HolandaB ",
    "equipo": "FC Den Bosch",
    "rol": "Visitante",
    "prom": 4.84,
    "FD": 1.2167558841023025
  },
  {
    "liga": "Europa - HolandaB ",
    "equipo": "FC Dordrecht",
    "rol": "Local",
    "prom": 6.89,
    "FD": 1.0432829726418948
  },
  {
    "liga": "Europa - HolandaB ",
    "equipo": "FC Dordrecht",
    "rol": "Visitante",
    "prom": 5.16,
    "FD": 0.9295607103407254
  },
  {
    "liga": "Europa - HolandaB ",
    "equipo": "FC Eindhoven",
    "rol": "Local",
    "prom": 3.79,
    "FD": 1.0963658636178033
  },
  {
    "liga": "Europa - HolandaB ",
    "equipo": "FC Eindhoven",
    "rol": "Visitante",
    "prom": 6.05,
    "FD": 1.1453819355935082
  },
  {
    "liga": "Europa - HolandaB ",
    "equipo": "FC Emmen",
    "rol": "Local",
    "prom": 6.16,
    "FD": 1.0432829726418948
  },
  {
    "liga": "Europa - HolandaB ",
    "equipo": "FC Emmen",
    "rol": "Visitante",
    "prom": 4.95,
    "FD": 0.8411929645679326
  },
  {
    "liga": "Europa - HolandaB ",
    "equipo": "Helmond Sport",
    "rol": "Local",
    "prom": 6.89,
    "FD": 0.8819926500612496
  },
  {
    "liga": "Europa - HolandaB ",
    "equipo": "Helmond Sport",
    "rol": "Visitante",
    "prom": 4.95,
    "FD": 0.9295607103407254
  },
  {
    "liga": "Europa - HolandaB ",
    "equipo": "Jong Ajax",
    "rol": "Local",
    "prom": 5.05,
    "FD": 1.1596570028583095
  },
  {
    "liga": "Europa - HolandaB ",
    "equipo": "Jong Ajax",
    "rol": "Visitante",
    "prom": 3.53,
    "FD": 1.0910017843487125
  },
  {
    "liga": "Europa - HolandaB ",
    "equipo": "Jong AZ",
    "rol": "Local",
    "prom": 5.68,
    "FD": 0.8922008983258474
  },
  {
    "liga": "Europa - HolandaB ",
    "equipo": "Jong AZ",
    "rol": "Visitante",
    "prom": 4.16,
    "FD": 1.2439459597247002
  },
  {
    "liga": "Europa - HolandaB ",
    "equipo": "Jong PSV",
    "rol": "Local",
    "prom": 5.0,
    "FD": 1.139240506329114
  },
  {
    "liga": "Europa - HolandaB ",
    "equipo": "Jong PSV",
    "rol": "Visitante",
    "prom": 4.89,
    "FD": 1.1895658084799046
  },
  {
    "liga": "Europa - HolandaB ",
    "equipo": "Jong Utrecht",
    "rol": "Local",
    "prom": 4.05,
    "FD": 1.1167823601469988
  },
  {
    "liga": "Europa - HolandaB ",
    "equipo": "Jong Utrecht",
    "rol": "Visitante",
    "prom": 4.53,
    "FD": 0.8581867618319312
  },
  {
    "liga": "Europa - HolandaB ",
    "equipo": "MVV Maastricht",
    "rol": "Local",
    "prom": 4.53,
    "FD": 1.1167823601469988
  },
  {
    "liga": "Europa - HolandaB ",
    "equipo": "MVV Maastricht",
    "rol": "Visitante",
    "prom": 3.37,
    "FD": 1.3051236298750952
  },
  {
    "liga": "Europa - HolandaB ",
    "equipo": "RKC Waalwijk",
    "rol": "Local",
    "prom": 4.79,
    "FD": 1.1923233973050225
  },
  {
    "liga": "Europa - HolandaB ",
    "equipo": "RKC Waalwijk",
    "rol": "Visitante",
    "prom": 4.74,
    "FD": 0.8938737360863284
  },
  {
    "liga": "Europa - HolandaB ",
    "equipo": "Roda JC",
    "rol": "Local",
    "prom": 6.0,
    "FD": 1.0861576153532055
  },
  {
    "liga": "Europa - HolandaB ",
    "equipo": "Roda JC",
    "rol": "Visitante",
    "prom": 4.63,
    "FD": 0.8411929645679326
  },
  {
    "liga": "Europa - HolandaB ",
    "equipo": "TOP Oss",
    "rol": "Local",
    "prom": 5.79,
    "FD": 1.278072682727644
  },
  {
    "liga": "Europa - HolandaB ",
    "equipo": "TOP Oss",
    "rol": "Visitante",
    "prom": 3.74,
    "FD": 1.3238168068654939
  },
  {
    "liga": "Europa - HolandaB ",
    "equipo": "Vitesse Arnhem",
    "rol": "Local",
    "prom": 5.68,
    "FD": 0.7737852184565129
  },
  {
    "liga": "Europa - HolandaB ",
    "equipo": "Vitesse Arnhem",
    "rol": "Visitante",
    "prom": 4.05,
    "FD": 0.9567507859631232
  },
  {
    "liga": "Europa - HolandaB ",
    "equipo": "VVV",
    "rol": "Local",
    "prom": 5.74,
    "FD": 0.9350755410371581
  },
  {
    "liga": "Europa - HolandaB ",
    "equipo": "VVV",
    "rol": "Visitante",
    "prom": 4.42,
    "FD": 1.1266887586031096
  },
  {
    "liga": "Europa - HolandaB ",
    "equipo": "Willem II",
    "rol": "Local",
    "prom": 6.16,
    "FD": 0.8493262556145367
  },
  {
    "liga": "Europa - HolandaB ",
    "equipo": "Willem II",
    "rol": "Visitante",
    "prom": 5.32,
    "FD": 0.9397569886991247
  },
  {
    "liga": "Europa - Holanda ",
    "equipo": "Ajax Amsterdam",
    "rol": "Local",
    "prom": 5.29,
    "FD": 0.9083526682134568
  },
  {
    "liga": "Europa - Holanda ",
    "equipo": "Ajax Amsterdam",
    "rol": "Visitante",
    "prom": 4.35,
    "FD": 1.0890934012140199
  },
  {
    "liga": "Europa - Holanda ",
    "equipo": "AZ Alkmaar",
    "rol": "Local",
    "prom": 5.88,
    "FD": 0.9083526682134568
  },
  {
    "liga": "Europa - Holanda ",
    "equipo": "AZ Alkmaar",
    "rol": "Visitante",
    "prom": 5.65,
    "FD": 0.8300372038378695
  },
  {
    "liga": "Europa - Holanda ",
    "equipo": "Excelsior",
    "rol": "Local",
    "prom": 4.18,
    "FD": 0.8853828306264501
  },
  {
    "liga": "Europa - Holanda ",
    "equipo": "Excelsior",
    "rol": "Visitante",
    "prom": 4.0,
    "FD": 1.0996671235559037
  },
  {
    "liga": "Europa - Holanda ",
    "equipo": "FC Groningen",
    "rol": "Local",
    "prom": 6.88,
    "FD": 1.0440835266821344
  },
  {
    "liga": "Europa - Holanda ",
    "equipo": "FC Groningen",
    "rol": "Visitante",
    "prom": 5.59,
    "FD": 0.8599960838065399
  },
  {
    "liga": "Europa - Holanda ",
    "equipo": "FC Twente",
    "rol": "Local",
    "prom": 5.71,
    "FD": 0.7245939675174013
  },
  {
    "liga": "Europa - Holanda ",
    "equipo": "FC Twente",
    "rol": "Visitante",
    "prom": 5.0,
    "FD": 0.8494223614646563
  },
  {
    "liga": "Europa - Holanda ",
    "equipo": "FC Utrecht",
    "rol": "Local",
    "prom": 5.12,
    "FD": 0.9334106728538281
  },
  {
    "liga": "Europa - Holanda ",
    "equipo": "FC Utrecht",
    "rol": "Visitante",
    "prom": 5.24,
    "FD": 0.7877423144703347
  },
  {
    "liga": "Europa - Holanda ",
    "equipo": "FC Volendam",
    "rol": "Local",
    "prom": 4.47,
    "FD": 1.142227378190255
  },
  {
    "liga": "Europa - Holanda ",
    "equipo": "FC Volendam",
    "rol": "Visitante",
    "prom": 3.0,
    "FD": 1.358723320932054
  },
  {
    "liga": "Europa - Holanda ",
    "equipo": "Feyenoord",
    "rol": "Local",
    "prom": 7.88,
    "FD": 0.6640371229698375
  },
  {
    "liga": "Europa - Holanda ",
    "equipo": "Feyenoord",
    "rol": "Visitante",
    "prom": 6.59,
    "FD": 0.6220873311141569
  },
  {
    "liga": "Europa - Holanda ",
    "equipo": "Fortuna Sittard",
    "rol": "Local",
    "prom": 4.94,
    "FD": 1.3886310904872388
  },
  {
    "liga": "Europa - Holanda ",
    "equipo": "Fortuna Sittard",
    "rol": "Visitante",
    "prom": 3.71,
    "FD": 1.2124534952026629
  },
  {
    "liga": "Europa - Holanda ",
    "equipo": "Go Ahead Eagles",
    "rol": "Local",
    "prom": 6.47,
    "FD": 1.1923433874709974
  },
  {
    "liga": "Europa - Holanda ",
    "equipo": "Go Ahead Eagles",
    "rol": "Visitante",
    "prom": 4.41,
    "FD": 1.1507734482083414
  },
  {
    "liga": "Europa - Holanda ",
    "equipo": "Heerenveen",
    "rol": "Local",
    "prom": 5.94,
    "FD": 0.8853828306264501
  },
  {
    "liga": "Europa - Holanda ",
    "equipo": "Heerenveen",
    "rol": "Visitante",
    "prom": 5.18,
    "FD": 1.006265909535931
  },
  {
    "liga": "Europa - Holanda ",
    "equipo": "Heracles Almelo",
    "rol": "Local",
    "prom": 4.82,
    "FD": 1.1046403712296982
  },
  {
    "liga": "Europa - Holanda ",
    "equipo": "Heracles Almelo",
    "rol": "Visitante",
    "prom": 4.18,
    "FD": 1.1824946152339924
  },
  {
    "liga": "Europa - Holanda ",
    "equipo": "NAC Breda",
    "rol": "Local",
    "prom": 6.06,
    "FD": 0.847795823665893
  },
  {
    "liga": "Europa - Holanda ",
    "equipo": "NAC Breda",
    "rol": "Visitante",
    "prom": 5.47,
    "FD": 0.8088897591541021
  },
  {
    "liga": "Europa - Holanda ",
    "equipo": "NEC Nijmegen",
    "rol": "Local",
    "prom": 6.76,
    "FD": 0.6765661252900231
  },
  {
    "liga": "Europa - Holanda ",
    "equipo": "NEC Nijmegen",
    "rol": "Visitante",
    "prom": 5.47,
    "FD": 0.8300372038378695
  },
  {
    "liga": "Europa - Holanda ",
    "equipo": "PEC Zwolle",
    "rol": "Local",
    "prom": 4.06,
    "FD": 1.2779582366589326
  },
  {
    "liga": "Europa - Holanda ",
    "equipo": "PEC Zwolle",
    "rol": "Visitante",
    "prom": 3.12,
    "FD": 1.0679459565302525
  },
  {
    "liga": "Europa - Holanda ",
    "equipo": "PSV Eindhoven",
    "rol": "Local",
    "prom": 7.59,
    "FD": 0.8728538283062643
  },
  {
    "liga": "Europa - Holanda ",
    "equipo": "PSV Eindhoven",
    "rol": "Visitante",
    "prom": 6.71,
    "FD": 0.8194634814959859
  },
  {
    "liga": "Europa - Holanda ",
    "equipo": "Sparta",
    "rol": "Local",
    "prom": 4.71,
    "FD": 1.3635730858468675
  },
  {
    "liga": "Europa - Holanda ",
    "equipo": "Sparta",
    "rol": "Visitante",
    "prom": 4.41,
    "FD": 1.1913060505188955
  },
  {
    "liga": "Europa - Holanda ",
    "equipo": "Telstar",
    "rol": "Local",
    "prom": 5.35,
    "FD": 1.179814385150812
  },
  {
    "liga": "Europa - Holanda ",
    "equipo": "Telstar",
    "rol": "Visitante",
    "prom": 4.12,
    "FD": 1.2336009398864303
  },
  {
    "liga": "Europa - Alemania",
    "equipo": "Bayern Munich",
    "rol": "Local",
    "prom": 7.65,
    "FD": 0.7328722432467701
  },
  {
    "liga": "Europa - Alemania",
    "equipo": "Bayern Munich",
    "rol": "Visitante",
    "prom": 5.06,
    "FD": 0.7162912837087164
  },
  {
    "liga": "Europa - Alemania",
    "equipo": "Dortmund",
    "rol": "Local",
    "prom": 7.24,
    "FD": 0.8009917786767584
  },
  {
    "liga": "Europa - Alemania",
    "equipo": "Dortmund",
    "rol": "Visitante",
    "prom": 3.41,
    "FD": 0.9089990910009091
  },
  {
    "liga": "Europa - Alemania",
    "equipo": "E. Frankfurt",
    "rol": "Local",
    "prom": 5.41,
    "FD": 0.9113924050632911
  },
  {
    "liga": "Europa - Alemania",
    "equipo": "E. Frankfurt",
    "rol": "Visitante",
    "prom": 3.94,
    "FD": 0.9526310473689528
  },
  {
    "liga": "Europa - Alemania",
    "equipo": "FC Augsburg",
    "rol": "Local",
    "prom": 5.24,
    "FD": 1.2308495367349601
  },
  {
    "liga": "Europa - Alemania",
    "equipo": "FC Augsburg",
    "rol": "Visitante",
    "prom": 4.0,
    "FD": 1.068982931017069
  },
  {
    "liga": "Europa - Alemania",
    "equipo": "FC Koln",
    "rol": "Local",
    "prom": 4.82,
    "FD": 1.1063552133629126
  },
  {
    "liga": "Europa - Alemania",
    "equipo": "FC Koln",
    "rol": "Visitante",
    "prom": 4.41,
    "FD": 1.1544288455711544
  },
  {
    "liga": "Europa - Alemania",
    "equipo": "Freiburg",
    "rol": "Local",
    "prom": 4.53,
    "FD": 0.8832050110922615
  },
  {
    "liga": "Europa - Alemania",
    "equipo": "Freiburg",
    "rol": "Visitante",
    "prom": 3.71,
    "FD": 0.8344611655388345
  },
  {
    "liga": "Europa - Alemania",
    "equipo": "FSV Mainz",
    "rol": "Local",
    "prom": 6.18,
    "FD": 0.8832050110922615
  },
  {
    "liga": "Europa - Alemania",
    "equipo": "FSV Mainz",
    "rol": "Visitante",
    "prom": 3.94,
    "FD": 0.9835370164629837
  },
  {
    "liga": "Europa - Alemania",
    "equipo": "Hamburger SV",
    "rol": "Local",
    "prom": 3.76,
    "FD": 1.3529949106094217
  },
  {
    "liga": "Europa - Alemania",
    "equipo": "Hamburger SV",
    "rol": "Visitante",
    "prom": 3.59,
    "FD": 1.07989092010908
  },
  {
    "liga": "Europa - Alemania",
    "equipo": "Heidenheim",
    "rol": "Local",
    "prom": 4.65,
    "FD": 1.0499804254208533
  },
  {
    "liga": "Europa - Alemania",
    "equipo": "Heidenheim",
    "rol": "Visitante",
    "prom": 4.41,
    "FD": 1.0271689728310274
  },
  {
    "liga": "Europa - Alemania",
    "equipo": "Hoffenheim",
    "rol": "Local",
    "prom": 6.41,
    "FD": 1.0358867284353386
  },
  {
    "liga": "Europa - Alemania",
    "equipo": "Hoffenheim",
    "rol": "Visitante",
    "prom": 5.18,
    "FD": 0.9417230582769418
  },
  {
    "liga": "Europa - Alemania",
    "equipo": "Leverkusen",
    "rol": "Local",
    "prom": 6.71,
    "FD": 0.7728043847057288
  },
  {
    "liga": "Europa - Alemania",
    "equipo": "Leverkusen",
    "rol": "Visitante",
    "prom": 4.47,
    "FD": 0.8980911019088983
  },
  {
    "liga": "Europa - Alemania",
    "equipo": "Monchengladbach",
    "rol": "Local",
    "prom": 3.29,
    "FD": 0.9818608899908651
  },
  {
    "liga": "Europa - Alemania",
    "equipo": "Monchengladbach",
    "rol": "Visitante",
    "prom": 4.24,
    "FD": 1.0162609837390164
  },
  {
    "liga": "Europa - Alemania",
    "equipo": "RB Leipzig",
    "rol": "Local",
    "prom": 5.88,
    "FD": 1.0499804254208533
  },
  {
    "liga": "Europa - Alemania",
    "equipo": "RB Leipzig",
    "rol": "Visitante",
    "prom": 4.71,
    "FD": 0.7599232400767599
  },
  {
    "liga": "Europa - Alemania",
    "equipo": "Sankt Pauli",
    "rol": "Local",
    "prom": 5.88,
    "FD": 1.0217930314498236
  },
  {
    "liga": "Europa - Alemania",
    "equipo": "Sankt Pauli",
    "rol": "Visitante",
    "prom": 3.59,
    "FD": 1.07989092010908
  },
  {
    "liga": "Europa - Alemania",
    "equipo": "Stuttgart",
    "rol": "Local",
    "prom": 5.88,
    "FD": 0.9395797990343208
  },
  {
    "liga": "Europa - Alemania",
    "equipo": "Stuttgart",
    "rol": "Visitante",
    "prom": 5.47,
    "FD": 0.8235531764468237
  },
  {
    "liga": "Europa - Alemania",
    "equipo": "Union Berlin",
    "rol": "Local",
    "prom": 5.18,
    "FD": 1.0499804254208533
  },
  {
    "liga": "Europa - Alemania",
    "equipo": "Union Berlin",
    "rol": "Visitante",
    "prom": 4.82,
    "FD": 0.9417230582769418
  },
  {
    "liga": "Europa - Alemania",
    "equipo": "Werder Bremen",
    "rol": "Local",
    "prom": 4.88,
    "FD": 0.7728043847057288
  },
  {
    "liga": "Europa - Alemania",
    "equipo": "Werder Bremen",
    "rol": "Visitante",
    "prom": 4.24,
    "FD": 1.2089687910312092
  },
  {
    "liga": "Europa - Alemania",
    "equipo": "Wolfsburg",
    "rol": "Local",
    "prom": 5.41,
    "FD": 1.4234633955369957
  },
  {
    "liga": "Europa - Alemania",
    "equipo": "Wolfsburg",
    "rol": "Visitante",
    "prom": 3.47,
    "FD": 1.6034743965256038
  },
  {
    "liga": "Europa - Italia",
    "equipo": "AC Milan",
    "rol": "Local",
    "prom": 4.95,
    "FD": 0.9538621047174703
  },
  {
    "liga": "Europa - Italia",
    "equipo": "AC Milan",
    "rol": "Visitante",
    "prom": 3.58,
    "FD": 0.9866828087167069
  },
  {
    "liga": "Europa - Italia",
    "equipo": "AS Roma",
    "rol": "Local",
    "prom": 5.74,
    "FD": 0.7231726283048212
  },
  {
    "liga": "Europa - Italia",
    "equipo": "AS Roma",
    "rol": "Visitante",
    "prom": 4.58,
    "FD": 0.8393866020984665
  },
  {
    "liga": "Europa - Italia",
    "equipo": "Atalanta",
    "rol": "Local",
    "prom": 6.84,
    "FD": 0.9279419388284086
  },
  {
    "liga": "Europa - Italia",
    "equipo": "Atalanta",
    "rol": "Visitante",
    "prom": 4.47,
    "FD": 0.9564164648910412
  },
  {
    "liga": "Europa - Italia",
    "equipo": "Bologna",
    "rol": "Local",
    "prom": 5.21,
    "FD": 0.9823742871954382
  },
  {
    "liga": "Europa - Italia",
    "equipo": "Bologna",
    "rol": "Visitante",
    "prom": 3.74,
    "FD": 0.9443099273607747
  },
  {
    "liga": "Europa - Italia",
    "equipo": "Cagliari",
    "rol": "Local",
    "prom": 4.16,
    "FD": 1.3089683773976155
  },
  {
    "liga": "Europa - Italia",
    "equipo": "Cagliari",
    "rol": "Visitante",
    "prom": 3.42,
    "FD": 1.0613397901533494
  },
  {
    "liga": "Europa - Italia",
    "equipo": "Como",
    "rol": "Local",
    "prom": 5.0,
    "FD": 0.5313634007257646
  },
  {
    "liga": "Europa - Italia",
    "equipo": "Como",
    "rol": "Visitante",
    "prom": 3.95,
    "FD": 0.8817594834543987
  },
  {
    "liga": "Europa - Italia",
    "equipo": "Cremonese",
    "rol": "Local",
    "prom": 3.58,
    "FD": 1.3245204769310526
  },
  {
    "liga": "Europa - Italia",
    "equipo": "Cremonese",
    "rol": "Visitante",
    "prom": 3.42,
    "FD": 1.380145278450363
  },
  {
    "liga": "Europa - Italia",
    "equipo": "Fiorentina",
    "rol": "Local",
    "prom": 5.47,
    "FD": 1.0368066355624677
  },
  {
    "liga": "Europa - Italia",
    "equipo": "Fiorentina",
    "rol": "Visitante",
    "prom": 3.42,
    "FD": 1.0411622276029056
  },
  {
    "liga": "Europa - Italia",
    "equipo": "Genoa",
    "rol": "Local",
    "prom": 3.63,
    "FD": 1.023846552617937
  },
  {
    "liga": "Europa - Italia",
    "equipo": "Genoa",
    "rol": "Visitante",
    "prom": 3.74,
    "FD": 1.168280871670702
  },
  {
    "liga": "Europa - Italia",
    "equipo": "Hellas Verona",
    "rol": "Local",
    "prom": 4.84,
    "FD": 1.0368066355624677
  },
  {
    "liga": "Europa - Italia",
    "equipo": "Hellas Verona",
    "rol": "Visitante",
    "prom": 3.05,
    "FD": 1.2429378531073445
  },
  {
    "liga": "Europa - Italia",
    "equipo": "Inter Milan",
    "rol": "Local",
    "prom": 7.37,
    "FD": 0.7646448937273199
  },
  {
    "liga": "Europa - Italia",
    "equipo": "Inter Milan",
    "rol": "Visitante",
    "prom": 5.32,
    "FD": 0.5730427764326068
  },
  {
    "liga": "Europa - Italia",
    "equipo": "Juventus",
    "rol": "Local",
    "prom": 6.47,
    "FD": 0.8735095904613791
  },
  {
    "liga": "Europa - Italia",
    "equipo": "Juventus",
    "rol": "Visitante",
    "prom": 4.37,
    "FD": 0.8393866020984665
  },
  {
    "liga": "Europa - Italia",
    "equipo": "Lazio",
    "rol": "Local",
    "prom": 4.58,
    "FD": 0.9279419388284086
  },
  {
    "liga": "Europa - Italia",
    "equipo": "Lazio",
    "rol": "Visitante",
    "prom": 2.89,
    "FD": 0.9665052461662631
  },
  {
    "liga": "Europa - Italia",
    "equipo": "Lecce",
    "rol": "Local",
    "prom": 4.21,
    "FD": 1.1586314152410575
  },
  {
    "liga": "Europa - Italia",
    "equipo": "Lecce",
    "rol": "Visitante",
    "prom": 4.37,
    "FD": 1.2530266343825665
  },
  {
    "liga": "Europa - Italia",
    "equipo": "Napoli",
    "rol": "Local",
    "prom": 6.26,
    "FD": 0.6687402799377917
  },
  {
    "liga": "Europa - Italia",
    "equipo": "Napoli",
    "rol": "Visitante",
    "prom": 4.68,
    "FD": 0.5952380952380952
  },
  {
    "liga": "Europa - Italia",
    "equipo": "Parma",
    "rol": "Local",
    "prom": 4.16,
    "FD": 1.0368066355624677
  },
  {
    "liga": "Europa - Italia",
    "equipo": "Parma",
    "rol": "Visitante",
    "prom": 3.53,
    "FD": 1.2005649717514124
  },
  {
    "liga": "Europa - Italia",
    "equipo": "Pisa",
    "rol": "Local",
    "prom": 3.79,
    "FD": 1.119751166407465
  },
  {
    "liga": "Europa - Italia",
    "equipo": "Pisa",
    "rol": "Visitante",
    "prom": 3.32,
    "FD": 1.0734463276836157
  },
  {
    "liga": "Europa - Italia",
    "equipo": "Sassuolo",
    "rol": "Local",
    "prom": 3.79,
    "FD": 1.2960082944530846
  },
  {
    "liga": "Europa - Italia",
    "equipo": "Sassuolo",
    "rol": "Visitante",
    "prom": 3.74,
    "FD": 0.9665052461662631
  },
  {
    "liga": "Europa - Italia",
    "equipo": "Torino",
    "rol": "Local",
    "prom": 4.32,
    "FD": 1.2001036806635563
  },
  {
    "liga": "Europa - Italia",
    "equipo": "Torino",
    "rol": "Visitante",
    "prom": 3.37,
    "FD": 0.9564164648910412
  },
  {
    "liga": "Europa - Italia",
    "equipo": "Udinese",
    "rol": "Local",
    "prom": 4.74,
    "FD": 1.104199066874028
  },
  {
    "liga": "Europa - Italia",
    "equipo": "Udinese",
    "rol": "Visitante",
    "prom": 4.21,
    "FD": 1.0734463276836157
  },
  {
    "liga": "Europa - Belgica",
    "equipo": "Anderlecht",
    "rol": "Local",
    "prom": 6.87,
    "FD": 0.8879333512496642
  },
  {
    "liga": "Europa - Belgica",
    "equipo": "Anderlecht",
    "rol": "Visitante",
    "prom": 5.67,
    "FD": 1.0254323499491353
  },
  {
    "liga": "Europa - Belgica",
    "equipo": "Antwerp",
    "rol": "Local",
    "prom": 4.6,
    "FD": 1.0599301263101317
  },
  {
    "liga": "Europa - Belgica",
    "equipo": "Antwerp",
    "rol": "Visitante",
    "prom": 3.47,
    "FD": 0.9404317847858031
  },
  {
    "liga": "Europa - Belgica",
    "equipo": "Cercle Brugge",
    "rol": "Local",
    "prom": 4.8,
    "FD": 1.1330287557108305
  },
  {
    "liga": "Europa - Belgica",
    "equipo": "Cercle Brugge",
    "rol": "Visitante",
    "prom": 5.0,
    "FD": 1.0724539391884254
  },
  {
    "liga": "Europa - Belgica",
    "equipo": "Charleroi",
    "rol": "Local",
    "prom": 5.87,
    "FD": 1.0599301263101317
  },
  {
    "liga": "Europa - Belgica",
    "equipo": "Charleroi",
    "rol": "Visitante",
    "prom": 5.6,
    "FD": 0.783090313100486
  },
  {
    "liga": "Europa - Belgica",
    "equipo": "Club Brugge",
    "rol": "Local",
    "prom": 8.0,
    "FD": 0.7739854877721044
  },
  {
    "liga": "Europa - Belgica",
    "equipo": "Club Brugge",
    "rol": "Visitante",
    "prom": 5.6,
    "FD": 0.8554312196224709
  },
  {
    "liga": "Europa - Belgica",
    "equipo": "Dender",
    "rol": "Local",
    "prom": 3.73,
    "FD": 1.0900295619457137
  },
  {
    "liga": "Europa - Belgica",
    "equipo": "Dender",
    "rol": "Visitante",
    "prom": 3.73,
    "FD": 1.1212840510907653
  },
  {
    "liga": "Europa - Belgica",
    "equipo": "Gent",
    "rol": "Local",
    "prom": 4.67,
    "FD": 1.0900295619457137
  },
  {
    "liga": "Europa - Belgica",
    "equipo": "Gent",
    "rol": "Visitante",
    "prom": 4.73,
    "FD": 1.1809652989714028
  },
  {
    "liga": "Europa - Belgica",
    "equipo": "KRC Genk",
    "rol": "Local",
    "prom": 6.8,
    "FD": 0.9180327868852459
  },
  {
    "liga": "Europa - Belgica",
    "equipo": "KRC Genk",
    "rol": "Visitante",
    "prom": 4.13,
    "FD": 0.9169209901661581
  },
  {
    "liga": "Europa - Belgica",
    "equipo": "KV Mechelen",
    "rol": "Local",
    "prom": 4.4,
    "FD": 1.2620263370061813
  },
  {
    "liga": "Europa - Belgica",
    "equipo": "KV Mechelen",
    "rol": "Visitante",
    "prom": 4.8,
    "FD": 1.24245506951509
  },
  {
    "liga": "Europa - Belgica",
    "equipo": "La Louviere",
    "rol": "Local",
    "prom": 6.07,
    "FD": 0.7739854877721044
  },
  {
    "liga": "Europa - Belgica",
    "equipo": "La Louviere",
    "rol": "Visitante",
    "prom": 3.8,
    "FD": 0.9169209901661581
  },
  {
    "liga": "Europa - Belgica",
    "equipo": "OH Leuven",
    "rol": "Local",
    "prom": 5.27,
    "FD": 1.2319269013705996
  },
  {
    "liga": "Europa - Belgica",
    "equipo": "OH Leuven",
    "rol": "Visitante",
    "prom": 4.47,
    "FD": 1.2297954108737426
  },
  {
    "liga": "Europa - Belgica",
    "equipo": "Royale Union SG",
    "rol": "Local",
    "prom": 6.47,
    "FD": 0.6170384305294278
  },
  {
    "liga": "Europa - Belgica",
    "equipo": "Royale Union SG",
    "rol": "Visitante",
    "prom": 5.27,
    "FD": 0.759579518480841
  },
  {
    "liga": "Europa - Belgica",
    "equipo": "Sint-Truiden",
    "rol": "Local",
    "prom": 5.33,
    "FD": 1.00403117441548
  },
  {
    "liga": "Europa - Belgica",
    "equipo": "Sint-Truiden",
    "rol": "Visitante",
    "prom": 5.73,
    "FD": 0.8084096303831807
  },
  {
    "liga": "Europa - Belgica",
    "equipo": "Standard Liege",
    "rol": "Local",
    "prom": 5.27,
    "FD": 1.00403117441548
  },
  {
    "liga": "Europa - Belgica",
    "equipo": "Standard Liege",
    "rol": "Visitante",
    "prom": 3.2,
    "FD": 1.170114162993105
  },
  {
    "liga": "Europa - Belgica",
    "equipo": "Westerlo",
    "rol": "Local",
    "prom": 6.07,
    "FD": 0.9180327868852459
  },
  {
    "liga": "Europa - Belgica",
    "equipo": "Westerlo",
    "rol": "Visitante",
    "prom": 4.53,
    "FD": 1.0851135978297728
  },
  {
    "liga": "Europa - Belgica",
    "equipo": "Zulte-Waregem",
    "rol": "Local",
    "prom": 4.27,
    "FD": 1.1760279494759476
  },
  {
    "liga": "Europa - Belgica",
    "equipo": "Zulte-Waregem",
    "rol": "Visitante",
    "prom": 4.67,
    "FD": 0.8916016728834633
  },
  {
    "liga": "Europa - Portugal",
    "equipo": "Alverca",
    "rol": "Local",
    "prom": 4.65,
    "FD": 0.701214380185163
  },
  {
    "liga": "Europa - Portugal",
    "equipo": "Alverca",
    "rol": "Visitante",
    "prom": 4.12,
    "FD": 1.2103986135181977
  },
  {
    "liga": "Europa - Portugal",
    "equipo": "Arouca",
    "rol": "Local",
    "prom": 4.06,
    "FD": 1.2725742455212217
  },
  {
    "liga": "Europa - Portugal",
    "equipo": "Arouca",
    "rol": "Visitante",
    "prom": 3.35,
    "FD": 0.9670710571923744
  },
  {
    "liga": "Europa - Portugal",
    "equipo": "AVS",
    "rol": "Local",
    "prom": 3.47,
    "FD": 1.1838403270410005
  },
  {
    "liga": "Europa - Portugal",
    "equipo": "AVS",
    "rol": "Visitante",
    "prom": 3.88,
    "FD": 1.297746967071057
  },
  {
    "liga": "Europa - Portugal",
    "equipo": "Benfica",
    "rol": "Local",
    "prom": 7.47,
    "FD": 0.5605386557653
  },
  {
    "liga": "Europa - Portugal",
    "equipo": "Benfica",
    "rol": "Visitante",
    "prom": 6.94,
    "FD": 0.6239168110918544
  },
  {
    "liga": "Europa - Portugal",
    "equipo": "Casa Pia",
    "rol": "Local",
    "prom": 3.59,
    "FD": 1.2098112300108215
  },
  {
    "liga": "Europa - Portugal",
    "equipo": "Casa Pia",
    "rol": "Visitante",
    "prom": 4.47,
    "FD": 1.28526863084922
  },
  {
    "liga": "Europa - Portugal",
    "equipo": "Estoril",
    "rol": "Local",
    "prom": 4.65,
    "FD": 1.1708548755560901
  },
  {
    "liga": "Europa - Portugal",
    "equipo": "Estoril",
    "rol": "Visitante",
    "prom": 4.12,
    "FD": 0.917157712305026
  },
  {
    "liga": "Europa - Portugal",
    "equipo": "Estrela Amadora",
    "rol": "Local",
    "prom": 3.59,
    "FD": 1.1838403270410005
  },
  {
    "liga": "Europa - Portugal",
    "equipo": "Estrela Amadora",
    "rol": "Visitante",
    "prom": 3.06,
    "FD": 1.2603119584055458
  },
  {
    "liga": "Europa - Portugal",
    "equipo": "Famalicao",
    "rol": "Local",
    "prom": 5.71,
    "FD": 1.030179151136227
  },
  {
    "liga": "Europa - Portugal",
    "equipo": "Famalicao",
    "rol": "Visitante",
    "prom": 5.24,
    "FD": 1.0648180242634315
  },
  {
    "liga": "Europa - Portugal",
    "equipo": "FC Porto",
    "rol": "Local",
    "prom": 5.65,
    "FD": 0.6362871227606108
  },
  {
    "liga": "Europa - Portugal",
    "equipo": "FC Porto",
    "rol": "Visitante",
    "prom": 5.65,
    "FD": 0.6239168110918544
  },
  {
    "liga": "Europa - Portugal",
    "equipo": "Gil Vicente",
    "rol": "Local",
    "prom": 5.41,
    "FD": 0.7250210412408321
  },
  {
    "liga": "Europa - Portugal",
    "equipo": "Gil Vicente",
    "rol": "Visitante",
    "prom": 5.71,
    "FD": 0.9421143847487001
  },
  {
    "liga": "Europa - Portugal",
    "equipo": "Guimaraes",
    "rol": "Local",
    "prom": 4.41,
    "FD": 0.9284597811710955
  },
  {
    "liga": "Europa - Portugal",
    "equipo": "Guimaraes",
    "rol": "Visitante",
    "prom": 4.47,
    "FD": 0.7341421143847486
  },
  {
    "liga": "Europa - Portugal",
    "equipo": "Moreirense",
    "rol": "Local",
    "prom": 4.0,
    "FD": 1.1080918600456897
  },
  {
    "liga": "Europa - Portugal",
    "equipo": "Moreirense",
    "rol": "Visitante",
    "prom": 3.29,
    "FD": 0.917157712305026
  },
  {
    "liga": "Europa - Portugal",
    "equipo": "Nacional",
    "rol": "Local",
    "prom": 4.76,
    "FD": 1.4889984369363956
  },
  {
    "liga": "Europa - Portugal",
    "equipo": "Nacional",
    "rol": "Visitante",
    "prom": 4.0,
    "FD": 1.2228769497400345
  },
  {
    "liga": "Europa - Portugal",
    "equipo": "Rio Ave",
    "rol": "Local",
    "prom": 5.12,
    "FD": 1.311530599975953
  },
  {
    "liga": "Europa - Portugal",
    "equipo": "Rio Ave",
    "rol": "Visitante",
    "prom": 3.41,
    "FD": 1.4682842287694973
  },
  {
    "liga": "Europa - Portugal",
    "equipo": "Santa Clara",
    "rol": "Local",
    "prom": 4.53,
    "FD": 0.9176385716003368
  },
  {
    "liga": "Europa - Portugal",
    "equipo": "Santa Clara",
    "rol": "Visitante",
    "prom": 4.71,
    "FD": 0.9421143847487001
  },
  {
    "liga": "Europa - Portugal",
    "equipo": "Sporting Braga",
    "rol": "Local",
    "prom": 5.29,
    "FD": 0.6622580257304318
  },
  {
    "liga": "Europa - Portugal",
    "equipo": "Sporting Braga",
    "rol": "Visitante",
    "prom": 5.29,
    "FD": 0.6738301559792028
  },
  {
    "liga": "Europa - Portugal",
    "equipo": "Sporting CP",
    "rol": "Local",
    "prom": 6.24,
    "FD": 0.6362871227606108
  },
  {
    "liga": "Europa - Portugal",
    "equipo": "Sporting CP",
    "rol": "Visitante",
    "prom": 7.47,
    "FD": 0.6613518197573657
  },
  {
    "liga": "Europa - Portugal",
    "equipo": "Tondela",
    "rol": "Local",
    "prom": 3.94,
    "FD": 1.2725742455212217
  },
  {
    "liga": "Europa - Portugal",
    "equipo": "Tondela",
    "rol": "Visitante",
    "prom": 4.0,
    "FD": 1.187521663778163
  },
  {
    "liga": "Europa - ItaliaB",
    "equipo": "Avellino",
    "rol": "Local",
    "prom": 5.42,
    "FD": 0.9372071227741333
  },
  {
    "liga": "Europa - ItaliaB",
    "equipo": "Avellino",
    "rol": "Visitante",
    "prom": 3.11,
    "FD": 1.1162702549038186
  },
  {
    "liga": "Europa - ItaliaB",
    "equipo": "Bari",
    "rol": "Local",
    "prom": 4.26,
    "FD": 1.307403936269916
  },
  {
    "liga": "Europa - ItaliaB",
    "equipo": "Bari",
    "rol": "Visitante",
    "prom": 2.63,
    "FD": 1.2375627783568652
  },
  {
    "liga": "Europa - ItaliaB",
    "equipo": "Carrarese",
    "rol": "Local",
    "prom": 5.42,
    "FD": 0.9746954076850987
  },
  {
    "liga": "Europa - ItaliaB",
    "equipo": "Carrarese",
    "rol": "Visitante",
    "prom": 5.89,
    "FD": 1.04804321046148
  },
  {
    "liga": "Europa - ItaliaB",
    "equipo": "Catanzaro",
    "rol": "Local",
    "prom": 4.68,
    "FD": 1.1105904404873481
  },
  {
    "liga": "Europa - ItaliaB",
    "equipo": "Catanzaro",
    "rol": "Visitante",
    "prom": 3.68,
    "FD": 0.8282005117028333
  },
  {
    "liga": "Europa - ItaliaB",
    "equipo": "Cesena",
    "rol": "Local",
    "prom": 6.05,
    "FD": 0.8130271790065607
  },
  {
    "liga": "Europa - ItaliaB",
    "equipo": "Cesena",
    "rol": "Visitante",
    "prom": 3.79,
    "FD": 1.0271960579929877
  },
  {
    "liga": "Europa - ItaliaB",
    "equipo": "Empoli",
    "rol": "Local",
    "prom": 5.63,
    "FD": 0.94892221180881
  },
  {
    "liga": "Europa - ItaliaB",
    "equipo": "Empoli",
    "rol": "Visitante",
    "prom": 4.0,
    "FD": 1.1863924950251112
  },
  {
    "liga": "Europa - ItaliaB",
    "equipo": "Entella",
    "rol": "Local",
    "prom": 5.84,
    "FD": 1.096532333645736
  },
  {
    "liga": "Europa - ItaliaB",
    "equipo": "Entella",
    "rol": "Visitante",
    "prom": 4.42,
    "FD": 0.9381218610821567
  },
  {
    "liga": "Europa - ItaliaB",
    "equipo": "Frosinone",
    "rol": "Local",
    "prom": 6.89,
    "FD": 0.850515463917526
  },
  {
    "liga": "Europa - ItaliaB",
    "equipo": "Frosinone",
    "rol": "Visitante",
    "prom": 5.37,
    "FD": 0.8679996209608641
  },
  {
    "liga": "Europa - ItaliaB",
    "equipo": "Juve Stabia",
    "rol": "Local",
    "prom": 6.0,
    "FD": 0.899718837863168
  },
  {
    "liga": "Europa - ItaliaB",
    "equipo": "Juve Stabia",
    "rol": "Visitante",
    "prom": 3.47,
    "FD": 0.907798730218895
  },
  {
    "liga": "Europa - ItaliaB",
    "equipo": "Mantova",
    "rol": "Local",
    "prom": 5.68,
    "FD": 0.998125585754452
  },
  {
    "liga": "Europa - ItaliaB",
    "equipo": "Mantova",
    "rol": "Visitante",
    "prom": 3.63,
    "FD": 1.1465933857670803
  },
  {
    "liga": "Europa - ItaliaB",
    "equipo": "Modena",
    "rol": "Local",
    "prom": 4.32,
    "FD": 0.7895970009372073
  },
  {
    "liga": "Europa - ItaliaB",
    "equipo": "Modena",
    "rol": "Visitante",
    "prom": 6.26,
    "FD": 0.907798730218895
  },
  {
    "liga": "Europa - ItaliaB",
    "equipo": "Monza",
    "rol": "Local",
    "prom": 6.37,
    "FD": 0.8622305529522027
  },
  {
    "liga": "Europa - ItaliaB",
    "equipo": "Monza",
    "rol": "Visitante",
    "prom": 5.0,
    "FD": 0.6690040746707097
  },
  {
    "liga": "Europa - ItaliaB",
    "equipo": "Padova",
    "rol": "Local",
    "prom": 4.42,
    "FD": 1.2324273664479852
  },
  {
    "liga": "Europa - ItaliaB",
    "equipo": "Padova",
    "rol": "Visitante",
    "prom": 3.63,
    "FD": 1.1977636690988345
  },
  {
    "liga": "Europa - ItaliaB",
    "equipo": "Palermo",
    "rol": "Local",
    "prom": 5.16,
    "FD": 0.9746954076850987
  },
  {
    "liga": "Europa - ItaliaB",
    "equipo": "Palermo",
    "rol": "Visitante",
    "prom": 5.11,
    "FD": 0.9267506870084334
  },
  {
    "liga": "Europa - ItaliaB",
    "equipo": "Pescara",
    "rol": "Local",
    "prom": 5.63,
    "FD": 0.998125585754452
  },
  {
    "liga": "Europa - ItaliaB",
    "equipo": "Pescara",
    "rol": "Visitante",
    "prom": 4.63,
    "FD": 1.226191604283142
  },
  {
    "liga": "Europa - ItaliaB",
    "equipo": "Reggiana",
    "rol": "Local",
    "prom": 3.58,
    "FD": 1.2464854732895974
  },
  {
    "liga": "Europa - ItaliaB",
    "equipo": "Reggiana",
    "rol": "Visitante",
    "prom": 3.58,
    "FD": 1.2072396474936036
  },
  {
    "liga": "Europa - ItaliaB",
    "equipo": "Sampdoria",
    "rol": "Local",
    "prom": 6.05,
    "FD": 0.8762886597938148
  },
  {
    "liga": "Europa - ItaliaB",
    "equipo": "Sampdoria",
    "rol": "Visitante",
    "prom": 3.95,
    "FD": 0.8869515777504026
  },
  {
    "liga": "Europa - ItaliaB",
    "equipo": "Spezia",
    "rol": "Local",
    "prom": 4.74,
    "FD": 1.2089971883786321
  },
  {
    "liga": "Europa - ItaliaB",
    "equipo": "Spezia",
    "rol": "Visitante",
    "prom": 4.74,
    "FD": 0.996872927129726
  },
  {
    "liga": "Europa - ItaliaB",
    "equipo": "Sudtirol",
    "rol": "Local",
    "prom": 4.89,
    "FD": 0.9864104967197753
  },
  {
    "liga": "Europa - ItaliaB",
    "equipo": "Sudtirol",
    "rol": "Visitante",
    "prom": 3.79,
    "FD": 0.6690040746707097
  },
  {
    "liga": "Europa - ItaliaB",
    "equipo": "Venezia",
    "rol": "Local",
    "prom": 4.47,
    "FD": 0.8880037488284913
  },
  {
    "liga": "Europa - ItaliaB",
    "equipo": "Venezia",
    "rol": "Visitante",
    "prom": 4.68,
    "FD": 1.0082441012034493
  },
  {
    "liga": "Europa - PortugalB",
    "equipo": "Academico Viseu",
    "rol": "Local",
    "prom": 5.35,
    "FD": 0.773402674591382
  },
  {
    "liga": "Europa - PortugalB",
    "equipo": "Academico Viseu",
    "rol": "Visitante",
    "prom": 4.29,
    "FD": 0.8845736602299848
  },
  {
    "liga": "Europa - PortugalB",
    "equipo": "Benfica B",
    "rol": "Local",
    "prom": 7.29,
    "FD": 0.8647845468053492
  },
  {
    "liga": "Europa - PortugalB",
    "equipo": "Benfica B",
    "rol": "Visitante",
    "prom": 4.76,
    "FD": 0.9080060750705142
  },
  {
    "liga": "Europa - PortugalB",
    "equipo": "Chaves",
    "rol": "Local",
    "prom": 5.18,
    "FD": 0.8514115898959881
  },
  {
    "liga": "Europa - PortugalB",
    "equipo": "Chaves",
    "rol": "Visitante",
    "prom": 4.35,
    "FD": 0.9197222824907788
  },
  {
    "liga": "Europa - PortugalB",
    "equipo": "Farense",
    "rol": "Local",
    "prom": 5.47,
    "FD": 0.9962852897473997
  },
  {
    "liga": "Europa - PortugalB",
    "equipo": "Farense",
    "rol": "Visitante",
    "prom": 5.0,
    "FD": 0.87285745280972
  },
  {
    "liga": "Europa - PortugalB",
    "equipo": "FC Porto B",
    "rol": "Local",
    "prom": 3.12,
    "FD": 1.272659732540862
  },
  {
    "liga": "Europa - PortugalB",
    "equipo": "FC Porto B",
    "rol": "Visitante",
    "prom": 4.0,
    "FD": 1.1364721197656757
  },
  {
    "liga": "Europa - PortugalB",
    "equipo": "Feirense",
    "rol": "Local",
    "prom": 5.71,
    "FD": 1.036404160475483
  },
  {
    "liga": "Europa - PortugalB",
    "equipo": "Feirense",
    "rol": "Visitante",
    "prom": 5.47,
    "FD": 1.0446951616402689
  },
  {
    "liga": "Europa - PortugalB",
    "equipo": "Felgueiras",
    "rol": "Local",
    "prom": 5.12,
    "FD": 1.2191679049034176
  },
  {
    "liga": "Europa - PortugalB",
    "equipo": "Felgueiras",
    "rol": "Visitante",
    "prom": 4.82,
    "FD": 0.7576480798437838
  },
  {
    "liga": "Europa - PortugalB",
    "equipo": "Leixoes",
    "rol": "Local",
    "prom": 5.82,
    "FD": 0.9829123328380387
  },
  {
    "liga": "Europa - PortugalB",
    "equipo": "Leixoes",
    "rol": "Visitante",
    "prom": 3.35,
    "FD": 0.9412019960945975
  },
  {
    "liga": "Europa - PortugalB",
    "equipo": "Lusitania FC",
    "rol": "Local",
    "prom": 6.12,
    "FD": 0.8781575037147104
  },
  {
    "liga": "Europa - PortugalB",
    "equipo": "Lusitania FC",
    "rol": "Visitante",
    "prom": 4.53,
    "FD": 1.0232154480364504
  },
  {
    "liga": "Europa - PortugalB",
    "equipo": "Maritimo",
    "rol": "Local",
    "prom": 5.12,
    "FD": 0.6285289747399703
  },
  {
    "liga": "Europa - PortugalB",
    "equipo": "Maritimo",
    "rol": "Visitante",
    "prom": 4.06,
    "FD": 0.8611412453894554
  },
  {
    "liga": "Europa - PortugalB",
    "equipo": "Oliveirense",
    "rol": "Local",
    "prom": 3.88,
    "FD": 1.2057949479940566
  },
  {
    "liga": "Europa - PortugalB",
    "equipo": "Oliveirense",
    "rol": "Visitante",
    "prom": 4.29,
    "FD": 1.206769364287264
  },
  {
    "liga": "Europa - PortugalB",
    "equipo": "Pacos Ferreira",
    "rol": "Local",
    "prom": 5.59,
    "FD": 1.2057949479940566
  },
  {
    "liga": "Europa - PortugalB",
    "equipo": "Pacos Ferreira",
    "rol": "Visitante",
    "prom": 4.24,
    "FD": 1.2184855717075287
  },
  {
    "liga": "Europa - PortugalB",
    "equipo": "Penafiel",
    "rol": "Local",
    "prom": 4.0,
    "FD": 0.9829123328380387
  },
  {
    "liga": "Europa - PortugalB",
    "equipo": "Penafiel",
    "rol": "Visitante",
    "prom": 4.94,
    "FD": 1.1149924061618572
  },
  {
    "liga": "Europa - PortugalB",
    "equipo": "Portimonense",
    "rol": "Local",
    "prom": 5.71,
    "FD": 1.1679049034175335
  },
  {
    "liga": "Europa - PortugalB",
    "equipo": "Portimonense",
    "rol": "Visitante",
    "prom": 4.12,
    "FD": 1.1481883271859405
  },
  {
    "liga": "Europa - PortugalB",
    "equipo": "Sporting CP B",
    "rol": "Local",
    "prom": 4.59,
    "FD": 0.9450222882615157
  },
  {
    "liga": "Europa - PortugalB",
    "equipo": "Sporting CP B",
    "rol": "Visitante",
    "prom": 4.18,
    "FD": 0.9646344109351269
  },
  {
    "liga": "Europa - PortugalB",
    "equipo": "Torreense",
    "rol": "Local",
    "prom": 3.94,
    "FD": 1.1144130757800892
  },
  {
    "liga": "Europa - PortugalB",
    "equipo": "Torreense",
    "rol": "Visitante",
    "prom": 4.88,
    "FD": 0.9294857886743327
  },
  {
    "liga": "Europa - PortugalB",
    "equipo": "Uniao de Leiria",
    "rol": "Local",
    "prom": 5.24,
    "FD": 0.9829123328380387
  },
  {
    "liga": "Europa - PortugalB",
    "equipo": "Uniao de Leiria",
    "rol": "Visitante",
    "prom": 4.53,
    "FD": 1.1032761987415924
  },
  {
    "liga": "Europa - PortugalB",
    "equipo": "Vizela",
    "rol": "Local",
    "prom": 4.94,
    "FD": 0.8915304606240714
  },
  {
    "liga": "Europa - PortugalB",
    "equipo": "Vizela",
    "rol": "Visitante",
    "prom": 4.94,
    "FD": 0.9646344109351269
  },
  {
    "liga": "Europa - InglaterraB",
    "equipo": "Birmingham City",
    "rol": "Local",
    "prom": 6.57,
    "FD": 0.8470588235294119
  },
  {
    "liga": "Europa - InglaterraB",
    "equipo": "Birmingham City",
    "rol": "Visitante",
    "prom": 4.96,
    "FD": 0.7627597191051908
  },
  {
    "liga": "Europa - InglaterraB",
    "equipo": "Blackburn",
    "rol": "Local",
    "prom": 5.83,
    "FD": 1.1228454172366622
  },
  {
    "liga": "Europa - InglaterraB",
    "equipo": "Blackburn",
    "rol": "Visitante",
    "prom": 4.87,
    "FD": 0.8531093897053501
  },
  {
    "liga": "Europa - InglaterraB",
    "equipo": "Bristol City",
    "rol": "Local",
    "prom": 4.65,
    "FD": 1.06593707250342
  },
  {
    "liga": "Europa - InglaterraB",
    "equipo": "Bristol City",
    "rol": "Visitante",
    "prom": 5.0,
    "FD": 0.906971693332368
  },
  {
    "liga": "Europa - InglaterraB",
    "equipo": "Charlton",
    "rol": "Local",
    "prom": 5.09,
    "FD": 0.932421340629275
  },
  {
    "liga": "Europa - InglaterraB",
    "equipo": "Charlton",
    "rol": "Visitante",
    "prom": 3.17,
    "FD": 1.193658148121335
  },
  {
    "liga": "Europa - InglaterraB",
    "equipo": "Coventry City",
    "rol": "Local",
    "prom": 5.91,
    "FD": 0.7616963064295487
  },
  {
    "liga": "Europa - InglaterraB",
    "equipo": "Coventry City",
    "rol": "Visitante",
    "prom": 4.7,
    "FD": 0.8531093897053501
  },
  {
    "liga": "Europa - InglaterraB",
    "equipo": "Derby County",
    "rol": "Local",
    "prom": 5.52,
    "FD": 0.960875512995896
  },
  {
    "liga": "Europa - InglaterraB",
    "equipo": "Derby County",
    "rol": "Visitante",
    "prom": 3.57,
    "FD": 1.1102584521827266
  },
  {
    "liga": "Europa - InglaterraB",
    "equipo": "Hull City",
    "rol": "Local",
    "prom": 4.52,
    "FD": 1.0002735978112176
  },
  {
    "liga": "Europa - InglaterraB",
    "equipo": "Hull City",
    "rol": "Visitante",
    "prom": 4.48,
    "FD": 1.2840078187214943
  },
  {
    "liga": "Europa - InglaterraB",
    "equipo": "Ipswich Town",
    "rol": "Local",
    "prom": 6.17,
    "FD": 0.8383036935704515
  },
  {
    "liga": "Europa - InglaterraB",
    "equipo": "Ipswich Town",
    "rol": "Visitante",
    "prom": 5.22,
    "FD": 0.7019474408166221
  },
  {
    "liga": "Europa - InglaterraB",
    "equipo": "Leicester City",
    "rol": "Local",
    "prom": 6.09,
    "FD": 1.2082079343365253
  },
  {
    "liga": "Europa - InglaterraB",
    "equipo": "Leicester City",
    "rol": "Visitante",
    "prom": 4.43,
    "FD": 1.0650836168826467
  },
  {
    "liga": "Europa - InglaterraB",
    "equipo": "Middlesbrough",
    "rol": "Local",
    "prom": 7.65,
    "FD": 0.960875512995896
  },
  {
    "liga": "Europa - InglaterraB",
    "equipo": "Middlesbrough",
    "rol": "Visitante",
    "prom": 6.0,
    "FD": 0.6949974661550714
  },
  {
    "liga": "Europa - InglaterraB",
    "equipo": "Millwall",
    "rol": "Local",
    "prom": 6.17,
    "FD": 1.0746922024623804
  },
  {
    "liga": "Europa - InglaterraB",
    "equipo": "Millwall",
    "rol": "Visitante",
    "prom": 5.22,
    "FD": 1.042496199232607
  },
  {
    "liga": "Europa - InglaterraB",
    "equipo": "Norwich City",
    "rol": "Local",
    "prom": 5.7,
    "FD": 0.9236662106703146
  },
  {
    "liga": "Europa - InglaterraB",
    "equipo": "Norwich City",
    "rol": "Visitante",
    "prom": 5.0,
    "FD": 0.9747339462824877
  },
  {
    "liga": "Europa - InglaterraB",
    "equipo": "Oxford Utd",
    "rol": "Local",
    "prom": 4.61,
    "FD": 1.2651162790697676
  },
  {
    "liga": "Europa - InglaterraB",
    "equipo": "Oxford Utd",
    "rol": "Visitante",
    "prom": 3.39,
    "FD": 1.4890320712372405
  },
  {
    "liga": "Europa - InglaterraB",
    "equipo": "Portsmouth",
    "rol": "Local",
    "prom": 6.26,
    "FD": 0.9521203830369357
  },
  {
    "liga": "Europa - InglaterraB",
    "equipo": "Portsmouth",
    "rol": "Visitante",
    "prom": 5.0,
    "FD": 0.9973213639325275
  },
  {
    "liga": "Europa - InglaterraB",
    "equipo": "Preston",
    "rol": "Local",
    "prom": 5.26,
    "FD": 1.3504787961696307
  },
  {
    "liga": "Europa - InglaterraB",
    "equipo": "Preston",
    "rol": "Visitante",
    "prom": 3.65,
    "FD": 1.1172084268442772
  },
  {
    "liga": "Europa - InglaterraB",
    "equipo": "QP Rangers",
    "rol": "Local",
    "prom": 5.39,
    "FD": 0.8383036935704515
  },
  {
    "liga": "Europa - InglaterraB",
    "equipo": "QP Rangers",
    "rol": "Visitante",
    "prom": 4.26,
    "FD": 1.1484833128212555
  },
  {
    "liga": "Europa - InglaterraB",
    "equipo": "Sheffield Utd",
    "rol": "Local",
    "prom": 7.52,
    "FD": 0.9236662106703146
  },
  {
    "liga": "Europa - InglaterraB",
    "equipo": "Sheffield Utd",
    "rol": "Visitante",
    "prom": 5.74,
    "FD": 0.9973213639325275
  },
  {
    "liga": "Europa - InglaterraB",
    "equipo": "Sheffield Wed",
    "rol": "Local",
    "prom": 4.78,
    "FD": 1.2563611491108073
  },
  {
    "liga": "Europa - InglaterraB",
    "equipo": "Sheffield Wed",
    "rol": "Visitante",
    "prom": 3.87,
    "FD": 1.1258958951712157
  },
  {
    "liga": "Europa - InglaterraB",
    "equipo": "Southampton",
    "rol": "Local",
    "prom": 6.26,
    "FD": 0.9696306429548563
  },
  {
    "liga": "Europa - InglaterraB",
    "equipo": "Southampton",
    "rol": "Visitante",
    "prom": 5.22,
    "FD": 0.8843842756823282
  },
  {
    "liga": "Europa - InglaterraB",
    "equipo": "Stoke City",
    "rol": "Local",
    "prom": 6.39,
    "FD": 0.9127222982216143
  },
  {
    "liga": "Europa - InglaterraB",
    "equipo": "Stoke City",
    "rol": "Visitante",
    "prom": 5.57,
    "FD": 0.9365090856439586
  },
  {
    "liga": "Europa - InglaterraB",
    "equipo": "Swansea City",
    "rol": "Local",
    "prom": 5.13,
    "FD": 1.094391244870041
  },
  {
    "liga": "Europa - InglaterraB",
    "equipo": "Swansea City",
    "rol": "Visitante",
    "prom": 3.96,
    "FD": 0.9747339462824877
  },
  {
    "liga": "Europa - InglaterraB",
    "equipo": "Watford",
    "rol": "Local",
    "prom": 5.39,
    "FD": 1.0287277701778388
  },
  {
    "liga": "Europa - InglaterraB",
    "equipo": "Watford",
    "rol": "Visitante",
    "prom": 4.43,
    "FD": 0.9816839209440383
  },
  {
    "liga": "Europa - InglaterraB",
    "equipo": "West Brom",
    "rol": "Local",
    "prom": 6.09,
    "FD": 0.693844049247606
  },
  {
    "liga": "Europa - InglaterraB",
    "equipo": "West Brom",
    "rol": "Visitante",
    "prom": 4.22,
    "FD": 0.8235719973937596
  },
  {
    "liga": "Europa - InglaterraB",
    "equipo": "Wrexham",
    "rol": "Local",
    "prom": 5.17,
    "FD": 1.0177838577291383
  },
  {
    "liga": "Europa - InglaterraB",
    "equipo": "Wrexham",
    "rol": "Visitante",
    "prom": 3.74,
    "FD": 1.0807210598711359
  },
  {
    "liga": "Europa - LigaOne",
    "equipo": "AFC Wimbledon",
    "rol": "Local",
    "prom": 5.52,
    "FD": 0.9527286001095089
  },
  {
    "liga": "Europa - LigaOne",
    "equipo": "AFC Wimbledon",
    "rol": "Visitante",
    "prom": 3.87,
    "FD": 1.0424445629810257
  },
  {
    "liga": "Europa - LigaOne",
    "equipo": "Barnsley",
    "rol": "Local",
    "prom": 5.22,
    "FD": 1.1520350428910384
  },
  {
    "liga": "Europa - LigaOne",
    "equipo": "Barnsley",
    "rol": "Visitante",
    "prom": 4.61,
    "FD": 1.2399603749142727
  },
  {
    "liga": "Europa - LigaOne",
    "equipo": "Blackpool",
    "rol": "Local",
    "prom": 4.3,
    "FD": 1.0950903449534586
  },
  {
    "liga": "Europa - LigaOne",
    "equipo": "Blackpool",
    "rol": "Visitante",
    "prom": 4.22,
    "FD": 1.137544768726663
  },
  {
    "liga": "Europa - LigaOne",
    "equipo": "Bolton",
    "rol": "Local",
    "prom": 7.7,
    "FD": 0.7512319766380726
  },
  {
    "liga": "Europa - LigaOne",
    "equipo": "Bolton",
    "rol": "Visitante",
    "prom": 4.91,
    "FD": 0.8504153013792579
  },
  {
    "liga": "Europa - LigaOne",
    "equipo": "Bradford",
    "rol": "Local",
    "prom": 5.91,
    "FD": 0.9812009490782989
  },
  {
    "liga": "Europa - LigaOne",
    "equipo": "Bradford",
    "rol": "Visitante",
    "prom": 5.22,
    "FD": 0.7790901470700297
  },
  {
    "liga": "Europa - LigaOne",
    "equipo": "Burton Albion",
    "rol": "Local",
    "prom": 6.0,
    "FD": 0.9417776966599744
  },
  {
    "liga": "Europa - LigaOne",
    "equipo": "Burton Albion",
    "rol": "Visitante",
    "prom": 4.48,
    "FD": 1.0973100662958166
  },
  {
    "liga": "Europa - LigaOne",
    "equipo": "Cardiff City",
    "rol": "Local",
    "prom": 6.48,
    "FD": 0.8475999269939769
  },
  {
    "liga": "Europa - LigaOne",
    "equipo": "Cardiff City",
    "rol": "Visitante",
    "prom": 6.0,
    "FD": 0.8357845004953136
  },
  {
    "liga": "Europa - LigaOne",
    "equipo": "Doncaster",
    "rol": "Local",
    "prom": 4.43,
    "FD": 1.1148019711626207
  },
  {
    "liga": "Europa - LigaOne",
    "equipo": "Doncaster",
    "rol": "Visitante",
    "prom": 4.13,
    "FD": 1.0662196144174352
  },
  {
    "liga": "Europa - LigaOne",
    "equipo": "Exeter City",
    "rol": "Local",
    "prom": 5.65,
    "FD": 0.9899616718379264
  },
  {
    "liga": "Europa - LigaOne",
    "equipo": "Exeter City",
    "rol": "Visitante",
    "prom": 3.83,
    "FD": 1.137544768726663
  },
  {
    "liga": "Europa - LigaOne",
    "equipo": "Huddersfield",
    "rol": "Local",
    "prom": 6.61,
    "FD": 0.9614893228691366
  },
  {
    "liga": "Europa - LigaOne",
    "equipo": "Huddersfield",
    "rol": "Visitante",
    "prom": 5.17,
    "FD": 0.8741903528156673
  },
  {
    "liga": "Europa - LigaOne",
    "equipo": "Leyton Orient",
    "rol": "Local",
    "prom": 5.04,
    "FD": 1.0469063697755063
  },
  {
    "liga": "Europa - LigaOne",
    "equipo": "Leyton Orient",
    "rol": "Visitante",
    "prom": 4.48,
    "FD": 0.9071096548045416
  },
  {
    "liga": "Europa - LigaOne",
    "equipo": "Lincoln City",
    "rol": "Local",
    "prom": 4.35,
    "FD": 1.160795765650666
  },
  {
    "liga": "Europa - LigaOne",
    "equipo": "Lincoln City",
    "rol": "Visitante",
    "prom": 4.3,
    "FD": 0.8266402499428483
  },
  {
    "liga": "Europa - LigaOne",
    "equipo": "Luton Town",
    "rol": "Local",
    "prom": 7.04,
    "FD": 0.9702500456287642
  },
  {
    "liga": "Europa - LigaOne",
    "equipo": "Luton Town",
    "rol": "Visitante",
    "prom": 5.13,
    "FD": 0.7626304960755925
  },
  {
    "liga": "Europa - LigaOne",
    "equipo": "Mansfield",
    "rol": "Local",
    "prom": 5.3,
    "FD": 0.9417776966599744
  },
  {
    "liga": "Europa - LigaOne",
    "equipo": "Mansfield",
    "rol": "Visitante",
    "prom": 4.09,
    "FD": 0.9692905585613045
  },
  {
    "liga": "Europa - LigaOne",
    "equipo": "Northampton",
    "rol": "Local",
    "prom": 5.13,
    "FD": 0.9045446249315567
  },
  {
    "liga": "Europa - LigaOne",
    "equipo": "Northampton",
    "rol": "Visitante",
    "prom": 4.48,
    "FD": 1.1686352206050445
  },
  {
    "liga": "Europa - LigaOne",
    "equipo": "Peterborough",
    "rol": "Local",
    "prom": 5.09,
    "FD": 1.1148019711626207
  },
  {
    "liga": "Europa - LigaOne",
    "equipo": "Peterborough",
    "rol": "Visitante",
    "prom": 3.74,
    "FD": 1.2253295740303285
  },
  {
    "liga": "Europa - LigaOne",
    "equipo": "Plymouth",
    "rol": "Local",
    "prom": 5.96,
    "FD": 1.1148019711626207
  },
  {
    "liga": "Europa - LigaOne",
    "equipo": "Plymouth",
    "rol": "Visitante",
    "prom": 5.17,
    "FD": 1.1613198201630723
  },
  {
    "liga": "Europa - LigaOne",
    "equipo": "Port Vale",
    "rol": "Local",
    "prom": 5.78,
    "FD": 0.9899616718379264
  },
  {
    "liga": "Europa - LigaOne",
    "equipo": "Port Vale",
    "rol": "Visitante",
    "prom": 4.0,
    "FD": 1.1137697172902536
  },
  {
    "liga": "Europa - LigaOne",
    "equipo": "Reading",
    "rol": "Local",
    "prom": 3.74,
    "FD": 1.2286913670377806
  },
  {
    "liga": "Europa - LigaOne",
    "equipo": "Reading",
    "rol": "Visitante",
    "prom": 4.04,
    "FD": 0.9546597576773603
  },
  {
    "liga": "Europa - LigaOne",
    "equipo": "Rotherham",
    "rol": "Local",
    "prom": 5.0,
    "FD": 1.0469063697755063
  },
  {
    "liga": "Europa - LigaOne",
    "equipo": "Rotherham",
    "rol": "Visitante",
    "prom": 3.96,
    "FD": 1.0424445629810257
  },
  {
    "liga": "Europa - LigaOne",
    "equipo": "Stevenage",
    "rol": "Local",
    "prom": 4.22,
    "FD": 0.8278883007848146
  },
  {
    "liga": "Europa - LigaOne",
    "equipo": "Stevenage",
    "rol": "Visitante",
    "prom": 4.57,
    "FD": 0.7864055475120019
  },
  {
    "liga": "Europa - LigaOne",
    "equipo": "Stockport",
    "rol": "Local",
    "prom": 5.52,
    "FD": 0.9702500456287642
  },
  {
    "liga": "Europa - LigaOne",
    "equipo": "Stockport",
    "rol": "Visitante",
    "prom": 4.87,
    "FD": 0.9144250552465137
  },
  {
    "liga": "Europa - LigaOne",
    "equipo": "Wigan Athletic",
    "rol": "Local",
    "prom": 5.22,
    "FD": 1.0096732980470888
  },
  {
    "liga": "Europa - LigaOne",
    "equipo": "Wigan Athletic",
    "rol": "Visitante",
    "prom": 5.3,
    "FD": 1.1521755696106073
  },
  {
    "liga": "Europa - LigaOne",
    "equipo": "Wycombe",
    "rol": "Local",
    "prom": 6.0,
    "FD": 0.8848329987223945
  },
  {
    "liga": "Europa - LigaOne",
    "equipo": "Wycombe",
    "rol": "Visitante",
    "prom": 5.04,
    "FD": 0.9546597576773603
  },
  {
    "liga": "Europa - Noruega",
    "equipo": "Aalesund",
    "rol": "Local",
    "prom": 5.6,
    "FD": 1.30879345603272
  },
  {
    "liga": "Europa - Noruega",
    "equipo": "Aalesund",
    "rol": "Visitante",
    "prom": 2.8,
    "FD": 1.5642225689027558
  },
  {
    "liga": "Europa - Noruega",
    "equipo": "Bodo/Glimt",
    "rol": "Local",
    "prom": 9.0,
    "FD": 0.43626448534424
  },
  {
    "liga": "Europa - Noruega",
    "equipo": "Bodo/Glimt",
    "rol": "Visitante",
    "prom": 5.6,
    "FD": 0.43265730629225163
  },
  {
    "liga": "Europa - Noruega",
    "equipo": "Brann",
    "rol": "Local",
    "prom": 6.5,
    "FD": 0.7089297886843899
  },
  {
    "liga": "Europa - Noruega",
    "equipo": "Brann",
    "rol": "Visitante",
    "prom": 6.71,
    "FD": 0.9984399375975037
  },
  {
    "liga": "Europa - Noruega",
    "equipo": "Fredrikstad",
    "rol": "Local",
    "prom": 5.0,
    "FD": 1.0906612133606
  },
  {
    "liga": "Europa - Noruega",
    "equipo": "Fredrikstad",
    "rol": "Visitante",
    "prom": 4.17,
    "FD": 0.9152366094643783
  },
  {
    "liga": "Europa - Noruega",
    "equipo": "HamKam",
    "rol": "Local",
    "prom": 3.83,
    "FD": 1.30879345603272
  },
  {
    "liga": "Europa - Noruega",
    "equipo": "HamKam",
    "rol": "Visitante",
    "prom": 5.33,
    "FD": 0.6107124284971397
  },
  {
    "liga": "Europa - Noruega",
    "equipo": "KFUM Oslo",
    "rol": "Local",
    "prom": 5.4,
    "FD": 0.7416496250852079
  },
  {
    "liga": "Europa - Noruega",
    "equipo": "KFUM Oslo",
    "rol": "Visitante",
    "prom": 2.8,
    "FD": 0.9984399375975037
  },
  {
    "liga": "Europa - Noruega",
    "equipo": "Kristiansund",
    "rol": "Local",
    "prom": 3.6,
    "FD": 1.396046353101568
  },
  {
    "liga": "Europa - Noruega",
    "equipo": "Kristiansund",
    "rol": "Visitante",
    "prom": 4.2,
    "FD": 1.1981279251170045
  },
  {
    "liga": "Europa - Noruega",
    "equipo": "Lillestrom",
    "rol": "Local",
    "prom": 5.0,
    "FD": 0.785276073619632
  },
  {
    "liga": "Europa - Noruega",
    "equipo": "Lillestrom",
    "rol": "Visitante",
    "prom": 5.83,
    "FD": 0.9152366094643783
  },
  {
    "liga": "Europa - Noruega",
    "equipo": "Molde",
    "rol": "Local",
    "prom": 3.6,
    "FD": 1.0906612133606
  },
  {
    "liga": "Europa - Noruega",
    "equipo": "Molde",
    "rol": "Visitante",
    "prom": 5.6,
    "FD": 0.7654706188247528
  },
  {
    "liga": "Europa - Noruega",
    "equipo": "Rosenborg",
    "rol": "Local",
    "prom": 8.4,
    "FD": 1.0906612133606
  },
  {
    "liga": "Europa - Noruega",
    "equipo": "Rosenborg",
    "rol": "Visitante",
    "prom": 4.0,
    "FD": 1.1648465938637542
  },
  {
    "liga": "Europa - Noruega",
    "equipo": "Sandefjord",
    "rol": "Local",
    "prom": 7.2,
    "FD": 1.221540558963872
  },
  {
    "liga": "Europa - Noruega",
    "equipo": "Sandefjord",
    "rol": "Visitante",
    "prom": 4.6,
    "FD": 1.4310972438897553
  },
  {
    "liga": "Europa - Noruega",
    "equipo": "Sarpsborg 08",
    "rol": "Local",
    "prom": 6.8,
    "FD": 0.959781867757328
  },
  {
    "liga": "Europa - Noruega",
    "equipo": "Sarpsborg 08",
    "rol": "Visitante",
    "prom": 3.0,
    "FD": 0.8985959438377534
  },
  {
    "liga": "Europa - Noruega",
    "equipo": "Start",
    "rol": "Local",
    "prom": 4.4,
    "FD": 0.959781867757328
  },
  {
    "liga": "Europa - Noruega",
    "equipo": "Start",
    "rol": "Visitante",
    "prom": 2.67,
    "FD": 1.219760790431617
  },
  {
    "liga": "Europa - Noruega",
    "equipo": "Tromso",
    "rol": "Local",
    "prom": 6.88,
    "FD": 0.7634628493524199
  },
  {
    "liga": "Europa - Noruega",
    "equipo": "Tromso",
    "rol": "Visitante",
    "prom": 3.75,
    "FD": 0.9568382735309411
  },
  {
    "liga": "Europa - Noruega",
    "equipo": "Valerenga",
    "rol": "Local",
    "prom": 9.6,
    "FD": 0.916155419222904
  },
  {
    "liga": "Europa - Noruega",
    "equipo": "Valerenga",
    "rol": "Visitante",
    "prom": 5.2,
    "FD": 1.0317212688507538
  },
  {
    "liga": "Europa - Noruega",
    "equipo": "Viking",
    "rol": "Local",
    "prom": 6.2,
    "FD": 1.221540558963872
  },
  {
    "liga": "Europa - Noruega",
    "equipo": "Viking",
    "rol": "Visitante",
    "prom": 6.4,
    "FD": 0.8985959438377534
  },
  {
    "liga": "Europa - Austria",
    "equipo": "Altach",
    "rol": "Local",
    "prom": 4.91,
    "FD": 0.7110408848508788
  },
  {
    "liga": "Europa - Austria",
    "equipo": "Altach",
    "rol": "Visitante",
    "prom": 4.0,
    "FD": 0.8856447688564476
  },
  {
    "liga": "Europa - Austria",
    "equipo": "Austria Wien",
    "rol": "Local",
    "prom": 6.82,
    "FD": 0.7537033379419316
  },
  {
    "liga": "Europa - Austria",
    "equipo": "Austria Wien",
    "rol": "Visitante",
    "prom": 5.64,
    "FD": 0.8856447688564476
  },
  {
    "liga": "Europa - Austria",
    "equipo": "BW Linz",
    "rol": "Local",
    "prom": 3.82,
    "FD": 0.9907169662255578
  },
  {
    "liga": "Europa - Austria",
    "equipo": "BW Linz",
    "rol": "Visitante",
    "prom": 3.64,
    "FD": 0.9907542579075426
  },
  {
    "liga": "Europa - Austria",
    "equipo": "Grazer AK",
    "rol": "Local",
    "prom": 4.09,
    "FD": 1.1424056883270788
  },
  {
    "liga": "Europa - Austria",
    "equipo": "Grazer AK",
    "rol": "Visitante",
    "prom": 3.18,
    "FD": 1.1328467153284671
  },
  {
    "liga": "Europa - Austria",
    "equipo": "Hartberg",
    "rol": "Local",
    "prom": 3.55,
    "FD": 1.012048192771084
  },
  {
    "liga": "Europa - Austria",
    "equipo": "Hartberg",
    "rol": "Visitante",
    "prom": 2.64,
    "FD": 1.5046228710462288
  },
  {
    "liga": "Europa - Austria",
    "equipo": "LASK Linz",
    "rol": "Local",
    "prom": 5.91,
    "FD": 1.3154256369741257
  },
  {
    "liga": "Europa - Austria",
    "equipo": "LASK Linz",
    "rol": "Visitante",
    "prom": 5.09,
    "FD": 1.097810218978102
  },
  {
    "liga": "Europa - Austria",
    "equipo": "Rapid Wien",
    "rol": "Local",
    "prom": 5.64,
    "FD": 0.9053920600434524
  },
  {
    "liga": "Europa - Austria",
    "equipo": "Rapid Wien",
    "rol": "Visitante",
    "prom": 6.18,
    "FD": 0.813625304136253
  },
  {
    "liga": "Europa - Austria",
    "equipo": "Ried",
    "rol": "Local",
    "prom": 5.0,
    "FD": 1.2490618210547104
  },
  {
    "liga": "Europa - Austria",
    "equipo": "Ried",
    "rol": "Visitante",
    "prom": 3.27,
    "FD": 0.778588807785888
  },
  {
    "liga": "Europa - Austria",
    "equipo": "Salzburg",
    "rol": "Local",
    "prom": 5.55,
    "FD": 0.9267232865889787
  },
  {
    "liga": "Europa - Austria",
    "equipo": "Salzburg",
    "rol": "Visitante",
    "prom": 5.36,
    "FD": 0.8311435523114354
  },
  {
    "liga": "Europa - Austria",
    "equipo": "Sturm Graz",
    "rol": "Local",
    "prom": 5.73,
    "FD": 0.9693857396800315
  },
  {
    "liga": "Europa - Austria",
    "equipo": "Sturm Graz",
    "rol": "Visitante",
    "prom": 5.18,
    "FD": 0.90316301703163
  },
  {
    "liga": "Europa - Austria",
    "equipo": "Tirol",
    "rol": "Local",
    "prom": 6.45,
    "FD": 1.227730594509184
  },
  {
    "liga": "Europa - Austria",
    "equipo": "Tirol",
    "rol": "Visitante",
    "prom": 3.18,
    "FD": 1.202919708029197
  },
  {
    "liga": "Europa - Austria",
    "equipo": "Wolfsberger AC",
    "rol": "Local",
    "prom": 4.18,
    "FD": 0.7963657910329842
  },
  {
    "liga": "Europa - Austria",
    "equipo": "Wolfsberger AC",
    "rol": "Visitante",
    "prom": 3.27,
    "FD": 0.97323600973236
  },
  {
    "liga": "Europa - Dinamarca",
    "equipo": "AGF Aarhus",
    "rol": "Local",
    "prom": 6.5,
    "FD": 0.647714175950826
  },
  {
    "liga": "Europa - Dinamarca",
    "equipo": "AGF Aarhus",
    "rol": "Visitante",
    "prom": 4.5,
    "FD": 0.8914607444479198
  },
  {
    "liga": "Europa - Dinamarca",
    "equipo": "Brondby IF",
    "rol": "Local",
    "prom": 3.75,
    "FD": 1.051094890510949
  },
  {
    "liga": "Europa - Dinamarca",
    "equipo": "Brondby IF",
    "rol": "Visitante",
    "prom": 4.19,
    "FD": 0.9271191742258367
  },
  {
    "liga": "Europa - Dinamarca",
    "equipo": "FC Kobenhavn",
    "rol": "Local",
    "prom": 6.56,
    "FD": 1.0234344986553978
  },
  {
    "liga": "Europa - Dinamarca",
    "equipo": "FC Kobenhavn",
    "rol": "Visitante",
    "prom": 4.75,
    "FD": 0.8220206443540818
  },
  {
    "liga": "Europa - Dinamarca",
    "equipo": "FC Midtjylland",
    "rol": "Local",
    "prom": 6.19,
    "FD": 0.7491356127545141
  },
  {
    "liga": "Europa - Dinamarca",
    "equipo": "FC Midtjylland",
    "rol": "Visitante",
    "prom": 4.75,
    "FD": 1.009696590553644
  },
  {
    "liga": "Europa - Dinamarca",
    "equipo": "Fredericia",
    "rol": "Local",
    "prom": 5.75,
    "FD": 1.3392239723396082
  },
  {
    "liga": "Europa - Dinamarca",
    "equipo": "Fredericia",
    "rol": "Visitante",
    "prom": 3.81,
    "FD": 1.360650609946825
  },
  {
    "liga": "Europa - Dinamarca",
    "equipo": "Nordsjaelland",
    "rol": "Local",
    "prom": 6.06,
    "FD": 0.5762581636573185
  },
  {
    "liga": "Europa - Dinamarca",
    "equipo": "Nordsjaelland",
    "rol": "Visitante",
    "prom": 3.63,
    "FD": 0.8332812011260556
  },
  {
    "liga": "Europa - Dinamarca",
    "equipo": "Odense BK",
    "rol": "Local",
    "prom": 6.06,
    "FD": 0.9796388782174416
  },
  {
    "liga": "Europa - Dinamarca",
    "equipo": "Odense BK",
    "rol": "Visitante",
    "prom": 4.81,
    "FD": 1.0903972474194554
  },
  {
    "liga": "Europa - Dinamarca",
    "equipo": "Randers FC",
    "rol": "Local",
    "prom": 5.38,
    "FD": 0.9796388782174416
  },
  {
    "liga": "Europa - Dinamarca",
    "equipo": "Randers FC",
    "rol": "Visitante",
    "prom": 5.31,
    "FD": 0.9027213012198935
  },
  {
    "liga": "Europa - Dinamarca",
    "equipo": "Silkeborg",
    "rol": "Local",
    "prom": 5.0,
    "FD": 1.152516327314637
  },
  {
    "liga": "Europa - Dinamarca",
    "equipo": "Silkeborg",
    "rol": "Visitante",
    "prom": 3.63,
    "FD": 1.079136690647482
  },
  {
    "liga": "Europa - Dinamarca",
    "equipo": "SonderjyskE",
    "rol": "Local",
    "prom": 4.06,
    "FD": 1.369189396849789
  },
  {
    "liga": "Europa - Dinamarca",
    "equipo": "SonderjyskE",
    "rol": "Visitante",
    "prom": 4.0,
    "FD": 1.1842352205192366
  },
  {
    "liga": "Europa - Dinamarca",
    "equipo": "Vejle BK",
    "rol": "Local",
    "prom": 3.88,
    "FD": 1.2539377641183251
  },
  {
    "liga": "Europa - Dinamarca",
    "equipo": "Vejle BK",
    "rol": "Visitante",
    "prom": 4.25,
    "FD": 1.043478260869565
  },
  {
    "liga": "Europa - Dinamarca",
    "equipo": "Viborg",
    "rol": "Local",
    "prom": 4.75,
    "FD": 0.8782174414137535
  },
  {
    "liga": "Europa - Dinamarca",
    "equipo": "Viborg",
    "rol": "Visitante",
    "prom": 4.44,
    "FD": 0.8558023146700029
  },
  {
    "liga": "Europa - Croacia",
    "equipo": "Dinamo Zagreb",
    "rol": "Local",
    "prom": 6.39,
    "FD": 0.7157371867238653
  },
  {
    "liga": "Europa - Croacia",
    "equipo": "Dinamo Zagreb",
    "rol": "Visitante",
    "prom": 6.17,
    "FD": 0.7207936829317677
  },
  {
    "liga": "Europa - Croacia",
    "equipo": "Gorica",
    "rol": "Local",
    "prom": 4.5,
    "FD": 1.0295777827952133
  },
  {
    "liga": "Europa - Croacia",
    "equipo": "Gorica",
    "rol": "Visitante",
    "prom": 4.22,
    "FD": 0.8766956873861107
  },
  {
    "liga": "Europa - Croacia",
    "equipo": "Hajduk Split",
    "rol": "Local",
    "prom": 4.83,
    "FD": 0.803793181305035
  },
  {
    "liga": "Europa - Croacia",
    "equipo": "Hajduk Split",
    "rol": "Visitante",
    "prom": 5.61,
    "FD": 0.9333873253695082
  },
  {
    "liga": "Europa - Croacia",
    "equipo": "Istra",
    "rol": "Local",
    "prom": 4.56,
    "FD": 1.2801986904493112
  },
  {
    "liga": "Europa - Croacia",
    "equipo": "Istra",
    "rol": "Visitante",
    "prom": 3.78,
    "FD": 1.2148208139299455
  },
  {
    "liga": "Europa - Croacia",
    "equipo": "Lok. Zagreb",
    "rol": "Local",
    "prom": 4.22,
    "FD": 1.054414088959133
  },
  {
    "liga": "Europa - Croacia",
    "equipo": "Lok. Zagreb",
    "rol": "Visitante",
    "prom": 4.89,
    "FD": 0.7876088276979147
  },
  {
    "liga": "Europa - Croacia",
    "equipo": "Osijek",
    "rol": "Local",
    "prom": 6.28,
    "FD": 1.0792503951230525
  },
  {
    "liga": "Europa - Croacia",
    "equipo": "Osijek",
    "rol": "Visitante",
    "prom": 3.83,
    "FD": 1.1257339542417495
  },
  {
    "liga": "Europa - Croacia",
    "equipo": "Rijeka",
    "rol": "Local",
    "prom": 7.0,
    "FD": 0.7654097990517047
  },
  {
    "liga": "Europa - Croacia",
    "equipo": "Rijeka",
    "rol": "Visitante",
    "prom": 5.56,
    "FD": 0.8665721806033612
  },
  {
    "liga": "Europa - Croacia",
    "equipo": "Slaven Belupo",
    "rol": "Local",
    "prom": 4.11,
    "FD": 0.8647550237073831
  },
  {
    "liga": "Europa - Croacia",
    "equipo": "Slaven Belupo",
    "rol": "Visitante",
    "prom": 3.5,
    "FD": 0.8888438955254101
  },
  {
    "liga": "Europa - Croacia",
    "equipo": "Varazdin",
    "rol": "Local",
    "prom": 3.67,
    "FD": 1.2282682321065703
  },
  {
    "liga": "Europa - Croacia",
    "equipo": "Varazdin",
    "rol": "Visitante",
    "prom": 3.61,
    "FD": 1.3039076736181416
  },
  {
    "liga": "Europa - Croacia",
    "equipo": "Vukovar",
    "rol": "Local",
    "prom": 3.83,
    "FD": 1.178595619778731
  },
  {
    "liga": "Europa - Croacia",
    "equipo": "Vukovar",
    "rol": "Visitante",
    "prom": 3.11,
    "FD": 1.2816359586960926
  },
  {
    "liga": "Europa - Suecia",
    "equipo": "AIK",
    "rol": "Local",
    "prom": 7.25,
    "FD": 1.2582056892778992
  },
  {
    "liga": "Europa - Suecia",
    "equipo": "AIK",
    "rol": "Visitante",
    "prom": 5.8,
    "FD": 0.8908254659888647
  },
  {
    "liga": "Europa - Suecia",
    "equipo": "Brommapojkarna",
    "rol": "Local",
    "prom": 4.67,
    "FD": 1.312910284463895
  },
  {
    "liga": "Europa - Suecia",
    "equipo": "Brommapojkarna",
    "rol": "Visitante",
    "prom": 4.33,
    "FD": 0.8075526506899057
  },
  {
    "liga": "Europa - Suecia",
    "equipo": "Degerfors",
    "rol": "Local",
    "prom": 4.6,
    "FD": 0.962800875273523
  },
  {
    "liga": "Europa - Suecia",
    "equipo": "Degerfors",
    "rol": "Visitante",
    "prom": 4.25,
    "FD": 0.8230452674897121
  },
  {
    "liga": "Europa - Suecia",
    "equipo": "Djurgarden",
    "rol": "Local",
    "prom": 5.5,
    "FD": 0.9474835886214441
  },
  {
    "liga": "Europa - Suecia",
    "equipo": "Djurgarden",
    "rol": "Visitante",
    "prom": 8.67,
    "FD": 0.710723795691116
  },
  {
    "liga": "Europa - Suecia",
    "equipo": "Elfsborg",
    "rol": "Local",
    "prom": 3.67,
    "FD": 1.312910284463895
  },
  {
    "liga": "Europa - Suecia",
    "equipo": "Elfsborg",
    "rol": "Visitante",
    "prom": 3.75,
    "FD": 0.8714596949891068
  },
  {
    "liga": "Europa - Suecia",
    "equipo": "GAIS",
    "rol": "Local",
    "prom": 5.0,
    "FD": 0.87527352297593
  },
  {
    "liga": "Europa - Suecia",
    "equipo": "GAIS",
    "rol": "Visitante",
    "prom": 4.0,
    "FD": 0.8908254659888647
  },
  {
    "liga": "Europa - Suecia",
    "equipo": "Hacken",
    "rol": "Local",
    "prom": 4.5,
    "FD": 1.2035010940919038
  },
  {
    "liga": "Europa - Suecia",
    "equipo": "Hacken",
    "rol": "Visitante",
    "prom": 6.0,
    "FD": 0.8908254659888647
  },
  {
    "liga": "Europa - Suecia",
    "equipo": "Halmstad",
    "rol": "Local",
    "prom": 2.4,
    "FD": 1.1378555798687089
  },
  {
    "liga": "Europa - Suecia",
    "equipo": "Halmstad",
    "rol": "Visitante",
    "prom": 2.75,
    "FD": 1.5008472524812395
  },
  {
    "liga": "Europa - Suecia",
    "equipo": "Hammarby",
    "rol": "Local",
    "prom": 6.5,
    "FD": 0.5842450765864332
  },
  {
    "liga": "Europa - Suecia",
    "equipo": "Hammarby",
    "rol": "Visitante",
    "prom": 3.0,
    "FD": 0.48414427499394824
  },
  {
    "liga": "Europa - Suecia",
    "equipo": "IFK Goteborg",
    "rol": "Local",
    "prom": 4.75,
    "FD": 0.7658643326039387
  },
  {
    "liga": "Europa - Suecia",
    "equipo": "IFK Goteborg",
    "rol": "Visitante",
    "prom": 5.25,
    "FD": 1.1619462599854757
  },
  {
    "liga": "Europa - Suecia",
    "equipo": "Kalmar",
    "rol": "Local",
    "prom": 8.2,
    "FD": 1.0503282275711159
  },
  {
    "liga": "Europa - Suecia",
    "equipo": "Kalmar",
    "rol": "Visitante",
    "prom": 4.5,
    "FD": 0.9198741224885016
  },
  {
    "liga": "Europa - Suecia",
    "equipo": "Malmo FF",
    "rol": "Local",
    "prom": 4.25,
    "FD": 0.711159737417943
  },
  {
    "liga": "Europa - Suecia",
    "equipo": "Malmo FF",
    "rol": "Visitante",
    "prom": 5.2,
    "FD": 1.7429193899782136
  },
  {
    "liga": "Europa - Suecia",
    "equipo": "Mjallby",
    "rol": "Local",
    "prom": 7.5,
    "FD": 0.87527352297593
  },
  {
    "liga": "Europa - Suecia",
    "equipo": "Mjallby",
    "rol": "Visitante",
    "prom": 3.0,
    "FD": 0.7417090292907287
  },
  {
    "liga": "Europa - Suecia",
    "equipo": "Orgryte",
    "rol": "Local",
    "prom": 4.0,
    "FD": 0.8030634573304157
  },
  {
    "liga": "Europa - Suecia",
    "equipo": "Orgryte",
    "rol": "Visitante",
    "prom": 4.0,
    "FD": 1.3168724279835393
  },
  {
    "liga": "Europa - Suecia",
    "equipo": "Sirius",
    "rol": "Local",
    "prom": 5.0,
    "FD": 1.0503282275711159
  },
  {
    "liga": "Europa - Suecia",
    "equipo": "Sirius",
    "rol": "Visitante",
    "prom": 5.25,
    "FD": 0.9682885499878965
  },
  {
    "liga": "Europa - Suecia",
    "equipo": "Vasteras",
    "rol": "Local",
    "prom": 5.0,
    "FD": 1.148796498905908
  },
  {
    "liga": "Europa - Suecia",
    "equipo": "Vasteras",
    "rol": "Visitante",
    "prom": 4.4,
    "FD": 1.2781408859840233
  },
  {
    "liga": "America - Brasil",
    "equipo": "Internacional",
    "rol": "Local",
    "prom": 7.44,
    "FD": 0.7694801685939695
  },
  {
    "liga": "America - Brasil",
    "equipo": "Internacional",
    "rol": "Visitante",
    "prom": 7.5,
    "FD": 0.750704353358175
  },
  {
    "liga": "America - Brasil",
    "equipo": "Mirassol",
    "rol": "Local",
    "prom": 6.67,
    "FD": 0.8408083864692533
  },
  {
    "liga": "America - Brasil",
    "equipo": "Mirassol",
    "rol": "Visitante",
    "prom": 4.71,
    "FD": 1.0378987548850314
  },
  {
    "liga": "America - Brasil",
    "equipo": "Fluminense",
    "rol": "Local",
    "prom": 5.44,
    "FD": 0.7197665621960445
  },
  {
    "liga": "America - Brasil",
    "equipo": "Fluminense",
    "rol": "Visitante",
    "prom": 5.75,
    "FD": 0.863400890666182
  },
  {
    "liga": "America - Brasil",
    "equipo": "São Paulo",
    "rol": "Local",
    "prom": 7.75,
    "FD": 1.0007565114017076
  },
  {
    "liga": "America - Brasil",
    "equipo": "São Paulo",
    "rol": "Visitante",
    "prom": 5.56,
    "FD": 0.7870580750704353
  },
  {
    "liga": "America - Brasil",
    "equipo": "Santos",
    "rol": "Local",
    "prom": 5.22,
    "FD": 0.9856262833675564
  },
  {
    "liga": "America - Brasil",
    "equipo": "Santos",
    "rol": "Visitante",
    "prom": 5.25,
    "FD": 1.0233572662001271
  },
  {
    "liga": "America - Brasil",
    "equipo": "Bragantino",
    "rol": "Local",
    "prom": 6.13,
    "FD": 1.2169026261752944
  },
  {
    "liga": "America - Brasil",
    "equipo": "Bragantino",
    "rol": "Visitante",
    "prom": 5.0,
    "FD": 0.9488321366899936
  },
  {
    "liga": "America - Brasil",
    "equipo": "Vasco",
    "rol": "Local",
    "prom": 6.11,
    "FD": 0.7694801685939695
  },
  {
    "liga": "America - Brasil",
    "equipo": "Vasco",
    "rol": "Visitante",
    "prom": 4.75,
    "FD": 0.7725165863855312
  },
  {
    "liga": "America - Brasil",
    "equipo": "Palmeiras",
    "rol": "Local",
    "prom": 6.38,
    "FD": 0.9186209877877445
  },
  {
    "liga": "America - Brasil",
    "equipo": "Palmeiras",
    "rol": "Visitante",
    "prom": 6.0,
    "FD": 1.4341543215486685
  },
  {
    "liga": "America - Brasil",
    "equipo": "Atlético-MG",
    "rol": "Local",
    "prom": 4.75,
    "FD": 1.242840159948125
  },
  {
    "liga": "America - Brasil",
    "equipo": "Atlético-MG",
    "rol": "Visitante",
    "prom": 5.11,
    "FD": 0.8288648550395346
  },
  {
    "liga": "America - Brasil",
    "equipo": "Cruzeiro",
    "rol": "Local",
    "prom": 5.89,
    "FD": 0.6246622716956662
  },
  {
    "liga": "America - Brasil",
    "equipo": "Cruzeiro",
    "rol": "Visitante",
    "prom": 4.75,
    "FD": 0.9542851949468327
  },
  {
    "liga": "America - Brasil",
    "equipo": "Bahia",
    "rol": "Local",
    "prom": 6.0,
    "FD": 0.9186209877877445
  },
  {
    "liga": "America - Brasil",
    "equipo": "Bahia",
    "rol": "Visitante",
    "prom": 5.13,
    "FD": 1.250568026901754
  },
  {
    "liga": "America - Brasil",
    "equipo": "Corinthians",
    "rol": "Local",
    "prom": 5.0,
    "FD": 1.009402355992651
  },
  {
    "liga": "America - Brasil",
    "equipo": "Corinthians",
    "rol": "Visitante",
    "prom": 4.0,
    "FD": 0.8870308097791512
  },
  {
    "liga": "America - Brasil",
    "equipo": "Athletico-PR",
    "rol": "Local",
    "prom": 5.89,
    "FD": 0.8170323138441586
  },
  {
    "liga": "America - Brasil",
    "equipo": "Athletico-PR",
    "rol": "Visitante",
    "prom": 4.25,
    "FD": 0.9779151140598018
  },
  {
    "liga": "America - Brasil",
    "equipo": "Chapecoense",
    "rol": "Local",
    "prom": 5.0,
    "FD": 1.1282827191181237
  },
  {
    "liga": "America - Brasil",
    "equipo": "Chapecoense",
    "rol": "Visitante",
    "prom": 2.0,
    "FD": 1.506861764973189
  },
  {
    "liga": "America - Brasil",
    "equipo": "Flamengo",
    "rol": "Local",
    "prom": 5.14,
    "FD": 0.927266832378688
  },
  {
    "liga": "America - Brasil",
    "equipo": "Flamengo",
    "rol": "Visitante",
    "prom": 3.89,
    "FD": 0.98882123057348
  },
  {
    "liga": "America - Brasil",
    "equipo": "Grêmio",
    "rol": "Local",
    "prom": 4.88,
    "FD": 0.8645844590943478
  },
  {
    "liga": "America - Brasil",
    "equipo": "Grêmio",
    "rol": "Visitante",
    "prom": 3.0,
    "FD": 0.8888484958647641
  },
  {
    "liga": "America - Brasil",
    "equipo": "Remo",
    "rol": "Local",
    "prom": 4.63,
    "FD": 1.703231384415865
  },
  {
    "liga": "America - Brasil",
    "equipo": "Remo",
    "rol": "Visitante",
    "prom": 4.11,
    "FD": 0.98882123057348
  },
  {
    "liga": "America - Brasil",
    "equipo": "Vitória",
    "rol": "Local",
    "prom": 3.75,
    "FD": 0.9726575164811413
  },
  {
    "liga": "America - Brasil",
    "equipo": "Vitória",
    "rol": "Visitante",
    "prom": 4.0,
    "FD": 1.0906116513678088
  },
  {
    "liga": "America - Brasil",
    "equipo": "Botafogo",
    "rol": "Local",
    "prom": 4.14,
    "FD": 1.1109910299362369
  },
  {
    "liga": "America - Brasil",
    "equipo": "Botafogo",
    "rol": "Visitante",
    "prom": 3.33,
    "FD": 0.868853948923021
  },
  {
    "liga": "America - Brasil",
    "equipo": "Coritiba",
    "rol": "Local",
    "prom": 2.75,
    "FD": 1.458986274721712
  },
  {
    "liga": "America - Brasil",
    "equipo": "Coritiba",
    "rol": "Visitante",
    "prom": 3.56,
    "FD": 1.1505952921930382
  },
  {
    "liga": "America - Chile",
    "equipo": "Colo-Colo",
    "rol": "Local",
    "prom": 7.14,
    "FD": 0.7099053271160096
  },
  {
    "liga": "America - Chile",
    "equipo": "Colo-Colo",
    "rol": "Visitante",
    "prom": 4.17,
    "FD": 1.04038062705868
  },
  {
    "liga": "America - Chile",
    "equipo": "Unión La Calera",
    "rol": "Local",
    "prom": 5.43,
    "FD": 1.0987706655362444
  },
  {
    "liga": "America - Chile",
    "equipo": "Unión La Calera",
    "rol": "Visitante",
    "prom": 5.67,
    "FD": 0.8783701354153958
  },
  {
    "liga": "America - Chile",
    "equipo": "Univ. Concepción",
    "rol": "Local",
    "prom": 5.67,
    "FD": 0.8297301116292215
  },
  {
    "liga": "America - Chile",
    "equipo": "Univ. Concepción",
    "rol": "Visitante",
    "prom": 4.71,
    "FD": 1.309747468586068
  },
  {
    "liga": "America - Chile",
    "equipo": "Coquimbo Unido",
    "rol": "Local",
    "prom": 7.0,
    "FD": 0.7166878620884556
  },
  {
    "liga": "America - Chile",
    "equipo": "Coquimbo Unido",
    "rol": "Visitante",
    "prom": 4.57,
    "FD": 0.9486397462486275
  },
  {
    "liga": "America - Chile",
    "equipo": "Cobresal",
    "rol": "Local",
    "prom": 6.17,
    "FD": 1.31807262964533
  },
  {
    "liga": "America - Chile",
    "equipo": "Cobresal",
    "rol": "Visitante",
    "prom": 4.57,
    "FD": 0.9193607417347809
  },
  {
    "liga": "America - Chile",
    "equipo": "Universidad de Chile",
    "rol": "Local",
    "prom": 7.0,
    "FD": 1.039988695775046
  },
  {
    "liga": "America - Chile",
    "equipo": "Universidad de Chile",
    "rol": "Visitante",
    "prom": 4.71,
    "FD": 0.9193607417347809
  },
  {
    "liga": "America - Chile",
    "equipo": "Concepción",
    "rol": "Local",
    "prom": 5.5,
    "FD": 1.0919881305637984
  },
  {
    "liga": "America - Chile",
    "equipo": "Concepción",
    "rol": "Visitante",
    "prom": 3.86,
    "FD": 0.8647065999756006
  },
  {
    "liga": "America - Chile",
    "equipo": "O'Higgins",
    "rol": "Local",
    "prom": 7.14,
    "FD": 0.7438180019782394
  },
  {
    "liga": "America - Chile",
    "equipo": "O'Higgins",
    "rol": "Visitante",
    "prom": 4.4,
    "FD": 0.89788947175796
  },
  {
    "liga": "America - Chile",
    "equipo": "Universidad Católica",
    "rol": "Local",
    "prom": 4.33,
    "FD": 0.9789458810230325
  },
  {
    "liga": "America - Chile",
    "equipo": "Universidad Católica",
    "rol": "Visitante",
    "prom": 5.43,
    "FD": 0.6968403074295473
  },
  {
    "liga": "America - Chile",
    "equipo": "Ñublense",
    "rol": "Local",
    "prom": 4.71,
    "FD": 1.162074325279073
  },
  {
    "liga": "America - Chile",
    "equipo": "Ñublense",
    "rol": "Visitante",
    "prom": 3.83,
    "FD": 1.1067463706233986
  },
  {
    "liga": "America - Chile",
    "equipo": "Palestino",
    "rol": "Local",
    "prom": 3.86,
    "FD": 0.7438180019782394
  },
  {
    "liga": "America - Chile",
    "equipo": "Palestino",
    "rol": "Visitante",
    "prom": 4.83,
    "FD": 0.9759668171282175
  },
  {
    "liga": "America - Chile",
    "equipo": "La Serena",
    "rol": "Local",
    "prom": 4.57,
    "FD": 1.0332061608026002
  },
  {
    "liga": "America - Chile",
    "equipo": "La Serena",
    "rol": "Visitante",
    "prom": 4.17,
    "FD": 1.04038062705868
  },
  {
    "liga": "America - Chile",
    "equipo": "Audax Italiano",
    "rol": "Local",
    "prom": 3.0,
    "FD": 0.8726861664547124
  },
  {
    "liga": "America - Chile",
    "equipo": "Audax Italiano",
    "rol": "Visitante",
    "prom": 4.17,
    "FD": 0.8783701354153958
  },
  {
    "liga": "America - Chile",
    "equipo": "Everton de Viña del Mar",
    "rol": "Local",
    "prom": 4.29,
    "FD": 1.0987706655362444
  },
  {
    "liga": "America - Chile",
    "equipo": "Everton de Viña del Mar",
    "rol": "Visitante",
    "prom": 4.17,
    "FD": 1.2355739904843233
  },
  {
    "liga": "America - Chile",
    "equipo": "Deportes Limache",
    "rol": "Local",
    "prom": 3.33,
    "FD": 1.431114879186096
  },
  {
    "liga": "America - Chile",
    "equipo": "Deportes Limache",
    "rol": "Visitante",
    "prom": 4.14,
    "FD": 1.059899963401244
  },
  {
    "liga": "America - Chile",
    "equipo": "Huachipato",
    "rol": "Local",
    "prom": 3.33,
    "FD": 1.1304224954076587
  },
  {
    "liga": "America - Chile",
    "equipo": "Huachipato",
    "rol": "Visitante",
    "prom": 3.0,
    "FD": 1.2277662559472977
  },
  {
    "liga": "America - LigaMX",
    "equipo": "Guadalajara",
    "rol": "Local",
    "prom": 6.8,
    "FD": 0.6798761609907121
  },
  {
    "liga": "America - LigaMX",
    "equipo": "Guadalajara",
    "rol": "Visitante",
    "prom": 4.9,
    "FD": 0.6755712551054199
  },
  {
    "liga": "America - LigaMX",
    "equipo": "América",
    "rol": "Local",
    "prom": 6.32,
    "FD": 0.7043962848297215
  },
  {
    "liga": "America - LigaMX",
    "equipo": "América",
    "rol": "Visitante",
    "prom": 5.58,
    "FD": 0.743128380615962
  },
  {
    "liga": "America - LigaMX",
    "equipo": "Tigres UANL",
    "rol": "Local",
    "prom": 5.71,
    "FD": 0.7422910216718267
  },
  {
    "liga": "America - LigaMX",
    "equipo": "Tigres UANL",
    "rol": "Visitante",
    "prom": 5.19,
    "FD": 0.9179821172314824
  },
  {
    "liga": "America - LigaMX",
    "equipo": "Toluca",
    "rol": "Local",
    "prom": 5.52,
    "FD": 0.7222291021671827
  },
  {
    "liga": "America - LigaMX",
    "equipo": "Toluca",
    "rol": "Visitante",
    "prom": 5.76,
    "FD": 0.8325422232034441
  },
  {
    "liga": "America - LigaMX",
    "equipo": "Cruz Azul",
    "rol": "Local",
    "prom": 6.45,
    "FD": 0.6999380804953561
  },
  {
    "liga": "America - LigaMX",
    "equipo": "Cruz Azul",
    "rol": "Visitante",
    "prom": 4.82,
    "FD": 0.8941384258748205
  },
  {
    "liga": "America - LigaMX",
    "equipo": "Necaxa",
    "rol": "Local",
    "prom": 4.88,
    "FD": 1.0744272445820435
  },
  {
    "liga": "America - LigaMX",
    "equipo": "Necaxa",
    "rol": "Visitante",
    "prom": 4.82,
    "FD": 1.0987967766861684
  },
  {
    "liga": "America - LigaMX",
    "equipo": "León",
    "rol": "Local",
    "prom": 5.41,
    "FD": 1.0878018575851394
  },
  {
    "liga": "America - LigaMX",
    "equipo": "León",
    "rol": "Visitante",
    "prom": 4.59,
    "FD": 1.0987967766861684
  },
  {
    "liga": "America - LigaMX",
    "equipo": "Puebla",
    "rol": "Local",
    "prom": 4.41,
    "FD": 1.3909597523219817
  },
  {
    "liga": "America - LigaMX",
    "equipo": "Puebla",
    "rol": "Visitante",
    "prom": 4.94,
    "FD": 0.9815652941825808
  },
  {
    "liga": "America - LigaMX",
    "equipo": "Pachuca",
    "rol": "Local",
    "prom": 5.35,
    "FD": 0.8804953560371518
  },
  {
    "liga": "America - LigaMX",
    "equipo": "Pachuca",
    "rol": "Visitante",
    "prom": 3.95,
    "FD": 0.9537476542664751
  },
  {
    "liga": "America - LigaMX",
    "equipo": "Monterrey",
    "rol": "Local",
    "prom": 4.95,
    "FD": 1.0900309597523221
  },
  {
    "liga": "America - LigaMX",
    "equipo": "Monterrey",
    "rol": "Visitante",
    "prom": 4.0,
    "FD": 0.9299039629098133
  },
  {
    "liga": "America - LigaMX",
    "equipo": "Juárez",
    "rol": "Local",
    "prom": 4.53,
    "FD": 1.0209287925696595
  },
  {
    "liga": "America - LigaMX",
    "equipo": "Juárez",
    "rol": "Visitante",
    "prom": 4.21,
    "FD": 1.015343856937852
  },
  {
    "liga": "America - LigaMX",
    "equipo": "Atlético San Luis",
    "rol": "Local",
    "prom": 4.65,
    "FD": 0.8136222910216718
  },
  {
    "liga": "America - LigaMX",
    "equipo": "Atlético San Luis",
    "rol": "Visitante",
    "prom": 4.18,
    "FD": 0.8186334032453912
  },
  {
    "liga": "America - LigaMX",
    "equipo": "Santos Laguna",
    "rol": "Local",
    "prom": 4.35,
    "FD": 1.1680495356037153
  },
  {
    "liga": "America - LigaMX",
    "equipo": "Santos Laguna",
    "rol": "Visitante",
    "prom": 4.29,
    "FD": 1.192184567833094
  },
  {
    "liga": "America - LigaMX",
    "equipo": "Pumas UNAM",
    "rol": "Local",
    "prom": 4.5,
    "FD": 1.1591331269349847
  },
  {
    "liga": "America - LigaMX",
    "equipo": "Pumas UNAM",
    "rol": "Visitante",
    "prom": 3.24,
    "FD": 1.172314825035876
  },
  {
    "liga": "America - LigaMX",
    "equipo": "Querétaro",
    "rol": "Local",
    "prom": 3.88,
    "FD": 1.2728173374613003
  },
  {
    "liga": "America - LigaMX",
    "equipo": "Querétaro",
    "rol": "Visitante",
    "prom": 4.65,
    "FD": 1.216028259189756
  },
  {
    "liga": "America - LigaMX",
    "equipo": "Mazatlán",
    "rol": "Local",
    "prom": 4.12,
    "FD": 1.3642105263157895
  },
  {
    "liga": "America - LigaMX",
    "equipo": "Mazatlán",
    "rol": "Visitante",
    "prom": 3.41,
    "FD": 1.2279501048680868
  },
  {
    "liga": "America - LigaMX",
    "equipo": "Atlas",
    "rol": "Local",
    "prom": 3.67,
    "FD": 1.2014860681114552
  },
  {
    "liga": "America - LigaMX",
    "equipo": "Atlas",
    "rol": "Visitante",
    "prom": 3.39,
    "FD": 1.1266144166022738
  },
  {
    "liga": "America - LigaMX",
    "equipo": "Tijuana",
    "rol": "Local",
    "prom": 3.58,
    "FD": 0.9273065015479878
  },
  {
    "liga": "America - LigaMX",
    "equipo": "Tijuana",
    "rol": "Visitante",
    "prom": 3.39,
    "FD": 1.1047576995253336
  },
  {
    "liga": "America - Argentina",
    "equipo": "Independiente",
    "rol": "Local",
    "prom": 7.0,
    "FD": 1.082891431761094
  },
  {
    "liga": "America - Argentina",
    "equipo": "Independiente",
    "rol": "Visitante",
    "prom": 4.22,
    "FD": 0.8034279592929835
  },
  {
    "liga": "America - Argentina",
    "equipo": "Argentinos Juniors",
    "rol": "Local",
    "prom": 5.92,
    "FD": 0.5581914596706671
  },
  {
    "liga": "America - Argentina",
    "equipo": "Argentinos Juniors",
    "rol": "Visitante",
    "prom": 5.86,
    "FD": 0.5744509908944831
  },
  {
    "liga": "America - Argentina",
    "equipo": "River Plate",
    "rol": "Local",
    "prom": 6.83,
    "FD": 0.6279653921295004
  },
  {
    "liga": "America - Argentina",
    "equipo": "River Plate",
    "rol": "Visitante",
    "prom": 4.0,
    "FD": 0.9299678628816284
  },
  {
    "liga": "America - Argentina",
    "equipo": "Atlético Tucumán",
    "rol": "Local",
    "prom": 6.25,
    "FD": 1.0131174993022607
  },
  {
    "liga": "America - Argentina",
    "equipo": "Atlético Tucumán",
    "rol": "Visitante",
    "prom": 3.25,
    "FD": 0.678896625602571
  },
  {
    "liga": "America - Argentina",
    "equipo": "Union Santa Fe",
    "rol": "Local",
    "prom": 6.25,
    "FD": 0.6279653921295004
  },
  {
    "liga": "America - Argentina",
    "equipo": "Union Santa Fe",
    "rol": "Visitante",
    "prom": 4.4,
    "FD": 0.9440278521692556
  },
  {
    "liga": "America - Argentina",
    "equipo": "Talleres de Cordoba",
    "rol": "Local",
    "prom": 6.5,
    "FD": 1.222439296678761
  },
  {
    "liga": "America - Argentina",
    "equipo": "Talleres de Cordoba",
    "rol": "Visitante",
    "prom": 2.78,
    "FD": 1.0263792179967863
  },
  {
    "liga": "America - Argentina",
    "equipo": "Rosario Central",
    "rol": "Local",
    "prom": 4.8,
    "FD": 0.9210159084566006
  },
  {
    "liga": "America - Argentina",
    "equipo": "Rosario Central",
    "rol": "Visitante",
    "prom": 3.67,
    "FD": 0.8697107659346546
  },
  {
    "liga": "America - Argentina",
    "equipo": "Instituto",
    "rol": "Local",
    "prom": 4.25,
    "FD": 1.0131174993022607
  },
  {
    "liga": "America - Argentina",
    "equipo": "Instituto",
    "rol": "Visitante",
    "prom": 5.63,
    "FD": 0.7291108730583824
  },
  {
    "liga": "America - Argentina",
    "equipo": "Estudiantes de Río Cuarto",
    "rol": "Local",
    "prom": 4.0,
    "FD": 1.3257047167178344
  },
  {
    "liga": "America - Argentina",
    "equipo": "Estudiantes de Río Cuarto",
    "rol": "Visitante",
    "prom": 4.88,
    "FD": 0.8295393679700054
  },
  {
    "liga": "America - Argentina",
    "equipo": "Estudiantes de La Plata",
    "rol": "Local",
    "prom": 5.33,
    "FD": 1.2391850404688811
  },
  {
    "liga": "America - Argentina",
    "equipo": "Estudiantes de La Plata",
    "rol": "Visitante",
    "prom": 3.38,
    "FD": 1.0303963577932513
  },
  {
    "liga": "America - Argentina",
    "equipo": "Boca Juniors",
    "rol": "Local",
    "prom": 6.67,
    "FD": 0.6809935807982138
  },
  {
    "liga": "America - Argentina",
    "equipo": "Boca Juniors",
    "rol": "Visitante",
    "prom": 3.38,
    "FD": 0.9801821103374397
  },
  {
    "liga": "America - Argentina",
    "equipo": "Racing Club",
    "rol": "Local",
    "prom": 4.43,
    "FD": 0.7172760256768071
  },
  {
    "liga": "America - Argentina",
    "equipo": "Racing Club",
    "rol": "Visitante",
    "prom": 4.09,
    "FD": 0.9862078200321373
  },
  {
    "liga": "America - Argentina",
    "equipo": "Huracán",
    "rol": "Local",
    "prom": 4.63,
    "FD": 1.0131174993022607
  },
  {
    "liga": "America - Argentina",
    "equipo": "Huracán",
    "rol": "Visitante",
    "prom": 3.1,
    "FD": 1.3658275307980718
  },
  {
    "liga": "America - Argentina",
    "equipo": "Gimnasia La Plata",
    "rol": "Local",
    "prom": 3.88,
    "FD": 1.3619871615964276
  },
  {
    "liga": "America - Argentina",
    "equipo": "Gimnasia La Plata",
    "rol": "Visitante",
    "prom": 4.2,
    "FD": 1.3658275307980718
  },
  {
    "liga": "America - Argentina",
    "equipo": "Deportivo Riestra",
    "rol": "Local",
    "prom": 5.13,
    "FD": 0.9768350544236674
  },
  {
    "liga": "America - Argentina",
    "equipo": "Deportivo Riestra",
    "rol": "Visitante",
    "prom": 3.5,
    "FD": 0.9801821103374397
  },
  {
    "liga": "America - Argentina",
    "equipo": "Aldosivi",
    "rol": "Local",
    "prom": 4.0,
    "FD": 1.431761094055261
  },
  {
    "liga": "America - Argentina",
    "equipo": "Aldosivi",
    "rol": "Visitante",
    "prom": 3.75,
    "FD": 1.0303963577932513
  },
  {
    "liga": "America - Argentina",
    "equipo": "Defensa y Justicia",
    "rol": "Local",
    "prom": 4.63,
    "FD": 0.6977393245883339
  },
  {
    "liga": "America - Argentina",
    "equipo": "Defensa y Justicia",
    "rol": "Visitante",
    "prom": 3.75,
    "FD": 1.0544991965720407
  },
  {
    "liga": "America - Argentina",
    "equipo": "Platense",
    "rol": "Local",
    "prom": 5.0,
    "FD": 0.8735696343845939
  },
  {
    "liga": "America - Argentina",
    "equipo": "Platense",
    "rol": "Visitante",
    "prom": 3.75,
    "FD": 0.7291108730583824
  },
  {
    "liga": "America - Argentina",
    "equipo": "San Lorenzo",
    "rol": "Local",
    "prom": 5.0,
    "FD": 1.1861568518001675
  },
  {
    "liga": "America - Argentina",
    "equipo": "San Lorenzo",
    "rol": "Visitante",
    "prom": 2.89,
    "FD": 0.9600964113551153
  },
  {
    "liga": "America - Argentina",
    "equipo": "Central Cordoba",
    "rol": "Local",
    "prom": 4.13,
    "FD": 0.9433435668434274
  },
  {
    "liga": "America - Argentina",
    "equipo": "Central Cordoba",
    "rol": "Visitante",
    "prom": 3.25,
    "FD": 1.205141938939475
  },
  {
    "liga": "America - Argentina",
    "equipo": "Independiente Rivadavia",
    "rol": "Local",
    "prom": 4.8,
    "FD": 0.9768350544236674
  },
  {
    "liga": "America - Argentina",
    "equipo": "Independiente Rivadavia",
    "rol": "Visitante",
    "prom": 4.0,
    "FD": 0.8315479378682378
  },
  {
    "liga": "America - Argentina",
    "equipo": "Tigre",
    "rol": "Local",
    "prom": 3.88,
    "FD": 1.1163829193413342
  },
  {
    "liga": "America - Argentina",
    "equipo": "Tigre",
    "rol": "Visitante",
    "prom": 4.75,
    "FD": 0.8034279592929835
  },
  {
    "liga": "America - Argentina",
    "equipo": "Belgrano",
    "rol": "Local",
    "prom": 4.44,
    "FD": 0.898688250069774
  },
  {
    "liga": "America - Argentina",
    "equipo": "Belgrano",
    "rol": "Visitante",
    "prom": 2.91,
    "FD": 1.1328334226031065
  },
  {
    "liga": "America - Argentina",
    "equipo": "Lanús",
    "rol": "Local",
    "prom": 4.38,
    "FD": 0.8372871895060007
  },
  {
    "liga": "America - Argentina",
    "equipo": "Lanús",
    "rol": "Visitante",
    "prom": 3.11,
    "FD": 1.0484734868773433
  },
  {
    "liga": "America - Argentina",
    "equipo": "Sarmiento",
    "rol": "Local",
    "prom": 4.88,
    "FD": 1.3954786491766678
  },
  {
    "liga": "America - Argentina",
    "equipo": "Sarmiento",
    "rol": "Visitante",
    "prom": 2.13,
    "FD": 1.130824852704874
  },
  {
    "liga": "America - Argentina",
    "equipo": "Gimnasia y Esgrima",
    "rol": "Local",
    "prom": 4.5,
    "FD": 1.0466089868825008
  },
  {
    "liga": "America - Argentina",
    "equipo": "Gimnasia y Esgrima",
    "rol": "Visitante",
    "prom": 2.38,
    "FD": 1.4823245848955544
  },
  {
    "liga": "America - Argentina",
    "equipo": "Banfield",
    "rol": "Local",
    "prom": 5.25,
    "FD": 0.907061121964834
  },
  {
    "liga": "America - Argentina",
    "equipo": "Banfield",
    "rol": "Visitante",
    "prom": 2.0,
    "FD": 1.2814675950723087
  },
  {
    "liga": "America - Argentina",
    "equipo": "Vélez Sarsfield",
    "rol": "Local",
    "prom": 5.67,
    "FD": 1.1777839799051075
  },
  {
    "liga": "America - Argentina",
    "equipo": "Vélez Sarsfield",
    "rol": "Visitante",
    "prom": 3.0,
    "FD": 0.9299678628816284
  },
  {
    "liga": "America - Argentina",
    "equipo": "Newells Old Boys",
    "rol": "Local",
    "prom": 4.25,
    "FD": 1.0466089868825008
  },
  {
    "liga": "America - Argentina",
    "equipo": "Newells Old Boys",
    "rol": "Visitante",
    "prom": 2.63,
    "FD": 1.33168184252812
  },
  {
    "liga": "America - Argentina",
    "equipo": "Barracas Central",
    "rol": "Local",
    "prom": 2.25,
    "FD": 1.082891431761094
  },
  {
    "liga": "America - Argentina",
    "equipo": "Barracas Central",
    "rol": "Visitante",
    "prom": 1.75,
    "FD": 0.9540707016604179
  },
  {
    "liga": "Europa - Israel",
    "equipo": "Hapoel Be'er Sheva",
    "rol": "Local",
    "prom": 6.22,
    "FD": 0.7586317135549872
  },
  {
    "liga": "Europa - Israel",
    "equipo": "Hapoel Be'er Sheva",
    "rol": "Visitante",
    "prom": 5.72,
    "FD": 0.7588243981686604
  },
  {
    "liga": "Europa - Israel",
    "equipo": "Maccabi Haifa",
    "rol": "Local",
    "prom": 5.56,
    "FD": 0.8570971867007672
  },
  {
    "liga": "Europa - Israel",
    "equipo": "Maccabi Haifa",
    "rol": "Visitante",
    "prom": 5.39,
    "FD": 0.8270565647614827
  },
  {
    "liga": "Europa - Israel",
    "equipo": "Maccabi Tel Aviv",
    "rol": "Local",
    "prom": 5.72,
    "FD": 0.7205882352941176
  },
  {
    "liga": "Europa - Israel",
    "equipo": "Maccabi Tel Aviv",
    "rol": "Visitante",
    "prom": 5.88,
    "FD": 0.789839019347216
  },
  {
    "liga": "Europa - Israel",
    "equipo": "Beitar Jerusalem",
    "rol": "Local",
    "prom": 6.11,
    "FD": 0.7586317135549872
  },
  {
    "liga": "Europa - Israel",
    "equipo": "Beitar Jerusalem",
    "rol": "Visitante",
    "prom": 5.44,
    "FD": 0.769162605228179
  },
  {
    "liga": "Europa - Israel",
    "equipo": "Hapoel Tel Aviv",
    "rol": "Local",
    "prom": 5.65,
    "FD": 0.9734654731457799
  },
  {
    "liga": "Europa - Israel",
    "equipo": "Hapoel Tel Aviv",
    "rol": "Visitante",
    "prom": 4.78,
    "FD": 0.769162605228179
  },
  {
    "liga": "Europa - Israel",
    "equipo": "Hapoel Petah Tikva",
    "rol": "Local",
    "prom": 5.0,
    "FD": 1.0070332480818414
  },
  {
    "liga": "Europa - Israel",
    "equipo": "Hapoel Petah Tikva",
    "rol": "Visitante",
    "prom": 4.78,
    "FD": 1.0689706099542164
  },
  {
    "liga": "Europa - Israel",
    "equipo": "Maccabi Netanya",
    "rol": "Local",
    "prom": 5.06,
    "FD": 1.0406010230179028
  },
  {
    "liga": "Europa - Israel",
    "equipo": "Maccabi Netanya",
    "rol": "Visitante",
    "prom": 3.94,
    "FD": 0.9573179737114162
  },
  {
    "liga": "Europa - Israel",
    "equipo": "Hapoel Haifa",
    "rol": "Local",
    "prom": 4.47,
    "FD": 1.1054987212276215
  },
  {
    "liga": "Europa - Israel",
    "equipo": "Hapoel Haifa",
    "rol": "Visitante",
    "prom": 4.75,
    "FD": 1.149608625018461
  },
  {
    "liga": "Europa - Israel",
    "equipo": "Ashdod",
    "rol": "Local",
    "prom": 3.69,
    "FD": 1.2039641943734014
  },
  {
    "liga": "Europa - Israel",
    "equipo": "Ashdod",
    "rol": "Visitante",
    "prom": 4.18,
    "FD": 1.0462265544232756
  },
  {
    "liga": "Europa - Israel",
    "equipo": "Ironi Kiryat Shmona",
    "rol": "Local",
    "prom": 3.82,
    "FD": 1.1323529411764703
  },
  {
    "liga": "Europa - Israel",
    "equipo": "Ironi Kiryat Shmona",
    "rol": "Visitante",
    "prom": 3.75,
    "FD": 0.930438635356668
  },
  {
    "liga": "Europa - Israel",
    "equipo": "Maccabi Bnei Raina",
    "rol": "Local",
    "prom": 4.0,
    "FD": 1.020460358056266
  },
  {
    "liga": "Europa - Israel",
    "equipo": "Maccabi Bnei Raina",
    "rol": "Visitante",
    "prom": 4.24,
    "FD": 1.0834440998375425
  },
  {
    "liga": "Europa - Israel",
    "equipo": "Hapoel Katamon",
    "rol": "Local",
    "prom": 3.69,
    "FD": 1.0495524296675192
  },
  {
    "liga": "Europa - Israel",
    "equipo": "Hapoel Katamon",
    "rol": "Visitante",
    "prom": 3.82,
    "FD": 1.0834440998375425
  },
  {
    "liga": "Europa - Israel",
    "equipo": "Ironi Tiberias",
    "rol": "Local",
    "prom": 4.25,
    "FD": 1.1748721227621484
  },
  {
    "liga": "Europa - Israel",
    "equipo": "Ironi Tiberias",
    "rol": "Visitante",
    "prom": 2.65,
    "FD": 1.4473489883325947
  },
  {
    "liga": "Europa - Israel",
    "equipo": "Bnei Sakhnin",
    "rol": "Local",
    "prom": 3.65,
    "FD": 1.197250639386189
  },
  {
    "liga": "Europa - Israel",
    "equipo": "Bnei Sakhnin",
    "rol": "Visitante",
    "prom": 2.5,
    "FD": 1.319155220794565
  },
  {
    "liga": "Africa - Saudi",
    "equipo": "Al Qadsiah",
    "rol": "Local",
    "prom": 8.53,
    "FD": 0.6470165348670022
  },
  {
    "liga": "Africa - Saudi",
    "equipo": "Al Qadsiah",
    "rol": "Visitante",
    "prom": 6.35,
    "FD": 0.6728110599078341
  },
  {
    "liga": "Africa - Saudi",
    "equipo": "Al Nassr",
    "rol": "Local",
    "prom": 7.29,
    "FD": 0.608195542774982
  },
  {
    "liga": "Africa - Saudi",
    "equipo": "Al Nassr",
    "rol": "Visitante",
    "prom": 6.65,
    "FD": 0.6064516129032258
  },
  {
    "liga": "Africa - Saudi",
    "equipo": "Al Ittihad",
    "rol": "Local",
    "prom": 6.94,
    "FD": 0.7872034507548527
  },
  {
    "liga": "Africa - Saudi",
    "equipo": "Al Ittihad",
    "rol": "Visitante",
    "prom": 6.06,
    "FD": 0.7483870967741935
  },
  {
    "liga": "Africa - Saudi",
    "equipo": "Al Hilal",
    "rol": "Local",
    "prom": 6.35,
    "FD": 0.6987778576563624
  },
  {
    "liga": "Africa - Saudi",
    "equipo": "Al Hilal",
    "rol": "Visitante",
    "prom": 6.65,
    "FD": 0.6728110599078341
  },
  {
    "liga": "Africa - Saudi",
    "equipo": "Al-Ahli",
    "rol": "Local",
    "prom": 6.24,
    "FD": 0.7483824586628325
  },
  {
    "liga": "Africa - Saudi",
    "equipo": "Al-Ahli",
    "rol": "Visitante",
    "prom": 4.94,
    "FD": 0.6617511520737327
  },
  {
    "liga": "Africa - Saudi",
    "equipo": "Al Shabab",
    "rol": "Local",
    "prom": 5.71,
    "FD": 1.1538461538461537
  },
  {
    "liga": "Africa - Saudi",
    "equipo": "Al Shabab",
    "rol": "Visitante",
    "prom": 5.06,
    "FD": 1.0414746543778803
  },
  {
    "liga": "Africa - Saudi",
    "equipo": "Al Fateh",
    "rol": "Local",
    "prom": 5.53,
    "FD": 1.1538461538461537
  },
  {
    "liga": "Africa - Saudi",
    "equipo": "Al Fateh",
    "rol": "Visitante",
    "prom": 4.59,
    "FD": 1.094930875576037
  },
  {
    "liga": "Africa - Saudi",
    "equipo": "Al Riyadh",
    "rol": "Local",
    "prom": 5.29,
    "FD": 1.0913012221423435
  },
  {
    "liga": "Africa - Saudi",
    "equipo": "Al Riyadh",
    "rol": "Visitante",
    "prom": 5.06,
    "FD": 1.334562211981567
  },
  {
    "liga": "Africa - Saudi",
    "equipo": "Al Khaleej",
    "rol": "Local",
    "prom": 5.0,
    "FD": 1.0654205607476637
  },
  {
    "liga": "Africa - Saudi",
    "equipo": "Al Khaleej",
    "rol": "Visitante",
    "prom": 4.88,
    "FD": 0.8884792626728112
  },
  {
    "liga": "Africa - Saudi",
    "equipo": "Neom SC",
    "rol": "Local",
    "prom": 4.71,
    "FD": 0.8238677210639826
  },
  {
    "liga": "Africa - Saudi",
    "equipo": "Neom SC",
    "rol": "Visitante",
    "prom": 4.82,
    "FD": 0.9216589861751152
  },
  {
    "liga": "Africa - Saudi",
    "equipo": "Al Fayha",
    "rol": "Local",
    "prom": 4.29,
    "FD": 1.1171818835370237
  },
  {
    "liga": "Africa - Saudi",
    "equipo": "Al Fayha",
    "rol": "Visitante",
    "prom": 4.76,
    "FD": 1.1170506912442395
  },
  {
    "liga": "Africa - Saudi",
    "equipo": "Damac",
    "rol": "Local",
    "prom": 4.76,
    "FD": 1.231488138030194
  },
  {
    "liga": "Africa - Saudi",
    "equipo": "Damac",
    "rol": "Visitante",
    "prom": 3.41,
    "FD": 1.2571428571428573
  },
  {
    "liga": "Africa - Saudi",
    "equipo": "Al Kholood",
    "rol": "Local",
    "prom": 4.35,
    "FD": 1.1667864845434939
  },
  {
    "liga": "Africa - Saudi",
    "equipo": "Al Kholood",
    "rol": "Visitante",
    "prom": 3.82,
    "FD": 0.975115207373272
  },
  {
    "liga": "Africa - Saudi",
    "equipo": "Al Hazm",
    "rol": "Local",
    "prom": 4.65,
    "FD": 1.0395398993529834
  },
  {
    "liga": "Africa - Saudi",
    "equipo": "Al Hazm",
    "rol": "Visitante",
    "prom": 4.06,
    "FD": 1.0304147465437787
  },
  {
    "liga": "Africa - Saudi",
    "equipo": "Al Najma",
    "rol": "Local",
    "prom": 4.41,
    "FD": 1.4579439252336448
  },
  {
    "liga": "Africa - Saudi",
    "equipo": "Al Najma",
    "rol": "Visitante",
    "prom": 3.0,
    "FD": 1.4304147465437789
  },
  {
    "liga": "Africa - Saudi",
    "equipo": "Al Taawoun",
    "rol": "Local",
    "prom": 5.82,
    "FD": 0.7354421279654925
  },
  {
    "liga": "Africa - Saudi",
    "equipo": "Al Taawoun",
    "rol": "Visitante",
    "prom": 2.12,
    "FD": 1.3235023041474654
  },
  {
    "liga": "Africa - Saudi",
    "equipo": "Al Ittifaq",
    "rol": "Local",
    "prom": 3.65,
    "FD": 1.2552120776419842
  },
  {
    "liga": "Africa - Saudi",
    "equipo": "Al Ittifaq",
    "rol": "Visitante",
    "prom": 4.06,
    "FD": 0.8682027649769586
  },
  {
    "liga": "Africa - Saudi",
    "equipo": "Al Okhdood",
    "rol": "Local",
    "prom": 4.12,
    "FD": 1.2185478073328542
  },
  {
    "liga": "Africa - Saudi",
    "equipo": "Al Okhdood",
    "rol": "Visitante",
    "prom": 3.18,
    "FD": 1.3548387096774193
  },
  {
    "liga": "Africa - Egipto",
    "equipo": "Al-Ahly",
    "rol": "Local",
    "prom": 6.0,
    "FD": 0.6754791804362194
  },
  {
    "liga": "Africa - Egipto",
    "equipo": "Al-Ahly",
    "rol": "Visitante",
    "prom": 7.07,
    "FD": 0.8483991516008484
  },
  {
    "liga": "Africa - Egipto",
    "equipo": "Pyramids",
    "rol": "Local",
    "prom": 6.43,
    "FD": 0.8096497025776602
  },
  {
    "liga": "Africa - Egipto",
    "equipo": "Pyramids",
    "rol": "Visitante",
    "prom": 6.0,
    "FD": 0.9714170285829714
  },
  {
    "liga": "Africa - Egipto",
    "equipo": "Wadi Degla",
    "rol": "Local",
    "prom": 5.06,
    "FD": 0.7888301387970919
  },
  {
    "liga": "Africa - Egipto",
    "equipo": "Wadi Degla",
    "rol": "Visitante",
    "prom": 5.47,
    "FD": 0.735986264013736
  },
  {
    "liga": "Africa - Egipto",
    "equipo": "Enppi",
    "rol": "Local",
    "prom": 6.55,
    "FD": 0.9253139458030403
  },
  {
    "liga": "Africa - Egipto",
    "equipo": "Enppi",
    "rol": "Visitante",
    "prom": 4.33,
    "FD": 0.9756590243409756
  },
  {
    "liga": "Africa - Egipto",
    "equipo": "National Bank of Egypt",
    "rol": "Local",
    "prom": 6.24,
    "FD": 0.9391936549900858
  },
  {
    "liga": "Africa - Egipto",
    "equipo": "National Bank of Egypt",
    "rol": "Visitante",
    "prom": 4.67,
    "FD": 0.8908191091808909
  },
  {
    "liga": "Africa - Egipto",
    "equipo": "Tala'ea El Geish",
    "rol": "Local",
    "prom": 4.8,
    "FD": 0.9415069398545935
  },
  {
    "liga": "Africa - Egipto",
    "equipo": "Tala'ea El Geish",
    "rol": "Visitante",
    "prom": 5.0,
    "FD": 0.7868902131097869
  },
  {
    "liga": "Africa - Egipto",
    "equipo": "Modern Sport",
    "rol": "Local",
    "prom": 6.0,
    "FD": 0.9970257766027758
  },
  {
    "liga": "Africa - Egipto",
    "equipo": "Modern Sport",
    "rol": "Visitante",
    "prom": 4.19,
    "FD": 0.982022017977982
  },
  {
    "liga": "Africa - Egipto",
    "equipo": "Zamalek",
    "rol": "Local",
    "prom": 5.71,
    "FD": 0.8258426966292134
  },
  {
    "liga": "Africa - Egipto",
    "equipo": "Zamalek",
    "rol": "Visitante",
    "prom": 4.0,
    "FD": 0.8653671346328654
  },
  {
    "liga": "Africa - Egipto",
    "equipo": "Al-Mokawloon",
    "rol": "Local",
    "prom": 5.0,
    "FD": 0.966953073364177
  },
  {
    "liga": "Africa - Egipto",
    "equipo": "Al-Mokawloon",
    "rol": "Visitante",
    "prom": 4.4,
    "FD": 1.1177658822341177
  },
  {
    "liga": "Africa - Egipto",
    "equipo": "Pharco",
    "rol": "Local",
    "prom": 4.19,
    "FD": 1.084930601454065
  },
  {
    "liga": "Africa - Egipto",
    "equipo": "Pharco",
    "rol": "Visitante",
    "prom": 4.75,
    "FD": 1.0880719119280882
  },
  {
    "liga": "Africa - Egipto",
    "equipo": "Ismaily",
    "rol": "Local",
    "prom": 3.62,
    "FD": 1.0132187706543292
  },
  {
    "liga": "Africa - Egipto",
    "equipo": "Ismaily",
    "rol": "Visitante",
    "prom": 4.37,
    "FD": 1.0159579840420159
  },
  {
    "liga": "Africa - Egipto",
    "equipo": "El-Ittihad El-Iskandary",
    "rol": "Local",
    "prom": 4.07,
    "FD": 1.1265697290152017
  },
  {
    "liga": "Africa - Egipto",
    "equipo": "El-Ittihad El-Iskandary",
    "rol": "Visitante",
    "prom": 4.41,
    "FD": 1.1114028885971114
  },
  {
    "liga": "Africa - Egipto",
    "equipo": "Zed FC",
    "rol": "Local",
    "prom": 3.6,
    "FD": 0.9253139458030403
  },
  {
    "liga": "Africa - Egipto",
    "equipo": "Zed FC",
    "rol": "Visitante",
    "prom": 4.06,
    "FD": 1.2344207655792345
  },
  {
    "liga": "Africa - Egipto",
    "equipo": "Kahraba Ismailia",
    "rol": "Local",
    "prom": 4.53,
    "FD": 1.0224719101123596
  },
  {
    "liga": "Africa - Egipto",
    "equipo": "Kahraba Ismailia",
    "rol": "Visitante",
    "prom": 3.77,
    "FD": 1.0923139076860924
  },
  {
    "liga": "Africa - Egipto",
    "equipo": "Ceramica Cleopatra",
    "rol": "Local",
    "prom": 3.69,
    "FD": 1.1219431592861864
  },
  {
    "liga": "Africa - Egipto",
    "equipo": "Ceramica Cleopatra",
    "rol": "Visitante",
    "prom": 4.0,
    "FD": 0.945965054034946
  },
  {
    "liga": "Africa - Egipto",
    "equipo": "Al-Masry",
    "rol": "Local",
    "prom": 4.15,
    "FD": 0.8906146728354263
  },
  {
    "liga": "Africa - Egipto",
    "equipo": "Al-Masry",
    "rol": "Visitante",
    "prom": 3.69,
    "FD": 0.9289970710029289
  },
  {
    "liga": "Africa - Egipto",
    "equipo": "Smouha Sporting Club",
    "rol": "Local",
    "prom": 4.36,
    "FD": 1.0409781890284204
  },
  {
    "liga": "Africa - Egipto",
    "equipo": "Smouha Sporting Club",
    "rol": "Visitante",
    "prom": 3.25,
    "FD": 1.2026057973942026
  },
  {
    "liga": "Africa - Egipto",
    "equipo": "Petrojet",
    "rol": "Local",
    "prom": 3.47,
    "FD": 1.5892267019167217
  },
  {
    "liga": "Africa - Egipto",
    "equipo": "Petrojet",
    "rol": "Visitante",
    "prom": 3.71,
    "FD": 1.085950914049086
  },
  {
    "liga": "Africa - Egipto",
    "equipo": "El Gouna",
    "rol": "Local",
    "prom": 4.07,
    "FD": 1.0803040317250496
  },
  {
    "liga": "Africa - Egipto",
    "equipo": "El Gouna",
    "rol": "Visitante",
    "prom": 2.94,
    "FD": 1.1856378143621855
  },
  {
    "liga": "Africa - Egipto",
    "equipo": "Haras El Hodood",
    "rol": "Local",
    "prom": 4.89,
    "FD": 1.2075346992729676
  },
  {
    "liga": "Africa - Egipto",
    "equipo": "Haras El Hodood",
    "rol": "Visitante",
    "prom": 3.79,
    "FD": 0.9396020603979396
  },
  {
    "liga": "Africa - Egipto",
    "equipo": "Ghazl El Mehalla",
    "rol": "Local",
    "prom": 3.25,
    "FD": 1.027098479841375
  },
  {
    "liga": "Africa - Egipto",
    "equipo": "Ghazl El Mehalla",
    "rol": "Visitante",
    "prom": 3.63,
    "FD": 0.9947480052519948
  },
  {
    "liga": "America - Peru",
    "equipo": "Universitario",
    "rol": "Local",
    "prom": 6.88,
    "FD": 0.398936170212766
  },
  {
    "liga": "America - Peru",
    "equipo": "Universitario",
    "rol": "Visitante",
    "prom": 5.25,
    "FD": 0.625935764308138
  },
  {
    "liga": "America - Peru",
    "equipo": "Sporting Cristal",
    "rol": "Local",
    "prom": 7.25,
    "FD": 0.8643617021276596
  },
  {
    "liga": "America - Peru",
    "equipo": "Sporting Cristal",
    "rol": "Visitante",
    "prom": 4.13,
    "FD": 0.9519439748852933
  },
  {
    "liga": "America - Peru",
    "equipo": "Cienciano",
    "rol": "Local",
    "prom": 4.88,
    "FD": 0.7659574468085106
  },
  {
    "liga": "America - Peru",
    "equipo": "Cienciano",
    "rol": "Visitante",
    "prom": 6.0,
    "FD": 0.9519439748852933
  },
  {
    "liga": "America - Peru",
    "equipo": "Melgar",
    "rol": "Local",
    "prom": 5.63,
    "FD": 1.297872340425532
  },
  {
    "liga": "America - Peru",
    "equipo": "Melgar",
    "rol": "Visitante",
    "prom": 4.0,
    "FD": 1.0062786766481524
  },
  {
    "liga": "America - Peru",
    "equipo": "Atlético Grau",
    "rol": "Local",
    "prom": 4.86,
    "FD": 0.797872340425532
  },
  {
    "liga": "America - Peru",
    "equipo": "Atlético Grau",
    "rol": "Visitante",
    "prom": 3.78,
    "FD": 1.0149722289302099
  },
  {
    "liga": "America - Peru",
    "equipo": "Sport Boys",
    "rol": "Local",
    "prom": 5.38,
    "FD": 0.7659574468085106
  },
  {
    "liga": "America - Peru",
    "equipo": "Sport Boys",
    "rol": "Visitante",
    "prom": 3.75,
    "FD": 0.9236899299686064
  },
  {
    "liga": "America - Peru",
    "equipo": "Alianza Lima",
    "rol": "Local",
    "prom": 4.38,
    "FD": 0.43351063829787234
  },
  {
    "liga": "America - Peru",
    "equipo": "Alianza Lima",
    "rol": "Visitante",
    "prom": 3.25,
    "FD": 0.6802704660709972
  },
  {
    "liga": "America - Peru",
    "equipo": "Los Chankas",
    "rol": "Local",
    "prom": 4.5,
    "FD": 1.497340425531915
  },
  {
    "liga": "America - Peru",
    "equipo": "Los Chankas",
    "rol": "Visitante",
    "prom": 3.5,
    "FD": 0.897609273122434
  },
  {
    "liga": "America - Peru",
    "equipo": "ADT Tarma",
    "rol": "Local",
    "prom": 4.38,
    "FD": 1.196808510638298
  },
  {
    "liga": "America - Peru",
    "equipo": "ADT Tarma",
    "rol": "Visitante",
    "prom": 2.75,
    "FD": 1.2236174836995892
  },
  {
    "liga": "America - Peru",
    "equipo": "UTC",
    "rol": "Local",
    "prom": 4.13,
    "FD": 1.2632978723404256
  },
  {
    "liga": "America - Peru",
    "equipo": "UTC",
    "rol": "Visitante",
    "prom": 4.75,
    "FD": 1.16928278193673
  },
  {
    "liga": "America - Peru",
    "equipo": "Sport Huancayo",
    "rol": "Local",
    "prom": 5.38,
    "FD": 0.9308510638297873
  },
  {
    "liga": "America - Peru",
    "equipo": "Sport Huancayo",
    "rol": "Visitante",
    "prom": 3.0,
    "FD": 0.897609273122434
  },
  {
    "liga": "America - Peru",
    "equipo": "Deportivo Garcilaso",
    "rol": "Local",
    "prom": 3.25,
    "FD": 0.9308510638297873
  },
  {
    "liga": "America - Peru",
    "equipo": "Deportivo Garcilaso",
    "rol": "Visitante",
    "prom": 4.0,
    "FD": 1.114948080173871
  },
  {
    "liga": "America - Peru",
    "equipo": "Cusco FC",
    "rol": "Local",
    "prom": 3.88,
    "FD": 0.7659574468085106
  },
  {
    "liga": "America - Peru",
    "equipo": "Cusco FC",
    "rol": "Visitante",
    "prom": 3.25,
    "FD": 1.0062786766481524
  },
  {
    "liga": "America - Peru",
    "equipo": "Juan Pablo II College",
    "rol": "Local",
    "prom": 3.67,
    "FD": 1.446808510638298
  },
  {
    "liga": "America - Peru",
    "equipo": "Juan Pablo II College",
    "rol": "Visitante",
    "prom": 3.86,
    "FD": 1.5213716493600578
  },
  {
    "liga": "America - Peru",
    "equipo": "Comerciantes Unidos",
    "rol": "Local",
    "prom": 3.56,
    "FD": 1.1808510638297873
  },
  {
    "liga": "America - Peru",
    "equipo": "Comerciantes Unidos",
    "rol": "Visitante",
    "prom": 4.14,
    "FD": 0.9323834822506639
  },
  {
    "liga": "America - Peru",
    "equipo": "Alianza Atlético",
    "rol": "Local",
    "prom": 3.88,
    "FD": 1.0319148936170213
  },
  {
    "liga": "America - Peru",
    "equipo": "Alianza Atlético",
    "rol": "Visitante",
    "prom": 3.13,
    "FD": 0.7889398695967156
  },
  {
    "liga": "America - Peru",
    "equipo": "Deportivo Moquegua",
    "rol": "Local",
    "prom": 3.13,
    "FD": 1.0638297872340425
  },
  {
    "liga": "America - Peru",
    "equipo": "Deportivo Moquegua",
    "rol": "Visitante",
    "prom": 3.25,
    "FD": 1.0606133784110117
  },
  {
    "liga": "America - Peru",
    "equipo": "FC Cajamarca",
    "rol": "Local",
    "prom": 3.86,
    "FD": 1.3670212765957446
  },
  {
    "liga": "America - Peru",
    "equipo": "FC Cajamarca",
    "rol": "Visitante",
    "prom": 2.33,
    "FD": 1.2323110359816467
  },
  {
    "liga": "America - Paraguay",
    "equipo": "Cerro Porteño",
    "rol": "Local",
    "prom": 5.27,
    "FD": 0.9515311295883185
  },
  {
    "liga": "America - Paraguay",
    "equipo": "Cerro Porteño",
    "rol": "Visitante",
    "prom": 4.6,
    "FD": 0.9705372616984403
  },
  {
    "liga": "America - Paraguay",
    "equipo": "Nacional do Paraguai",
    "rol": "Local",
    "prom": 5.18,
    "FD": 0.9515311295883185
  },
  {
    "liga": "America - Paraguay",
    "equipo": "Nacional do Paraguai",
    "rol": "Visitante",
    "prom": 4.64,
    "FD": 0.8203350664355864
  },
  {
    "liga": "America - Paraguay",
    "equipo": "Olimpia",
    "rol": "Local",
    "prom": 5.0,
    "FD": 0.8030825390387343
  },
  {
    "liga": "America - Paraguay",
    "equipo": "Olimpia",
    "rol": "Visitante",
    "prom": 4.64,
    "FD": 0.7764298093587522
  },
  {
    "liga": "America - Paraguay",
    "equipo": "Sportivo Trinidense",
    "rol": "Local",
    "prom": 4.36,
    "FD": 1.1729872236868788
  },
  {
    "liga": "America - Paraguay",
    "equipo": "Sportivo Trinidense",
    "rol": "Visitante",
    "prom": 3.91,
    "FD": 1.028307336799538
  },
  {
    "liga": "America - Paraguay",
    "equipo": "Libertad",
    "rol": "Local",
    "prom": 4.55,
    "FD": 1.0391401338470894
  },
  {
    "liga": "America - Paraguay",
    "equipo": "Libertad",
    "rol": "Visitante",
    "prom": 4.45,
    "FD": 0.8203350664355864
  },
  {
    "liga": "America - Paraguay",
    "equipo": "Sportivo Ameliano",
    "rol": "Local",
    "prom": 4.36,
    "FD": 0.8639221253295475
  },
  {
    "liga": "America - Paraguay",
    "equipo": "Sportivo Ameliano",
    "rol": "Visitante",
    "prom": 4.36,
    "FD": 1.1346042749855576
  },
  {
    "liga": "America - Paraguay",
    "equipo": "Sportivo San Lorenzo",
    "rol": "Local",
    "prom": 4.45,
    "FD": 1.1072804704928003
  },
  {
    "liga": "America - Paraguay",
    "equipo": "Sportivo San Lorenzo",
    "rol": "Visitante",
    "prom": 3.82,
    "FD": 1.1346042749855576
  },
  {
    "liga": "America - Paraguay",
    "equipo": "Guaraní",
    "rol": "Local",
    "prom": 4.0,
    "FD": 1.129182721557493
  },
  {
    "liga": "America - Paraguay",
    "equipo": "Guaraní",
    "rol": "Visitante",
    "prom": 4.64,
    "FD": 0.6516464471403813
  },
  {
    "liga": "America - Paraguay",
    "equipo": "Rubio Ñú",
    "rol": "Local",
    "prom": 3.64,
    "FD": 1.151084972622186
  },
  {
    "liga": "America - Paraguay",
    "equipo": "Rubio Ñú",
    "rol": "Visitante",
    "prom": 4.09,
    "FD": 0.9035239745811671
  },
  {
    "liga": "America - Paraguay",
    "equipo": "Deportivo Recoleta",
    "rol": "Local",
    "prom": 4.0,
    "FD": 1.1729872236868788
  },
  {
    "liga": "America - Paraguay",
    "equipo": "Deportivo Recoleta",
    "rol": "Visitante",
    "prom": 3.18,
    "FD": 1.3240901213171579
  },
  {
    "liga": "America - Paraguay",
    "equipo": "2 de Mayo",
    "rol": "Local",
    "prom": 4.73,
    "FD": 0.8395862908132223
  },
  {
    "liga": "America - Paraguay",
    "equipo": "2 de Mayo",
    "rol": "Visitante",
    "prom": 2.36,
    "FD": 0.9867128827267475
  },
  {
    "liga": "America - Paraguay",
    "equipo": "Sportivo Luqueño",
    "rol": "Local",
    "prom": 2.45,
    "FD": 0.8176840397485294
  },
  {
    "liga": "America - Paraguay",
    "equipo": "Sportivo Luqueño",
    "rol": "Visitante",
    "prom": 4.73,
    "FD": 1.4488734835355286
  },
  {
    "liga": "America - Ecuador",
    "equipo": "Independiente del Valle",
    "rol": "Local",
    "prom": 8.5,
    "FD": 0.7115135834411384
  },
  {
    "liga": "America - Ecuador",
    "equipo": "Independiente del Valle",
    "rol": "Visitante",
    "prom": 4.71,
    "FD": 0.8133665126199787
  },
  {
    "liga": "America - Ecuador",
    "equipo": "Aucas",
    "rol": "Local",
    "prom": 6.38,
    "FD": 0.8098318240620956
  },
  {
    "liga": "America - Ecuador",
    "equipo": "Aucas",
    "rol": "Visitante",
    "prom": 5.29,
    "FD": 0.7849271240668325
  },
  {
    "liga": "America - Ecuador",
    "equipo": "Técnico Universitario",
    "rol": "Local",
    "prom": 5.43,
    "FD": 0.9987063389391978
  },
  {
    "liga": "America - Ecuador",
    "equipo": "Técnico Universitario",
    "rol": "Visitante",
    "prom": 4.63,
    "FD": 1.067425050361417
  },
  {
    "liga": "America - Ecuador",
    "equipo": "Macará",
    "rol": "Local",
    "prom": 5.38,
    "FD": 1.2626131953428201
  },
  {
    "liga": "America - Ecuador",
    "equipo": "Macará",
    "rol": "Visitante",
    "prom": 4.86,
    "FD": 0.7583836947505629
  },
  {
    "liga": "America - Ecuador",
    "equipo": "LDU",
    "rol": "Local",
    "prom": 6.57,
    "FD": 0.7399741267787839
  },
  {
    "liga": "America - Ecuador",
    "equipo": "LDU",
    "rol": "Visitante",
    "prom": 4.63,
    "FD": 1.1375755421258442
  },
  {
    "liga": "America - Ecuador",
    "equipo": "Universidad Católica",
    "rol": "Local",
    "prom": 4.33,
    "FD": 1.1203104786545925
  },
  {
    "liga": "America - Ecuador",
    "equipo": "Universidad Católica",
    "rol": "Visitante",
    "prom": 5.43,
    "FD": 0.6768574475648773
  },
  {
    "liga": "America - Ecuador",
    "equipo": "Mushuc Runa",
    "rol": "Local",
    "prom": 6.13,
    "FD": 1.1642949547218628
  },
  {
    "liga": "America - Ecuador",
    "equipo": "Mushuc Runa",
    "rol": "Visitante",
    "prom": 3.57,
    "FD": 0.9214361891219339
  },
  {
    "liga": "America - Ecuador",
    "equipo": "Manta FC",
    "rol": "Local",
    "prom": 5.14,
    "FD": 0.8874514877102199
  },
  {
    "liga": "America - Ecuador",
    "equipo": "Manta FC",
    "rol": "Visitante",
    "prom": 4.38,
    "FD": 1.1849745230477544
  },
  {
    "liga": "America - Ecuador",
    "equipo": "Barcelona-SC",
    "rol": "Local",
    "prom": 5.43,
    "FD": 0.8874514877102199
  },
  {
    "liga": "America - Ecuador",
    "equipo": "Barcelona-SC",
    "rol": "Visitante",
    "prom": 3.63,
    "FD": 0.9726270885175968
  },
  {
    "liga": "America - Ecuador",
    "equipo": "Emelec",
    "rol": "Local",
    "prom": 5.88,
    "FD": 0.7115135834411384
  },
  {
    "liga": "America - Ecuador",
    "equipo": "Emelec",
    "rol": "Visitante",
    "prom": 3.86,
    "FD": 1.0825927242564284
  },
  {
    "liga": "America - Ecuador",
    "equipo": "Libertad de Loja",
    "rol": "Local",
    "prom": 4.57,
    "FD": 0.9987063389391978
  },
  {
    "liga": "America - Ecuador",
    "equipo": "Libertad de Loja",
    "rol": "Visitante",
    "prom": 3.38,
    "FD": 1.2096219931271477
  },
  {
    "liga": "America - Ecuador",
    "equipo": "Deportivo Cuenca",
    "rol": "Local",
    "prom": 4.43,
    "FD": 1.257438551099612
  },
  {
    "liga": "America - Ecuador",
    "equipo": "Deportivo Cuenca",
    "rol": "Visitante",
    "prom": 3.38,
    "FD": 0.9252281075956866
  },
  {
    "liga": "America - Ecuador",
    "equipo": "Orense",
    "rol": "Local",
    "prom": 5.5,
    "FD": 1.003880983182406
  },
  {
    "liga": "America - Ecuador",
    "equipo": "Orense",
    "rol": "Visitante",
    "prom": 2.43,
    "FD": 1.327171465813485
  },
  {
    "liga": "America - Ecuador",
    "equipo": "Leones del Norte",
    "rol": "Local",
    "prom": 3.57,
    "FD": 1.1461836998706338
  },
  {
    "liga": "America - Ecuador",
    "equipo": "Leones del Norte",
    "rol": "Visitante",
    "prom": 3.38,
    "FD": 1.1622230122052375
  },
  {
    "liga": "America - Ecuador",
    "equipo": "Delfin",
    "rol": "Local",
    "prom": 4.0,
    "FD": 1.2289780077619663
  },
  {
    "liga": "America - Ecuador",
    "equipo": "Delfin",
    "rol": "Visitante",
    "prom": 1.86,
    "FD": 1.0029624363076193
  },
  {
    "liga": "America - Ecuador",
    "equipo": "Guayaquil City",
    "rol": "Local",
    "prom": 3.57,
    "FD": 1.0711513583441137
  },
  {
    "liga": "America - Ecuador",
    "equipo": "Guayaquil City",
    "rol": "Visitante",
    "prom": 2.5,
    "FD": 0.9726270885175968
  },
  {
    "liga": "America - Venezuela",
    "equipo": "Carabobo",
    "rol": "Local",
    "prom": 5.3,
    "FD": 0.793482111229189
  },
  {
    "liga": "America - Venezuela",
    "equipo": "Carabobo",
    "rol": "Visitante",
    "prom": 5.63,
    "FD": 0.8224408870612426
  },
  {
    "liga": "America - Venezuela",
    "equipo": "Portuguesa",
    "rol": "Local",
    "prom": 5.7,
    "FD": 0.9918526390364862
  },
  {
    "liga": "America - Venezuela",
    "equipo": "Portuguesa",
    "rol": "Visitante",
    "prom": 3.0,
    "FD": 1.233661330591864
  },
  {
    "liga": "America - Venezuela",
    "equipo": "Deportivo Táchira",
    "rol": "Local",
    "prom": 4.89,
    "FD": 0.771165426850868
  },
  {
    "liga": "America - Venezuela",
    "equipo": "Deportivo Táchira",
    "rol": "Visitante",
    "prom": 5.11,
    "FD": 0.5942135409017478
  },
  {
    "liga": "America - Venezuela",
    "equipo": "Caracas",
    "rol": "Local",
    "prom": 3.57,
    "FD": 1.2745306411618846
  },
  {
    "liga": "America - Venezuela",
    "equipo": "Caracas",
    "rol": "Visitante",
    "prom": 5.5,
    "FD": 0.8224408870612426
  },
  {
    "liga": "America - Venezuela",
    "equipo": "Deportivo La Guaira",
    "rol": "Local",
    "prom": 5.25,
    "FD": 0.4661707403471485
  },
  {
    "liga": "America - Venezuela",
    "equipo": "Deportivo La Guaira",
    "rol": "Visitante",
    "prom": 5.1,
    "FD": 0.8018798648847115
  },
  {
    "liga": "America - Venezuela",
    "equipo": "Academia Puerto Cabello",
    "rol": "Local",
    "prom": 5.22,
    "FD": 0.7984413744243715
  },
  {
    "liga": "America - Venezuela",
    "equipo": "Academia Puerto Cabello",
    "rol": "Visitante",
    "prom": 4.78,
    "FD": 0.7319723894845059
  },
  {
    "liga": "America - Venezuela",
    "equipo": "Zamora",
    "rol": "Local",
    "prom": 6.0,
    "FD": 0.9918526390364862
  },
  {
    "liga": "America - Venezuela",
    "equipo": "Zamora",
    "rol": "Visitante",
    "prom": 3.57,
    "FD": 0.9992656777794099
  },
  {
    "liga": "America - Venezuela",
    "equipo": "Academia Anzoátegui",
    "rol": "Local",
    "prom": 6.67,
    "FD": 1.321643641516118
  },
  {
    "liga": "America - Venezuela",
    "equipo": "Academia Anzoátegui",
    "rol": "Visitante",
    "prom": 3.14,
    "FD": 1.1164635041856368
  },
  {
    "liga": "America - Venezuela",
    "equipo": "UCV",
    "rol": "Local",
    "prom": 4.88,
    "FD": 1.0538434289762666
  },
  {
    "liga": "America - Venezuela",
    "equipo": "UCV",
    "rol": "Visitante",
    "prom": 3.5,
    "FD": 0.9869290644734912
  },
  {
    "liga": "America - Venezuela",
    "equipo": "Estudiantes de Mérida",
    "rol": "Local",
    "prom": 5.56,
    "FD": 1.1307120085015943
  },
  {
    "liga": "America - Venezuela",
    "equipo": "Estudiantes de Mérida",
    "rol": "Visitante",
    "prom": 2.78,
    "FD": 1.1884270818034957
  },
  {
    "liga": "America - Venezuela",
    "equipo": "Trujillanos",
    "rol": "Local",
    "prom": 3.86,
    "FD": 0.7091746369110876
  },
  {
    "liga": "America - Venezuela",
    "equipo": "Trujillanos",
    "rol": "Visitante",
    "prom": 4.0,
    "FD": 0.9930973711264505
  },
  {
    "liga": "America - Venezuela",
    "equipo": "Rayo Zuliano",
    "rol": "Local",
    "prom": 4.0,
    "FD": 1.321643641516118
  },
  {
    "liga": "America - Venezuela",
    "equipo": "Rayo Zuliano",
    "rol": "Visitante",
    "prom": 3.29,
    "FD": 1.5276839477162583
  },
  {
    "liga": "America - Venezuela",
    "equipo": "Metropolitanos",
    "rol": "Local",
    "prom": 3.56,
    "FD": 1.1009564293304999
  },
  {
    "liga": "America - Venezuela",
    "equipo": "Metropolitanos",
    "rol": "Visitante",
    "prom": 3.56,
    "FD": 1.11851960640329
  },
  {
    "liga": "America - Venezuela",
    "equipo": "Monagas",
    "rol": "Local",
    "prom": 2.57,
    "FD": 1.2745306411618846
  },
  {
    "liga": "America - Venezuela",
    "equipo": "Monagas",
    "rol": "Visitante",
    "prom": 1.83,
    "FD": 1.0630048465266562
  },
  {
    "liga": "America - Bolivia",
    "equipo": "Always Ready",
    "rol": "Local",
    "prom": 8.0,
    "FD": 0.9805335255948088
  },
  {
    "liga": "America - Bolivia",
    "equipo": "Always Ready",
    "rol": "Visitante",
    "prom": 7.67,
    "FD": 1.044078720220969
  },
  {
    "liga": "America - Bolivia",
    "equipo": "San Antonio Bulo Bulo",
    "rol": "Local",
    "prom": 7.25,
    "FD": 1.2689257390050468
  },
  {
    "liga": "America - Bolivia",
    "equipo": "San Antonio Bulo Bulo",
    "rol": "Visitante",
    "prom": 4.0,
    "FD": 0.613189089653585
  },
  {
    "liga": "America - Bolivia",
    "equipo": "Bolívar",
    "rol": "Local",
    "prom": 5.75,
    "FD": 0.3460706560922855
  },
  {
    "liga": "America - Bolivia",
    "equipo": "Bolívar",
    "rol": "Visitante",
    "prom": 6.25,
    "FD": 0.8286339049372771
  },
  {
    "liga": "America - Bolivia",
    "equipo": "Real Potosí",
    "rol": "Local",
    "prom": 6.33,
    "FD": 1.7695746214852197
  },
  {
    "liga": "America - Bolivia",
    "equipo": "Real Potosí",
    "rol": "Visitante",
    "prom": 3.67,
    "FD": 0.7973299574174243
  },
  {
    "liga": "America - Bolivia",
    "equipo": "ABB",
    "rol": "Local",
    "prom": 8.0,
    "FD": 1.0774333093006487
  },
  {
    "liga": "America - Bolivia",
    "equipo": "ABB",
    "rol": "Visitante",
    "prom": 4.33,
    "FD": 0.6757969846932903
  },
  {
    "liga": "America - Bolivia",
    "equipo": "Blooming",
    "rol": "Local",
    "prom": 6.0,
    "FD": 0.6160057678442681
  },
  {
    "liga": "America - Bolivia",
    "equipo": "Blooming",
    "rol": "Visitante",
    "prom": 3.25,
    "FD": 1.4270917251697548
  },
  {
    "liga": "America - Bolivia",
    "equipo": "The Strongest",
    "rol": "Local",
    "prom": 6.33,
    "FD": 0.6160057678442681
  },
  {
    "liga": "America - Bolivia",
    "equipo": "The Strongest",
    "rol": "Visitante",
    "prom": 4.25,
    "FD": 1.1508804235239958
  },
  {
    "liga": "America - Bolivia",
    "equipo": "Nacional Potosí",
    "rol": "Local",
    "prom": 4.5,
    "FD": 0.9228550829127612
  },
  {
    "liga": "America - Bolivia",
    "equipo": "Nacional Potosí",
    "rol": "Visitante",
    "prom": 3.4,
    "FD": 0.9943606859247325
  },
  {
    "liga": "America - Bolivia",
    "equipo": "Guabirá",
    "rol": "Local",
    "prom": 6.5,
    "FD": 0.8074981975486661
  },
  {
    "liga": "America - Bolivia",
    "equipo": "Guabirá",
    "rol": "Visitante",
    "prom": 3.75,
    "FD": 0.9207043388191967
  },
  {
    "liga": "America - Bolivia",
    "equipo": "Universitario de Vinto",
    "rol": "Local",
    "prom": 6.75,
    "FD": 1.2112472963229992
  },
  {
    "liga": "America - Bolivia",
    "equipo": "Universitario de Vinto",
    "rol": "Visitante",
    "prom": 6.67,
    "FD": 0.7973299574174243
  },
  {
    "liga": "America - Bolivia",
    "equipo": "Real Tomayapo",
    "rol": "Local",
    "prom": 3.75,
    "FD": 0.692141312184571
  },
  {
    "liga": "America - Bolivia",
    "equipo": "Real Tomayapo",
    "rol": "Visitante",
    "prom": 4.33,
    "FD": 0.7973299574174243
  },
  {
    "liga": "America - Bolivia",
    "equipo": "Real Oruro",
    "rol": "Local",
    "prom": 2.0,
    "FD": 1.384282624369142
  },
  {
    "liga": "America - Bolivia",
    "equipo": "Real Oruro",
    "rol": "Visitante",
    "prom": 5.5,
    "FD": 1.2889860743468753
  },
  {
    "liga": "America - Bolivia",
    "equipo": "Oriente Petrolero",
    "rol": "Local",
    "prom": 3.75,
    "FD": 1.1535688536409516
  },
  {
    "liga": "America - Bolivia",
    "equipo": "Oriente Petrolero",
    "rol": "Visitante",
    "prom": 4.0,
    "FD": 1.165611692945103
  },
  {
    "liga": "America - Bolivia",
    "equipo": "Aurora",
    "rol": "Local",
    "prom": 5.0,
    "FD": 0.9805335255948088
  },
  {
    "liga": "America - Bolivia",
    "equipo": "Aurora",
    "rol": "Visitante",
    "prom": 2.67,
    "FD": 0.6757969846932903
  },
  {
    "liga": "America - Bolivia",
    "equipo": "Independiente Petrolero",
    "rol": "Local",
    "prom": 3.75,
    "FD": 1.3266041816870944
  },
  {
    "liga": "America - Bolivia",
    "equipo": "Independiente Petrolero",
    "rol": "Visitante",
    "prom": 2.67,
    "FD": 1.5338934284727817
  },
  {
    "liga": "America - Bolivia",
    "equipo": "GV San Jose",
    "rol": "Local",
    "prom": 2.33,
    "FD": 0.8467195385724584
  },
  {
    "liga": "America - Bolivia",
    "equipo": "GV San Jose",
    "rol": "Visitante",
    "prom": 2.33,
    "FD": 1.2889860743468753
  },
  {
    "liga": "America - Uruguay",
    "equipo": "Racing de Montevideo",
    "rol": "Local",
    "prom": 5.89,
    "FD": 0.8360929667324928
  },
  {
    "liga": "America - Uruguay",
    "equipo": "Racing de Montevideo",
    "rol": "Visitante",
    "prom": 5.25,
    "FD": 0.8854454897620365
  },
  {
    "liga": "America - Uruguay",
    "equipo": "Nacional",
    "rol": "Local",
    "prom": 6.75,
    "FD": 0.6076257025672186
  },
  {
    "liga": "America - Uruguay",
    "equipo": "Nacional",
    "rol": "Visitante",
    "prom": 5.33,
    "FD": 0.6884338682899833
  },
  {
    "liga": "America - Uruguay",
    "equipo": "Peñarol",
    "rol": "Local",
    "prom": 5.11,
    "FD": 0.9722011241075498
  },
  {
    "liga": "America - Uruguay",
    "equipo": "Peñarol",
    "rol": "Visitante",
    "prom": 4.5,
    "FD": 0.44272274488101826
  },
  {
    "liga": "America - Uruguay",
    "equipo": "Montevideo City Torque",
    "rol": "Local",
    "prom": 4.88,
    "FD": 0.9722011241075498
  },
  {
    "liga": "America - Uruguay",
    "equipo": "Montevideo City Torque",
    "rol": "Visitante",
    "prom": 4.89,
    "FD": 0.9341449916989485
  },
  {
    "liga": "America - Uruguay",
    "equipo": "Deportivo Maldonado",
    "rol": "Local",
    "prom": 3.63,
    "FD": 0.911438553850828
  },
  {
    "liga": "America - Uruguay",
    "equipo": "Deportivo Maldonado",
    "rol": "Visitante",
    "prom": 6.33,
    "FD": 0.9828444936358606
  },
  {
    "liga": "America - Uruguay",
    "equipo": "Albion",
    "rol": "Local",
    "prom": 4.78,
    "FD": 1.161780343308522
  },
  {
    "liga": "America - Uruguay",
    "equipo": "Albion",
    "rol": "Visitante",
    "prom": 4.13,
    "FD": 1.3835085777531821
  },
  {
    "liga": "America - Uruguay",
    "equipo": "Defensor Sporting",
    "rol": "Local",
    "prom": 5.13,
    "FD": 1.0329636943642717
  },
  {
    "liga": "America - Uruguay",
    "equipo": "Defensor Sporting",
    "rol": "Visitante",
    "prom": 4.67,
    "FD": 1.0337576092971776
  },
  {
    "liga": "America - Uruguay",
    "equipo": "Wanderers",
    "rol": "Local",
    "prom": 5.22,
    "FD": 1.2687224669603523
  },
  {
    "liga": "America - Uruguay",
    "equipo": "Wanderers",
    "rol": "Visitante",
    "prom": 3.88,
    "FD": 0.9407858328721638
  },
  {
    "liga": "America - Uruguay",
    "equipo": "Juventud de Las Piedras",
    "rol": "Local",
    "prom": 4.89,
    "FD": 0.7826219049065776
  },
  {
    "liga": "America - Uruguay",
    "equipo": "Juventud de Las Piedras",
    "rol": "Visitante",
    "prom": 4.0,
    "FD": 0.9806308799114554
  },
  {
    "liga": "America - Uruguay",
    "equipo": "Liverpool de Montevideo",
    "rol": "Local",
    "prom": 4.5,
    "FD": 1.1544888348777154
  },
  {
    "liga": "America - Uruguay",
    "equipo": "Liverpool de Montevideo",
    "rol": "Visitante",
    "prom": 3.56,
    "FD": 0.9097952407304926
  },
  {
    "liga": "America - Uruguay",
    "equipo": "Progreso",
    "rol": "Local",
    "prom": 4.11,
    "FD": 0.9989366550205074
  },
  {
    "liga": "America - Uruguay",
    "equipo": "Progreso",
    "rol": "Visitante",
    "prom": 3.75,
    "FD": 1.0249031543995573
  },
  {
    "liga": "America - Uruguay",
    "equipo": "Cerro Largo",
    "rol": "Local",
    "prom": 2.5,
    "FD": 0.9430350903843232
  },
  {
    "liga": "America - Uruguay",
    "equipo": "Cerro Largo",
    "rol": "Visitante",
    "prom": 4.11,
    "FD": 1.2307692307692306
  },
  {
    "liga": "America - Uruguay",
    "equipo": "Danubio",
    "rol": "Local",
    "prom": 4.86,
    "FD": 0.7996354245784597
  },
  {
    "liga": "America - Uruguay",
    "equipo": "Danubio",
    "rol": "Visitante",
    "prom": 2.33,
    "FD": 1.0337576092971776
  },
  {
    "liga": "America - Uruguay",
    "equipo": "Central Español",
    "rol": "Local",
    "prom": 3.75,
    "FD": 0.911438553850828
  },
  {
    "liga": "America - Uruguay",
    "equipo": "Central Español",
    "rol": "Visitante",
    "prom": 3.11,
    "FD": 1.2307692307692306
  },
  {
    "liga": "America - Uruguay",
    "equipo": "Cerro",
    "rol": "Local",
    "prom": 2.78,
    "FD": 1.3780950934224518
  },
  {
    "liga": "America - Uruguay",
    "equipo": "Cerro",
    "rol": "Visitante",
    "prom": 3.63,
    "FD": 1.2462645268400663
  },
  {
    "liga": "America - Uruguay",
    "equipo": "Boston River",
    "rol": "Local",
    "prom": 3.56,
    "FD": 1.2687224669603523
  },
  {
    "liga": "America - Uruguay",
    "equipo": "Boston River",
    "rol": "Visitante",
    "prom": 2.63,
    "FD": 1.0514665190924184
  },
  {
    "liga": "America - Albania",
    "equipo": "Dinamo Tirana",
    "rol": "Local",
    "prom": 4.44,
    "FD": 1.0164619806637054
  },
  {
    "liga": "America - Albania",
    "equipo": "Dinamo Tirana",
    "rol": "Visitante",
    "prom": 4.9,
    "FD": 0.8033573141486811
  },
  {
    "liga": "America - Albania",
    "equipo": "Egnatia",
    "rol": "Local",
    "prom": 4.06,
    "FD": 0.9877188398223152
  },
  {
    "liga": "America - Albania",
    "equipo": "Egnatia",
    "rol": "Visitante",
    "prom": 4.55,
    "FD": 1.0431654676258992
  },
  {
    "liga": "America - Albania",
    "equipo": "Vllaznia Shkodër",
    "rol": "Local",
    "prom": 4.25,
    "FD": 0.9276195453357722
  },
  {
    "liga": "America - Albania",
    "equipo": "Vllaznia Shkodër",
    "rol": "Visitante",
    "prom": 3.89,
    "FD": 0.7601918465227818
  },
  {
    "liga": "America - Albania",
    "equipo": "Teuta Durrës",
    "rol": "Local",
    "prom": 4.56,
    "FD": 0.841390122811602
  },
  {
    "liga": "America - Albania",
    "equipo": "Teuta Durrës",
    "rol": "Visitante",
    "prom": 4.17,
    "FD": 0.8920863309352519
  },
  {
    "liga": "America - Albania",
    "equipo": "AF Elbasani",
    "rol": "Local",
    "prom": 4.3,
    "FD": 0.9276195453357722
  },
  {
    "liga": "America - Albania",
    "equipo": "AF Elbasani",
    "rol": "Visitante",
    "prom": 4.39,
    "FD": 1.064748201438849
  },
  {
    "liga": "America - Albania",
    "equipo": "Flamurtari Vlorë",
    "rol": "Local",
    "prom": 4.94,
    "FD": 1.0896263391690622
  },
  {
    "liga": "America - Albania",
    "equipo": "Flamurtari Vlorë",
    "rol": "Visitante",
    "prom": 3.44,
    "FD": 1.119904076738609
  },
  {
    "liga": "America - Albania",
    "equipo": "Partizani Tirana",
    "rol": "Local",
    "prom": 4.44,
    "FD": 0.8988764044943821
  },
  {
    "liga": "America - Albania",
    "equipo": "Partizani Tirana",
    "rol": "Visitante",
    "prom": 3.67,
    "FD": 1.2398081534772183
  },
  {
    "liga": "America - Albania",
    "equipo": "Vora",
    "rol": "Local",
    "prom": 4.0,
    "FD": 0.8858113404755684
  },
  {
    "liga": "America - Albania",
    "equipo": "Vora",
    "rol": "Visitante",
    "prom": 3.28,
    "FD": 1.0119904076738608
  },
  {
    "liga": "America - Albania",
    "equipo": "Tirana",
    "rol": "Local",
    "prom": 3.17,
    "FD": 1.1471126208518423
  },
  {
    "liga": "America - Albania",
    "equipo": "Tirana",
    "rol": "Visitante",
    "prom": 3.72,
    "FD": 1.0119904076738608
  },
  {
    "liga": "America - Albania",
    "equipo": "Bylis Ballsh",
    "rol": "Local",
    "prom": 3.44,
    "FD": 1.2777632610399792
  },
  {
    "liga": "America - Albania",
    "equipo": "Bylis Ballsh",
    "rol": "Visitante",
    "prom": 2.0,
    "FD": 1.052757793764988
  },
  {
    "liga": "America - Colombia",
    "equipo": "Millonarios",
    "rol": "Local",
    "prom": 7.3,
    "FD": 0.794194166780775
  },
  {
    "liga": "America - Colombia",
    "equipo": "Millonarios",
    "rol": "Visitante",
    "prom": 4.11,
    "FD": 0.8359220559164078
  },
  {
    "liga": "America - Colombia",
    "equipo": "Independiente Medellín",
    "rol": "Local",
    "prom": 6.4,
    "FD": 0.9037381897850199
  },
  {
    "liga": "America - Colombia",
    "equipo": "Independiente Medellín",
    "rol": "Visitante",
    "prom": 4.67,
    "FD": 0.962063447237127
  },
  {
    "liga": "America - Colombia",
    "equipo": "Once Caldas",
    "rol": "Local",
    "prom": 6.18,
    "FD": 0.8955223880597015
  },
  {
    "liga": "America - Colombia",
    "equipo": "Once Caldas",
    "rol": "Visitante",
    "prom": 4.6,
    "FD": 1.1861056198813893
  },
  {
    "liga": "America - Colombia",
    "equipo": "Deportivo Cali",
    "rol": "Local",
    "prom": 6.0,
    "FD": 1.068054224291387
  },
  {
    "liga": "America - Colombia",
    "equipo": "Deportivo Cali",
    "rol": "Visitante",
    "prom": 4.11,
    "FD": 1.1089146192224417
  },
  {
    "liga": "America - Colombia",
    "equipo": "Santa Fe",
    "rol": "Local",
    "prom": 5.18,
    "FD": 0.8462275777077913
  },
  {
    "liga": "America - Colombia",
    "equipo": "Santa Fe",
    "rol": "Visitante",
    "prom": 4.33,
    "FD": 0.8792243245787441
  },
  {
    "liga": "America - Colombia",
    "equipo": "Llaneros",
    "rol": "Local",
    "prom": 5.67,
    "FD": 1.0954402300424484
  },
  {
    "liga": "America - Colombia",
    "equipo": "Llaneros",
    "rol": "Visitante",
    "prom": 4.5,
    "FD": 1.3367222065329942
  },
  {
    "liga": "America - Colombia",
    "equipo": "Junior Barranquilla",
    "rol": "Local",
    "prom": 6.75,
    "FD": 1.2542790633986034
  },
  {
    "liga": "America - Colombia",
    "equipo": "Junior Barranquilla",
    "rol": "Visitante",
    "prom": 2.73,
    "FD": 1.078791301892121
  },
  {
    "liga": "America - Colombia",
    "equipo": "Deportes Tolima",
    "rol": "Local",
    "prom": 5.42,
    "FD": 0.9585102012871423
  },
  {
    "liga": "America - Colombia",
    "equipo": "Deportes Tolima",
    "rol": "Visitante",
    "prom": 4.18,
    "FD": 1.0957356678904264
  },
  {
    "liga": "America - Colombia",
    "equipo": "Atlético Bucaramanga",
    "rol": "Local",
    "prom": 4.89,
    "FD": 0.8215801725318362
  },
  {
    "liga": "America - Colombia",
    "equipo": "Atlético Bucaramanga",
    "rol": "Visitante",
    "prom": 4.4,
    "FD": 0.7342558599265743
  },
  {
    "liga": "America - Colombia",
    "equipo": "Atlético Nacional",
    "rol": "Local",
    "prom": 5.36,
    "FD": 0.8215801725318362
  },
  {
    "liga": "America - Colombia",
    "equipo": "Atlético Nacional",
    "rol": "Visitante",
    "prom": 4.17,
    "FD": 0.9733596912359973
  },
  {
    "liga": "America - Colombia",
    "equipo": "Alianza",
    "rol": "Local",
    "prom": 4.89,
    "FD": 1.2159386553471176
  },
  {
    "liga": "America - Colombia",
    "equipo": "Alianza",
    "rol": "Visitante",
    "prom": 3.8,
    "FD": 0.9413536665725312
  },
  {
    "liga": "America - Colombia",
    "equipo": "La Equidad",
    "rol": "Local",
    "prom": 5.4,
    "FD": 1.068054224291387
  },
  {
    "liga": "America - Colombia",
    "equipo": "La Equidad",
    "rol": "Visitante",
    "prom": 3.27,
    "FD": 1.0449025698955097
  },
  {
    "liga": "America - Colombia",
    "equipo": "Fortaleza CEIF",
    "rol": "Local",
    "prom": 5.0,
    "FD": 0.6024921265233466
  },
  {
    "liga": "America - Colombia",
    "equipo": "Fortaleza CEIF",
    "rol": "Visitante",
    "prom": 3.44,
    "FD": 0.962063447237127
  },
  {
    "liga": "America - Colombia",
    "equipo": "Águilas Doradas",
    "rol": "Local",
    "prom": 5.2,
    "FD": 1.0132822127892647
  },
  {
    "liga": "America - Colombia",
    "equipo": "Águilas Doradas",
    "rol": "Visitante",
    "prom": 2.78,
    "FD": 0.9206438859079354
  },
  {
    "liga": "America - Colombia",
    "equipo": "Jaguares de Córdoba",
    "rol": "Local",
    "prom": 5.1,
    "FD": 0.8763521840339588
  },
  {
    "liga": "America - Colombia",
    "equipo": "Jaguares de Córdoba",
    "rol": "Visitante",
    "prom": 2.67,
    "FD": 1.1296243998870374
  },
  {
    "liga": "America - Colombia",
    "equipo": "Cúcuta Deportivo",
    "rol": "Local",
    "prom": 3.56,
    "FD": 1.6130357387375052
  },
  {
    "liga": "America - Colombia",
    "equipo": "Cúcuta Deportivo",
    "rol": "Visitante",
    "prom": 4.1,
    "FD": 1.0354890332297844
  },
  {
    "liga": "America - Colombia",
    "equipo": "América de Cali",
    "rol": "Local",
    "prom": 4.6,
    "FD": 0.6846501437765302
  },
  {
    "liga": "America - Colombia",
    "equipo": "América de Cali",
    "rol": "Visitante",
    "prom": 2.64,
    "FD": 0.8566318365810034
  },
  {
    "liga": "America - Colombia",
    "equipo": "Deportivo Pasto",
    "rol": "Local",
    "prom": 4.36,
    "FD": 0.9722032041626728
  },
  {
    "liga": "America - Colombia",
    "equipo": "Deportivo Pasto",
    "rol": "Visitante",
    "prom": 3.7,
    "FD": 0.8472182999152781
  },
  {
    "liga": "America - Colombia",
    "equipo": "Boyacá Chicó",
    "rol": "Local",
    "prom": 4.67,
    "FD": 1.1255648363686157
  },
  {
    "liga": "America - Colombia",
    "equipo": "Boyacá Chicó",
    "rol": "Visitante",
    "prom": 2.8,
    "FD": 0.8095641532523769
  },
  {
    "liga": "America - Colombia",
    "equipo": "Deportivo Pereira",
    "rol": "Local",
    "prom": 3.44,
    "FD": 1.3693002875530604
  },
  {
    "liga": "America - Colombia",
    "equipo": "Deportivo Pereira",
    "rol": "Visitante",
    "prom": 1.5,
    "FD": 1.2614139132071918
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Palmeiras L",
    "rol": "Local",
    "prom": 7.0,
    "FD": 0.8435111150162552
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Palmeiras L",
    "rol": "Visitante",
    "prom": 7.67,
    "FD": 0.7565796658294202
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Independiente del Valle L",
    "rol": "Local",
    "prom": 9.0,
    "FD": 0.750724892364467
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Independiente del Valle L",
    "rol": "Visitante",
    "prom": 6.33,
    "FD": 0.5818499508572678
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Lanús L",
    "rol": "Local",
    "prom": 9.0,
    "FD": 0.5623407433441701
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Lanús L",
    "rol": "Visitante",
    "prom": 4.67,
    "FD": 0.6989188598886099
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Rosario Central L",
    "rol": "Local",
    "prom": 6.0,
    "FD": 0.8435111150162552
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Rosario Central L",
    "rol": "Visitante",
    "prom": 4.33,
    "FD": 0.9313093808015727
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Coquimbo Unido L",
    "rol": "Local",
    "prom": 7.67,
    "FD": 1.7798084526842983
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Coquimbo Unido L",
    "rol": "Visitante",
    "prom": 4.67,
    "FD": 0.5818499508572678
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Nacional L",
    "rol": "Local",
    "prom": 5.0,
    "FD": 1.4058518583604251
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Nacional L",
    "rol": "Visitante",
    "prom": 5.0,
    "FD": 1.6302282406901825
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Universidad Católica L",
    "rol": "Local",
    "prom": 6.67,
    "FD": 1.1246814866883401
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Universidad Católica L",
    "rol": "Visitante",
    "prom": 3.5,
    "FD": 1.572567434749372
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Universitario L",
    "rol": "Local",
    "prom": 7.67,
    "FD": 0.9362973376680432
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Universitario L",
    "rol": "Visitante",
    "prom": 4.33,
    "FD": 1.2231080048050673
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Sporting Cristal L",
    "rol": "Local",
    "prom": 6.4,
    "FD": 0.9559792636850891
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Sporting Cristal L",
    "rol": "Visitante",
    "prom": 4.0,
    "FD": 1.092060718575953
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Bolívar L",
    "rol": "Local",
    "prom": 8.33,
    "FD": 0.469554520692382
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Bolívar L",
    "rol": "Visitante",
    "prom": 3.0,
    "FD": 0.9313093808015727
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Corinthians L",
    "rol": "Local",
    "prom": 6.0,
    "FD": 1.2174677093401283
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Corinthians L",
    "rol": "Visitante",
    "prom": 4.0,
    "FD": 0.6989188598886099
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Boca Juniors L",
    "rol": "Local",
    "prom": 8.5,
    "FD": 0.7029259291802126
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Boca Juniors L",
    "rol": "Visitante",
    "prom": 2.33,
    "FD": 0.7565796658294202
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Mirassol L",
    "rol": "Local",
    "prom": 6.33,
    "FD": 1.3130656357086372
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Mirassol L",
    "rol": "Visitante",
    "prom": 2.0,
    "FD": 0.9907174838921045
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Independiente Medellín L",
    "rol": "Local",
    "prom": 5.25,
    "FD": 0.6326333362621913
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Independiente Medellín L",
    "rol": "Visitante",
    "prom": 4.2,
    "FD": 1.0833242328273454
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Deportes Tolima L",
    "rol": "Local",
    "prom": 4.6,
    "FD": 1.1246814866883401
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Deportes Tolima L",
    "rol": "Visitante",
    "prom": 4.0,
    "FD": 1.0134323468384843
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Junior Barranquilla L",
    "rol": "Local",
    "prom": 5.33,
    "FD": 1.7798084526842983
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Junior Barranquilla L",
    "rol": "Visitante",
    "prom": 3.0,
    "FD": 1.0483782898329148
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Estudiantes de La Plata L",
    "rol": "Local",
    "prom": 7.0,
    "FD": 0.6551269659959582
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Estudiantes de La Plata L",
    "rol": "Visitante",
    "prom": 3.0,
    "FD": 0.7565796658294202
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Flamengo L",
    "rol": "Local",
    "prom": 5.33,
    "FD": 0.8435111150162552
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Flamengo L",
    "rol": "Visitante",
    "prom": 4.5,
    "FD": 1.135743147318991
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Always Ready L",
    "rol": "Local",
    "prom": 4.33,
    "FD": 1.1246814866883401
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Always Ready L",
    "rol": "Visitante",
    "prom": 6.0,
    "FD": 1.2807688107458777
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Deportivo La Guaira L",
    "rol": "Local",
    "prom": 5.33,
    "FD": 1.6870222300325104
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Deportivo La Guaira L",
    "rol": "Visitante",
    "prom": 1.67,
    "FD": 1.2231080048050673
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Independiente Rivadavia L",
    "rol": "Local",
    "prom": 5.0,
    "FD": 0.469554520692382
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Independiente Rivadavia L",
    "rol": "Visitante",
    "prom": 2.0,
    "FD": 0.9313093808015727
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Santa Fe L",
    "rol": "Local",
    "prom": 4.33,
    "FD": 1.2174677093401283
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Santa Fe L",
    "rol": "Visitante",
    "prom": 2.67,
    "FD": 1.165447198864257
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Cusco FC L",
    "rol": "Local",
    "prom": 5.67,
    "FD": 1.2174677093401283
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Cusco FC L",
    "rol": "Visitante",
    "prom": 1.0,
    "FD": 1.1060390957737252
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Libertad L",
    "rol": "Local",
    "prom": 3.33,
    "FD": 1.2174677093401283
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Libertad L",
    "rol": "Visitante",
    "prom": 4.67,
    "FD": 0.815987768919952
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Fluminense L",
    "rol": "Local",
    "prom": 2.67,
    "FD": 0.28117037167208503
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Fluminense L",
    "rol": "Visitante",
    "prom": 3.67,
    "FD": 0.6412580539477996
  },
  {
    "liga": "America - Libertadores",
    "equipo": "LDU L",
    "rol": "Local",
    "prom": 4.33,
    "FD": 1.3130656357086372
  },
  {
    "liga": "America - Libertadores",
    "equipo": "LDU L",
    "rol": "Visitante",
    "prom": 2.67,
    "FD": 1.2231080048050673
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Platense L",
    "rol": "Local",
    "prom": 4.0,
    "FD": 0.469554520692382
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Platense L",
    "rol": "Visitante",
    "prom": 2.33,
    "FD": 0.6412580539477996
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Peñarol L",
    "rol": "Local",
    "prom": 4.33,
    "FD": 0.6551269659959582
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Peñarol L",
    "rol": "Visitante",
    "prom": 3.67,
    "FD": 0.7565796658294202
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Barcelona-SC L",
    "rol": "Local",
    "prom": 3.4,
    "FD": 0.8435111150162552
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Barcelona-SC L",
    "rol": "Visitante",
    "prom": 2.0,
    "FD": 1.0046958610898766
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Cerro Porteño L",
    "rol": "Local",
    "prom": 4.0,
    "FD": 0.9840963008522977
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Cerro Porteño L",
    "rol": "Visitante",
    "prom": 1.67,
    "FD": 1.2807688107458777
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Cruzeiro L",
    "rol": "Local",
    "prom": 4.5,
    "FD": 0.7029259291802126
  },
  {
    "liga": "America - Libertadores",
    "equipo": "Cruzeiro L",
    "rol": "Visitante",
    "prom": 1.0,
    "FD": 1.2807688107458777
  },
  {
    "liga": "America - Libertadores",
    "equipo": "UCV L",
    "rol": "Local",
    "prom": 1.67,
    "FD": 1.8754063790528073
  },
  {
    "liga": "America - Libertadores",
    "equipo": "UCV L",
    "rol": "Visitante",
    "prom": 1.33,
    "FD": 1.165447198864257
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Millonarios S",
    "rol": "Local",
    "prom": 9.0,
    "FD": 1.029352633695215
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Millonarios S",
    "rol": "Visitante",
    "prom": 4.25,
    "FD": 1.2619770974526756
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Olimpia S",
    "rol": "Local",
    "prom": 6.67,
    "FD": 0.42975472456775227
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Olimpia S",
    "rol": "Visitante",
    "prom": 4.25,
    "FD": 0.8880579574666977
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Botafogo S",
    "rol": "Local",
    "prom": 8.67,
    "FD": 0.5146763168476075
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Botafogo S",
    "rol": "Visitante",
    "prom": 4.67,
    "FD": 1.0600607618602476
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Macará S",
    "rol": "Local",
    "prom": 6.67,
    "FD": 0.687092882991556
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Macará S",
    "rol": "Visitante",
    "prom": 5.67,
    "FD": 1.2470203318532365
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Bragantino S",
    "rol": "Local",
    "prom": 5.67,
    "FD": 1.3716123843988741
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Bragantino S",
    "rol": "Visitante",
    "prom": 5.0,
    "FD": 0.6225753680766534
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Racing Club S",
    "rol": "Local",
    "prom": 7.33,
    "FD": 0.9444310414153598
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Racing Club S",
    "rol": "Visitante",
    "prom": 5.67,
    "FD": 0.6225753680766534
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "O'Higgins S",
    "rol": "Local",
    "prom": 6.33,
    "FD": 1.1142742259750702
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "O'Higgins S",
    "rol": "Visitante",
    "prom": 6.33,
    "FD": 0.934797849964945
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Grêmio S",
    "rol": "Local",
    "prom": 6.0,
    "FD": 1.4591073582629672
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Grêmio S",
    "rol": "Visitante",
    "prom": 1.67,
    "FD": 0.934797849964945
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "São Paulo S",
    "rol": "Local",
    "prom": 6.0,
    "FD": 1.1142742259750702
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "São Paulo S",
    "rol": "Visitante",
    "prom": 5.67,
    "FD": 1.495676559943912
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Montevideo City Torque S",
    "rol": "Local",
    "prom": 5.5,
    "FD": 1.029352633695215
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Montevideo City Torque S",
    "rol": "Visitante",
    "prom": 4.67,
    "FD": 1.0600607618602476
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Barracas Central S",
    "rol": "Local",
    "prom": 5.33,
    "FD": 1.1142742259750702
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Barracas Central S",
    "rol": "Visitante",
    "prom": 3.33,
    "FD": 0.934797849964945
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Audax Italiano S",
    "rol": "Local",
    "prom": 5.33,
    "FD": 1.5440289505428226
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Audax Italiano S",
    "rol": "Visitante",
    "prom": 4.0,
    "FD": 0.7945781724702032
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Tigre S",
    "rol": "Local",
    "prom": 5.0,
    "FD": 0.6433453960595094
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Tigre S",
    "rol": "Visitante",
    "prom": 3.33,
    "FD": 1.0600607618602476
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Cienciano S",
    "rol": "Local",
    "prom": 4.25,
    "FD": 0.8363490148773622
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Cienciano S",
    "rol": "Visitante",
    "prom": 3.33,
    "FD": 0.934797849964945
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Juventud de Las Piedras S",
    "rol": "Local",
    "prom": 5.0,
    "FD": 1.4591073582629672
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Juventud de Las Piedras S",
    "rol": "Visitante",
    "prom": 4.0,
    "FD": 0.373919139985978
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Blooming S",
    "rol": "Local",
    "prom": 4.75,
    "FD": 0.7720144752714113
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Blooming S",
    "rol": "Visitante",
    "prom": 3.33,
    "FD": 1.3704136480486093
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Deportivo Riestra S",
    "rol": "Local",
    "prom": 4.67,
    "FD": 1.029352633695215
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Deportivo Riestra S",
    "rol": "Visitante",
    "prom": 5.67,
    "FD": 1.1834540780556204
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Atlético-MG S",
    "rol": "Local",
    "prom": 5.0,
    "FD": 0.25733815842380375
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Atlético-MG S",
    "rol": "Visitante",
    "prom": 3.0,
    "FD": 1.1217574199579339
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Vasco S",
    "rol": "Local",
    "prom": 5.33,
    "FD": 0.9444310414153598
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Vasco S",
    "rol": "Visitante",
    "prom": 4.67,
    "FD": 1.495676559943912
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "San Lorenzo S",
    "rol": "Local",
    "prom": 5.33,
    "FD": 0.7720144752714113
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "San Lorenzo S",
    "rol": "Visitante",
    "prom": 4.67,
    "FD": 0.6861416218742695
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Palestino S",
    "rol": "Local",
    "prom": 4.0,
    "FD": 0.9444310414153598
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Palestino S",
    "rol": "Visitante",
    "prom": 5.5,
    "FD": 0.7010983874737087
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Carabobo S",
    "rol": "Local",
    "prom": 4.33,
    "FD": 1.5440289505428226
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Carabobo S",
    "rol": "Visitante",
    "prom": 4.33,
    "FD": 1.0600607618602476
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Alianza Atlético S",
    "rol": "Local",
    "prom": 4.25,
    "FD": 1.2866907921190187
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Alianza Atlético S",
    "rol": "Visitante",
    "prom": 2.5,
    "FD": 1.1217574199579339
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Deportivo Cuenca S",
    "rol": "Local",
    "prom": 4.25,
    "FD": 1.029352633695215
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Deportivo Cuenca S",
    "rol": "Visitante",
    "prom": 2.33,
    "FD": 0.8095349380696424
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Santos S",
    "rol": "Local",
    "prom": 3.67,
    "FD": 0.9444310414153598
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Santos S",
    "rol": "Visitante",
    "prom": 4.33,
    "FD": 1.1834540780556204
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Academia Puerto Cabello S",
    "rol": "Local",
    "prom": 3.75,
    "FD": 0.6433453960595094
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Academia Puerto Cabello S",
    "rol": "Visitante",
    "prom": 2.33,
    "FD": 0.8731011918672585
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "América de Cali S",
    "rol": "Local",
    "prom": 3.67,
    "FD": 0.5995979091274628
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "América de Cali S",
    "rol": "Visitante",
    "prom": 2.67,
    "FD": 0.8095349380696424
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Boston River S",
    "rol": "Local",
    "prom": 3.25,
    "FD": 2.123039806996381
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Boston River S",
    "rol": "Visitante",
    "prom": 3.67,
    "FD": 1.3704136480486093
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "River Plate S",
    "rol": "Local",
    "prom": 4.67,
    "FD": 0.687092882991556
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "River Plate S",
    "rol": "Visitante",
    "prom": 4.67,
    "FD": 0.43561579808366435
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Independiente Petrolero S",
    "rol": "Local",
    "prom": 2.75,
    "FD": 1.093687173301166
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Independiente Petrolero S",
    "rol": "Visitante",
    "prom": 1.67,
    "FD": 1.4339799018462256
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Caracas S",
    "rol": "Local",
    "prom": 4.0,
    "FD": 1.093687173301166
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Caracas S",
    "rol": "Visitante",
    "prom": 3.33,
    "FD": 0.9964945080626313
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Deportivo Recoleta S",
    "rol": "Local",
    "prom": 5.67,
    "FD": 0.9444310414153598
  },
  {
    "liga": "America - CopaSudamerica",
    "equipo": "Deportivo Recoleta S",
    "rol": "Visitante",
    "prom": 2.25,
    "FD": 1.1217574199579339
  },
  {
    "liga": "America - BrasilB",
    "equipo": "Criciúma",
    "rol": "Local",
    "prom": 8.5,
    "FD": 1.3213213213213217
  },
  {
    "liga": "America - BrasilB",
    "equipo": "Criciúma",
    "rol": "Visitante",
    "prom": 5.83,
    "FD": 1.1033912324234907
  },
  {
    "liga": "America - BrasilB",
    "equipo": "América Mineiro",
    "rol": "Local",
    "prom": 6.0,
    "FD": 1.1051051051051053
  },
  {
    "liga": "America - BrasilB",
    "equipo": "América Mineiro",
    "rol": "Visitante",
    "prom": 7.0,
    "FD": 0.5955334987593053
  },
  {
    "liga": "America - BrasilB",
    "equipo": "Náutico",
    "rol": "Local",
    "prom": 9.6,
    "FD": 0.8168168168168171
  },
  {
    "liga": "America - BrasilB",
    "equipo": "Náutico",
    "rol": "Visitante",
    "prom": 3.2,
    "FD": 1.1910669975186106
  },
  {
    "liga": "America - BrasilB",
    "equipo": "Botafogo-SP",
    "rol": "Local",
    "prom": 8.0,
    "FD": 1.0570570570570574
  },
  {
    "liga": "America - BrasilB",
    "equipo": "Botafogo-SP",
    "rol": "Visitante",
    "prom": 4.6,
    "FD": 1.1579818031430937
  },
  {
    "liga": "America - BrasilB",
    "equipo": "Londrina",
    "rol": "Local",
    "prom": 8.5,
    "FD": 1.1411411411411414
  },
  {
    "liga": "America - BrasilB",
    "equipo": "Londrina",
    "rol": "Visitante",
    "prom": 4.33,
    "FD": 1.1298593879239043
  },
  {
    "liga": "America - BrasilB",
    "equipo": "Novorizontino",
    "rol": "Local",
    "prom": 7.0,
    "FD": 0.5765765765765767
  },
  {
    "liga": "America - BrasilB",
    "equipo": "Novorizontino",
    "rol": "Visitante",
    "prom": 5.0,
    "FD": 0.794044665012407
  },
  {
    "liga": "America - BrasilB",
    "equipo": "Atlético-GO",
    "rol": "Local",
    "prom": 6.8,
    "FD": 0.43243243243243257
  },
  {
    "liga": "America - BrasilB",
    "equipo": "Atlético-GO",
    "rol": "Visitante",
    "prom": 5.0,
    "FD": 1.3234077750206785
  },
  {
    "liga": "America - BrasilB",
    "equipo": "Operário",
    "rol": "Local",
    "prom": 6.67,
    "FD": 1.2012012012012017
  },
  {
    "liga": "America - BrasilB",
    "equipo": "Operário",
    "rol": "Visitante",
    "prom": 4.75,
    "FD": 0.9925558312655088
  },
  {
    "liga": "America - BrasilB",
    "equipo": "Ponte Preta",
    "rol": "Local",
    "prom": 7.4,
    "FD": 1.2492492492492497
  },
  {
    "liga": "America - BrasilB",
    "equipo": "Ponte Preta",
    "rol": "Visitante",
    "prom": 4.2,
    "FD": 1.2903225806451615
  },
  {
    "liga": "America - BrasilB",
    "equipo": "Ceará",
    "rol": "Local",
    "prom": 5.4,
    "FD": 0.6726726726726728
  },
  {
    "liga": "America - BrasilB",
    "equipo": "Ceará",
    "rol": "Visitante",
    "prom": 5.0,
    "FD": 1.0918114143920596
  },
  {
    "liga": "America - BrasilB",
    "equipo": "CRB",
    "rol": "Local",
    "prom": 6.0,
    "FD": 0.9129129129129131
  },
  {
    "liga": "America - BrasilB",
    "equipo": "CRB",
    "rol": "Visitante",
    "prom": 3.4,
    "FD": 0.7609594706368901
  },
  {
    "liga": "America - BrasilB",
    "equipo": "Vila Nova",
    "rol": "Local",
    "prom": 5.0,
    "FD": 0.7687687687687691
  },
  {
    "liga": "America - BrasilB",
    "equipo": "Vila Nova",
    "rol": "Visitante",
    "prom": 4.0,
    "FD": 0.860215053763441
  },
  {
    "liga": "America - BrasilB",
    "equipo": "Fortaleza",
    "rol": "Local",
    "prom": 4.2,
    "FD": 0.43243243243243257
  },
  {
    "liga": "America - BrasilB",
    "equipo": "Fortaleza",
    "rol": "Visitante",
    "prom": 4.8,
    "FD": 0.9925558312655088
  },
  {
    "liga": "America - BrasilB",
    "equipo": "Sport Recife",
    "rol": "Local",
    "prom": 5.6,
    "FD": 1.3933933933933937
  },
  {
    "liga": "America - BrasilB",
    "equipo": "Sport Recife",
    "rol": "Visitante",
    "prom": 3.0,
    "FD": 1.0918114143920596
  },
  {
    "liga": "America - BrasilB",
    "equipo": "Avaí",
    "rol": "Local",
    "prom": 4.67,
    "FD": 0.9609609609609613
  },
  {
    "liga": "America - BrasilB",
    "equipo": "Avaí",
    "rol": "Visitante",
    "prom": 3.75,
    "FD": 0.827129859387924
  },
  {
    "liga": "America - BrasilB",
    "equipo": "Goiás",
    "rol": "Local",
    "prom": 4.2,
    "FD": 1.3933933933933937
  },
  {
    "liga": "America - BrasilB",
    "equipo": "Goiás",
    "rol": "Visitante",
    "prom": 4.0,
    "FD": 0.6617038875103393
  },
  {
    "liga": "America - BrasilB",
    "equipo": "São Bernardo",
    "rol": "Local",
    "prom": 4.4,
    "FD": 1.48948948948949
  },
  {
    "liga": "America - BrasilB",
    "equipo": "São Bernardo",
    "rol": "Visitante",
    "prom": 3.8,
    "FD": 1.4226633581472292
  },
  {
    "liga": "America - BrasilB",
    "equipo": "Juventude",
    "rol": "Local",
    "prom": 5.8,
    "FD": 1.3453453453453457
  },
  {
    "liga": "America - BrasilB",
    "equipo": "Juventude",
    "rol": "Visitante",
    "prom": 2.2,
    "FD": 0.7609594706368901
  },
  {
    "liga": "America - BrasilB",
    "equipo": "Athletic-MG",
    "rol": "Local",
    "prom": 5.2,
    "FD": 1.1051051051051053
  },
  {
    "liga": "America - BrasilB",
    "equipo": "Athletic-MG",
    "rol": "Visitante",
    "prom": 2.4,
    "FD": 1.2241521918941276
  },
  {
    "liga": "America - BrasilB",
    "equipo": "Cuiabá",
    "rol": "Local",
    "prom": 3.6,
    "FD": 0.6246246246246249
  },
  {
    "liga": "America - BrasilB",
    "equipo": "Cuiabá",
    "rol": "Visitante",
    "prom": 2.4,
    "FD": 0.7278742762613732
  },
  {
    "liga": "Europa - Irlanda ",
    "equipo": "Bohemians",
    "rol": "Local",
    "prom": 6.1,
    "FD": 5.11
  },
  {
    "liga": "Europa - Irlanda ",
    "equipo": "Bohemians",
    "rol": "Visitante",
    "prom": 9.0,
    "FD": 4.22
  },
  {
    "liga": "Europa - Irlanda ",
    "equipo": "Derry City",
    "rol": "Local",
    "prom": 6.9,
    "FD": 5.22
  },
  {
    "liga": "Europa - Irlanda ",
    "equipo": "Derry City",
    "rol": "Visitante",
    "prom": 9.0,
    "FD": 4.89
  },
  {
    "liga": "Europa - Irlanda ",
    "equipo": "Drogheda Utd",
    "rol": "Local",
    "prom": 4.33,
    "FD": 3.56
  },
  {
    "liga": "Europa - Irlanda ",
    "equipo": "Drogheda Utd",
    "rol": "Visitante",
    "prom": 9.0,
    "FD": 6.22
  },
  {
    "liga": "Europa - Irlanda ",
    "equipo": "Dundalk",
    "rol": "Local",
    "prom": 5.11,
    "FD": 6.89
  },
  {
    "liga": "Europa - Irlanda ",
    "equipo": "Dundalk",
    "rol": "Visitante",
    "prom": 9.0,
    "FD": 5.11
  },
  {
    "liga": "Europa - Irlanda ",
    "equipo": "Galway Utd",
    "rol": "Local",
    "prom": 4.25,
    "FD": 4.89
  },
  {
    "liga": "Europa - Irlanda ",
    "equipo": "Galway Utd",
    "rol": "Visitante",
    "prom": 9.0,
    "FD": 6.67
  },
  {
    "liga": "Europa - Irlanda ",
    "equipo": "Shamrock Rovers",
    "rol": "Local",
    "prom": 4.89,
    "FD": 5.2
  },
  {
    "liga": "Europa - Irlanda ",
    "equipo": "Shamrock Rovers",
    "rol": "Visitante",
    "prom": 10.0,
    "FD": 3.2
  },
  {
    "liga": "Europa - Irlanda ",
    "equipo": "Shelbourne",
    "rol": "Local",
    "prom": 5.89,
    "FD": 4.89
  },
  {
    "liga": "Europa - Irlanda ",
    "equipo": "Shelbourne",
    "rol": "Visitante",
    "prom": 9.0,
    "FD": 4.44
  },
  {
    "liga": "Europa - Irlanda ",
    "equipo": "Sligo Rovers",
    "rol": "Local",
    "prom": 4.11,
    "FD": 3.78
  },
  {
    "liga": "Europa - Irlanda ",
    "equipo": "Sligo Rovers",
    "rol": "Visitante",
    "prom": 9.0,
    "FD": 7.33
  },
  {
    "liga": "Europa - Irlanda ",
    "equipo": "St. Patricks",
    "rol": "Local",
    "prom": 5.56,
    "FD": 5.0
  },
  {
    "liga": "Europa - Irlanda ",
    "equipo": "St. Patricks",
    "rol": "Visitante",
    "prom": 9.0,
    "FD": 4.78
  },
  {
    "liga": "Europa - Irlanda ",
    "equipo": "Waterford",
    "rol": "Local",
    "prom": 5.33,
    "FD": 4.44
  },
  {
    "liga": "Europa - Irlanda ",
    "equipo": "Waterford",
    "rol": "Visitante",
    "prom": 9.0,
    "FD": 6.22
  },
  {
    "liga": "Europa - Islandia",
    "equipo": "Breidablik",
    "rol": "Local",
    "prom": 8.75,
    "FD": 7.0
  },
  {
    "liga": "Europa - Islandia",
    "equipo": "Breidablik",
    "rol": "Visitante",
    "prom": 4.0,
    "FD": 4.0
  },
  {
    "liga": "Europa - Islandia",
    "equipo": "Fram",
    "rol": "Local",
    "prom": 9.75,
    "FD": 8.75
  },
  {
    "liga": "Europa - Islandia",
    "equipo": "Fram",
    "rol": "Visitante",
    "prom": 4.0,
    "FD": 2.75
  },
  {
    "liga": "Europa - Islandia",
    "equipo": "Hafnarfjordur",
    "rol": "Local",
    "prom": 4.0,
    "FD": 4.83
  },
  {
    "liga": "Europa - Islandia",
    "equipo": "Hafnarfjordur",
    "rol": "Visitante",
    "prom": 6.0,
    "FD": 9.67
  },
  {
    "liga": "Europa - Islandia",
    "equipo": "IA Akranes",
    "rol": "Local",
    "prom": 5.67,
    "FD": 7.0
  },
  {
    "liga": "Europa - Islandia",
    "equipo": "IA Akranes",
    "rol": "Visitante",
    "prom": 5.0,
    "FD": 7.8
  },
  {
    "liga": "Europa - Islandia",
    "equipo": "IBV",
    "rol": "Local",
    "prom": 2.5,
    "FD": 5.25
  },
  {
    "liga": "Europa - Islandia",
    "equipo": "IBV",
    "rol": "Visitante",
    "prom": 4.0,
    "FD": 7.0
  },
  {
    "liga": "Europa - Islandia",
    "equipo": "KA Akureyri",
    "rol": "Local",
    "prom": 5.2,
    "FD": 3.0
  },
  {
    "liga": "Europa - Islandia",
    "equipo": "KA Akureyri",
    "rol": "Visitante",
    "prom": 3.0,
    "FD": 7.67
  },
  {
    "liga": "Europa - Islandia",
    "equipo": "Keflavik",
    "rol": "Local",
    "prom": 7.0,
    "FD": 5.75
  },
  {
    "liga": "Europa - Islandia",
    "equipo": "Keflavik",
    "rol": "Visitante",
    "prom": 4.0,
    "FD": 6.25
  },
  {
    "liga": "Europa - Islandia",
    "equipo": "KR Reykjavik",
    "rol": "Local",
    "prom": 9.8,
    "FD": 8.75
  },
  {
    "liga": "Europa - Islandia",
    "equipo": "KR Reykjavik",
    "rol": "Visitante",
    "prom": 4.0,
    "FD": 3.5
  },
  {
    "liga": "Europa - Islandia",
    "equipo": "Stjarnan",
    "rol": "Local",
    "prom": 6.67,
    "FD": 4.0
  },
  {
    "liga": "Europa - Islandia",
    "equipo": "Stjarnan",
    "rol": "Visitante",
    "prom": 3.0,
    "FD": 6.67
  },
  {
    "liga": "Europa - Islandia",
    "equipo": "Thor Akureyri",
    "rol": "Local",
    "prom": 6.67,
    "FD": 4.8
  },
  {
    "liga": "Europa - Islandia",
    "equipo": "Thor Akureyri",
    "rol": "Visitante",
    "prom": 5.0,
    "FD": 8.0
  },
  {
    "liga": "Europa - Islandia",
    "equipo": "Valur",
    "rol": "Local",
    "prom": 5.8,
    "FD": 3.75
  },
  {
    "liga": "Europa - Islandia",
    "equipo": "Valur",
    "rol": "Visitante",
    "prom": 4.0,
    "FD": 10.0
  },
  {
    "liga": "Europa - Islandia",
    "equipo": "Vikingur R.",
    "rol": "Local",
    "prom": 5.8,
    "FD": 7.0
  },
  {
    "liga": "Europa - Islandia",
    "equipo": "Vikingur R.",
    "rol": "Visitante",
    "prom": 4.0,
    "FD": 4.0
  }
];

/* ========================
   CARGAR LIGAS
======================== */

window.cargarLigas = function () {

  const selectLiga = document.getElementById("liga");
  selectLiga.innerHTML = "";

  const ligas = [...new Set(equipos.map(e => e.liga))];

  ligas.forEach(l => {
    const option = document.createElement("option");
    option.value = l;
    option.textContent = l;
    selectLiga.appendChild(option);
  });
};


/* ========================
   CARGAR EQUIPOS
======================== */

window.cargarEquipos = function () {

  const liga = document.getElementById("liga").value;

  const filtrados = equipos.filter(e => e.liga === liga);

  const nombres = [...new Set(filtrados.map(e => e.equipo))];

  const local = document.getElementById("equipoLocal");
  const visitante = document.getElementById("equipoVisitante");

  local.innerHTML = "";
  visitante.innerHTML = "";

  nombres.forEach(eq => {
    local.innerHTML += `<option>${eq}</option>`;
    visitante.innerHTML += `<option>${eq}</option>`;
  });

  // ✅ evita mismo equipo
  visitante.selectedIndex = nombres.length > 1 ? 1 : 0;

  cargarLocal();
  cargarVisitante();
};


/* ========================
   CARGAR DATOS
======================== */

window.cargarLocal = function () {

  const eq = equipoLocal.value;

  const fila = equipos.find(e =>
    e.equipo === eq && e.rol === "Local"
  );

  if (!fila) return;

  cornersLocal.value = fila.prom;
  fdLocal.value = fila.FD;
};

window.cargarVisitante = function () {

  const eq = equipoVisitante.value;

  const fila = equipos.find(e =>
    e.equipo === eq && e.rol === "Visitante"
  );

  if (!fila) return;

  cornersVisitante.value = fila.prom;
  fdVisitante.value = fila.FD;
};


/* ========================
   POISSON
======================== */

function factorial(n) {
  let r = 1;
  for (let i = 1; i <= n; i++) r *= i;
  return r;
}

function poisson(k, lambda) {
  return Math.pow(lambda, k) * Math.exp(-lambda) / factorial(k);
}

function poissonCDF(k, lambda) {
  let s = 0;
  for (let i = 0; i <= k; i++) s += poisson(i, lambda);
  return s;
}


/* ========================
   CALCULO PRO
======================== */

window.calcular = function () {

  const cl = Number(cornersLocal.value);
  const cv = Number(cornersVisitante.value);
  const fdL = Number(fdLocal.value);
  const fdV = Number(fdVisitante.value);

  const linea = Number(document.getElementById("linea").value);

  const cuotaOver = Number(document.getElementById("cuotaOver").value);
  const cuotaUnder = Number(document.getElementById("cuotaUnder").value);

  if ([cl, cv, fdL, fdV, linea].some(isNaN)) {
    resultado.innerHTML = "❌ Completa todos los campos";
    return;
  }

  const lambda = (cl * fdL) + (cv * fdV);
  const lambdaLocal = cl * fdL;
  const lambdaVisitante = cv * fdV;

  function over(x) {
    return 1 - poissonCDF(Math.floor(x), lambda);
  }

  function under(x) {
    return poissonCDF(Math.floor(x), lambda);
  }

  function EV(prob, cuota) {
    return (prob * cuota) - 1;
  }

  
let mejorPick = "";
let mejorEV = -999;

function evaluarPick(nombre, prob, ev) {
  if (ev > mejorEV && prob > 0.65) {
    mejorEV = ev;
    mejorPick = `${nombre} → ${(prob*100).toFixed(1)}% | EV ${(ev*100).toFixed(1)}%`;
  }
}

function color(prob, ev) {
  if (ev > 0 && prob >= 0.70) return "good";
  if (ev > 0) return "";
  return "bad";
}

let html = `
  <p><b>λ total:</b> ${lambda.toFixed(2)}</p>
  <p>🏠 Local: ${lambdaLocal.toFixed(2)}</p>
  <p>🛫 Visitante: ${lambdaVisitante.toFixed(2)}</p>
  <hr>
`;

  /* OVER */
  html += `<p><b>OVER</b></p>`;

  for (let i = 1; i <= 3; i++) {
    let l = linea + i;
    let p = over(l);
    let ev = cuotaOver ? EV(p, cuotaOver) : 0;
    evaluarPick(`Over ${l.toFixed(1)}`, p, ev);

    html += `<p class="${color(p, ev)}">
      Over ${l.toFixed(1)} → ${(p*100).toFixed(1)}% 
      ${cuotaOver ? "| EV " + (ev*100).toFixed(1) + "%" : ""}
    </p>`;
  }

  /* UNDER */
  html += `<hr><p><b>UNDER</b></p>`;

  for (let i = 3; i >= 1; i--) {
    let l = linea + i;
    let p = under(l);
    let ev = cuotaUnder ? EV(p, cuotaUnder) : 0;
    evaluarPick(`Under ${l.toFixed(1)}`, p, ev);

    html += `<p class="${color(p, ev)}">
      Under ${l.toFixed(1)} → ${(p*100).toFixed(1)}% 
      ${cuotaUnder ? "| EV " + (ev*100).toFixed(1) + "%" : ""}
    </p>`;
  }

  resultado.innerHTML = html;
html += `<hr><p class="good"><b>🔥 MEJOR PICK:</b><br>${mejorPick}</p>`;
};


/* ========================
   LIMPIAR
======================== */

window.limpiar = function () {
  document.querySelectorAll("input").forEach(i => i.value = "");
  resultado.innerHTML = "";
};


/* ========================
   INIT
======================== */

cargarLigas();
cargarEquipos();

});