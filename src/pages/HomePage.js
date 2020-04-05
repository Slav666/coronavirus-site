import React from "react";
import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "What is coronavirus?",
    text:
      'Coronaviruses are a family of viruses that cause disease in animals. Seven, including the new virus, have made the jump to humans, but most just cause cold-like symptoms.Covid-19 is closely related to severe acute respiratory syndrome (Sars) which swept around the world in 2002 to 2003. That virus infected around 8,000 people and killed about 800 but it soon ran itself out, largely because most of those infected were seriously ill so it was easier to control.Another coronavirus is Middle East respiratory syndrome (Mers), cases of which have been occurring sporadically since it first emerged in 2012 - there have been around 2,500 cases and nearly 900 deaths. Covid-19 is different to these two other coronaviruses in that the spectrum of disease is broad, with around 80 per cent of cases leading to a mild infection. There may also be many people carrying the disease and displaying no symptoms, making it even harder to control. So far, around 20 per cent of Covid-19 cases have been classed as "severe" and the current death rate varies between 0.7 per cent and 3.4 per cent depending on the location and, crucially, access to good hospital care.'
  },
  {
    id: 2,
    title: "How did the outbreak start?",
    text:
      'The source of the coronavirus is believed to be a "wet market" in Wuhan which sold both dead and live animals including fish and birds. Such markets pose a heightened risk of viruses jumping from animals to humans because hygiene standards are difficult to maintain if live animals are being kept and butchered on site. Typically, they are also densely packed allowing disease to spread from species to species.The animal source of Covid-19 has not yet been identified, but the original host is thought to be bats. Bats were not sold at the Wuhan market but may have infected live chickens or other animals sold there. Bats are host to a wide range of zoonotic viruses including Ebola, HIV and rabies.'
  },
  {
    id: 3,
    title: "What are the symptoms of coronavirus?",
    text:
      "Initial symptoms include fever, dry cough, tiredness and a general feeling of being unwell. Other symptoms are emerging such as a lost of taste and smell and stomach problems. For a full read-out of the symptoms and treatment of coronavirus, click here."
  }
];

const HomePage = () => {
  const artList = articles.map(article => (
    <Article key={article.id} {...article} />
  ));
  return <div className="home">{artList}</div>;
};

export default HomePage;
