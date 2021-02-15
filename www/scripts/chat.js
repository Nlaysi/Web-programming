let adjectives = ['сильный', 'глупый','красивый', 'угрюмый', 'отвратный', 'угрожающий', 'добрый', 'умный']
let nouns = ['Веретеница','Даман','Завроподоморф','Иликура','Лепторофа','Медоуказчик','Нектарница','Рысь','Сип','Сколопендра','Аброзавр','Галлица','Гарибальдия','Кулан','Малашка','Саранча','Удильщик','Улар','Филепитта','Якана']
let verbs = ['убивает', 'любит', 'не любит', 'играет', 'ecт', 'ждёт']

var i = 0

$(function(){
    $("#send").click(function() {
    let chatMessages = document.getElementById('chat')
    let msgTextArea = document.getElementById('text_field')

    if($("#text_field").val() != ""){
    console.log($("#text_field").val())

    let adjective = adjectives[Math.floor(Math.random()*adjectives.length)];
    let noun = verbs[Math.floor(Math.random()*verbs.length)];
    let verb = nouns[Math.floor(Math.random()*nouns.length)];

    btn = "<a class=delM onclick=\u0022$(\u0027#m" + i + "\u0027).remove()\u0022>✖</a>";
    chatMessages.innerHTML = chatMessages.innerHTML + "<p id='m"+i+"'> "+ btn +"User: " + msgTextArea.value + "</p>"
    $("#text_field").val("")
    i = i + 1

    btn = "<a class=delM onclick=\u0022$(\u0027#m" + i + "\u0027).remove()\u0022>✖</a>";
    chatMessages.innerHTML = chatMessages.innerHTML + "<p id='m"+i+"'> " + btn +"Bot: " + adjective + ' ' + verb + ' ' + noun + "</p>"
    chatMessages.scrollTop = chatMessages.scrollHeight;
    i = i + 1
}
});
});