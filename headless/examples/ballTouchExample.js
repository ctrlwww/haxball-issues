var room = HBInit({
  roomName: "Stoni Tenis Arena 🏓",
  maxPlayers: 2,
  public: true,
  noPlayer: true
});

room.setDefaultStadium("Small"); // Osnova za mali teren
room.setScoreLimit(5);
room.setTimeLimit(3); // 3 minuta

room.onPlayerJoin = function(player) {
  room.sendChat("Dobrodošao, " + player.name + "! Spreman za stoni tenis?");
  // Auto-assign
  if (room.getPlayerList().length === 1) room.setPlayerTeam(player.id, 1);
  else if (room.getPlayerList().length === 2) room.setPlayerTeam(player.id, 2);
};

room.onPlayerLeave = function(player) {
  room.sendChat(player.name + " je napustio igru.");
};

// Antifk filter
room.onPlayerActivity = function(player) {
  room.sendChat(player.name + " je aktivan.");
};

// Lopta se resetuje kad padne gol
room.onTeamGoal = function(team) {
  room.sendChat((team === 1 ? "Crveni" : "Plavi") + " su postigli poen!");
};

room.onGameStart = function(player) {
  room.sendChat("🏓 Meč je počeo! Prvi do 5!");
};

room.onGameStop = function(player) {
  room.sendChat("⏹ Meč je završen!");
};
