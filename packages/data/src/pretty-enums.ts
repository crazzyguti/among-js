/**
 * @packageDocumentation
 * Functions to convert enums into human-readable names for debugging.
 */

import { PayloadType, DisconnectReason, RPCFlag, GameDataType, PlayerColor, TaskType } from './enums'

/**
 * Convert a payload type to a human-readable string.
 * 
 * @param type Payload type
 */
export const prettyPayloadType = (type: PayloadType) => {
  switch (type) {
    case PayloadType.CreateGame:
      return 'create game'
    case PayloadType.JoinGame:
      return 'join game'
    case PayloadType.StartGame:
      return 'start game'
    case PayloadType.RemoveGame:
      return 'remove game'
    case PayloadType.RemovePlayer:
      return 'remove player'
    case PayloadType.GameData:
      return 'game data'
    case PayloadType.GameDataTo:
      return 'game data (to)'
    case PayloadType.JoinedGame:
      return 'joined game'
    case PayloadType.EndGame:
      return 'end game'
    case PayloadType.AlterGame:
      return 'alter game'
    case PayloadType.KickPlayer:
      return 'kick player'
    case PayloadType.WaitForHost:
      return 'wait for host'
    case PayloadType.Redirect:
      return 'redirect'
    case PayloadType.ReselectServer:
      return 'reselect server'

    case PayloadType.GetGameList:
    case PayloadType.GetGameListV2:
      return 'get game list'

    default:
      return `unknown (${type})`
  }
}

/**
 * Convert a disconnect reason to a human-readable string as found in the game.
 * 
 * @param reason Disconnect reason
 */
export const prettyDisconnectReason = (reason: DisconnectReason) => {
  switch (reason) {
    case DisconnectReason.GameFull:
      return 'The game you tried to join is full.\nCheck with the host to see if you can join next round.'
    case DisconnectReason.GameStarted:
      return 'The game you tried to join already started.\nCheck with the host to see if you can join next round.'
    case DisconnectReason.OutdatedClient:
      return 'You are running an older version of the game.\nPlease update to play with others.'

    case DisconnectReason.Banned:
      return 'You were banned from the room.\nYou cannot rejoin that room.'
    case DisconnectReason.Kicked:
      return 'You were kicked from the room.\nYou cannot rejoin that room.'

    case DisconnectReason.InvalidUsername:
      return 'Server refused username.'
    case DisconnectReason.Hacking:
      return 'You were banned for hacking.\nPlease stop.'
    case DisconnectReason.BadConnection:
      return 'You disconnected from the host.\nIf this happens often, check your WiFi strength.'

    case DisconnectReason.ServerClosed:
      return 'The server stopped this game. Possibly due to inactivity.'
    case DisconnectReason.ServerOverloaded:
      return 'The Among Us servers are overloaded.\nSorry! Please try again later!'

    case DisconnectReason.GameNotFound:
    case DisconnectReason.GameNotFound2:
      return `Could not find the game you're looking for.`

    case DisconnectReason.CustomLegacy:
    case DisconnectReason.Custom:
      return 'Custom'

    case DisconnectReason.None:
    case DisconnectReason.Force:
      return 'Forcibly disconnected from the server:\nThe remote sent a disconnect request.'
  }
}

/**
 * Convert an RPC flag to a human-readable string
 * 
 * @param type RPC flag
 */
export const prettyRPCFlag = (type: RPCFlag) => {
  switch (type) {
    case RPCFlag.PlayAnimation:
      return 'PlayAnimation'
    case RPCFlag.CompleteTask:
      return 'CompleteTask'
    case RPCFlag.SyncSettings:
      return 'SyncSettings'
    case RPCFlag.SetInfected:
      return 'SetInfected'
    case RPCFlag.Exiled:
      return 'Exiled'
    case RPCFlag.CheckName:
      return 'CheckName'
    case RPCFlag.SetName:
      return 'SetName'
    case RPCFlag.CheckColor:
      return 'CheckColor'
    case RPCFlag.SetColor:
      return 'SetColor'
    case RPCFlag.SetHat:
      return 'SetHat'
    case RPCFlag.SetSkin:
      return 'SetSkin'
    case RPCFlag.ReportDeadBody:
      return 'ReportDeadBody'
    case RPCFlag.MurderPlayer:
      return 'MurderPlayer'
    case RPCFlag.SendChat:
      return 'SendChat'
    case RPCFlag.StartMeeting:
      return 'StartMeeting'
    case RPCFlag.SetScanner:
      return 'SetScanner'
    case RPCFlag.SendChatNote:
      return 'SendChatNote'
    case RPCFlag.SetPet:
      return 'SetPet'
    case RPCFlag.SetStartCounter:
      return 'SetStartCounter'
    case RPCFlag.EnterVent:
      return 'EnterVent'
    case RPCFlag.ExitVent:
      return 'ExitVent'
    case RPCFlag.SnapTo:
      return 'SnapTo'
    case RPCFlag.Close:
      return 'Close'
    case RPCFlag.VotingComplete:
      return 'VotingComplete'
    case RPCFlag.CastVote:
      return 'CastVote'
    case RPCFlag.ClearVote:
      return 'ClearVote'
    case RPCFlag.AddVote:
      return 'AddVote'
    case RPCFlag.CloseDoorsOfType:
      return 'CloseDoorsOfType'
    case RPCFlag.RepairSystem:
      return 'RepairSystem'
    case RPCFlag.SetTasks:
      return 'SetTasks'
    case RPCFlag.UpdateGameData:
      return 'UpdateGameData'
  }
}

/**
 * Convert a game data type to a human-readable string.
 * 
 * @param type Game data type
 */
export const prettyGameDataType = (type: GameDataType) => {
  switch (type) {
    case GameDataType.Data:
      return 'generic data'
    case GameDataType.RPC:
      return 'rpc'
    case GameDataType.Spawn:
      return 'spawn'
    case GameDataType.Despawn:
      return 'despawn'
    case GameDataType.SceneChange:
      return 'scene change'
    case GameDataType.Ready:
      return 'ready'
    case GameDataType.ChangeSettings:
      return 'change settings'
  }
}

/**
 * Convert a player color to a human-readable string.
 * 
 * @param color Player color
 */
export const prettyPlayerColor = (color: PlayerColor) => {
  switch (color) {
    case PlayerColor.Red: return 'red'
    case PlayerColor.Blue: return 'blue'
    case PlayerColor.DarkGreen: return 'dark green'
    case PlayerColor.Pink: return 'pink'
    case PlayerColor.Orange: return 'orange'
    case PlayerColor.Yellow: return 'yellow'
    case PlayerColor.Black: return 'black'
    case PlayerColor.White: return 'white'
    case PlayerColor.Purple: return 'purple'
    case PlayerColor.Brown: return 'brown'
    case PlayerColor.Cyan: return 'cyan'
    case PlayerColor.Lime: return 'lime'
  }
}

/**
 * Convert a task type to a human-readable string as seen in the task list in the game.
 * 
 * @param type Task type
 */
export const prettyTaskType = (type: TaskType) => {
  switch (type) {
    case TaskType.SubmitScan: return 'Submit Scan'
    case TaskType.PrimeShields: return 'Prime Shields'
    case TaskType.FuelEngines: return 'Fuel Engines'
    case TaskType.ChartCourse: return 'Chart Course'
    case TaskType.StartReactor: return 'Start Reactor'
    case TaskType.SwipeCard: return 'Swipe Card'
    case TaskType.ClearAsteroids: return 'Clear Asteroids'
    case TaskType.UploadData: return 'Upload Data'
    case TaskType.InspectSample: return 'Inspect Sample'
    case TaskType.EmptyChute: return 'Empty Chute'
    case TaskType.EmptyGarbage: return 'Empty Garbage'
    case TaskType.AlignEngineOutput: return 'Align Engine Output'
    case TaskType.FixWiring: return 'Fix Wiring'
    case TaskType.CalibrateDistributor: return 'Calibrate Distributor'
    case TaskType.DivertPower: return 'Divert Power'
    case TaskType.UnlockManifolds: return 'Unlock Manifolds'
    case TaskType.ResetReactor: return 'Reset Reactor'
    case TaskType.FixLights: return 'Fix Lights'
    case TaskType.CleanO2Filter: return 'Clean O2 Filter'
    case TaskType.FixComms: return 'Fix Comms'
    case TaskType.RestoreOxygen: return 'Restore Oxygen'
    case TaskType.StabilizeSteering: return 'Stabilize Steering'
    case TaskType.AssembleArtifact: return 'Assemble Artifact'
    case TaskType.SortSamples: return 'Sort Samples'
    case TaskType.MeasureWeather: return 'Measure Weather'
    case TaskType.EnterIdCode: return 'Enter Id Code'
  }
}