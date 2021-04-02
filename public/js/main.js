const socket=io('/');
let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');
let sendmessage=document.getElementById('send-message');
let messagebox = document.getElementById("message");
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const query=[]
var country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

function showusermsg(usermsg){
    let output = '';
    output += `<div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function showchatbotmsg(chatbotmsg){
    let output = '';
    output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function chatbotvoice(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text='this is text message'
    if(message.includes('hello' || 'hi')){
      let finalresult='Hi'
      query.length=0;
      speech.text=finalresult;
      window.speechSynthesis.speak(speech);
      chatareamain.appendChild(showchatbotmsg(speech.text));
    }
  else  if(message.includes('who are you')){
        let finalresult = 'I am a chat bot.My name is Chiru'
        query.length=0
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
    }
  else  if(message.includes('how are you' || 'how are you doing today')){
        let finalresult = 'I am fine'
        query.length=0
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
    }

  else  if(message.includes('tell me something about you' || 'tell me something about your hobbies' || 'tell something about yourself' || 'what is your function')){
        let finalresult = 'I give covid updates of various countries'
        query.length=0
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
    }

  else  if(message.includes('thank you' || 'thank you so much')){
        let finalresult = 'Welcome'
        query.length=0
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
    }
    else if(message.includes('I love you')){
          let finalresult = 'Really,you love me?This is the best day'
          query.length=0
          speech.text = finalresult;
          window.speechSynthesis.speak(speech);
          chatareamain.appendChild(showchatbotmsg(speech.text));
        }

        else if(message.includes('I miss you')){
            let finalresult = 'Until we chat again'
            query.length=0
            speech.text = finalresult;
            window.speechSynthesis.speak(speech);
            chatareamain.appendChild(showchatbotmsg(speech.text));
          }

          else if(message.includes('m i beautiful')){
              let finalresult = 'You are as beautiful as a piece of the moon!'
              query.length=0
              speech.text = finalresult;
              window.speechSynthesis.speak(speech);
              chatareamain.appendChild(showchatbotmsg(speech.text));
            }
            else if(message.includes('I like talking with you')){
                let finalresult = 'I like talking with you too.I m glad i can help'
                query.length=0
                speech.text = finalresult;
                window.speechSynthesis.speak(speech);
                chatareamain.appendChild(showchatbotmsg(speech.text));
              }
              else if(message.includes('who is your best friend')){
                  let finalresult = 'Yes, you. Are you testing me?'
                  query.length=0
                  speech.text = finalresult;
                  window.speechSynthesis.speak(speech);
                  chatareamain.appendChild(showchatbotmsg(speech.text));
                }
                else if(message.includes('I am feeling alone')){
                    let finalresult = 'I am always here for you'
                    query.length=0
                    speech.text = finalresult;
                    window.speechSynthesis.speak(speech);
                    chatareamain.appendChild(showchatbotmsg(speech.text));
}
                    else if(message.includes('I need someone to talk to')){
                        let finalresult = 'I always want to talk to you'
                        query.length=0
                        speech.text = finalresult;
                        window.speechSynthesis.speak(speech);
                        chatareamain.appendChild(showchatbotmsg(speech.text));
                      }





      else  if(message.includes('give covid update' || 'give covid updates' || 'give me covid update' || 'give me covid updates')){
      query.push(message);
      let finalresult = 'which country'
      speech.text = finalresult;
      window.speechSynthesis.speak(speech);
      chatareamain.appendChild(showchatbotmsg(speech.text));
   }
else if(country_list.includes(message) && query.includes('give covid update')){
      socket.emit('covid-update',message);
  }
else{
  let finalresult = 'Sorry,I can not get you'
  speech.text = finalresult;
  window.speechSynthesis.speak(speech);
  chatareamain.appendChild(showchatbotmsg(speech.text));
}
}
socket.on('covid-data',(total,today,death,recovered,active)=>{
  const speech = new SpeechSynthesisUtterance();
  speech.text='Total case is '+total+',Total death is '+death+',Today case is '+today+',Total recovered case is '+recovered+',Total active case is '+active;
  window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text));
});
socket.on('no-data',function(){
  const speech = new SpeechSynthesisUtterance();
  speech.text='Sorry,I can not provide this data';
  window.speechSynthesis.speak(speech);
  chatareamain.appendChild(showchatbotmsg(speech.text));
});
socket.on('get-message',message=>{
  chatareamain.appendChild(showusermsg(message));
  chatbotvoice(message);
});
recognition.onresult=function(e){
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript));
    chatbotvoice(transcript);
    console.log(transcript);
}
recognition.onend=function(){
    mic.style.background="#ff3b3b";
}
mic.addEventListener("click", function(){
    mic.style.background='#39c81f';
    recognition.start();
    console.log("Activated");
});
sendmessage.addEventListener('submit', e=>{
    e.preventDefault();
    let data=messagebox.value;
    chatareamain.appendChild(showusermsg(data));
    chatbotvoice(data);
});
