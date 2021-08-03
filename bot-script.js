const { NlpManager } = require('node-nlp');
const trainnlp = require('./train-nlp');

const nlp = new NlpManager({ languages: ['en'], threshold: 0.5 });
nlp.container.register('fs', fs);
nlp.use(LangEn);

const connector = new ConsoleConnector();
connector.onHear = async (parent, line) => {
  if (line.toLowerCase() === 'quit') {
    connector.destroy();
    process.exit();
  } else {
    const result = await nlp.process(line);
    connector.say(result.answer);
  }
};

(async () => {
  await trainnlp(nlp);
  connector.say('Say something!');
})();


let botui = new BotUI('help-bot');

botui.message.add({
  delay: 500,
  loading: true,
  content: 'Hi! Welcome to my website'
}).then(function () {
  return botui.message.add({
    delay: 500,
    loading: true,
    content: 'How can I help?'
  });
}).then(function () {
  return botui.action.button({
    action: [
      {
        text: 'What are your opening hours?',
        value: 'hours'
      },
      {
        text: 'What do you do?',
        value: 'do'
      }
    ]
  });
}).then(function (res) {
  var message;

  if (res.value === "hours") {
    message = 'That’s a good one! This is a website, it’s always open.';
  }
  else if (res.value === "do") {
    message = 'I’m a product-focused Scrum master<br><br>I also have a keen interest in chatbots and web analytics';
  }

  return botui.message.add({
    type: 'html',
    delay: 1000,
    loading: true,
    content: message
  });
}).then(function (index) {
  return botui.action.button({
    action: [
      {
        text: 'Cool!',
        value: 'cool'
      }
    ]
  });
}).then(function (index) {
  return botui.message.add({
    delay: 1000,
    loading: true,
    content: 'I know! Thanks.'
  });
});
