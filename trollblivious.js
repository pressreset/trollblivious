// ==UserScript==
// @name        hide-youtube-dashboard-community-menu
// @include     https://*youtube.com/dashboard*
// @include     https://*youtube.com/edit*
// @include     https://*youtube.com/enhance*
// @include     https://*youtube.com/audio*
// @include     https://*youtube.com/endscreen*
// @include     https://*youtube.com/cards*
// @include     https://*youtube.com/timedtext_video*
// @include     https://*youtube.com/my_videos*
// @include     https://*youtube.com/live_dashboard*
// @include     https://*youtube.com/features*
// @include     https://*youtube.com/analytics*
// @include     https://*youtube.com/audiolibrary/music*
// @include     https://*youtube.com/music_policies*
// @include     https://*youtube.com/editor*
// @include     https://*youtube.com/account_monetization*
// @include     https://*youtube.com/upload_defaults*
// @include     https://*youtube.com/featured_content*
// @include     https://*youtube.com/branding*
// @include     https://*youtube.com/advanced_settings*
// @include     https://*youtube.com/my_live_events*
// @include     https://*youtube.com/live_dashboard*
// @include     https://*youtube.com/view_all_playlists*
// @include     https://*youtube.com/my_shows*
// @include     https://*youtube.com/my_videos_copyright*
// @include     https://*youtube.com/watch*
// @include     https://*youtube.com/timedtext_cs_panel*
// @description Hides the menu option for community in the YouTube Dashboard
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @grant       GM_addStyle
// ==/UserScript==

$("#creator-sidebar-section-id-community").hide();
$("#watch-discussion").hide();