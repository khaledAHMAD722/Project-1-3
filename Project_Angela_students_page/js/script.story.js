class Story {
	constructor(image, name, jobtitle, story) {
			this.image = image;
			this.name = name;
			this.jobtitle = jobtitle;
			this.story = story;
   		 
   	}
 //////////////////method for output data////////////////////////
  	render() {
  		let msg = `
  		<div class="col-lg-3 col-md-6" col-sm-12>
  			<div class="thumbnail" id="thumbnail">
  				<img src=" ${this.image} ">
  				<div class="caption">
  					<h3> ${this.name} </h3>
  					<p><strong>
  						<span>Nachname:  ${this.jobtitle} </span><br>
  						<span>Alter:  ${this.story} </span><br>	
  						
  					</p></strong>
  				</div>
  			</div>
  		</div>`;
  	return msg;
  	}
};    


//////////////////StoryData (Objects are stored in an Array)/////////////////////
var success_story = [

new Story("img/woman1.jpg", "Maria Müller", "Auszubildende Groß- und Außenhandelskauffrau – 2. Lehrjahr", "Nach meinem bestandenen Abitur war für mich klar, dass ich einen kaufmännischen Beruf erlernen möchte. Nachdem ich mich über dieses Berufsfeld informiert habe, entschied ich mich für den Ausbildungsberuf „Kauffrau im Groß- und Außenhandel“. So begann, im Jahr 2013, meine Ausbildung bei der IWETEC GmbH. In der schulischen Ausbildung werden theoretische Kenntnisse vermittelt, die in die Praxis umgesetzt werden können. Bei der Ausbildung im Unternehmen werden verschiedene Abteilungen durchlaufen, unter anderem die Personalabteilung, in der alle personellen Angelegenheiten bearbeitet werden, wie zum Beispiel Krankmeldungen, Urlaub und Neueinstellungen. Die Ausbildung bei IWETEC ist sehr abwechslungsreich, dadurch konnte ich interessante Einblicke in den Berufsalltag gewinnen. Die Betreuung durch die Ausbilder ist sehr gut, ich fühle mich respektiert und im Team integriert. Bisher hatte ich die Möglichkeit vielfältige Berufserfahrungen, in verschiedenen Bereichen wie Lager, Einkauf, Kundenservice, Controlling etc., zu sammeln. Hiermit konnte mein Berufswunsch bestätigt werden. Nach meiner Ausbildung strebe ich eine Weiterbildung in Form eines Studiums an, gerne auch dual."),
new Story("img/woman2.jpg", "Kristina Marx", "Auszubildende Kauffrau für Dialogmarketing – 1. Lehrjahr", "Im August 2014 habe ich meine Ausbildung als Kauffrau für Dialogmarketing bei der IWETEC GmbH im Industriegebiet Fulda West begonnen. Zuvor besuchte ich die einjährige höhere Berufsfachschule für Wirtschaft an der Richard-Müller-Schule in Fulda, welche mein Interesse an einem kaufmännischen Beruf bestärkte, da mir der Umgang mit Zahlen und deren Auswirkungen sehr viel Spaß gemacht haben. Jetzt bin ich im 1. Ausbildungsjahr und freue mich diesen Weg gehen zu dürfen. Dieses Berufsfeld besteht zu fast 100%-igem persönlichen Kundenkontakt. Die täglichen Aufgaben beziehen sich darauf die Anliegen und Wünsche unserer Kunden zu erfüllen und Ihnen unsere Produkte vorzustellen und mit großer Begeisterung zu verkaufen. Mein Ziel ist es nach der Ausbildung eine Top-Verkäuferin zu sein, wodurch der Kundenanspruch immer im Vordergrund steht, so dass sich die Erfolge für beide Seiten einstellen sollten."),
new Story("img/man1.jpg", "Nico Reinhardt", "Auszubildender Kaufmann für Dialogmarketing – 3. Lehrjahr", "Im August 2012 startete ich meine Ausbildung als Kaufmann für Dialogmarketing. Zu diesem Zeitpunkt stand der Telefonverkauf im Unternehmen noch am Beginn und entwickelt sich seit dem stets kontinuierlich weiter. Ich habe mit 16 Jahren im Sommer 2012 meinen Realschulabschluss gemacht um dann meine Ausbildung bei Iwetec beginnen zu können. Für den Beruf in der Dialogmarketingbranche habe ich mich entschieden, da ich gerne im Kontakt mit Menschen stehe, aber auch an Bürotätigkeiten arbeiten möchte und dieser Berufszweig mir eine Mischung aus beidem bietet. Während meiner Ausbildung besuche ich den Berufsschulunterricht der Richard-Müller Schule in Fulda. Hierbei gibt es einen Stammtag an dem wir jede Woche in der Schule sind und einen Wechseltag der alle 2 Wochen stattfindet. In der Berufsschule hat man natürlich viele branchenbezogene Schulfächer und Lernaspekte, aber auch Fächer wie Deutsch Englisch oder Politik kommen dort nicht zu kurz. Grundsätzlich kann ich als Fazit nach meinen knapp 3 Ausbildungsjahren im Unternehmen Iwetec sagen, dass der Beruf Kaufmann für Dialogmarketing mit seinen Tätigkeiten meine Erwartungen vollkommen erfüllt hat und mir während meiner Ausbildungszeit großen Spaß gemacht hat. Sei es der Kontakt mit Kunden, das Arbeiten an Projekten oder auch die Teilnahme an lehrreichen Schulungen. Wenn man sich in dieser Zeit stets gut entwickelt und sich durch hochwertige Leistungen beweist, stehen die Chancen auf eine Übernahme nach der Ausbildungszeit im Unternehmen Iwetec grundsätzlich sehr gut."),
new Story("img/man2.jpg", "Daniel Grau", "Administration Manager", "Daniel Grau stieg direkt nach seiner Ausbildung zum Hotelfachmann im Juli 2008 als Front Office Agent im ARCOTEL Camino ein. Innerhalb von nur zwei Jahren konnte er sich bis zum Front Office Manager hocharbeiten, seit Anfang 2014 ist er als Administration Manger nun nicht mehr so oft im direkten Kundenkontakt. In dieser Position ist er vor allem für HR Angelegenheiten und administrative Aufgaben zuständig."),
new Story("img/man3.jpg", "Bilal Ghazi", "Front Office Supervisor", "Bilal Ghazi bewachte als Sicherheitsmann die Baustelle das ARCOTEL Camino, im Zuge dessen er mit ARCOTEL Hotels in Kontakt kam. Nach einem Jobangebot startete er als Page im Nachtdienst und konnte sich mit der Unterstützung seiner Kollegen, seiner Vorgesetzen und vor allem durch viel Einsatz und Engagement innerhalb von acht Jahren, bis zum Front Office Supervisor hocharbeiten. Und das ohne eine klassische Ausbildung im Tourismus!"),
new Story("img/woman3.jpg", "Arabella Angular", "Straßenmeister-Stellvertreter", "Schon am Anfang meiner Lehrzeit 2007 wurde mir seitens des Dienstgebers Land Oberösterreich vermittelt, dass dies nicht nur ein Ausbildungsbetrieb für meinen Beruf als Straßenerhaltungsfachmann ist, sondern auch für jeden Einzelnen die Chance besteht sich mit den Jahren beruflich weiterzubilden und zu entwickeln. Die zusätzlichen Ausbildungen, wie das Lehrlings-College und der Straßen-Baustein, waren neben der Ausbildung in der Straßenmeisterei Engelhartszell der erste wesentliche Grundstein für meinen weiteren Werdegang. Nach Abschluss der Lehre und Übernahme in den Landesdienst, wurde mir seitens des Dienstgebers der zweite wesentliche Grundstein ermöglicht - die Ausbildung in der Bauhandwerkerschule."),
new Story("img/woman4.jpg", "Stefanie Oberlehner", "Gemeindeprüferin", "Ich habe im Jahr 2007 eine Lehre zur Bürokauffrau bei der Bezirkshauptmannschaft Wels-Land begonnen. Nicht nur durch die internen Wechsel auf der Bezirkshauptmannschaft in die einzelnen Abteilungen, sondern auch durch diverse Job-Rotationen in andere Dienststellen, wurde den Lehrlingen des Landes Oberösterreich die  persönlichen Weiterentwicklung gestärkt und gefördert. Schon am Beginn der Lehrzeit wurde uns nahe gelegt, dass wir das damals neu geschaffene Modell „Lehre mit Matura“ nutzen sollten. Durch den Abschluss des vierjährigen Abendkurses wurden mir weitere wesentliche Türen für meine berufliche Karriere geöffnet. Durch diese Weiterbildung durfte ich den einjährigen Ausbildungsturnus für angehende Referentinnen und Referenten absolvieren. Sinn dieses Turnus ist es in den verschiedensten Dienststellen auf die Aufgaben und die künftigen Herausforderungen für die spätere Verwendung als Referentin bzw. Referent bestens vorbereitet zu werden. Durch diese Ausbildungen habe ich die Chance bekommen als Gemeindeprüferin auf der Bezirkshauptmannschaft Ried im Innkreis tätig zu sein."),
new Story("img/woman5.jpg", "Sabine Sonderbar", "Straßenmeisterin", "Ich begann die Lehre zum Straßenerhaltungsfachmann in der Straßenmeisterei Raab, weil ich mich gerne in der freien Natur aufhalte, die Arbeiten sehr abwechslungsreich sind und in diesem Beruf mehrere Berufe wie Maurer und Pflasterer vereint sind. Zur Weiterbildung besuche ich derzeit die Bauhandwerkerschule für Hoch- und Tiefbau in Villach. Meine Ziele sind der Abschluss der Bauhandwerkerschule zum Straßenmeister und die Leitung einer Dienststelle."),
];


/////////////////Output////////////////////////////
function showAllStorys() {
	let allStorys = document.getElementById("profile_container");
	for (let i = 0; i < success_story.length; i++) {
		allStorys.innerHTML += success_story[i].render();
	}
};
