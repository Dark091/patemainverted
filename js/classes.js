const classes = {
  scientifique: {
    name: "Scientifique",
    description: "Analyse les découvertes, les technologies et les phénomènes inconnus.",
    die: "Combat : 1d4",
    pv: "PV : 4",
    skills: [
      ["Observation I", 1, "Permet d'analyser et de comprendre les éléments découverts de difficulté 1."],
      ["Observation II", 2, "Permet d'analyser et de comprendre les éléments découverts de difficulté 2."],
      ["Observation III", 3, "Permet d'analyser et de comprendre les éléments découverts de difficulté 3."],
      ["Découverte", 3, "Une fois par mois, peut tenter de faire une découverte scientifique. Plusieurs Scientifiques peuvent collaborer afin d'augmenter leurs chances."],
      ["Observation IV", 4, "Permet d'analyser et de comprendre les éléments découverts de difficulté 4."]
    ]
  },
  explorateur: {
    name: "Explorateur",
    description: "Explore le monde, découvre de nouvelles zones et recherche des éléments cachés.",
    die: "Combat : 1d6",
    pv: "PV : 5",
    skills: [
      ["Aide", 1, "Augmente les chances de réussite d'une Recherche ou d'une Reconnaissance, mais ne permet pas d'en commencer une."],
      ["Recherche", 2, "Une fois par mois, peut tenter de découvrir quelque chose dans une zone déjà connue. Plusieurs Explorateurs peuvent participer afin d'augmenter leurs chances."],
      ["Reconnaissance", 4, "Une fois par mois, peut tenter de découvrir une nouvelle zone. Plusieurs Explorateurs peuvent participer afin d'augmenter leurs chances."]
    ]
  },
  combattant: {
    name: "Combattant",
    description: "Spécialiste du combat direct, de la protection et de la maîtrise des armes.",
    die: "Combat : 1d8",
    pv: "PV : 6",
    skills: [
      ["Avantage au combat", 1, "En cas d'égalité, remporte l'échange avec une différence de 1."],
      ["Désarmement", 2, "Lorsqu'il gagne un échange contre un adversaire armé, possède 1 chance sur 6 de le désarmer."],
      ["Protection", 2, "Peut choisir de recevoir les dégâts destinés à un allié."],
      ["Maîtrise des armes", 3, "Obtient +1 à ses jets de combat lorsqu'il utilise une arme."],
      ["Vétéran", 4, "Obtient +1 permanent à tous ses jets de combat, armé ou non."]
    ]
  },
  assassin: {
    name: "Assassin",
    description: "Très dangereux offensivement, mais fragile et dépendant d'une victoire rapide.",
    die: "Combat : 1d10",
    pv: "PV : 4",
    skills: [
      ["Fuite", 1, "Après chaque échange, peut lancer 1d6. Sur un 6, quitte immédiatement le combat."],
      ["Attaque surprise", 3, "Obtient +2 lors du premier échange d'un combat."],
      ["Exécution", 4, "Lors du premier échange, s'il gagne avec une différence d'au moins 4, il remporte immédiatement le combat."]
    ]
  },
  secouriste: {
    name: "Secouriste",
    description: "Soutient son groupe, soigne ses alliés et se débrouille correctement sur le terrain.",
    die: "Combat : 1d6",
    pv: "PV : 5",
    skills: [
      ["Soutien", 1, "Obtient +1 à ses jets de combat lorsqu'il combat avec au moins un allié."],
      ["Premiers soins", 3, "À chaque tour, peut lancer 1d4. Sur un 4, rend 1 PV à un allié de son choix. Ne peut pas être utilisé sur lui-même et ne peut pas dépasser les PV maximums de la cible."]
    ]
  }
};

function showClass(classId, button) {
  const selected = classes[classId];
  document.getElementById("detail-name").textContent = selected.name;
  document.getElementById("detail-description").textContent = selected.description;
  document.getElementById("detail-stats").innerHTML =
    '<span class="stat">' + selected.die + '</span>' +
    '<span class="stat">' + selected.pv + '</span>';

  const skills = document.getElementById("detail-skills");
  skills.innerHTML = selected.skills.map(([name, cost, text]) => `
    <div class="skill">
      <div class="skill-title">
        ${name}
        <span class="cost">${cost} point${cost > 1 ? "s" : ""}</span>
      </div>
      <p>${text}</p>
    </div>
  `).join("");

  document.querySelectorAll(".class-button").forEach(btn => btn.classList.remove("active"));
  button.classList.add("active");
}

document.querySelectorAll(".class-button").forEach(button => {
  button.addEventListener("click", () => showClass(button.dataset.class, button));
});