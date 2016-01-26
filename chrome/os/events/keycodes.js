// Copyright 2016 The ChromeOS IME Authors. All Rights Reserved.
// limitations under the License.
// See the License for the specific language governing permissions and
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// distributed under the License is distributed on an "AS-IS" BASIS,
// Unless required by applicable law or agreed to in writing, software
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// You may obtain a copy of the License at
// you may not use this file except in compliance with the License.
// Licensed under the Apache License, Version 2.0 (the "License");
//
goog.provide('i18n.input.chrome.events.KeyCodes');


/**
 * W3C Document Object Model (DOM) Level 3 Keyboard Events key codes
 * Specification.
 * @see http://www.w3.org/TR/DOM-Level-3-Events/#key-value-tables
 *
 * @enum {string}
 */
i18n.input.chrome.events.KeyCodes = {
  // Special Key Values
  UNIDENTIFIED: 'Unidentified',

  // Letter Key
  BACK_QUOTE: 'Backquote',
  KEY_A: 'KeyA',
  KEY_B: 'KeyB',
  KEY_C: 'KeyC',
  KEY_D: 'KeyD',
  KEY_E: 'KeyE',
  KEY_F: 'KeyF',
  KEY_G: 'KeyG',
  KEY_H: 'KeyH',
  KEY_I: 'KeyI',
  KEY_J: 'KeyJ',
  KEY_K: 'KeyK',
  KEY_L: 'KeyL',
  KEY_M: 'KeyM',
  KEY_N: 'KeyN',
  KEY_O: 'KeyO',
  KEY_P: 'KeyP',
  KEY_Q: 'KeyQ',
  KEY_R: 'KeyR',
  KEY_S: 'KeyS',
  KEY_T: 'KeyT',
  KEY_U: 'KeyU',
  KEY_V: 'KeyV',
  KEY_W: 'KeyW',
  KEY_X: 'KeyX',
  KEY_Y: 'KeyY',
  KEY_Z: 'KeyZ',

  // Number keys
  DIGIT_0: 'Digit0',
  DIGIT_1: 'Digit1',
  DIGIT_2: 'Digit2',
  DIGIT_3: 'Digit3',
  DIGIT_4: 'Digit4',
  DIGIT_5: 'Digit5',
  DIGIT_6: 'Digit6',
  DIGIT_7: 'Digit7',
  DIGIT_8: 'Digit8',
  DIGIT_9: 'Digit9',

  // Modifier keys
  ALT: 'Alt',
  ALT_GRAPH: 'AltGraph',
  ALT_LEFT: 'AltLeft',
  ALT_RIGHT: 'AltRight',
  CAPS_LOCK: 'CapsLock',
  CONTROL: 'Control',
  FN: 'Fn',
  FN_LOCK: 'FnLock',
  HYPER: 'Hyper',
  META: 'Meta',
  NUM_LOCK: 'NumLock',
  O_S: 'OS',
  SHIFT: 'Shift',
  SHIFT_LEFT: 'ShiftLeft',
  SHIFT_RIGHT: 'ShiftRight',
  SUPER: 'Super',
  SYMBOL: 'Symbol',
  SYMBOL_LOCK: 'SymbolLock',

  // Whitespace keys
  ENTER: 'Enter',
  SEPARATOR: 'Separator',
  TAB: 'Tab',
  SPACE: 'Space',

  // Navigation keys
  ARROW_DOWN: 'ArrowDown',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  ARROW_UP: 'ArrowUp',
  END: 'End',
  HOME: 'Home',
  PAGE_DOWN: 'PageDown',
  PAGE_UP: 'PageUp',

  // Editing keys
  BACKSPACE: 'Backspace',
  CLEAR: 'Clear',
  COPY: 'Copy',
  CR_SEL: 'CrSel',
  CUT: 'Cut',
  DELETE: 'Delete',
  ERASE_EOF: 'EraseEof',
  EX_SEL: 'ExSel',
  INSERT: 'Insert',
  PASTE: 'Paste',
  REDO: 'Redo',
  UNDO: 'Undo',

  // UI keys
  ACCEPT: 'Accept',
  AGAIN: 'Again',
  ATTN: 'Attn',
  CANCEL: 'Cancel',
  CONTEXT_MENU: 'ContextMenu',
  ESCAPE: 'Escape',
  EXECUTE: 'Execute',
  FIND: 'Find',
  HELP: 'Help',
  PAUSE: 'Pause',
  PLAY: 'Play',
  PROPS: 'Props',
  SCROLL_LOCK: 'ScrollLock',
  ZOOM_IN: 'ZoomIn',
  ZOOM_OUT: 'ZoomOut',

  // Device keys
  BRIGHTNESS_DOWN: 'BrightnessDown',
  BRIGHTNESS_UP: 'BrightnessUp',
  CAMERA: 'Camera',
  EJECT: 'Eject',
  LOG_OFF: 'LogOff',
  POWER: 'Power',
  POWER_OFF: 'PowerOff',
  PRINT_SCREEN: 'PrintScreen',
  HIBERNATE: 'Hibernate',
  STANDBY: 'Standby',
  WAKE_UP: 'WakeUp',

  // IME and composition keys
  ALL_CANDIDATES: 'AllCandidates',
  ALPHANUMERIC: 'Alphanumeric',
  CODE_INPUT: 'CodeInput',
  COMPOSE: 'Compose',
  CONVERT: 'Convert',
  FINAL_MODE: 'FinalMode',
  GROUP_FIRST: 'GroupFirst',
  GROUP_LAST: 'GroupLast',
  GROUP_NEXT: 'GroupNext',
  GROUP_PREVIOUS: 'GroupPrevious',
  MODE_CHANGE: 'ModeChange',
  NEXT_CANDIDATE: 'NextCandidate',
  NON_CONVERT: 'NonConvert',
  PREVIOUS_CANDIDATE: 'PreviousCandidate',
  PROCESS: 'Process',
  SINGLE_CANDIDATE: 'SingleCandidate',

  // Keys specific to korean keyboards
  ROMAN_CHARACTERS: 'RomanCharacters',
  HANGUL_MODE: 'HangulMode',
  HANJA_MODE: 'Hanja',
  JUNJA_MODE: 'JunjaMode',

  // Keys specific to japanese keyboards
  ZENKAKU: 'Zenkaku',
  HANKAKU: 'Hankaku',
  ZENKAKU_HANKAKU: 'ZenkakuHankaku',
  KANA_MODE: 'KanaMode',
  KANJI_MODE: 'KanjiMode',
  HIRAGANA: 'Hiragana',
  KATAKANA: 'Katakana',
  HIRAGANA_KATAKANA: 'HiraganaKatakana',
  EISU: 'Eisu',

  // General-purpose function keys
  F1: 'F1',
  F2: 'F2',
  F3: 'F3',
  F4: 'F4',
  F5: 'F5',
  F6: 'F6',
  F7: 'F7',
  F8: 'F8',
  F9: 'F9',
  F10: 'F10',
  F11: 'F11',
  F12: 'F12',
  SOFT1: 'Soft1',
  SOFT2: 'Soft2',
  SOFT3: 'Soft3',
  SOFT4: 'Soft4',

  // Mediamedia keys
  CLOSE: 'Close',
  MAIL_FORWARD: 'MailForward',
  MAIL_REPLY: 'MailReply',
  MAIL_SEND: 'MailSend',
  MEDIA_PLAY_PAUSE: 'MediaPlayPause',
  MEDIA_SELECT: 'MediaSelect',
  MEDIA_STOP: 'MediaStop',
  MEDIA_TRACK_NEXT: 'MediaTrackNext',
  MEDIA_TRACK_PREVIOUS: 'MediaTrackPrevious',
  NEW: 'New',
  OPEN: 'Open',
  PRINT: 'Print',
  SAVE: 'Save',
  SPELL_CHECK: 'SpellCheck',
  VOLUME_DOWN: 'VolumeDown',
  VOLUME_UP: 'VolumeUp',
  VOLUME_MUTE: 'VolumeMute',

  // Application keys
  LAUNCH_CALCULATOR: 'LaunchCalculator',
  LAUNCH_CALENDAR: 'LaunchCalendar',
  LAUNCH_MAIL: 'LaunchMail',
  LAUNCH_MEDIA_PLAYER: 'LaunchMediaPlayer',
  LAUNCH_MUSIC_PLAYER: 'LaunchMusicPlayer',
  LAUNCH_MY_COMPUTER: 'LaunchMyComputer',
  LAUNCH_SCREEN_SAVER: 'LaunchScreenSaver',
  LAUNCH_SPREADSHEET: 'LaunchSpreadsheet',
  LAUNCH_WEB_BROWSER: 'LaunchWebBrowser',
  LAUNCH_WEB_CAM: 'LaunchWebCam',
  LAUNCH_WORD_PROCESSOR: 'LaunchWordProcessor',

  // Browser keys
  BROWSER_BACK: 'BrowserBack',
  BROWSER_FAVORITES: 'BrowserFavorites',
  BROWSER_FORWARD: 'BrowserForward',
  BROWSER_HOME: 'BrowserHome',
  BROWSER_REFRESH: 'BrowserRefresh',
  BROWSER_SEARCH: 'BrowserSearch',
  BROWSER_STOP: 'BrowserStop',

  // Media controller keys
  AUDIO_BALANCE_LEFT: 'AudioBalanceLeft',
  AUDIO_BALANCE_RIGHT: 'AudioBalanceRight',
  AUDIO_BASS_BOOST_DOWN: 'AudioBassBoostDown',
  AUDIO_BASS_BOOST_UP: 'AudioBassBoostUp',
  AUDIO_FADER_FRONT: 'AudioFaderFront',
  AUDIO_FADER_REAR: 'AudioFaderRear',
  AUDIO_SURROUND_MODE_NEXT: 'AudioSurroundModeNext',
  CHANNEL_DOWN: 'ChannelDown',
  CHANNEL_UP: 'ChannelUp',
  COLORF0_RED: 'ColorF0Red',
  COLORF1_GREEN: 'ColorF1Green',
  COLORF2_YELLOW: 'ColorF2Yellow',
  COLORF3_BLUE: 'ColorF3Blue',
  COLORF4_GREY: 'ColorF4Grey',
  COLORF5_BROWN: 'ColorF5Brown',
  CLOSED_CAPTION_TOGGLE: 'ClosedCaptionToggle',
  DIMMER: 'Dimmer',
  DISPLAY_SWAP: 'DisplaySwap',
  EXIT: 'Exit',
  FAVORITE_CLEAR0: 'FavoriteClear0',
  FAVORITE_CLEAR1: 'FavoriteClear1',
  FAVORITE_CLEAR2: 'FavoriteClear2',
  FAVORITE_CLEAR3: 'FavoriteClear3',
  FAVORITE_RECALL0: 'FavoriteRecall0',
  FAVORITE_RECALL1: 'FavoriteRecall1',
  FAVORITE_RECALL2: 'FavoriteRecall2',
  FAVORITE_RECALL3: 'FavoriteRecall3',
  FAVORITE_STORE0: 'FavoriteStore0',
  FAVORITE_STORE1: 'FavoriteStore1',
  FAVORITE_STORE2: 'FavoriteStore2',
  FAVORITE_STORE3: 'FavoriteStore3',
  GUIDE: 'Guide',
  GUIDE_NEXT_DAY: 'GuideNextDay',
  GUIDE_PREVIOUS_DAY: 'GuidePreviousDay',
  INFO: 'Info',
  INSTANT_REPLAY: 'InstantReplay',
  LINK: 'Link',
  LIST_PROGRAM: 'ListProgram',
  LIVE_CONTENT: 'LiveContent',
  LOCK: 'Lock',
  MEDIA_APPS: 'MediaApps',
  MEDIA_FAST_FORWARD: 'MediaFastForward',
  MEDIA_LAST: 'MediaLast',
  MEDIA_PAUSE: 'MediaPause',
  MEDIA_PLAY: 'MediaPlay',
  MEDIA_RECORD: 'MediaRecord',
  MEDIA_REWIND: 'MediaRewind',
  MEDIA_SKIP: 'MediaSkip',
  NEXT_FAVORITE_CHANNEL: 'NextFavoriteChannel',
  NEXT_USER_PROFILE: 'NextUserProfile',
  ON_DEMAND: 'OnDemand',
  PIN_P_DOWN: 'PinPDown',
  PIN_P_MOVE: 'PinPMove',
  PIN_P_TOGGLE: 'PinPToggle',
  PIN_P_UP: 'PinPUp',
  PLAY_SPEED_DOWN: 'PlaySpeedDown',
  PLAY_SPEED_RESET: 'PlaySpeedReset',
  PLAY_SPEED_UP: 'PlaySpeedUp',
  RANDOM_TOGGLE: 'RandomToggle',
  RC_LOW_BATTERY: 'RcLowBattery',
  RECORD_SPEED_NEXT: 'RecordSpeedNext',
  RF_BYPASS: 'RfBypass',
  SCAN_CHANNELS_TOGGLE: 'ScanChannelsToggle ',
  SCREEN_MODE_NEXT: 'ScreenModeNext',
  SETTINGS: 'Settings',
  SPLIT_SCREEN_TOGGLE: 'SplitScreenToggle',
  SUBTITLE: 'Subtitle',
  TELETEXT: 'Teletext',
  VIDEO_MODE_NEXT: 'VideoModeNext',
  WINK: 'Wink',
  ZOOM_TOGGLE: 'ZoomToggle'
};
