
/*msg = new Array("Practicing with your typing can greatly help your overall computer skills.",
"A new computer is sold in the US every hour!",
"When do birds migrate from North to South?",
"Perplexing phrases, like this one, are tougher to type.");
word = 10*/
function medium() 
{
   msg = new Array("Practicing with your typing can greatly help your overall computer skills.",
   "Brendan Eich is the creator of javascript programming language.",
   "JavaScript often abbreviated as a JS for Understanding purpose.",
   "Krishna and Prajyot are the head of decoration committee.")
   word = 10
}
function large() 
{
   msg = new Array("Government Polytechnic Awasari(khurd) is the best college I've ever visited in my life",
   "JavaScript(JS) is lightweight, interpreted or just-in-time compiled programming with first-class functions.",
   "JavaScript is a client scripting language which is used for creating web pages more effectively.",
   "Because this is not a fairly simple phrase, could you swiftly, and precisely, copy it?")
   word = 15
}
function small()
{
   msg = new Array("Krishna, Prajyot and Pradip are group members .",
   "Who teaches javascript to us?",
   "Kapote sir teaches javascript.",
   "Pradip Hande is president of computer department.")
   word = 7
}
function beginIt() 
{
   randNum = Math.floor((Math.random() * 10)) % 4
   msgType = msg[randNum]
   day = new Date();
   startType = day.getTime();
   document.theForm.given.value = msgType
   document.theForm.typed.focus();
   document.theForm.typed.select();
}
function cheat() 
{
   alert("You cannot interfare in this section.");
   document.theForm.typed.focus();
}
function stopIt() 
{
   dayTwo = new Date();
   endType = dayTwo.getTime();
   totalTime = ((endType - startType) / 1000)
   spd = Math.round((word/totalTime) * 60)
   if (document.theForm.typed.value == document.theForm.given.value) 
   {
      alert("\nYou typed a sentence in "
      + totalTime + " seconds, a speed of about " + spd + " words per minute!")
   }
   else 
   {
      alert("You made an error, but typed at a speed of " + spd + " words per minute.")
   }
}
