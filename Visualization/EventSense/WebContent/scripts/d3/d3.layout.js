



<!DOCTYPE html>
<html>
<head>
 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" >
 <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" >
 
 <meta name="ROBOTS" content="NOARCHIVE">
 
 <link rel="icon" type="image/vnd.microsoft.icon" href="https://ssl.gstatic.com/codesite/ph/images/phosting.ico">
 
 
 <script type="text/javascript">
 
 
 
 
 var codesite_token = "ABZ6GAdHeB-b4aPykaBOmr8slaauDsWizw:1421231462947";
 
 
 var CS_env = {"relativeBaseUrl": "", "assetVersionPath": "https://ssl.gstatic.com/codesite/ph/18133036155640238800", "domainName": null, "assetHostPath": "https://ssl.gstatic.com/codesite/ph", "projectName": "phylografter", "loggedInUserEmail": "giangtranbinh@gmail.com", "token": "ABZ6GAdHeB-b4aPykaBOmr8slaauDsWizw:1421231462947", "projectHomeUrl": "/p/phylografter", "profileUrl": "/u/giangtranbinh/"};
 var _gaq = _gaq || [];
 _gaq.push(
 ['siteTracker._setAccount', 'UA-18071-1'],
 ['siteTracker._trackPageview']);
 
 (function() {
 var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
 ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
 (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ga);
 })();
 
 </script>
 
 
 <title>d3.layout.js - 
 phylografter -
 
 
 phylogenetic tree grafting and editing - Google Project Hosting
 </title>
 <link type="text/css" rel="stylesheet" href="https://ssl.gstatic.com/codesite/ph/18133036155640238800/css/core.css">
 
 <link type="text/css" rel="stylesheet" href="https://ssl.gstatic.com/codesite/ph/18133036155640238800/css/ph_detail.css" >
 
 
 <link type="text/css" rel="stylesheet" href="https://ssl.gstatic.com/codesite/ph/18133036155640238800/css/d_sb.css" >
 
 
 
<!--[if IE]>
 <link type="text/css" rel="stylesheet" href="https://ssl.gstatic.com/codesite/ph/18133036155640238800/css/d_ie.css" >
<![endif]-->
 <style type="text/css">
 .menuIcon.off { background: no-repeat url(https://ssl.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -42px }
 .menuIcon.on { background: no-repeat url(https://ssl.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -28px }
 .menuIcon.down { background: no-repeat url(https://ssl.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 0; }
 
 
 
  tr.inline_comment {
 background: #fff;
 vertical-align: top;
 }
 div.draft, div.published {
 padding: .3em;
 border: 1px solid #999; 
 margin-bottom: .1em;
 font-family: arial, sans-serif;
 max-width: 60em;
 }
 div.draft {
 background: #ffa;
 } 
 div.published {
 background: #e5ecf9;
 }
 div.published .body, div.draft .body {
 padding: .5em .1em .1em .1em;
 max-width: 60em;
 white-space: pre-wrap;
 white-space: -moz-pre-wrap;
 white-space: -pre-wrap;
 white-space: -o-pre-wrap;
 word-wrap: break-word;
 font-size: 1em;
 }
 div.draft .actions {
 margin-left: 1em;
 font-size: 90%;
 }
 div.draft form {
 padding: .5em .5em .5em 0;
 }
 div.draft textarea, div.published textarea {
 width: 95%;
 height: 10em;
 font-family: arial, sans-serif;
 margin-bottom: .5em;
 }

 
 .nocursor, .nocursor td, .cursor_hidden, .cursor_hidden td {
 background-color: white;
 height: 2px;
 }
 .cursor, .cursor td {
 background-color: darkblue;
 height: 2px;
 display: '';
 }
 
 
.list {
 border: 1px solid white;
 border-bottom: 0;
}

 
 </style>
</head>
<body class="t4">
<script type="text/javascript">
 window.___gcfg = {lang: 'en'};
 (function() 
 {var po = document.createElement("script");
 po.type = "text/javascript"; po.async = true;po.src = "https://apis.google.com/js/plusone.js";
 var s = document.getElementsByTagName("script")[0];
 s.parentNode.insertBefore(po, s);
 })();
</script>
<div class="headbg">

 <div id="gaia">
 

 <span>
 
 
 
 <a href="#" id="multilogin-dropdown" onclick="return false;"
 ><u><b>giangtranbinh@gmail.com</b></u> <small>&#9660;</small></a>
 
 
 | <a href="/u/giangtranbinh/" id="projects-dropdown" onclick="return false;"
 ><u>My favorites</u> <small>&#9660;</small></a>
 | <a href="/u/giangtranbinh/" onclick="_CS_click('/gb/ph/profile');"
 title="Profile, Updates, and Settings"
 ><u>Profile</u></a>
 | <a href="https://www.google.com/accounts/Logout?continue=https%3A%2F%2Fcode.google.com%2Fp%2Fphylografter%2Fsource%2Fbrowse%2Fbranches%2Fv2-dev%2Fstatic%2Fd3%2Fd3.layout.js%3Fr%3D524" 
 onclick="_CS_click('/gb/ph/signout');"
 ><u>Sign out</u></a>
 
 </span>

 </div>

 <div class="gbh" style="left: 0pt;"></div>
 <div class="gbh" style="right: 0pt;"></div>
 
 
 <div style="height: 1px"></div>
<!--[if lte IE 7]>
<div style="text-align:center;">
Your version of Internet Explorer is not supported. Try a browser that
contributes to open source, such as <a href="http://www.firefox.com">Firefox</a>,
<a href="http://www.google.com/chrome">Google Chrome</a>, or
<a href="http://code.google.com/chrome/chromeframe/">Google Chrome Frame</a>.
</div>
<![endif]-->



 <table style="padding:0px; margin: 0px 0px 10px 0px; width:100%" cellpadding="0" cellspacing="0"
 itemscope itemtype="http://schema.org/CreativeWork">
 <tr style="height: 58px;">
 
 
 
 <td id="plogo">
 <link itemprop="url" href="/p/phylografter">
 <a href="/p/phylografter/">
 
 <img src="https://ssl.gstatic.com/codesite/ph/images/defaultlogo.png" alt="Logo" itemprop="image">
 
 </a>
 </td>
 
 <td style="padding-left: 0.5em">
 
 <div id="pname">
 <a href="/p/phylografter/"><span itemprop="name">phylografter</span></a>
 </div>
 
 <div id="psum">
 <a id="project_summary_link"
 href="/p/phylografter/"><span itemprop="description">phylogenetic tree grafting and editing</span></a>
 
 </div>
 
 
 </td>
 <td style="white-space:nowrap;text-align:right; vertical-align:bottom;">
 
 <form action="/hosting/search">
 <input size="30" name="q" value="" type="text">
 
 <input type="submit" name="projectsearch" value="Search projects" >
 </form>
 
 </tr>
 </table>

</div>

 
<div id="mt" class="gtb"> 
 <a href="/p/phylografter/" class="tab ">Project&nbsp;Home</a>
 
 
 
 
 <a href="/p/phylografter/downloads/list" class="tab ">Downloads</a>
 
 
 
 
 
 <a href="/p/phylografter/w/list" class="tab ">Wiki</a>
 
 
 
 
 
 <a href="/p/phylografter/issues/list"
 class="tab ">Issues</a>
 
 
 
 
 
 <a href="/p/phylografter/source/checkout"
 class="tab active">Source</a>
 
 
 
 
 
 
 
 
 <div class=gtbc></div>
</div>
<table cellspacing="0" cellpadding="0" width="100%" align="center" border="0" class="st">
 <tr>
 
 
 
 
 
 
 <td class="subt">
 <div class="st2">
 <div class="isf">
 
 


 <span class="inst1"><a href="/p/phylografter/source/checkout">Checkout</a></span> &nbsp;
 <span class="inst2"><a href="/p/phylografter/source/browse/">Browse</a></span> &nbsp;
 <span class="inst3"><a href="/p/phylografter/source/list">Changes</a></span> &nbsp;
 
 
 
 
 
 
 
 </form>
 <script type="text/javascript">
 
 function codesearchQuery(form) {
 var query = document.getElementById('q').value;
 if (query) { form.action += '%20' + query; }
 }
 </script>
 </div>
</div>

 </td>
 
 
 
 <td align="right" valign="top" class="bevel-right"></td>
 </tr>
</table>


<script type="text/javascript">
 var cancelBubble = false;
 function _go(url) { document.location = url; }
</script>
<div id="maincol"
 
>

 




<div class="collapse">
<div id="colcontrol">
<style type="text/css">
 #file_flipper { white-space: nowrap; padding-right: 2em; }
 #file_flipper.hidden { display: none; }
 #file_flipper .pagelink { color: #0000CC; text-decoration: underline; }
 #file_flipper #visiblefiles { padding-left: 0.5em; padding-right: 0.5em; }
</style>
<table id="nav_and_rev" class="list"
 cellpadding="0" cellspacing="0" width="100%">
 <tr>
 
 <td nowrap="nowrap" class="src_crumbs src_nav" width="33%">
 <strong class="src_nav">Source path:&nbsp;</strong>
 <span id="crumb_root">
 
 <a href="/p/phylografter/source/browse/?r=524">svn</a>/&nbsp;</span>
 <span id="crumb_links" class="ifClosed"><a href="/p/phylografter/source/browse/branches/?r=524">branches</a><span class="sp">/&nbsp;</span><a href="/p/phylografter/source/browse/branches/v2-dev/?r=524">v2-dev</a><span class="sp">/&nbsp;</span><a href="/p/phylografter/source/browse/branches/v2-dev/static/?r=524">static</a><span class="sp">/&nbsp;</span><a href="/p/phylografter/source/browse/branches/v2-dev/static/d3/?r=524">d3</a><span class="sp">/&nbsp;</span>d3.layout.js</span>
 
 


 </td>
 
 
 <td nowrap="nowrap" width="33%" align="right">
 <table cellpadding="0" cellspacing="0" style="font-size: 100%"><tr>
 
 
 <td class="flipper"><b>r524</b></td>
 
 <td class="flipper">
 <ul class="rightside">
 
 <li><a href="/p/phylografter/source/browse/branches/v2-dev/static/d3/d3.layout.js?r=580" title="Next">r580&rsaquo;</a></li>
 
 </ul>
 </td>
 
 </tr></table>
 </td> 
 </tr>
</table>

<div class="fc">
 
 
 
<style type="text/css">
.undermouse span {
 background-image: url(https://ssl.gstatic.com/codesite/ph/images/comments.gif); }
</style>
<table class="opened" id="review_comment_area"
><tr>
<td id="nums">
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
<pre><table width="100%" id="nums_table_0"><tr id="gr_svn524_1"

><td id="1"><a href="#1">1</a></td></tr
><tr id="gr_svn524_2"

><td id="2"><a href="#2">2</a></td></tr
><tr id="gr_svn524_3"

><td id="3"><a href="#3">3</a></td></tr
><tr id="gr_svn524_4"

><td id="4"><a href="#4">4</a></td></tr
><tr id="gr_svn524_5"

><td id="5"><a href="#5">5</a></td></tr
><tr id="gr_svn524_6"

><td id="6"><a href="#6">6</a></td></tr
><tr id="gr_svn524_7"

><td id="7"><a href="#7">7</a></td></tr
><tr id="gr_svn524_8"

><td id="8"><a href="#8">8</a></td></tr
><tr id="gr_svn524_9"

><td id="9"><a href="#9">9</a></td></tr
><tr id="gr_svn524_10"

><td id="10"><a href="#10">10</a></td></tr
><tr id="gr_svn524_11"

><td id="11"><a href="#11">11</a></td></tr
><tr id="gr_svn524_12"

><td id="12"><a href="#12">12</a></td></tr
><tr id="gr_svn524_13"

><td id="13"><a href="#13">13</a></td></tr
><tr id="gr_svn524_14"

><td id="14"><a href="#14">14</a></td></tr
><tr id="gr_svn524_15"

><td id="15"><a href="#15">15</a></td></tr
><tr id="gr_svn524_16"

><td id="16"><a href="#16">16</a></td></tr
><tr id="gr_svn524_17"

><td id="17"><a href="#17">17</a></td></tr
><tr id="gr_svn524_18"

><td id="18"><a href="#18">18</a></td></tr
><tr id="gr_svn524_19"

><td id="19"><a href="#19">19</a></td></tr
><tr id="gr_svn524_20"

><td id="20"><a href="#20">20</a></td></tr
><tr id="gr_svn524_21"

><td id="21"><a href="#21">21</a></td></tr
><tr id="gr_svn524_22"

><td id="22"><a href="#22">22</a></td></tr
><tr id="gr_svn524_23"

><td id="23"><a href="#23">23</a></td></tr
><tr id="gr_svn524_24"

><td id="24"><a href="#24">24</a></td></tr
><tr id="gr_svn524_25"

><td id="25"><a href="#25">25</a></td></tr
><tr id="gr_svn524_26"

><td id="26"><a href="#26">26</a></td></tr
><tr id="gr_svn524_27"

><td id="27"><a href="#27">27</a></td></tr
><tr id="gr_svn524_28"

><td id="28"><a href="#28">28</a></td></tr
><tr id="gr_svn524_29"

><td id="29"><a href="#29">29</a></td></tr
><tr id="gr_svn524_30"

><td id="30"><a href="#30">30</a></td></tr
><tr id="gr_svn524_31"

><td id="31"><a href="#31">31</a></td></tr
><tr id="gr_svn524_32"

><td id="32"><a href="#32">32</a></td></tr
><tr id="gr_svn524_33"

><td id="33"><a href="#33">33</a></td></tr
><tr id="gr_svn524_34"

><td id="34"><a href="#34">34</a></td></tr
><tr id="gr_svn524_35"

><td id="35"><a href="#35">35</a></td></tr
><tr id="gr_svn524_36"

><td id="36"><a href="#36">36</a></td></tr
><tr id="gr_svn524_37"

><td id="37"><a href="#37">37</a></td></tr
><tr id="gr_svn524_38"

><td id="38"><a href="#38">38</a></td></tr
><tr id="gr_svn524_39"

><td id="39"><a href="#39">39</a></td></tr
><tr id="gr_svn524_40"

><td id="40"><a href="#40">40</a></td></tr
><tr id="gr_svn524_41"

><td id="41"><a href="#41">41</a></td></tr
><tr id="gr_svn524_42"

><td id="42"><a href="#42">42</a></td></tr
><tr id="gr_svn524_43"

><td id="43"><a href="#43">43</a></td></tr
><tr id="gr_svn524_44"

><td id="44"><a href="#44">44</a></td></tr
><tr id="gr_svn524_45"

><td id="45"><a href="#45">45</a></td></tr
><tr id="gr_svn524_46"

><td id="46"><a href="#46">46</a></td></tr
><tr id="gr_svn524_47"

><td id="47"><a href="#47">47</a></td></tr
><tr id="gr_svn524_48"

><td id="48"><a href="#48">48</a></td></tr
><tr id="gr_svn524_49"

><td id="49"><a href="#49">49</a></td></tr
><tr id="gr_svn524_50"

><td id="50"><a href="#50">50</a></td></tr
><tr id="gr_svn524_51"

><td id="51"><a href="#51">51</a></td></tr
><tr id="gr_svn524_52"

><td id="52"><a href="#52">52</a></td></tr
><tr id="gr_svn524_53"

><td id="53"><a href="#53">53</a></td></tr
><tr id="gr_svn524_54"

><td id="54"><a href="#54">54</a></td></tr
><tr id="gr_svn524_55"

><td id="55"><a href="#55">55</a></td></tr
><tr id="gr_svn524_56"

><td id="56"><a href="#56">56</a></td></tr
><tr id="gr_svn524_57"

><td id="57"><a href="#57">57</a></td></tr
><tr id="gr_svn524_58"

><td id="58"><a href="#58">58</a></td></tr
><tr id="gr_svn524_59"

><td id="59"><a href="#59">59</a></td></tr
><tr id="gr_svn524_60"

><td id="60"><a href="#60">60</a></td></tr
><tr id="gr_svn524_61"

><td id="61"><a href="#61">61</a></td></tr
><tr id="gr_svn524_62"

><td id="62"><a href="#62">62</a></td></tr
><tr id="gr_svn524_63"

><td id="63"><a href="#63">63</a></td></tr
><tr id="gr_svn524_64"

><td id="64"><a href="#64">64</a></td></tr
><tr id="gr_svn524_65"

><td id="65"><a href="#65">65</a></td></tr
><tr id="gr_svn524_66"

><td id="66"><a href="#66">66</a></td></tr
><tr id="gr_svn524_67"

><td id="67"><a href="#67">67</a></td></tr
><tr id="gr_svn524_68"

><td id="68"><a href="#68">68</a></td></tr
><tr id="gr_svn524_69"

><td id="69"><a href="#69">69</a></td></tr
><tr id="gr_svn524_70"

><td id="70"><a href="#70">70</a></td></tr
><tr id="gr_svn524_71"

><td id="71"><a href="#71">71</a></td></tr
><tr id="gr_svn524_72"

><td id="72"><a href="#72">72</a></td></tr
><tr id="gr_svn524_73"

><td id="73"><a href="#73">73</a></td></tr
><tr id="gr_svn524_74"

><td id="74"><a href="#74">74</a></td></tr
><tr id="gr_svn524_75"

><td id="75"><a href="#75">75</a></td></tr
><tr id="gr_svn524_76"

><td id="76"><a href="#76">76</a></td></tr
><tr id="gr_svn524_77"

><td id="77"><a href="#77">77</a></td></tr
><tr id="gr_svn524_78"

><td id="78"><a href="#78">78</a></td></tr
><tr id="gr_svn524_79"

><td id="79"><a href="#79">79</a></td></tr
><tr id="gr_svn524_80"

><td id="80"><a href="#80">80</a></td></tr
><tr id="gr_svn524_81"

><td id="81"><a href="#81">81</a></td></tr
><tr id="gr_svn524_82"

><td id="82"><a href="#82">82</a></td></tr
><tr id="gr_svn524_83"

><td id="83"><a href="#83">83</a></td></tr
><tr id="gr_svn524_84"

><td id="84"><a href="#84">84</a></td></tr
><tr id="gr_svn524_85"

><td id="85"><a href="#85">85</a></td></tr
><tr id="gr_svn524_86"

><td id="86"><a href="#86">86</a></td></tr
><tr id="gr_svn524_87"

><td id="87"><a href="#87">87</a></td></tr
><tr id="gr_svn524_88"

><td id="88"><a href="#88">88</a></td></tr
><tr id="gr_svn524_89"

><td id="89"><a href="#89">89</a></td></tr
><tr id="gr_svn524_90"

><td id="90"><a href="#90">90</a></td></tr
><tr id="gr_svn524_91"

><td id="91"><a href="#91">91</a></td></tr
><tr id="gr_svn524_92"

><td id="92"><a href="#92">92</a></td></tr
><tr id="gr_svn524_93"

><td id="93"><a href="#93">93</a></td></tr
><tr id="gr_svn524_94"

><td id="94"><a href="#94">94</a></td></tr
><tr id="gr_svn524_95"

><td id="95"><a href="#95">95</a></td></tr
><tr id="gr_svn524_96"

><td id="96"><a href="#96">96</a></td></tr
><tr id="gr_svn524_97"

><td id="97"><a href="#97">97</a></td></tr
><tr id="gr_svn524_98"

><td id="98"><a href="#98">98</a></td></tr
><tr id="gr_svn524_99"

><td id="99"><a href="#99">99</a></td></tr
><tr id="gr_svn524_100"

><td id="100"><a href="#100">100</a></td></tr
><tr id="gr_svn524_101"

><td id="101"><a href="#101">101</a></td></tr
><tr id="gr_svn524_102"

><td id="102"><a href="#102">102</a></td></tr
><tr id="gr_svn524_103"

><td id="103"><a href="#103">103</a></td></tr
><tr id="gr_svn524_104"

><td id="104"><a href="#104">104</a></td></tr
><tr id="gr_svn524_105"

><td id="105"><a href="#105">105</a></td></tr
><tr id="gr_svn524_106"

><td id="106"><a href="#106">106</a></td></tr
><tr id="gr_svn524_107"

><td id="107"><a href="#107">107</a></td></tr
><tr id="gr_svn524_108"

><td id="108"><a href="#108">108</a></td></tr
><tr id="gr_svn524_109"

><td id="109"><a href="#109">109</a></td></tr
><tr id="gr_svn524_110"

><td id="110"><a href="#110">110</a></td></tr
><tr id="gr_svn524_111"

><td id="111"><a href="#111">111</a></td></tr
><tr id="gr_svn524_112"

><td id="112"><a href="#112">112</a></td></tr
><tr id="gr_svn524_113"

><td id="113"><a href="#113">113</a></td></tr
><tr id="gr_svn524_114"

><td id="114"><a href="#114">114</a></td></tr
><tr id="gr_svn524_115"

><td id="115"><a href="#115">115</a></td></tr
><tr id="gr_svn524_116"

><td id="116"><a href="#116">116</a></td></tr
><tr id="gr_svn524_117"

><td id="117"><a href="#117">117</a></td></tr
><tr id="gr_svn524_118"

><td id="118"><a href="#118">118</a></td></tr
><tr id="gr_svn524_119"

><td id="119"><a href="#119">119</a></td></tr
><tr id="gr_svn524_120"

><td id="120"><a href="#120">120</a></td></tr
><tr id="gr_svn524_121"

><td id="121"><a href="#121">121</a></td></tr
><tr id="gr_svn524_122"

><td id="122"><a href="#122">122</a></td></tr
><tr id="gr_svn524_123"

><td id="123"><a href="#123">123</a></td></tr
><tr id="gr_svn524_124"

><td id="124"><a href="#124">124</a></td></tr
><tr id="gr_svn524_125"

><td id="125"><a href="#125">125</a></td></tr
><tr id="gr_svn524_126"

><td id="126"><a href="#126">126</a></td></tr
><tr id="gr_svn524_127"

><td id="127"><a href="#127">127</a></td></tr
><tr id="gr_svn524_128"

><td id="128"><a href="#128">128</a></td></tr
><tr id="gr_svn524_129"

><td id="129"><a href="#129">129</a></td></tr
><tr id="gr_svn524_130"

><td id="130"><a href="#130">130</a></td></tr
><tr id="gr_svn524_131"

><td id="131"><a href="#131">131</a></td></tr
><tr id="gr_svn524_132"

><td id="132"><a href="#132">132</a></td></tr
><tr id="gr_svn524_133"

><td id="133"><a href="#133">133</a></td></tr
><tr id="gr_svn524_134"

><td id="134"><a href="#134">134</a></td></tr
><tr id="gr_svn524_135"

><td id="135"><a href="#135">135</a></td></tr
><tr id="gr_svn524_136"

><td id="136"><a href="#136">136</a></td></tr
><tr id="gr_svn524_137"

><td id="137"><a href="#137">137</a></td></tr
><tr id="gr_svn524_138"

><td id="138"><a href="#138">138</a></td></tr
><tr id="gr_svn524_139"

><td id="139"><a href="#139">139</a></td></tr
><tr id="gr_svn524_140"

><td id="140"><a href="#140">140</a></td></tr
><tr id="gr_svn524_141"

><td id="141"><a href="#141">141</a></td></tr
><tr id="gr_svn524_142"

><td id="142"><a href="#142">142</a></td></tr
><tr id="gr_svn524_143"

><td id="143"><a href="#143">143</a></td></tr
><tr id="gr_svn524_144"

><td id="144"><a href="#144">144</a></td></tr
><tr id="gr_svn524_145"

><td id="145"><a href="#145">145</a></td></tr
><tr id="gr_svn524_146"

><td id="146"><a href="#146">146</a></td></tr
><tr id="gr_svn524_147"

><td id="147"><a href="#147">147</a></td></tr
><tr id="gr_svn524_148"

><td id="148"><a href="#148">148</a></td></tr
><tr id="gr_svn524_149"

><td id="149"><a href="#149">149</a></td></tr
><tr id="gr_svn524_150"

><td id="150"><a href="#150">150</a></td></tr
><tr id="gr_svn524_151"

><td id="151"><a href="#151">151</a></td></tr
><tr id="gr_svn524_152"

><td id="152"><a href="#152">152</a></td></tr
><tr id="gr_svn524_153"

><td id="153"><a href="#153">153</a></td></tr
><tr id="gr_svn524_154"

><td id="154"><a href="#154">154</a></td></tr
><tr id="gr_svn524_155"

><td id="155"><a href="#155">155</a></td></tr
><tr id="gr_svn524_156"

><td id="156"><a href="#156">156</a></td></tr
><tr id="gr_svn524_157"

><td id="157"><a href="#157">157</a></td></tr
><tr id="gr_svn524_158"

><td id="158"><a href="#158">158</a></td></tr
><tr id="gr_svn524_159"

><td id="159"><a href="#159">159</a></td></tr
><tr id="gr_svn524_160"

><td id="160"><a href="#160">160</a></td></tr
><tr id="gr_svn524_161"

><td id="161"><a href="#161">161</a></td></tr
><tr id="gr_svn524_162"

><td id="162"><a href="#162">162</a></td></tr
><tr id="gr_svn524_163"

><td id="163"><a href="#163">163</a></td></tr
><tr id="gr_svn524_164"

><td id="164"><a href="#164">164</a></td></tr
><tr id="gr_svn524_165"

><td id="165"><a href="#165">165</a></td></tr
><tr id="gr_svn524_166"

><td id="166"><a href="#166">166</a></td></tr
><tr id="gr_svn524_167"

><td id="167"><a href="#167">167</a></td></tr
><tr id="gr_svn524_168"

><td id="168"><a href="#168">168</a></td></tr
><tr id="gr_svn524_169"

><td id="169"><a href="#169">169</a></td></tr
><tr id="gr_svn524_170"

><td id="170"><a href="#170">170</a></td></tr
><tr id="gr_svn524_171"

><td id="171"><a href="#171">171</a></td></tr
><tr id="gr_svn524_172"

><td id="172"><a href="#172">172</a></td></tr
><tr id="gr_svn524_173"

><td id="173"><a href="#173">173</a></td></tr
><tr id="gr_svn524_174"

><td id="174"><a href="#174">174</a></td></tr
><tr id="gr_svn524_175"

><td id="175"><a href="#175">175</a></td></tr
><tr id="gr_svn524_176"

><td id="176"><a href="#176">176</a></td></tr
><tr id="gr_svn524_177"

><td id="177"><a href="#177">177</a></td></tr
><tr id="gr_svn524_178"

><td id="178"><a href="#178">178</a></td></tr
><tr id="gr_svn524_179"

><td id="179"><a href="#179">179</a></td></tr
><tr id="gr_svn524_180"

><td id="180"><a href="#180">180</a></td></tr
><tr id="gr_svn524_181"

><td id="181"><a href="#181">181</a></td></tr
><tr id="gr_svn524_182"

><td id="182"><a href="#182">182</a></td></tr
><tr id="gr_svn524_183"

><td id="183"><a href="#183">183</a></td></tr
><tr id="gr_svn524_184"

><td id="184"><a href="#184">184</a></td></tr
><tr id="gr_svn524_185"

><td id="185"><a href="#185">185</a></td></tr
><tr id="gr_svn524_186"

><td id="186"><a href="#186">186</a></td></tr
><tr id="gr_svn524_187"

><td id="187"><a href="#187">187</a></td></tr
><tr id="gr_svn524_188"

><td id="188"><a href="#188">188</a></td></tr
><tr id="gr_svn524_189"

><td id="189"><a href="#189">189</a></td></tr
><tr id="gr_svn524_190"

><td id="190"><a href="#190">190</a></td></tr
><tr id="gr_svn524_191"

><td id="191"><a href="#191">191</a></td></tr
><tr id="gr_svn524_192"

><td id="192"><a href="#192">192</a></td></tr
><tr id="gr_svn524_193"

><td id="193"><a href="#193">193</a></td></tr
><tr id="gr_svn524_194"

><td id="194"><a href="#194">194</a></td></tr
><tr id="gr_svn524_195"

><td id="195"><a href="#195">195</a></td></tr
><tr id="gr_svn524_196"

><td id="196"><a href="#196">196</a></td></tr
><tr id="gr_svn524_197"

><td id="197"><a href="#197">197</a></td></tr
><tr id="gr_svn524_198"

><td id="198"><a href="#198">198</a></td></tr
><tr id="gr_svn524_199"

><td id="199"><a href="#199">199</a></td></tr
><tr id="gr_svn524_200"

><td id="200"><a href="#200">200</a></td></tr
><tr id="gr_svn524_201"

><td id="201"><a href="#201">201</a></td></tr
><tr id="gr_svn524_202"

><td id="202"><a href="#202">202</a></td></tr
><tr id="gr_svn524_203"

><td id="203"><a href="#203">203</a></td></tr
><tr id="gr_svn524_204"

><td id="204"><a href="#204">204</a></td></tr
><tr id="gr_svn524_205"

><td id="205"><a href="#205">205</a></td></tr
><tr id="gr_svn524_206"

><td id="206"><a href="#206">206</a></td></tr
><tr id="gr_svn524_207"

><td id="207"><a href="#207">207</a></td></tr
><tr id="gr_svn524_208"

><td id="208"><a href="#208">208</a></td></tr
><tr id="gr_svn524_209"

><td id="209"><a href="#209">209</a></td></tr
><tr id="gr_svn524_210"

><td id="210"><a href="#210">210</a></td></tr
><tr id="gr_svn524_211"

><td id="211"><a href="#211">211</a></td></tr
><tr id="gr_svn524_212"

><td id="212"><a href="#212">212</a></td></tr
><tr id="gr_svn524_213"

><td id="213"><a href="#213">213</a></td></tr
><tr id="gr_svn524_214"

><td id="214"><a href="#214">214</a></td></tr
><tr id="gr_svn524_215"

><td id="215"><a href="#215">215</a></td></tr
><tr id="gr_svn524_216"

><td id="216"><a href="#216">216</a></td></tr
><tr id="gr_svn524_217"

><td id="217"><a href="#217">217</a></td></tr
><tr id="gr_svn524_218"

><td id="218"><a href="#218">218</a></td></tr
><tr id="gr_svn524_219"

><td id="219"><a href="#219">219</a></td></tr
><tr id="gr_svn524_220"

><td id="220"><a href="#220">220</a></td></tr
><tr id="gr_svn524_221"

><td id="221"><a href="#221">221</a></td></tr
><tr id="gr_svn524_222"

><td id="222"><a href="#222">222</a></td></tr
><tr id="gr_svn524_223"

><td id="223"><a href="#223">223</a></td></tr
><tr id="gr_svn524_224"

><td id="224"><a href="#224">224</a></td></tr
><tr id="gr_svn524_225"

><td id="225"><a href="#225">225</a></td></tr
><tr id="gr_svn524_226"

><td id="226"><a href="#226">226</a></td></tr
><tr id="gr_svn524_227"

><td id="227"><a href="#227">227</a></td></tr
><tr id="gr_svn524_228"

><td id="228"><a href="#228">228</a></td></tr
><tr id="gr_svn524_229"

><td id="229"><a href="#229">229</a></td></tr
><tr id="gr_svn524_230"

><td id="230"><a href="#230">230</a></td></tr
><tr id="gr_svn524_231"

><td id="231"><a href="#231">231</a></td></tr
><tr id="gr_svn524_232"

><td id="232"><a href="#232">232</a></td></tr
><tr id="gr_svn524_233"

><td id="233"><a href="#233">233</a></td></tr
><tr id="gr_svn524_234"

><td id="234"><a href="#234">234</a></td></tr
><tr id="gr_svn524_235"

><td id="235"><a href="#235">235</a></td></tr
><tr id="gr_svn524_236"

><td id="236"><a href="#236">236</a></td></tr
><tr id="gr_svn524_237"

><td id="237"><a href="#237">237</a></td></tr
><tr id="gr_svn524_238"

><td id="238"><a href="#238">238</a></td></tr
><tr id="gr_svn524_239"

><td id="239"><a href="#239">239</a></td></tr
><tr id="gr_svn524_240"

><td id="240"><a href="#240">240</a></td></tr
><tr id="gr_svn524_241"

><td id="241"><a href="#241">241</a></td></tr
><tr id="gr_svn524_242"

><td id="242"><a href="#242">242</a></td></tr
><tr id="gr_svn524_243"

><td id="243"><a href="#243">243</a></td></tr
><tr id="gr_svn524_244"

><td id="244"><a href="#244">244</a></td></tr
><tr id="gr_svn524_245"

><td id="245"><a href="#245">245</a></td></tr
><tr id="gr_svn524_246"

><td id="246"><a href="#246">246</a></td></tr
><tr id="gr_svn524_247"

><td id="247"><a href="#247">247</a></td></tr
><tr id="gr_svn524_248"

><td id="248"><a href="#248">248</a></td></tr
><tr id="gr_svn524_249"

><td id="249"><a href="#249">249</a></td></tr
><tr id="gr_svn524_250"

><td id="250"><a href="#250">250</a></td></tr
><tr id="gr_svn524_251"

><td id="251"><a href="#251">251</a></td></tr
><tr id="gr_svn524_252"

><td id="252"><a href="#252">252</a></td></tr
><tr id="gr_svn524_253"

><td id="253"><a href="#253">253</a></td></tr
><tr id="gr_svn524_254"

><td id="254"><a href="#254">254</a></td></tr
><tr id="gr_svn524_255"

><td id="255"><a href="#255">255</a></td></tr
><tr id="gr_svn524_256"

><td id="256"><a href="#256">256</a></td></tr
><tr id="gr_svn524_257"

><td id="257"><a href="#257">257</a></td></tr
><tr id="gr_svn524_258"

><td id="258"><a href="#258">258</a></td></tr
><tr id="gr_svn524_259"

><td id="259"><a href="#259">259</a></td></tr
><tr id="gr_svn524_260"

><td id="260"><a href="#260">260</a></td></tr
><tr id="gr_svn524_261"

><td id="261"><a href="#261">261</a></td></tr
><tr id="gr_svn524_262"

><td id="262"><a href="#262">262</a></td></tr
><tr id="gr_svn524_263"

><td id="263"><a href="#263">263</a></td></tr
><tr id="gr_svn524_264"

><td id="264"><a href="#264">264</a></td></tr
><tr id="gr_svn524_265"

><td id="265"><a href="#265">265</a></td></tr
><tr id="gr_svn524_266"

><td id="266"><a href="#266">266</a></td></tr
><tr id="gr_svn524_267"

><td id="267"><a href="#267">267</a></td></tr
><tr id="gr_svn524_268"

><td id="268"><a href="#268">268</a></td></tr
><tr id="gr_svn524_269"

><td id="269"><a href="#269">269</a></td></tr
><tr id="gr_svn524_270"

><td id="270"><a href="#270">270</a></td></tr
><tr id="gr_svn524_271"

><td id="271"><a href="#271">271</a></td></tr
><tr id="gr_svn524_272"

><td id="272"><a href="#272">272</a></td></tr
><tr id="gr_svn524_273"

><td id="273"><a href="#273">273</a></td></tr
><tr id="gr_svn524_274"

><td id="274"><a href="#274">274</a></td></tr
><tr id="gr_svn524_275"

><td id="275"><a href="#275">275</a></td></tr
><tr id="gr_svn524_276"

><td id="276"><a href="#276">276</a></td></tr
><tr id="gr_svn524_277"

><td id="277"><a href="#277">277</a></td></tr
><tr id="gr_svn524_278"

><td id="278"><a href="#278">278</a></td></tr
><tr id="gr_svn524_279"

><td id="279"><a href="#279">279</a></td></tr
><tr id="gr_svn524_280"

><td id="280"><a href="#280">280</a></td></tr
><tr id="gr_svn524_281"

><td id="281"><a href="#281">281</a></td></tr
><tr id="gr_svn524_282"

><td id="282"><a href="#282">282</a></td></tr
><tr id="gr_svn524_283"

><td id="283"><a href="#283">283</a></td></tr
><tr id="gr_svn524_284"

><td id="284"><a href="#284">284</a></td></tr
><tr id="gr_svn524_285"

><td id="285"><a href="#285">285</a></td></tr
><tr id="gr_svn524_286"

><td id="286"><a href="#286">286</a></td></tr
><tr id="gr_svn524_287"

><td id="287"><a href="#287">287</a></td></tr
><tr id="gr_svn524_288"

><td id="288"><a href="#288">288</a></td></tr
><tr id="gr_svn524_289"

><td id="289"><a href="#289">289</a></td></tr
><tr id="gr_svn524_290"

><td id="290"><a href="#290">290</a></td></tr
><tr id="gr_svn524_291"

><td id="291"><a href="#291">291</a></td></tr
><tr id="gr_svn524_292"

><td id="292"><a href="#292">292</a></td></tr
><tr id="gr_svn524_293"

><td id="293"><a href="#293">293</a></td></tr
><tr id="gr_svn524_294"

><td id="294"><a href="#294">294</a></td></tr
><tr id="gr_svn524_295"

><td id="295"><a href="#295">295</a></td></tr
><tr id="gr_svn524_296"

><td id="296"><a href="#296">296</a></td></tr
><tr id="gr_svn524_297"

><td id="297"><a href="#297">297</a></td></tr
><tr id="gr_svn524_298"

><td id="298"><a href="#298">298</a></td></tr
><tr id="gr_svn524_299"

><td id="299"><a href="#299">299</a></td></tr
><tr id="gr_svn524_300"

><td id="300"><a href="#300">300</a></td></tr
><tr id="gr_svn524_301"

><td id="301"><a href="#301">301</a></td></tr
><tr id="gr_svn524_302"

><td id="302"><a href="#302">302</a></td></tr
><tr id="gr_svn524_303"

><td id="303"><a href="#303">303</a></td></tr
><tr id="gr_svn524_304"

><td id="304"><a href="#304">304</a></td></tr
><tr id="gr_svn524_305"

><td id="305"><a href="#305">305</a></td></tr
><tr id="gr_svn524_306"

><td id="306"><a href="#306">306</a></td></tr
><tr id="gr_svn524_307"

><td id="307"><a href="#307">307</a></td></tr
><tr id="gr_svn524_308"

><td id="308"><a href="#308">308</a></td></tr
><tr id="gr_svn524_309"

><td id="309"><a href="#309">309</a></td></tr
><tr id="gr_svn524_310"

><td id="310"><a href="#310">310</a></td></tr
><tr id="gr_svn524_311"

><td id="311"><a href="#311">311</a></td></tr
><tr id="gr_svn524_312"

><td id="312"><a href="#312">312</a></td></tr
><tr id="gr_svn524_313"

><td id="313"><a href="#313">313</a></td></tr
><tr id="gr_svn524_314"

><td id="314"><a href="#314">314</a></td></tr
><tr id="gr_svn524_315"

><td id="315"><a href="#315">315</a></td></tr
><tr id="gr_svn524_316"

><td id="316"><a href="#316">316</a></td></tr
><tr id="gr_svn524_317"

><td id="317"><a href="#317">317</a></td></tr
><tr id="gr_svn524_318"

><td id="318"><a href="#318">318</a></td></tr
><tr id="gr_svn524_319"

><td id="319"><a href="#319">319</a></td></tr
><tr id="gr_svn524_320"

><td id="320"><a href="#320">320</a></td></tr
><tr id="gr_svn524_321"

><td id="321"><a href="#321">321</a></td></tr
><tr id="gr_svn524_322"

><td id="322"><a href="#322">322</a></td></tr
><tr id="gr_svn524_323"

><td id="323"><a href="#323">323</a></td></tr
><tr id="gr_svn524_324"

><td id="324"><a href="#324">324</a></td></tr
><tr id="gr_svn524_325"

><td id="325"><a href="#325">325</a></td></tr
><tr id="gr_svn524_326"

><td id="326"><a href="#326">326</a></td></tr
><tr id="gr_svn524_327"

><td id="327"><a href="#327">327</a></td></tr
><tr id="gr_svn524_328"

><td id="328"><a href="#328">328</a></td></tr
><tr id="gr_svn524_329"

><td id="329"><a href="#329">329</a></td></tr
><tr id="gr_svn524_330"

><td id="330"><a href="#330">330</a></td></tr
><tr id="gr_svn524_331"

><td id="331"><a href="#331">331</a></td></tr
><tr id="gr_svn524_332"

><td id="332"><a href="#332">332</a></td></tr
><tr id="gr_svn524_333"

><td id="333"><a href="#333">333</a></td></tr
><tr id="gr_svn524_334"

><td id="334"><a href="#334">334</a></td></tr
><tr id="gr_svn524_335"

><td id="335"><a href="#335">335</a></td></tr
><tr id="gr_svn524_336"

><td id="336"><a href="#336">336</a></td></tr
><tr id="gr_svn524_337"

><td id="337"><a href="#337">337</a></td></tr
><tr id="gr_svn524_338"

><td id="338"><a href="#338">338</a></td></tr
><tr id="gr_svn524_339"

><td id="339"><a href="#339">339</a></td></tr
><tr id="gr_svn524_340"

><td id="340"><a href="#340">340</a></td></tr
><tr id="gr_svn524_341"

><td id="341"><a href="#341">341</a></td></tr
><tr id="gr_svn524_342"

><td id="342"><a href="#342">342</a></td></tr
><tr id="gr_svn524_343"

><td id="343"><a href="#343">343</a></td></tr
><tr id="gr_svn524_344"

><td id="344"><a href="#344">344</a></td></tr
><tr id="gr_svn524_345"

><td id="345"><a href="#345">345</a></td></tr
><tr id="gr_svn524_346"

><td id="346"><a href="#346">346</a></td></tr
><tr id="gr_svn524_347"

><td id="347"><a href="#347">347</a></td></tr
><tr id="gr_svn524_348"

><td id="348"><a href="#348">348</a></td></tr
><tr id="gr_svn524_349"

><td id="349"><a href="#349">349</a></td></tr
><tr id="gr_svn524_350"

><td id="350"><a href="#350">350</a></td></tr
><tr id="gr_svn524_351"

><td id="351"><a href="#351">351</a></td></tr
><tr id="gr_svn524_352"

><td id="352"><a href="#352">352</a></td></tr
><tr id="gr_svn524_353"

><td id="353"><a href="#353">353</a></td></tr
><tr id="gr_svn524_354"

><td id="354"><a href="#354">354</a></td></tr
><tr id="gr_svn524_355"

><td id="355"><a href="#355">355</a></td></tr
><tr id="gr_svn524_356"

><td id="356"><a href="#356">356</a></td></tr
><tr id="gr_svn524_357"

><td id="357"><a href="#357">357</a></td></tr
><tr id="gr_svn524_358"

><td id="358"><a href="#358">358</a></td></tr
><tr id="gr_svn524_359"

><td id="359"><a href="#359">359</a></td></tr
><tr id="gr_svn524_360"

><td id="360"><a href="#360">360</a></td></tr
><tr id="gr_svn524_361"

><td id="361"><a href="#361">361</a></td></tr
><tr id="gr_svn524_362"

><td id="362"><a href="#362">362</a></td></tr
><tr id="gr_svn524_363"

><td id="363"><a href="#363">363</a></td></tr
><tr id="gr_svn524_364"

><td id="364"><a href="#364">364</a></td></tr
><tr id="gr_svn524_365"

><td id="365"><a href="#365">365</a></td></tr
><tr id="gr_svn524_366"

><td id="366"><a href="#366">366</a></td></tr
><tr id="gr_svn524_367"

><td id="367"><a href="#367">367</a></td></tr
><tr id="gr_svn524_368"

><td id="368"><a href="#368">368</a></td></tr
><tr id="gr_svn524_369"

><td id="369"><a href="#369">369</a></td></tr
><tr id="gr_svn524_370"

><td id="370"><a href="#370">370</a></td></tr
><tr id="gr_svn524_371"

><td id="371"><a href="#371">371</a></td></tr
><tr id="gr_svn524_372"

><td id="372"><a href="#372">372</a></td></tr
><tr id="gr_svn524_373"

><td id="373"><a href="#373">373</a></td></tr
><tr id="gr_svn524_374"

><td id="374"><a href="#374">374</a></td></tr
><tr id="gr_svn524_375"

><td id="375"><a href="#375">375</a></td></tr
><tr id="gr_svn524_376"

><td id="376"><a href="#376">376</a></td></tr
><tr id="gr_svn524_377"

><td id="377"><a href="#377">377</a></td></tr
><tr id="gr_svn524_378"

><td id="378"><a href="#378">378</a></td></tr
><tr id="gr_svn524_379"

><td id="379"><a href="#379">379</a></td></tr
><tr id="gr_svn524_380"

><td id="380"><a href="#380">380</a></td></tr
><tr id="gr_svn524_381"

><td id="381"><a href="#381">381</a></td></tr
><tr id="gr_svn524_382"

><td id="382"><a href="#382">382</a></td></tr
><tr id="gr_svn524_383"

><td id="383"><a href="#383">383</a></td></tr
><tr id="gr_svn524_384"

><td id="384"><a href="#384">384</a></td></tr
><tr id="gr_svn524_385"

><td id="385"><a href="#385">385</a></td></tr
><tr id="gr_svn524_386"

><td id="386"><a href="#386">386</a></td></tr
><tr id="gr_svn524_387"

><td id="387"><a href="#387">387</a></td></tr
><tr id="gr_svn524_388"

><td id="388"><a href="#388">388</a></td></tr
><tr id="gr_svn524_389"

><td id="389"><a href="#389">389</a></td></tr
><tr id="gr_svn524_390"

><td id="390"><a href="#390">390</a></td></tr
><tr id="gr_svn524_391"

><td id="391"><a href="#391">391</a></td></tr
><tr id="gr_svn524_392"

><td id="392"><a href="#392">392</a></td></tr
><tr id="gr_svn524_393"

><td id="393"><a href="#393">393</a></td></tr
><tr id="gr_svn524_394"

><td id="394"><a href="#394">394</a></td></tr
><tr id="gr_svn524_395"

><td id="395"><a href="#395">395</a></td></tr
><tr id="gr_svn524_396"

><td id="396"><a href="#396">396</a></td></tr
><tr id="gr_svn524_397"

><td id="397"><a href="#397">397</a></td></tr
><tr id="gr_svn524_398"

><td id="398"><a href="#398">398</a></td></tr
><tr id="gr_svn524_399"

><td id="399"><a href="#399">399</a></td></tr
><tr id="gr_svn524_400"

><td id="400"><a href="#400">400</a></td></tr
><tr id="gr_svn524_401"

><td id="401"><a href="#401">401</a></td></tr
><tr id="gr_svn524_402"

><td id="402"><a href="#402">402</a></td></tr
><tr id="gr_svn524_403"

><td id="403"><a href="#403">403</a></td></tr
><tr id="gr_svn524_404"

><td id="404"><a href="#404">404</a></td></tr
><tr id="gr_svn524_405"

><td id="405"><a href="#405">405</a></td></tr
><tr id="gr_svn524_406"

><td id="406"><a href="#406">406</a></td></tr
><tr id="gr_svn524_407"

><td id="407"><a href="#407">407</a></td></tr
><tr id="gr_svn524_408"

><td id="408"><a href="#408">408</a></td></tr
><tr id="gr_svn524_409"

><td id="409"><a href="#409">409</a></td></tr
><tr id="gr_svn524_410"

><td id="410"><a href="#410">410</a></td></tr
><tr id="gr_svn524_411"

><td id="411"><a href="#411">411</a></td></tr
><tr id="gr_svn524_412"

><td id="412"><a href="#412">412</a></td></tr
><tr id="gr_svn524_413"

><td id="413"><a href="#413">413</a></td></tr
><tr id="gr_svn524_414"

><td id="414"><a href="#414">414</a></td></tr
><tr id="gr_svn524_415"

><td id="415"><a href="#415">415</a></td></tr
><tr id="gr_svn524_416"

><td id="416"><a href="#416">416</a></td></tr
><tr id="gr_svn524_417"

><td id="417"><a href="#417">417</a></td></tr
><tr id="gr_svn524_418"

><td id="418"><a href="#418">418</a></td></tr
><tr id="gr_svn524_419"

><td id="419"><a href="#419">419</a></td></tr
><tr id="gr_svn524_420"

><td id="420"><a href="#420">420</a></td></tr
><tr id="gr_svn524_421"

><td id="421"><a href="#421">421</a></td></tr
><tr id="gr_svn524_422"

><td id="422"><a href="#422">422</a></td></tr
><tr id="gr_svn524_423"

><td id="423"><a href="#423">423</a></td></tr
><tr id="gr_svn524_424"

><td id="424"><a href="#424">424</a></td></tr
><tr id="gr_svn524_425"

><td id="425"><a href="#425">425</a></td></tr
><tr id="gr_svn524_426"

><td id="426"><a href="#426">426</a></td></tr
><tr id="gr_svn524_427"

><td id="427"><a href="#427">427</a></td></tr
><tr id="gr_svn524_428"

><td id="428"><a href="#428">428</a></td></tr
><tr id="gr_svn524_429"

><td id="429"><a href="#429">429</a></td></tr
><tr id="gr_svn524_430"

><td id="430"><a href="#430">430</a></td></tr
><tr id="gr_svn524_431"

><td id="431"><a href="#431">431</a></td></tr
><tr id="gr_svn524_432"

><td id="432"><a href="#432">432</a></td></tr
><tr id="gr_svn524_433"

><td id="433"><a href="#433">433</a></td></tr
><tr id="gr_svn524_434"

><td id="434"><a href="#434">434</a></td></tr
><tr id="gr_svn524_435"

><td id="435"><a href="#435">435</a></td></tr
><tr id="gr_svn524_436"

><td id="436"><a href="#436">436</a></td></tr
><tr id="gr_svn524_437"

><td id="437"><a href="#437">437</a></td></tr
><tr id="gr_svn524_438"

><td id="438"><a href="#438">438</a></td></tr
><tr id="gr_svn524_439"

><td id="439"><a href="#439">439</a></td></tr
><tr id="gr_svn524_440"

><td id="440"><a href="#440">440</a></td></tr
><tr id="gr_svn524_441"

><td id="441"><a href="#441">441</a></td></tr
><tr id="gr_svn524_442"

><td id="442"><a href="#442">442</a></td></tr
><tr id="gr_svn524_443"

><td id="443"><a href="#443">443</a></td></tr
><tr id="gr_svn524_444"

><td id="444"><a href="#444">444</a></td></tr
><tr id="gr_svn524_445"

><td id="445"><a href="#445">445</a></td></tr
><tr id="gr_svn524_446"

><td id="446"><a href="#446">446</a></td></tr
><tr id="gr_svn524_447"

><td id="447"><a href="#447">447</a></td></tr
><tr id="gr_svn524_448"

><td id="448"><a href="#448">448</a></td></tr
><tr id="gr_svn524_449"

><td id="449"><a href="#449">449</a></td></tr
><tr id="gr_svn524_450"

><td id="450"><a href="#450">450</a></td></tr
><tr id="gr_svn524_451"

><td id="451"><a href="#451">451</a></td></tr
><tr id="gr_svn524_452"

><td id="452"><a href="#452">452</a></td></tr
><tr id="gr_svn524_453"

><td id="453"><a href="#453">453</a></td></tr
><tr id="gr_svn524_454"

><td id="454"><a href="#454">454</a></td></tr
><tr id="gr_svn524_455"

><td id="455"><a href="#455">455</a></td></tr
><tr id="gr_svn524_456"

><td id="456"><a href="#456">456</a></td></tr
><tr id="gr_svn524_457"

><td id="457"><a href="#457">457</a></td></tr
><tr id="gr_svn524_458"

><td id="458"><a href="#458">458</a></td></tr
><tr id="gr_svn524_459"

><td id="459"><a href="#459">459</a></td></tr
><tr id="gr_svn524_460"

><td id="460"><a href="#460">460</a></td></tr
><tr id="gr_svn524_461"

><td id="461"><a href="#461">461</a></td></tr
><tr id="gr_svn524_462"

><td id="462"><a href="#462">462</a></td></tr
><tr id="gr_svn524_463"

><td id="463"><a href="#463">463</a></td></tr
><tr id="gr_svn524_464"

><td id="464"><a href="#464">464</a></td></tr
><tr id="gr_svn524_465"

><td id="465"><a href="#465">465</a></td></tr
><tr id="gr_svn524_466"

><td id="466"><a href="#466">466</a></td></tr
><tr id="gr_svn524_467"

><td id="467"><a href="#467">467</a></td></tr
><tr id="gr_svn524_468"

><td id="468"><a href="#468">468</a></td></tr
><tr id="gr_svn524_469"

><td id="469"><a href="#469">469</a></td></tr
><tr id="gr_svn524_470"

><td id="470"><a href="#470">470</a></td></tr
><tr id="gr_svn524_471"

><td id="471"><a href="#471">471</a></td></tr
><tr id="gr_svn524_472"

><td id="472"><a href="#472">472</a></td></tr
><tr id="gr_svn524_473"

><td id="473"><a href="#473">473</a></td></tr
><tr id="gr_svn524_474"

><td id="474"><a href="#474">474</a></td></tr
><tr id="gr_svn524_475"

><td id="475"><a href="#475">475</a></td></tr
><tr id="gr_svn524_476"

><td id="476"><a href="#476">476</a></td></tr
><tr id="gr_svn524_477"

><td id="477"><a href="#477">477</a></td></tr
><tr id="gr_svn524_478"

><td id="478"><a href="#478">478</a></td></tr
><tr id="gr_svn524_479"

><td id="479"><a href="#479">479</a></td></tr
><tr id="gr_svn524_480"

><td id="480"><a href="#480">480</a></td></tr
><tr id="gr_svn524_481"

><td id="481"><a href="#481">481</a></td></tr
><tr id="gr_svn524_482"

><td id="482"><a href="#482">482</a></td></tr
><tr id="gr_svn524_483"

><td id="483"><a href="#483">483</a></td></tr
><tr id="gr_svn524_484"

><td id="484"><a href="#484">484</a></td></tr
><tr id="gr_svn524_485"

><td id="485"><a href="#485">485</a></td></tr
><tr id="gr_svn524_486"

><td id="486"><a href="#486">486</a></td></tr
><tr id="gr_svn524_487"

><td id="487"><a href="#487">487</a></td></tr
><tr id="gr_svn524_488"

><td id="488"><a href="#488">488</a></td></tr
><tr id="gr_svn524_489"

><td id="489"><a href="#489">489</a></td></tr
><tr id="gr_svn524_490"

><td id="490"><a href="#490">490</a></td></tr
><tr id="gr_svn524_491"

><td id="491"><a href="#491">491</a></td></tr
><tr id="gr_svn524_492"

><td id="492"><a href="#492">492</a></td></tr
><tr id="gr_svn524_493"

><td id="493"><a href="#493">493</a></td></tr
><tr id="gr_svn524_494"

><td id="494"><a href="#494">494</a></td></tr
><tr id="gr_svn524_495"

><td id="495"><a href="#495">495</a></td></tr
><tr id="gr_svn524_496"

><td id="496"><a href="#496">496</a></td></tr
><tr id="gr_svn524_497"

><td id="497"><a href="#497">497</a></td></tr
><tr id="gr_svn524_498"

><td id="498"><a href="#498">498</a></td></tr
><tr id="gr_svn524_499"

><td id="499"><a href="#499">499</a></td></tr
><tr id="gr_svn524_500"

><td id="500"><a href="#500">500</a></td></tr
><tr id="gr_svn524_501"

><td id="501"><a href="#501">501</a></td></tr
><tr id="gr_svn524_502"

><td id="502"><a href="#502">502</a></td></tr
><tr id="gr_svn524_503"

><td id="503"><a href="#503">503</a></td></tr
><tr id="gr_svn524_504"

><td id="504"><a href="#504">504</a></td></tr
><tr id="gr_svn524_505"

><td id="505"><a href="#505">505</a></td></tr
><tr id="gr_svn524_506"

><td id="506"><a href="#506">506</a></td></tr
><tr id="gr_svn524_507"

><td id="507"><a href="#507">507</a></td></tr
><tr id="gr_svn524_508"

><td id="508"><a href="#508">508</a></td></tr
><tr id="gr_svn524_509"

><td id="509"><a href="#509">509</a></td></tr
><tr id="gr_svn524_510"

><td id="510"><a href="#510">510</a></td></tr
><tr id="gr_svn524_511"

><td id="511"><a href="#511">511</a></td></tr
><tr id="gr_svn524_512"

><td id="512"><a href="#512">512</a></td></tr
><tr id="gr_svn524_513"

><td id="513"><a href="#513">513</a></td></tr
><tr id="gr_svn524_514"

><td id="514"><a href="#514">514</a></td></tr
><tr id="gr_svn524_515"

><td id="515"><a href="#515">515</a></td></tr
><tr id="gr_svn524_516"

><td id="516"><a href="#516">516</a></td></tr
><tr id="gr_svn524_517"

><td id="517"><a href="#517">517</a></td></tr
><tr id="gr_svn524_518"

><td id="518"><a href="#518">518</a></td></tr
><tr id="gr_svn524_519"

><td id="519"><a href="#519">519</a></td></tr
><tr id="gr_svn524_520"

><td id="520"><a href="#520">520</a></td></tr
><tr id="gr_svn524_521"

><td id="521"><a href="#521">521</a></td></tr
><tr id="gr_svn524_522"

><td id="522"><a href="#522">522</a></td></tr
><tr id="gr_svn524_523"

><td id="523"><a href="#523">523</a></td></tr
><tr id="gr_svn524_524"

><td id="524"><a href="#524">524</a></td></tr
><tr id="gr_svn524_525"

><td id="525"><a href="#525">525</a></td></tr
><tr id="gr_svn524_526"

><td id="526"><a href="#526">526</a></td></tr
><tr id="gr_svn524_527"

><td id="527"><a href="#527">527</a></td></tr
><tr id="gr_svn524_528"

><td id="528"><a href="#528">528</a></td></tr
><tr id="gr_svn524_529"

><td id="529"><a href="#529">529</a></td></tr
><tr id="gr_svn524_530"

><td id="530"><a href="#530">530</a></td></tr
><tr id="gr_svn524_531"

><td id="531"><a href="#531">531</a></td></tr
><tr id="gr_svn524_532"

><td id="532"><a href="#532">532</a></td></tr
><tr id="gr_svn524_533"

><td id="533"><a href="#533">533</a></td></tr
><tr id="gr_svn524_534"

><td id="534"><a href="#534">534</a></td></tr
><tr id="gr_svn524_535"

><td id="535"><a href="#535">535</a></td></tr
><tr id="gr_svn524_536"

><td id="536"><a href="#536">536</a></td></tr
><tr id="gr_svn524_537"

><td id="537"><a href="#537">537</a></td></tr
><tr id="gr_svn524_538"

><td id="538"><a href="#538">538</a></td></tr
><tr id="gr_svn524_539"

><td id="539"><a href="#539">539</a></td></tr
><tr id="gr_svn524_540"

><td id="540"><a href="#540">540</a></td></tr
><tr id="gr_svn524_541"

><td id="541"><a href="#541">541</a></td></tr
><tr id="gr_svn524_542"

><td id="542"><a href="#542">542</a></td></tr
><tr id="gr_svn524_543"

><td id="543"><a href="#543">543</a></td></tr
><tr id="gr_svn524_544"

><td id="544"><a href="#544">544</a></td></tr
><tr id="gr_svn524_545"

><td id="545"><a href="#545">545</a></td></tr
><tr id="gr_svn524_546"

><td id="546"><a href="#546">546</a></td></tr
><tr id="gr_svn524_547"

><td id="547"><a href="#547">547</a></td></tr
><tr id="gr_svn524_548"

><td id="548"><a href="#548">548</a></td></tr
><tr id="gr_svn524_549"

><td id="549"><a href="#549">549</a></td></tr
><tr id="gr_svn524_550"

><td id="550"><a href="#550">550</a></td></tr
><tr id="gr_svn524_551"

><td id="551"><a href="#551">551</a></td></tr
><tr id="gr_svn524_552"

><td id="552"><a href="#552">552</a></td></tr
><tr id="gr_svn524_553"

><td id="553"><a href="#553">553</a></td></tr
><tr id="gr_svn524_554"

><td id="554"><a href="#554">554</a></td></tr
><tr id="gr_svn524_555"

><td id="555"><a href="#555">555</a></td></tr
><tr id="gr_svn524_556"

><td id="556"><a href="#556">556</a></td></tr
><tr id="gr_svn524_557"

><td id="557"><a href="#557">557</a></td></tr
><tr id="gr_svn524_558"

><td id="558"><a href="#558">558</a></td></tr
><tr id="gr_svn524_559"

><td id="559"><a href="#559">559</a></td></tr
><tr id="gr_svn524_560"

><td id="560"><a href="#560">560</a></td></tr
><tr id="gr_svn524_561"

><td id="561"><a href="#561">561</a></td></tr
><tr id="gr_svn524_562"

><td id="562"><a href="#562">562</a></td></tr
><tr id="gr_svn524_563"

><td id="563"><a href="#563">563</a></td></tr
><tr id="gr_svn524_564"

><td id="564"><a href="#564">564</a></td></tr
><tr id="gr_svn524_565"

><td id="565"><a href="#565">565</a></td></tr
><tr id="gr_svn524_566"

><td id="566"><a href="#566">566</a></td></tr
><tr id="gr_svn524_567"

><td id="567"><a href="#567">567</a></td></tr
><tr id="gr_svn524_568"

><td id="568"><a href="#568">568</a></td></tr
><tr id="gr_svn524_569"

><td id="569"><a href="#569">569</a></td></tr
><tr id="gr_svn524_570"

><td id="570"><a href="#570">570</a></td></tr
><tr id="gr_svn524_571"

><td id="571"><a href="#571">571</a></td></tr
><tr id="gr_svn524_572"

><td id="572"><a href="#572">572</a></td></tr
><tr id="gr_svn524_573"

><td id="573"><a href="#573">573</a></td></tr
><tr id="gr_svn524_574"

><td id="574"><a href="#574">574</a></td></tr
><tr id="gr_svn524_575"

><td id="575"><a href="#575">575</a></td></tr
><tr id="gr_svn524_576"

><td id="576"><a href="#576">576</a></td></tr
><tr id="gr_svn524_577"

><td id="577"><a href="#577">577</a></td></tr
><tr id="gr_svn524_578"

><td id="578"><a href="#578">578</a></td></tr
><tr id="gr_svn524_579"

><td id="579"><a href="#579">579</a></td></tr
><tr id="gr_svn524_580"

><td id="580"><a href="#580">580</a></td></tr
><tr id="gr_svn524_581"

><td id="581"><a href="#581">581</a></td></tr
><tr id="gr_svn524_582"

><td id="582"><a href="#582">582</a></td></tr
><tr id="gr_svn524_583"

><td id="583"><a href="#583">583</a></td></tr
><tr id="gr_svn524_584"

><td id="584"><a href="#584">584</a></td></tr
><tr id="gr_svn524_585"

><td id="585"><a href="#585">585</a></td></tr
><tr id="gr_svn524_586"

><td id="586"><a href="#586">586</a></td></tr
><tr id="gr_svn524_587"

><td id="587"><a href="#587">587</a></td></tr
><tr id="gr_svn524_588"

><td id="588"><a href="#588">588</a></td></tr
><tr id="gr_svn524_589"

><td id="589"><a href="#589">589</a></td></tr
><tr id="gr_svn524_590"

><td id="590"><a href="#590">590</a></td></tr
><tr id="gr_svn524_591"

><td id="591"><a href="#591">591</a></td></tr
><tr id="gr_svn524_592"

><td id="592"><a href="#592">592</a></td></tr
><tr id="gr_svn524_593"

><td id="593"><a href="#593">593</a></td></tr
><tr id="gr_svn524_594"

><td id="594"><a href="#594">594</a></td></tr
><tr id="gr_svn524_595"

><td id="595"><a href="#595">595</a></td></tr
><tr id="gr_svn524_596"

><td id="596"><a href="#596">596</a></td></tr
><tr id="gr_svn524_597"

><td id="597"><a href="#597">597</a></td></tr
><tr id="gr_svn524_598"

><td id="598"><a href="#598">598</a></td></tr
><tr id="gr_svn524_599"

><td id="599"><a href="#599">599</a></td></tr
><tr id="gr_svn524_600"

><td id="600"><a href="#600">600</a></td></tr
><tr id="gr_svn524_601"

><td id="601"><a href="#601">601</a></td></tr
><tr id="gr_svn524_602"

><td id="602"><a href="#602">602</a></td></tr
><tr id="gr_svn524_603"

><td id="603"><a href="#603">603</a></td></tr
><tr id="gr_svn524_604"

><td id="604"><a href="#604">604</a></td></tr
><tr id="gr_svn524_605"

><td id="605"><a href="#605">605</a></td></tr
><tr id="gr_svn524_606"

><td id="606"><a href="#606">606</a></td></tr
><tr id="gr_svn524_607"

><td id="607"><a href="#607">607</a></td></tr
><tr id="gr_svn524_608"

><td id="608"><a href="#608">608</a></td></tr
><tr id="gr_svn524_609"

><td id="609"><a href="#609">609</a></td></tr
><tr id="gr_svn524_610"

><td id="610"><a href="#610">610</a></td></tr
><tr id="gr_svn524_611"

><td id="611"><a href="#611">611</a></td></tr
><tr id="gr_svn524_612"

><td id="612"><a href="#612">612</a></td></tr
><tr id="gr_svn524_613"

><td id="613"><a href="#613">613</a></td></tr
><tr id="gr_svn524_614"

><td id="614"><a href="#614">614</a></td></tr
><tr id="gr_svn524_615"

><td id="615"><a href="#615">615</a></td></tr
><tr id="gr_svn524_616"

><td id="616"><a href="#616">616</a></td></tr
><tr id="gr_svn524_617"

><td id="617"><a href="#617">617</a></td></tr
><tr id="gr_svn524_618"

><td id="618"><a href="#618">618</a></td></tr
><tr id="gr_svn524_619"

><td id="619"><a href="#619">619</a></td></tr
><tr id="gr_svn524_620"

><td id="620"><a href="#620">620</a></td></tr
><tr id="gr_svn524_621"

><td id="621"><a href="#621">621</a></td></tr
><tr id="gr_svn524_622"

><td id="622"><a href="#622">622</a></td></tr
><tr id="gr_svn524_623"

><td id="623"><a href="#623">623</a></td></tr
><tr id="gr_svn524_624"

><td id="624"><a href="#624">624</a></td></tr
><tr id="gr_svn524_625"

><td id="625"><a href="#625">625</a></td></tr
><tr id="gr_svn524_626"

><td id="626"><a href="#626">626</a></td></tr
><tr id="gr_svn524_627"

><td id="627"><a href="#627">627</a></td></tr
><tr id="gr_svn524_628"

><td id="628"><a href="#628">628</a></td></tr
><tr id="gr_svn524_629"

><td id="629"><a href="#629">629</a></td></tr
><tr id="gr_svn524_630"

><td id="630"><a href="#630">630</a></td></tr
><tr id="gr_svn524_631"

><td id="631"><a href="#631">631</a></td></tr
><tr id="gr_svn524_632"

><td id="632"><a href="#632">632</a></td></tr
><tr id="gr_svn524_633"

><td id="633"><a href="#633">633</a></td></tr
><tr id="gr_svn524_634"

><td id="634"><a href="#634">634</a></td></tr
><tr id="gr_svn524_635"

><td id="635"><a href="#635">635</a></td></tr
><tr id="gr_svn524_636"

><td id="636"><a href="#636">636</a></td></tr
><tr id="gr_svn524_637"

><td id="637"><a href="#637">637</a></td></tr
><tr id="gr_svn524_638"

><td id="638"><a href="#638">638</a></td></tr
><tr id="gr_svn524_639"

><td id="639"><a href="#639">639</a></td></tr
><tr id="gr_svn524_640"

><td id="640"><a href="#640">640</a></td></tr
><tr id="gr_svn524_641"

><td id="641"><a href="#641">641</a></td></tr
><tr id="gr_svn524_642"

><td id="642"><a href="#642">642</a></td></tr
><tr id="gr_svn524_643"

><td id="643"><a href="#643">643</a></td></tr
><tr id="gr_svn524_644"

><td id="644"><a href="#644">644</a></td></tr
><tr id="gr_svn524_645"

><td id="645"><a href="#645">645</a></td></tr
><tr id="gr_svn524_646"

><td id="646"><a href="#646">646</a></td></tr
><tr id="gr_svn524_647"

><td id="647"><a href="#647">647</a></td></tr
><tr id="gr_svn524_648"

><td id="648"><a href="#648">648</a></td></tr
><tr id="gr_svn524_649"

><td id="649"><a href="#649">649</a></td></tr
><tr id="gr_svn524_650"

><td id="650"><a href="#650">650</a></td></tr
><tr id="gr_svn524_651"

><td id="651"><a href="#651">651</a></td></tr
><tr id="gr_svn524_652"

><td id="652"><a href="#652">652</a></td></tr
><tr id="gr_svn524_653"

><td id="653"><a href="#653">653</a></td></tr
><tr id="gr_svn524_654"

><td id="654"><a href="#654">654</a></td></tr
><tr id="gr_svn524_655"

><td id="655"><a href="#655">655</a></td></tr
><tr id="gr_svn524_656"

><td id="656"><a href="#656">656</a></td></tr
><tr id="gr_svn524_657"

><td id="657"><a href="#657">657</a></td></tr
><tr id="gr_svn524_658"

><td id="658"><a href="#658">658</a></td></tr
><tr id="gr_svn524_659"

><td id="659"><a href="#659">659</a></td></tr
><tr id="gr_svn524_660"

><td id="660"><a href="#660">660</a></td></tr
><tr id="gr_svn524_661"

><td id="661"><a href="#661">661</a></td></tr
><tr id="gr_svn524_662"

><td id="662"><a href="#662">662</a></td></tr
><tr id="gr_svn524_663"

><td id="663"><a href="#663">663</a></td></tr
><tr id="gr_svn524_664"

><td id="664"><a href="#664">664</a></td></tr
><tr id="gr_svn524_665"

><td id="665"><a href="#665">665</a></td></tr
><tr id="gr_svn524_666"

><td id="666"><a href="#666">666</a></td></tr
><tr id="gr_svn524_667"

><td id="667"><a href="#667">667</a></td></tr
><tr id="gr_svn524_668"

><td id="668"><a href="#668">668</a></td></tr
><tr id="gr_svn524_669"

><td id="669"><a href="#669">669</a></td></tr
><tr id="gr_svn524_670"

><td id="670"><a href="#670">670</a></td></tr
><tr id="gr_svn524_671"

><td id="671"><a href="#671">671</a></td></tr
><tr id="gr_svn524_672"

><td id="672"><a href="#672">672</a></td></tr
><tr id="gr_svn524_673"

><td id="673"><a href="#673">673</a></td></tr
><tr id="gr_svn524_674"

><td id="674"><a href="#674">674</a></td></tr
><tr id="gr_svn524_675"

><td id="675"><a href="#675">675</a></td></tr
><tr id="gr_svn524_676"

><td id="676"><a href="#676">676</a></td></tr
><tr id="gr_svn524_677"

><td id="677"><a href="#677">677</a></td></tr
><tr id="gr_svn524_678"

><td id="678"><a href="#678">678</a></td></tr
><tr id="gr_svn524_679"

><td id="679"><a href="#679">679</a></td></tr
><tr id="gr_svn524_680"

><td id="680"><a href="#680">680</a></td></tr
><tr id="gr_svn524_681"

><td id="681"><a href="#681">681</a></td></tr
><tr id="gr_svn524_682"

><td id="682"><a href="#682">682</a></td></tr
><tr id="gr_svn524_683"

><td id="683"><a href="#683">683</a></td></tr
><tr id="gr_svn524_684"

><td id="684"><a href="#684">684</a></td></tr
><tr id="gr_svn524_685"

><td id="685"><a href="#685">685</a></td></tr
><tr id="gr_svn524_686"

><td id="686"><a href="#686">686</a></td></tr
><tr id="gr_svn524_687"

><td id="687"><a href="#687">687</a></td></tr
><tr id="gr_svn524_688"

><td id="688"><a href="#688">688</a></td></tr
><tr id="gr_svn524_689"

><td id="689"><a href="#689">689</a></td></tr
><tr id="gr_svn524_690"

><td id="690"><a href="#690">690</a></td></tr
><tr id="gr_svn524_691"

><td id="691"><a href="#691">691</a></td></tr
><tr id="gr_svn524_692"

><td id="692"><a href="#692">692</a></td></tr
><tr id="gr_svn524_693"

><td id="693"><a href="#693">693</a></td></tr
><tr id="gr_svn524_694"

><td id="694"><a href="#694">694</a></td></tr
><tr id="gr_svn524_695"

><td id="695"><a href="#695">695</a></td></tr
><tr id="gr_svn524_696"

><td id="696"><a href="#696">696</a></td></tr
><tr id="gr_svn524_697"

><td id="697"><a href="#697">697</a></td></tr
><tr id="gr_svn524_698"

><td id="698"><a href="#698">698</a></td></tr
><tr id="gr_svn524_699"

><td id="699"><a href="#699">699</a></td></tr
><tr id="gr_svn524_700"

><td id="700"><a href="#700">700</a></td></tr
><tr id="gr_svn524_701"

><td id="701"><a href="#701">701</a></td></tr
><tr id="gr_svn524_702"

><td id="702"><a href="#702">702</a></td></tr
><tr id="gr_svn524_703"

><td id="703"><a href="#703">703</a></td></tr
><tr id="gr_svn524_704"

><td id="704"><a href="#704">704</a></td></tr
><tr id="gr_svn524_705"

><td id="705"><a href="#705">705</a></td></tr
><tr id="gr_svn524_706"

><td id="706"><a href="#706">706</a></td></tr
><tr id="gr_svn524_707"

><td id="707"><a href="#707">707</a></td></tr
><tr id="gr_svn524_708"

><td id="708"><a href="#708">708</a></td></tr
><tr id="gr_svn524_709"

><td id="709"><a href="#709">709</a></td></tr
><tr id="gr_svn524_710"

><td id="710"><a href="#710">710</a></td></tr
><tr id="gr_svn524_711"

><td id="711"><a href="#711">711</a></td></tr
><tr id="gr_svn524_712"

><td id="712"><a href="#712">712</a></td></tr
><tr id="gr_svn524_713"

><td id="713"><a href="#713">713</a></td></tr
><tr id="gr_svn524_714"

><td id="714"><a href="#714">714</a></td></tr
><tr id="gr_svn524_715"

><td id="715"><a href="#715">715</a></td></tr
><tr id="gr_svn524_716"

><td id="716"><a href="#716">716</a></td></tr
><tr id="gr_svn524_717"

><td id="717"><a href="#717">717</a></td></tr
><tr id="gr_svn524_718"

><td id="718"><a href="#718">718</a></td></tr
><tr id="gr_svn524_719"

><td id="719"><a href="#719">719</a></td></tr
><tr id="gr_svn524_720"

><td id="720"><a href="#720">720</a></td></tr
><tr id="gr_svn524_721"

><td id="721"><a href="#721">721</a></td></tr
><tr id="gr_svn524_722"

><td id="722"><a href="#722">722</a></td></tr
><tr id="gr_svn524_723"

><td id="723"><a href="#723">723</a></td></tr
><tr id="gr_svn524_724"

><td id="724"><a href="#724">724</a></td></tr
><tr id="gr_svn524_725"

><td id="725"><a href="#725">725</a></td></tr
><tr id="gr_svn524_726"

><td id="726"><a href="#726">726</a></td></tr
><tr id="gr_svn524_727"

><td id="727"><a href="#727">727</a></td></tr
><tr id="gr_svn524_728"

><td id="728"><a href="#728">728</a></td></tr
><tr id="gr_svn524_729"

><td id="729"><a href="#729">729</a></td></tr
><tr id="gr_svn524_730"

><td id="730"><a href="#730">730</a></td></tr
><tr id="gr_svn524_731"

><td id="731"><a href="#731">731</a></td></tr
><tr id="gr_svn524_732"

><td id="732"><a href="#732">732</a></td></tr
><tr id="gr_svn524_733"

><td id="733"><a href="#733">733</a></td></tr
><tr id="gr_svn524_734"

><td id="734"><a href="#734">734</a></td></tr
><tr id="gr_svn524_735"

><td id="735"><a href="#735">735</a></td></tr
><tr id="gr_svn524_736"

><td id="736"><a href="#736">736</a></td></tr
><tr id="gr_svn524_737"

><td id="737"><a href="#737">737</a></td></tr
><tr id="gr_svn524_738"

><td id="738"><a href="#738">738</a></td></tr
><tr id="gr_svn524_739"

><td id="739"><a href="#739">739</a></td></tr
><tr id="gr_svn524_740"

><td id="740"><a href="#740">740</a></td></tr
><tr id="gr_svn524_741"

><td id="741"><a href="#741">741</a></td></tr
><tr id="gr_svn524_742"

><td id="742"><a href="#742">742</a></td></tr
><tr id="gr_svn524_743"

><td id="743"><a href="#743">743</a></td></tr
><tr id="gr_svn524_744"

><td id="744"><a href="#744">744</a></td></tr
><tr id="gr_svn524_745"

><td id="745"><a href="#745">745</a></td></tr
><tr id="gr_svn524_746"

><td id="746"><a href="#746">746</a></td></tr
><tr id="gr_svn524_747"

><td id="747"><a href="#747">747</a></td></tr
><tr id="gr_svn524_748"

><td id="748"><a href="#748">748</a></td></tr
><tr id="gr_svn524_749"

><td id="749"><a href="#749">749</a></td></tr
><tr id="gr_svn524_750"

><td id="750"><a href="#750">750</a></td></tr
><tr id="gr_svn524_751"

><td id="751"><a href="#751">751</a></td></tr
><tr id="gr_svn524_752"

><td id="752"><a href="#752">752</a></td></tr
><tr id="gr_svn524_753"

><td id="753"><a href="#753">753</a></td></tr
><tr id="gr_svn524_754"

><td id="754"><a href="#754">754</a></td></tr
><tr id="gr_svn524_755"

><td id="755"><a href="#755">755</a></td></tr
><tr id="gr_svn524_756"

><td id="756"><a href="#756">756</a></td></tr
><tr id="gr_svn524_757"

><td id="757"><a href="#757">757</a></td></tr
><tr id="gr_svn524_758"

><td id="758"><a href="#758">758</a></td></tr
><tr id="gr_svn524_759"

><td id="759"><a href="#759">759</a></td></tr
><tr id="gr_svn524_760"

><td id="760"><a href="#760">760</a></td></tr
><tr id="gr_svn524_761"

><td id="761"><a href="#761">761</a></td></tr
><tr id="gr_svn524_762"

><td id="762"><a href="#762">762</a></td></tr
><tr id="gr_svn524_763"

><td id="763"><a href="#763">763</a></td></tr
><tr id="gr_svn524_764"

><td id="764"><a href="#764">764</a></td></tr
><tr id="gr_svn524_765"

><td id="765"><a href="#765">765</a></td></tr
><tr id="gr_svn524_766"

><td id="766"><a href="#766">766</a></td></tr
><tr id="gr_svn524_767"

><td id="767"><a href="#767">767</a></td></tr
><tr id="gr_svn524_768"

><td id="768"><a href="#768">768</a></td></tr
><tr id="gr_svn524_769"

><td id="769"><a href="#769">769</a></td></tr
><tr id="gr_svn524_770"

><td id="770"><a href="#770">770</a></td></tr
><tr id="gr_svn524_771"

><td id="771"><a href="#771">771</a></td></tr
><tr id="gr_svn524_772"

><td id="772"><a href="#772">772</a></td></tr
><tr id="gr_svn524_773"

><td id="773"><a href="#773">773</a></td></tr
><tr id="gr_svn524_774"

><td id="774"><a href="#774">774</a></td></tr
><tr id="gr_svn524_775"

><td id="775"><a href="#775">775</a></td></tr
><tr id="gr_svn524_776"

><td id="776"><a href="#776">776</a></td></tr
><tr id="gr_svn524_777"

><td id="777"><a href="#777">777</a></td></tr
><tr id="gr_svn524_778"

><td id="778"><a href="#778">778</a></td></tr
><tr id="gr_svn524_779"

><td id="779"><a href="#779">779</a></td></tr
><tr id="gr_svn524_780"

><td id="780"><a href="#780">780</a></td></tr
><tr id="gr_svn524_781"

><td id="781"><a href="#781">781</a></td></tr
><tr id="gr_svn524_782"

><td id="782"><a href="#782">782</a></td></tr
><tr id="gr_svn524_783"

><td id="783"><a href="#783">783</a></td></tr
><tr id="gr_svn524_784"

><td id="784"><a href="#784">784</a></td></tr
><tr id="gr_svn524_785"

><td id="785"><a href="#785">785</a></td></tr
><tr id="gr_svn524_786"

><td id="786"><a href="#786">786</a></td></tr
><tr id="gr_svn524_787"

><td id="787"><a href="#787">787</a></td></tr
><tr id="gr_svn524_788"

><td id="788"><a href="#788">788</a></td></tr
><tr id="gr_svn524_789"

><td id="789"><a href="#789">789</a></td></tr
><tr id="gr_svn524_790"

><td id="790"><a href="#790">790</a></td></tr
><tr id="gr_svn524_791"

><td id="791"><a href="#791">791</a></td></tr
><tr id="gr_svn524_792"

><td id="792"><a href="#792">792</a></td></tr
><tr id="gr_svn524_793"

><td id="793"><a href="#793">793</a></td></tr
><tr id="gr_svn524_794"

><td id="794"><a href="#794">794</a></td></tr
><tr id="gr_svn524_795"

><td id="795"><a href="#795">795</a></td></tr
><tr id="gr_svn524_796"

><td id="796"><a href="#796">796</a></td></tr
><tr id="gr_svn524_797"

><td id="797"><a href="#797">797</a></td></tr
><tr id="gr_svn524_798"

><td id="798"><a href="#798">798</a></td></tr
><tr id="gr_svn524_799"

><td id="799"><a href="#799">799</a></td></tr
><tr id="gr_svn524_800"

><td id="800"><a href="#800">800</a></td></tr
><tr id="gr_svn524_801"

><td id="801"><a href="#801">801</a></td></tr
><tr id="gr_svn524_802"

><td id="802"><a href="#802">802</a></td></tr
><tr id="gr_svn524_803"

><td id="803"><a href="#803">803</a></td></tr
><tr id="gr_svn524_804"

><td id="804"><a href="#804">804</a></td></tr
><tr id="gr_svn524_805"

><td id="805"><a href="#805">805</a></td></tr
><tr id="gr_svn524_806"

><td id="806"><a href="#806">806</a></td></tr
><tr id="gr_svn524_807"

><td id="807"><a href="#807">807</a></td></tr
><tr id="gr_svn524_808"

><td id="808"><a href="#808">808</a></td></tr
><tr id="gr_svn524_809"

><td id="809"><a href="#809">809</a></td></tr
><tr id="gr_svn524_810"

><td id="810"><a href="#810">810</a></td></tr
><tr id="gr_svn524_811"

><td id="811"><a href="#811">811</a></td></tr
><tr id="gr_svn524_812"

><td id="812"><a href="#812">812</a></td></tr
><tr id="gr_svn524_813"

><td id="813"><a href="#813">813</a></td></tr
><tr id="gr_svn524_814"

><td id="814"><a href="#814">814</a></td></tr
><tr id="gr_svn524_815"

><td id="815"><a href="#815">815</a></td></tr
><tr id="gr_svn524_816"

><td id="816"><a href="#816">816</a></td></tr
><tr id="gr_svn524_817"

><td id="817"><a href="#817">817</a></td></tr
><tr id="gr_svn524_818"

><td id="818"><a href="#818">818</a></td></tr
><tr id="gr_svn524_819"

><td id="819"><a href="#819">819</a></td></tr
><tr id="gr_svn524_820"

><td id="820"><a href="#820">820</a></td></tr
><tr id="gr_svn524_821"

><td id="821"><a href="#821">821</a></td></tr
><tr id="gr_svn524_822"

><td id="822"><a href="#822">822</a></td></tr
><tr id="gr_svn524_823"

><td id="823"><a href="#823">823</a></td></tr
><tr id="gr_svn524_824"

><td id="824"><a href="#824">824</a></td></tr
><tr id="gr_svn524_825"

><td id="825"><a href="#825">825</a></td></tr
><tr id="gr_svn524_826"

><td id="826"><a href="#826">826</a></td></tr
><tr id="gr_svn524_827"

><td id="827"><a href="#827">827</a></td></tr
><tr id="gr_svn524_828"

><td id="828"><a href="#828">828</a></td></tr
><tr id="gr_svn524_829"

><td id="829"><a href="#829">829</a></td></tr
><tr id="gr_svn524_830"

><td id="830"><a href="#830">830</a></td></tr
><tr id="gr_svn524_831"

><td id="831"><a href="#831">831</a></td></tr
><tr id="gr_svn524_832"

><td id="832"><a href="#832">832</a></td></tr
><tr id="gr_svn524_833"

><td id="833"><a href="#833">833</a></td></tr
><tr id="gr_svn524_834"

><td id="834"><a href="#834">834</a></td></tr
><tr id="gr_svn524_835"

><td id="835"><a href="#835">835</a></td></tr
><tr id="gr_svn524_836"

><td id="836"><a href="#836">836</a></td></tr
><tr id="gr_svn524_837"

><td id="837"><a href="#837">837</a></td></tr
><tr id="gr_svn524_838"

><td id="838"><a href="#838">838</a></td></tr
><tr id="gr_svn524_839"

><td id="839"><a href="#839">839</a></td></tr
><tr id="gr_svn524_840"

><td id="840"><a href="#840">840</a></td></tr
><tr id="gr_svn524_841"

><td id="841"><a href="#841">841</a></td></tr
><tr id="gr_svn524_842"

><td id="842"><a href="#842">842</a></td></tr
><tr id="gr_svn524_843"

><td id="843"><a href="#843">843</a></td></tr
><tr id="gr_svn524_844"

><td id="844"><a href="#844">844</a></td></tr
><tr id="gr_svn524_845"

><td id="845"><a href="#845">845</a></td></tr
><tr id="gr_svn524_846"

><td id="846"><a href="#846">846</a></td></tr
><tr id="gr_svn524_847"

><td id="847"><a href="#847">847</a></td></tr
><tr id="gr_svn524_848"

><td id="848"><a href="#848">848</a></td></tr
><tr id="gr_svn524_849"

><td id="849"><a href="#849">849</a></td></tr
><tr id="gr_svn524_850"

><td id="850"><a href="#850">850</a></td></tr
><tr id="gr_svn524_851"

><td id="851"><a href="#851">851</a></td></tr
><tr id="gr_svn524_852"

><td id="852"><a href="#852">852</a></td></tr
><tr id="gr_svn524_853"

><td id="853"><a href="#853">853</a></td></tr
><tr id="gr_svn524_854"

><td id="854"><a href="#854">854</a></td></tr
><tr id="gr_svn524_855"

><td id="855"><a href="#855">855</a></td></tr
><tr id="gr_svn524_856"

><td id="856"><a href="#856">856</a></td></tr
><tr id="gr_svn524_857"

><td id="857"><a href="#857">857</a></td></tr
><tr id="gr_svn524_858"

><td id="858"><a href="#858">858</a></td></tr
><tr id="gr_svn524_859"

><td id="859"><a href="#859">859</a></td></tr
><tr id="gr_svn524_860"

><td id="860"><a href="#860">860</a></td></tr
><tr id="gr_svn524_861"

><td id="861"><a href="#861">861</a></td></tr
><tr id="gr_svn524_862"

><td id="862"><a href="#862">862</a></td></tr
><tr id="gr_svn524_863"

><td id="863"><a href="#863">863</a></td></tr
><tr id="gr_svn524_864"

><td id="864"><a href="#864">864</a></td></tr
><tr id="gr_svn524_865"

><td id="865"><a href="#865">865</a></td></tr
><tr id="gr_svn524_866"

><td id="866"><a href="#866">866</a></td></tr
><tr id="gr_svn524_867"

><td id="867"><a href="#867">867</a></td></tr
><tr id="gr_svn524_868"

><td id="868"><a href="#868">868</a></td></tr
><tr id="gr_svn524_869"

><td id="869"><a href="#869">869</a></td></tr
><tr id="gr_svn524_870"

><td id="870"><a href="#870">870</a></td></tr
><tr id="gr_svn524_871"

><td id="871"><a href="#871">871</a></td></tr
><tr id="gr_svn524_872"

><td id="872"><a href="#872">872</a></td></tr
><tr id="gr_svn524_873"

><td id="873"><a href="#873">873</a></td></tr
><tr id="gr_svn524_874"

><td id="874"><a href="#874">874</a></td></tr
><tr id="gr_svn524_875"

><td id="875"><a href="#875">875</a></td></tr
><tr id="gr_svn524_876"

><td id="876"><a href="#876">876</a></td></tr
><tr id="gr_svn524_877"

><td id="877"><a href="#877">877</a></td></tr
><tr id="gr_svn524_878"

><td id="878"><a href="#878">878</a></td></tr
><tr id="gr_svn524_879"

><td id="879"><a href="#879">879</a></td></tr
><tr id="gr_svn524_880"

><td id="880"><a href="#880">880</a></td></tr
><tr id="gr_svn524_881"

><td id="881"><a href="#881">881</a></td></tr
><tr id="gr_svn524_882"

><td id="882"><a href="#882">882</a></td></tr
><tr id="gr_svn524_883"

><td id="883"><a href="#883">883</a></td></tr
><tr id="gr_svn524_884"

><td id="884"><a href="#884">884</a></td></tr
><tr id="gr_svn524_885"

><td id="885"><a href="#885">885</a></td></tr
><tr id="gr_svn524_886"

><td id="886"><a href="#886">886</a></td></tr
><tr id="gr_svn524_887"

><td id="887"><a href="#887">887</a></td></tr
><tr id="gr_svn524_888"

><td id="888"><a href="#888">888</a></td></tr
><tr id="gr_svn524_889"

><td id="889"><a href="#889">889</a></td></tr
><tr id="gr_svn524_890"

><td id="890"><a href="#890">890</a></td></tr
><tr id="gr_svn524_891"

><td id="891"><a href="#891">891</a></td></tr
><tr id="gr_svn524_892"

><td id="892"><a href="#892">892</a></td></tr
><tr id="gr_svn524_893"

><td id="893"><a href="#893">893</a></td></tr
><tr id="gr_svn524_894"

><td id="894"><a href="#894">894</a></td></tr
><tr id="gr_svn524_895"

><td id="895"><a href="#895">895</a></td></tr
><tr id="gr_svn524_896"

><td id="896"><a href="#896">896</a></td></tr
><tr id="gr_svn524_897"

><td id="897"><a href="#897">897</a></td></tr
><tr id="gr_svn524_898"

><td id="898"><a href="#898">898</a></td></tr
><tr id="gr_svn524_899"

><td id="899"><a href="#899">899</a></td></tr
><tr id="gr_svn524_900"

><td id="900"><a href="#900">900</a></td></tr
><tr id="gr_svn524_901"

><td id="901"><a href="#901">901</a></td></tr
><tr id="gr_svn524_902"

><td id="902"><a href="#902">902</a></td></tr
><tr id="gr_svn524_903"

><td id="903"><a href="#903">903</a></td></tr
><tr id="gr_svn524_904"

><td id="904"><a href="#904">904</a></td></tr
><tr id="gr_svn524_905"

><td id="905"><a href="#905">905</a></td></tr
><tr id="gr_svn524_906"

><td id="906"><a href="#906">906</a></td></tr
><tr id="gr_svn524_907"

><td id="907"><a href="#907">907</a></td></tr
><tr id="gr_svn524_908"

><td id="908"><a href="#908">908</a></td></tr
><tr id="gr_svn524_909"

><td id="909"><a href="#909">909</a></td></tr
><tr id="gr_svn524_910"

><td id="910"><a href="#910">910</a></td></tr
><tr id="gr_svn524_911"

><td id="911"><a href="#911">911</a></td></tr
><tr id="gr_svn524_912"

><td id="912"><a href="#912">912</a></td></tr
><tr id="gr_svn524_913"

><td id="913"><a href="#913">913</a></td></tr
><tr id="gr_svn524_914"

><td id="914"><a href="#914">914</a></td></tr
><tr id="gr_svn524_915"

><td id="915"><a href="#915">915</a></td></tr
><tr id="gr_svn524_916"

><td id="916"><a href="#916">916</a></td></tr
><tr id="gr_svn524_917"

><td id="917"><a href="#917">917</a></td></tr
><tr id="gr_svn524_918"

><td id="918"><a href="#918">918</a></td></tr
><tr id="gr_svn524_919"

><td id="919"><a href="#919">919</a></td></tr
><tr id="gr_svn524_920"

><td id="920"><a href="#920">920</a></td></tr
><tr id="gr_svn524_921"

><td id="921"><a href="#921">921</a></td></tr
><tr id="gr_svn524_922"

><td id="922"><a href="#922">922</a></td></tr
><tr id="gr_svn524_923"

><td id="923"><a href="#923">923</a></td></tr
><tr id="gr_svn524_924"

><td id="924"><a href="#924">924</a></td></tr
><tr id="gr_svn524_925"

><td id="925"><a href="#925">925</a></td></tr
><tr id="gr_svn524_926"

><td id="926"><a href="#926">926</a></td></tr
><tr id="gr_svn524_927"

><td id="927"><a href="#927">927</a></td></tr
><tr id="gr_svn524_928"

><td id="928"><a href="#928">928</a></td></tr
><tr id="gr_svn524_929"

><td id="929"><a href="#929">929</a></td></tr
><tr id="gr_svn524_930"

><td id="930"><a href="#930">930</a></td></tr
><tr id="gr_svn524_931"

><td id="931"><a href="#931">931</a></td></tr
><tr id="gr_svn524_932"

><td id="932"><a href="#932">932</a></td></tr
><tr id="gr_svn524_933"

><td id="933"><a href="#933">933</a></td></tr
><tr id="gr_svn524_934"

><td id="934"><a href="#934">934</a></td></tr
><tr id="gr_svn524_935"

><td id="935"><a href="#935">935</a></td></tr
><tr id="gr_svn524_936"

><td id="936"><a href="#936">936</a></td></tr
><tr id="gr_svn524_937"

><td id="937"><a href="#937">937</a></td></tr
><tr id="gr_svn524_938"

><td id="938"><a href="#938">938</a></td></tr
><tr id="gr_svn524_939"

><td id="939"><a href="#939">939</a></td></tr
><tr id="gr_svn524_940"

><td id="940"><a href="#940">940</a></td></tr
><tr id="gr_svn524_941"

><td id="941"><a href="#941">941</a></td></tr
><tr id="gr_svn524_942"

><td id="942"><a href="#942">942</a></td></tr
><tr id="gr_svn524_943"

><td id="943"><a href="#943">943</a></td></tr
><tr id="gr_svn524_944"

><td id="944"><a href="#944">944</a></td></tr
><tr id="gr_svn524_945"

><td id="945"><a href="#945">945</a></td></tr
><tr id="gr_svn524_946"

><td id="946"><a href="#946">946</a></td></tr
><tr id="gr_svn524_947"

><td id="947"><a href="#947">947</a></td></tr
><tr id="gr_svn524_948"

><td id="948"><a href="#948">948</a></td></tr
><tr id="gr_svn524_949"

><td id="949"><a href="#949">949</a></td></tr
><tr id="gr_svn524_950"

><td id="950"><a href="#950">950</a></td></tr
><tr id="gr_svn524_951"

><td id="951"><a href="#951">951</a></td></tr
><tr id="gr_svn524_952"

><td id="952"><a href="#952">952</a></td></tr
><tr id="gr_svn524_953"

><td id="953"><a href="#953">953</a></td></tr
><tr id="gr_svn524_954"

><td id="954"><a href="#954">954</a></td></tr
><tr id="gr_svn524_955"

><td id="955"><a href="#955">955</a></td></tr
><tr id="gr_svn524_956"

><td id="956"><a href="#956">956</a></td></tr
><tr id="gr_svn524_957"

><td id="957"><a href="#957">957</a></td></tr
><tr id="gr_svn524_958"

><td id="958"><a href="#958">958</a></td></tr
><tr id="gr_svn524_959"

><td id="959"><a href="#959">959</a></td></tr
><tr id="gr_svn524_960"

><td id="960"><a href="#960">960</a></td></tr
><tr id="gr_svn524_961"

><td id="961"><a href="#961">961</a></td></tr
><tr id="gr_svn524_962"

><td id="962"><a href="#962">962</a></td></tr
><tr id="gr_svn524_963"

><td id="963"><a href="#963">963</a></td></tr
><tr id="gr_svn524_964"

><td id="964"><a href="#964">964</a></td></tr
><tr id="gr_svn524_965"

><td id="965"><a href="#965">965</a></td></tr
><tr id="gr_svn524_966"

><td id="966"><a href="#966">966</a></td></tr
><tr id="gr_svn524_967"

><td id="967"><a href="#967">967</a></td></tr
><tr id="gr_svn524_968"

><td id="968"><a href="#968">968</a></td></tr
><tr id="gr_svn524_969"

><td id="969"><a href="#969">969</a></td></tr
><tr id="gr_svn524_970"

><td id="970"><a href="#970">970</a></td></tr
><tr id="gr_svn524_971"

><td id="971"><a href="#971">971</a></td></tr
><tr id="gr_svn524_972"

><td id="972"><a href="#972">972</a></td></tr
><tr id="gr_svn524_973"

><td id="973"><a href="#973">973</a></td></tr
><tr id="gr_svn524_974"

><td id="974"><a href="#974">974</a></td></tr
><tr id="gr_svn524_975"

><td id="975"><a href="#975">975</a></td></tr
><tr id="gr_svn524_976"

><td id="976"><a href="#976">976</a></td></tr
><tr id="gr_svn524_977"

><td id="977"><a href="#977">977</a></td></tr
><tr id="gr_svn524_978"

><td id="978"><a href="#978">978</a></td></tr
><tr id="gr_svn524_979"

><td id="979"><a href="#979">979</a></td></tr
><tr id="gr_svn524_980"

><td id="980"><a href="#980">980</a></td></tr
><tr id="gr_svn524_981"

><td id="981"><a href="#981">981</a></td></tr
><tr id="gr_svn524_982"

><td id="982"><a href="#982">982</a></td></tr
><tr id="gr_svn524_983"

><td id="983"><a href="#983">983</a></td></tr
><tr id="gr_svn524_984"

><td id="984"><a href="#984">984</a></td></tr
><tr id="gr_svn524_985"

><td id="985"><a href="#985">985</a></td></tr
><tr id="gr_svn524_986"

><td id="986"><a href="#986">986</a></td></tr
><tr id="gr_svn524_987"

><td id="987"><a href="#987">987</a></td></tr
><tr id="gr_svn524_988"

><td id="988"><a href="#988">988</a></td></tr
><tr id="gr_svn524_989"

><td id="989"><a href="#989">989</a></td></tr
><tr id="gr_svn524_990"

><td id="990"><a href="#990">990</a></td></tr
><tr id="gr_svn524_991"

><td id="991"><a href="#991">991</a></td></tr
><tr id="gr_svn524_992"

><td id="992"><a href="#992">992</a></td></tr
><tr id="gr_svn524_993"

><td id="993"><a href="#993">993</a></td></tr
><tr id="gr_svn524_994"

><td id="994"><a href="#994">994</a></td></tr
><tr id="gr_svn524_995"

><td id="995"><a href="#995">995</a></td></tr
><tr id="gr_svn524_996"

><td id="996"><a href="#996">996</a></td></tr
><tr id="gr_svn524_997"

><td id="997"><a href="#997">997</a></td></tr
><tr id="gr_svn524_998"

><td id="998"><a href="#998">998</a></td></tr
><tr id="gr_svn524_999"

><td id="999"><a href="#999">999</a></td></tr
><tr id="gr_svn524_1000"

><td id="1000"><a href="#1000">1000</a></td></tr
><tr id="gr_svn524_1001"

><td id="1001"><a href="#1001">1001</a></td></tr
><tr id="gr_svn524_1002"

><td id="1002"><a href="#1002">1002</a></td></tr
><tr id="gr_svn524_1003"

><td id="1003"><a href="#1003">1003</a></td></tr
><tr id="gr_svn524_1004"

><td id="1004"><a href="#1004">1004</a></td></tr
><tr id="gr_svn524_1005"

><td id="1005"><a href="#1005">1005</a></td></tr
><tr id="gr_svn524_1006"

><td id="1006"><a href="#1006">1006</a></td></tr
><tr id="gr_svn524_1007"

><td id="1007"><a href="#1007">1007</a></td></tr
><tr id="gr_svn524_1008"

><td id="1008"><a href="#1008">1008</a></td></tr
><tr id="gr_svn524_1009"

><td id="1009"><a href="#1009">1009</a></td></tr
><tr id="gr_svn524_1010"

><td id="1010"><a href="#1010">1010</a></td></tr
><tr id="gr_svn524_1011"

><td id="1011"><a href="#1011">1011</a></td></tr
><tr id="gr_svn524_1012"

><td id="1012"><a href="#1012">1012</a></td></tr
><tr id="gr_svn524_1013"

><td id="1013"><a href="#1013">1013</a></td></tr
><tr id="gr_svn524_1014"

><td id="1014"><a href="#1014">1014</a></td></tr
><tr id="gr_svn524_1015"

><td id="1015"><a href="#1015">1015</a></td></tr
><tr id="gr_svn524_1016"

><td id="1016"><a href="#1016">1016</a></td></tr
><tr id="gr_svn524_1017"

><td id="1017"><a href="#1017">1017</a></td></tr
><tr id="gr_svn524_1018"

><td id="1018"><a href="#1018">1018</a></td></tr
><tr id="gr_svn524_1019"

><td id="1019"><a href="#1019">1019</a></td></tr
><tr id="gr_svn524_1020"

><td id="1020"><a href="#1020">1020</a></td></tr
><tr id="gr_svn524_1021"

><td id="1021"><a href="#1021">1021</a></td></tr
><tr id="gr_svn524_1022"

><td id="1022"><a href="#1022">1022</a></td></tr
><tr id="gr_svn524_1023"

><td id="1023"><a href="#1023">1023</a></td></tr
><tr id="gr_svn524_1024"

><td id="1024"><a href="#1024">1024</a></td></tr
><tr id="gr_svn524_1025"

><td id="1025"><a href="#1025">1025</a></td></tr
><tr id="gr_svn524_1026"

><td id="1026"><a href="#1026">1026</a></td></tr
><tr id="gr_svn524_1027"

><td id="1027"><a href="#1027">1027</a></td></tr
><tr id="gr_svn524_1028"

><td id="1028"><a href="#1028">1028</a></td></tr
><tr id="gr_svn524_1029"

><td id="1029"><a href="#1029">1029</a></td></tr
><tr id="gr_svn524_1030"

><td id="1030"><a href="#1030">1030</a></td></tr
><tr id="gr_svn524_1031"

><td id="1031"><a href="#1031">1031</a></td></tr
><tr id="gr_svn524_1032"

><td id="1032"><a href="#1032">1032</a></td></tr
><tr id="gr_svn524_1033"

><td id="1033"><a href="#1033">1033</a></td></tr
><tr id="gr_svn524_1034"

><td id="1034"><a href="#1034">1034</a></td></tr
><tr id="gr_svn524_1035"

><td id="1035"><a href="#1035">1035</a></td></tr
><tr id="gr_svn524_1036"

><td id="1036"><a href="#1036">1036</a></td></tr
><tr id="gr_svn524_1037"

><td id="1037"><a href="#1037">1037</a></td></tr
><tr id="gr_svn524_1038"

><td id="1038"><a href="#1038">1038</a></td></tr
><tr id="gr_svn524_1039"

><td id="1039"><a href="#1039">1039</a></td></tr
><tr id="gr_svn524_1040"

><td id="1040"><a href="#1040">1040</a></td></tr
><tr id="gr_svn524_1041"

><td id="1041"><a href="#1041">1041</a></td></tr
><tr id="gr_svn524_1042"

><td id="1042"><a href="#1042">1042</a></td></tr
><tr id="gr_svn524_1043"

><td id="1043"><a href="#1043">1043</a></td></tr
><tr id="gr_svn524_1044"

><td id="1044"><a href="#1044">1044</a></td></tr
><tr id="gr_svn524_1045"

><td id="1045"><a href="#1045">1045</a></td></tr
><tr id="gr_svn524_1046"

><td id="1046"><a href="#1046">1046</a></td></tr
><tr id="gr_svn524_1047"

><td id="1047"><a href="#1047">1047</a></td></tr
><tr id="gr_svn524_1048"

><td id="1048"><a href="#1048">1048</a></td></tr
><tr id="gr_svn524_1049"

><td id="1049"><a href="#1049">1049</a></td></tr
><tr id="gr_svn524_1050"

><td id="1050"><a href="#1050">1050</a></td></tr
><tr id="gr_svn524_1051"

><td id="1051"><a href="#1051">1051</a></td></tr
><tr id="gr_svn524_1052"

><td id="1052"><a href="#1052">1052</a></td></tr
><tr id="gr_svn524_1053"

><td id="1053"><a href="#1053">1053</a></td></tr
><tr id="gr_svn524_1054"

><td id="1054"><a href="#1054">1054</a></td></tr
><tr id="gr_svn524_1055"

><td id="1055"><a href="#1055">1055</a></td></tr
><tr id="gr_svn524_1056"

><td id="1056"><a href="#1056">1056</a></td></tr
><tr id="gr_svn524_1057"

><td id="1057"><a href="#1057">1057</a></td></tr
><tr id="gr_svn524_1058"

><td id="1058"><a href="#1058">1058</a></td></tr
><tr id="gr_svn524_1059"

><td id="1059"><a href="#1059">1059</a></td></tr
><tr id="gr_svn524_1060"

><td id="1060"><a href="#1060">1060</a></td></tr
><tr id="gr_svn524_1061"

><td id="1061"><a href="#1061">1061</a></td></tr
><tr id="gr_svn524_1062"

><td id="1062"><a href="#1062">1062</a></td></tr
><tr id="gr_svn524_1063"

><td id="1063"><a href="#1063">1063</a></td></tr
><tr id="gr_svn524_1064"

><td id="1064"><a href="#1064">1064</a></td></tr
><tr id="gr_svn524_1065"

><td id="1065"><a href="#1065">1065</a></td></tr
><tr id="gr_svn524_1066"

><td id="1066"><a href="#1066">1066</a></td></tr
><tr id="gr_svn524_1067"

><td id="1067"><a href="#1067">1067</a></td></tr
><tr id="gr_svn524_1068"

><td id="1068"><a href="#1068">1068</a></td></tr
><tr id="gr_svn524_1069"

><td id="1069"><a href="#1069">1069</a></td></tr
><tr id="gr_svn524_1070"

><td id="1070"><a href="#1070">1070</a></td></tr
><tr id="gr_svn524_1071"

><td id="1071"><a href="#1071">1071</a></td></tr
><tr id="gr_svn524_1072"

><td id="1072"><a href="#1072">1072</a></td></tr
><tr id="gr_svn524_1073"

><td id="1073"><a href="#1073">1073</a></td></tr
><tr id="gr_svn524_1074"

><td id="1074"><a href="#1074">1074</a></td></tr
><tr id="gr_svn524_1075"

><td id="1075"><a href="#1075">1075</a></td></tr
><tr id="gr_svn524_1076"

><td id="1076"><a href="#1076">1076</a></td></tr
><tr id="gr_svn524_1077"

><td id="1077"><a href="#1077">1077</a></td></tr
><tr id="gr_svn524_1078"

><td id="1078"><a href="#1078">1078</a></td></tr
><tr id="gr_svn524_1079"

><td id="1079"><a href="#1079">1079</a></td></tr
><tr id="gr_svn524_1080"

><td id="1080"><a href="#1080">1080</a></td></tr
><tr id="gr_svn524_1081"

><td id="1081"><a href="#1081">1081</a></td></tr
><tr id="gr_svn524_1082"

><td id="1082"><a href="#1082">1082</a></td></tr
><tr id="gr_svn524_1083"

><td id="1083"><a href="#1083">1083</a></td></tr
><tr id="gr_svn524_1084"

><td id="1084"><a href="#1084">1084</a></td></tr
><tr id="gr_svn524_1085"

><td id="1085"><a href="#1085">1085</a></td></tr
><tr id="gr_svn524_1086"

><td id="1086"><a href="#1086">1086</a></td></tr
><tr id="gr_svn524_1087"

><td id="1087"><a href="#1087">1087</a></td></tr
><tr id="gr_svn524_1088"

><td id="1088"><a href="#1088">1088</a></td></tr
><tr id="gr_svn524_1089"

><td id="1089"><a href="#1089">1089</a></td></tr
><tr id="gr_svn524_1090"

><td id="1090"><a href="#1090">1090</a></td></tr
><tr id="gr_svn524_1091"

><td id="1091"><a href="#1091">1091</a></td></tr
><tr id="gr_svn524_1092"

><td id="1092"><a href="#1092">1092</a></td></tr
><tr id="gr_svn524_1093"

><td id="1093"><a href="#1093">1093</a></td></tr
><tr id="gr_svn524_1094"

><td id="1094"><a href="#1094">1094</a></td></tr
><tr id="gr_svn524_1095"

><td id="1095"><a href="#1095">1095</a></td></tr
><tr id="gr_svn524_1096"

><td id="1096"><a href="#1096">1096</a></td></tr
><tr id="gr_svn524_1097"

><td id="1097"><a href="#1097">1097</a></td></tr
><tr id="gr_svn524_1098"

><td id="1098"><a href="#1098">1098</a></td></tr
><tr id="gr_svn524_1099"

><td id="1099"><a href="#1099">1099</a></td></tr
><tr id="gr_svn524_1100"

><td id="1100"><a href="#1100">1100</a></td></tr
><tr id="gr_svn524_1101"

><td id="1101"><a href="#1101">1101</a></td></tr
><tr id="gr_svn524_1102"

><td id="1102"><a href="#1102">1102</a></td></tr
><tr id="gr_svn524_1103"

><td id="1103"><a href="#1103">1103</a></td></tr
><tr id="gr_svn524_1104"

><td id="1104"><a href="#1104">1104</a></td></tr
><tr id="gr_svn524_1105"

><td id="1105"><a href="#1105">1105</a></td></tr
><tr id="gr_svn524_1106"

><td id="1106"><a href="#1106">1106</a></td></tr
><tr id="gr_svn524_1107"

><td id="1107"><a href="#1107">1107</a></td></tr
><tr id="gr_svn524_1108"

><td id="1108"><a href="#1108">1108</a></td></tr
><tr id="gr_svn524_1109"

><td id="1109"><a href="#1109">1109</a></td></tr
><tr id="gr_svn524_1110"

><td id="1110"><a href="#1110">1110</a></td></tr
><tr id="gr_svn524_1111"

><td id="1111"><a href="#1111">1111</a></td></tr
><tr id="gr_svn524_1112"

><td id="1112"><a href="#1112">1112</a></td></tr
><tr id="gr_svn524_1113"

><td id="1113"><a href="#1113">1113</a></td></tr
><tr id="gr_svn524_1114"

><td id="1114"><a href="#1114">1114</a></td></tr
><tr id="gr_svn524_1115"

><td id="1115"><a href="#1115">1115</a></td></tr
><tr id="gr_svn524_1116"

><td id="1116"><a href="#1116">1116</a></td></tr
><tr id="gr_svn524_1117"

><td id="1117"><a href="#1117">1117</a></td></tr
><tr id="gr_svn524_1118"

><td id="1118"><a href="#1118">1118</a></td></tr
><tr id="gr_svn524_1119"

><td id="1119"><a href="#1119">1119</a></td></tr
><tr id="gr_svn524_1120"

><td id="1120"><a href="#1120">1120</a></td></tr
><tr id="gr_svn524_1121"

><td id="1121"><a href="#1121">1121</a></td></tr
><tr id="gr_svn524_1122"

><td id="1122"><a href="#1122">1122</a></td></tr
><tr id="gr_svn524_1123"

><td id="1123"><a href="#1123">1123</a></td></tr
><tr id="gr_svn524_1124"

><td id="1124"><a href="#1124">1124</a></td></tr
><tr id="gr_svn524_1125"

><td id="1125"><a href="#1125">1125</a></td></tr
><tr id="gr_svn524_1126"

><td id="1126"><a href="#1126">1126</a></td></tr
><tr id="gr_svn524_1127"

><td id="1127"><a href="#1127">1127</a></td></tr
><tr id="gr_svn524_1128"

><td id="1128"><a href="#1128">1128</a></td></tr
><tr id="gr_svn524_1129"

><td id="1129"><a href="#1129">1129</a></td></tr
><tr id="gr_svn524_1130"

><td id="1130"><a href="#1130">1130</a></td></tr
><tr id="gr_svn524_1131"

><td id="1131"><a href="#1131">1131</a></td></tr
><tr id="gr_svn524_1132"

><td id="1132"><a href="#1132">1132</a></td></tr
><tr id="gr_svn524_1133"

><td id="1133"><a href="#1133">1133</a></td></tr
><tr id="gr_svn524_1134"

><td id="1134"><a href="#1134">1134</a></td></tr
><tr id="gr_svn524_1135"

><td id="1135"><a href="#1135">1135</a></td></tr
><tr id="gr_svn524_1136"

><td id="1136"><a href="#1136">1136</a></td></tr
><tr id="gr_svn524_1137"

><td id="1137"><a href="#1137">1137</a></td></tr
><tr id="gr_svn524_1138"

><td id="1138"><a href="#1138">1138</a></td></tr
><tr id="gr_svn524_1139"

><td id="1139"><a href="#1139">1139</a></td></tr
><tr id="gr_svn524_1140"

><td id="1140"><a href="#1140">1140</a></td></tr
><tr id="gr_svn524_1141"

><td id="1141"><a href="#1141">1141</a></td></tr
><tr id="gr_svn524_1142"

><td id="1142"><a href="#1142">1142</a></td></tr
><tr id="gr_svn524_1143"

><td id="1143"><a href="#1143">1143</a></td></tr
><tr id="gr_svn524_1144"

><td id="1144"><a href="#1144">1144</a></td></tr
><tr id="gr_svn524_1145"

><td id="1145"><a href="#1145">1145</a></td></tr
><tr id="gr_svn524_1146"

><td id="1146"><a href="#1146">1146</a></td></tr
><tr id="gr_svn524_1147"

><td id="1147"><a href="#1147">1147</a></td></tr
><tr id="gr_svn524_1148"

><td id="1148"><a href="#1148">1148</a></td></tr
><tr id="gr_svn524_1149"

><td id="1149"><a href="#1149">1149</a></td></tr
><tr id="gr_svn524_1150"

><td id="1150"><a href="#1150">1150</a></td></tr
><tr id="gr_svn524_1151"

><td id="1151"><a href="#1151">1151</a></td></tr
><tr id="gr_svn524_1152"

><td id="1152"><a href="#1152">1152</a></td></tr
><tr id="gr_svn524_1153"

><td id="1153"><a href="#1153">1153</a></td></tr
><tr id="gr_svn524_1154"

><td id="1154"><a href="#1154">1154</a></td></tr
><tr id="gr_svn524_1155"

><td id="1155"><a href="#1155">1155</a></td></tr
><tr id="gr_svn524_1156"

><td id="1156"><a href="#1156">1156</a></td></tr
><tr id="gr_svn524_1157"

><td id="1157"><a href="#1157">1157</a></td></tr
><tr id="gr_svn524_1158"

><td id="1158"><a href="#1158">1158</a></td></tr
><tr id="gr_svn524_1159"

><td id="1159"><a href="#1159">1159</a></td></tr
><tr id="gr_svn524_1160"

><td id="1160"><a href="#1160">1160</a></td></tr
><tr id="gr_svn524_1161"

><td id="1161"><a href="#1161">1161</a></td></tr
><tr id="gr_svn524_1162"

><td id="1162"><a href="#1162">1162</a></td></tr
><tr id="gr_svn524_1163"

><td id="1163"><a href="#1163">1163</a></td></tr
><tr id="gr_svn524_1164"

><td id="1164"><a href="#1164">1164</a></td></tr
><tr id="gr_svn524_1165"

><td id="1165"><a href="#1165">1165</a></td></tr
><tr id="gr_svn524_1166"

><td id="1166"><a href="#1166">1166</a></td></tr
><tr id="gr_svn524_1167"

><td id="1167"><a href="#1167">1167</a></td></tr
><tr id="gr_svn524_1168"

><td id="1168"><a href="#1168">1168</a></td></tr
><tr id="gr_svn524_1169"

><td id="1169"><a href="#1169">1169</a></td></tr
><tr id="gr_svn524_1170"

><td id="1170"><a href="#1170">1170</a></td></tr
><tr id="gr_svn524_1171"

><td id="1171"><a href="#1171">1171</a></td></tr
><tr id="gr_svn524_1172"

><td id="1172"><a href="#1172">1172</a></td></tr
><tr id="gr_svn524_1173"

><td id="1173"><a href="#1173">1173</a></td></tr
><tr id="gr_svn524_1174"

><td id="1174"><a href="#1174">1174</a></td></tr
><tr id="gr_svn524_1175"

><td id="1175"><a href="#1175">1175</a></td></tr
><tr id="gr_svn524_1176"

><td id="1176"><a href="#1176">1176</a></td></tr
><tr id="gr_svn524_1177"

><td id="1177"><a href="#1177">1177</a></td></tr
><tr id="gr_svn524_1178"

><td id="1178"><a href="#1178">1178</a></td></tr
><tr id="gr_svn524_1179"

><td id="1179"><a href="#1179">1179</a></td></tr
><tr id="gr_svn524_1180"

><td id="1180"><a href="#1180">1180</a></td></tr
><tr id="gr_svn524_1181"

><td id="1181"><a href="#1181">1181</a></td></tr
><tr id="gr_svn524_1182"

><td id="1182"><a href="#1182">1182</a></td></tr
><tr id="gr_svn524_1183"

><td id="1183"><a href="#1183">1183</a></td></tr
><tr id="gr_svn524_1184"

><td id="1184"><a href="#1184">1184</a></td></tr
><tr id="gr_svn524_1185"

><td id="1185"><a href="#1185">1185</a></td></tr
><tr id="gr_svn524_1186"

><td id="1186"><a href="#1186">1186</a></td></tr
><tr id="gr_svn524_1187"

><td id="1187"><a href="#1187">1187</a></td></tr
><tr id="gr_svn524_1188"

><td id="1188"><a href="#1188">1188</a></td></tr
><tr id="gr_svn524_1189"

><td id="1189"><a href="#1189">1189</a></td></tr
><tr id="gr_svn524_1190"

><td id="1190"><a href="#1190">1190</a></td></tr
><tr id="gr_svn524_1191"

><td id="1191"><a href="#1191">1191</a></td></tr
><tr id="gr_svn524_1192"

><td id="1192"><a href="#1192">1192</a></td></tr
><tr id="gr_svn524_1193"

><td id="1193"><a href="#1193">1193</a></td></tr
><tr id="gr_svn524_1194"

><td id="1194"><a href="#1194">1194</a></td></tr
><tr id="gr_svn524_1195"

><td id="1195"><a href="#1195">1195</a></td></tr
><tr id="gr_svn524_1196"

><td id="1196"><a href="#1196">1196</a></td></tr
><tr id="gr_svn524_1197"

><td id="1197"><a href="#1197">1197</a></td></tr
><tr id="gr_svn524_1198"

><td id="1198"><a href="#1198">1198</a></td></tr
><tr id="gr_svn524_1199"

><td id="1199"><a href="#1199">1199</a></td></tr
><tr id="gr_svn524_1200"

><td id="1200"><a href="#1200">1200</a></td></tr
><tr id="gr_svn524_1201"

><td id="1201"><a href="#1201">1201</a></td></tr
><tr id="gr_svn524_1202"

><td id="1202"><a href="#1202">1202</a></td></tr
><tr id="gr_svn524_1203"

><td id="1203"><a href="#1203">1203</a></td></tr
><tr id="gr_svn524_1204"

><td id="1204"><a href="#1204">1204</a></td></tr
><tr id="gr_svn524_1205"

><td id="1205"><a href="#1205">1205</a></td></tr
><tr id="gr_svn524_1206"

><td id="1206"><a href="#1206">1206</a></td></tr
><tr id="gr_svn524_1207"

><td id="1207"><a href="#1207">1207</a></td></tr
><tr id="gr_svn524_1208"

><td id="1208"><a href="#1208">1208</a></td></tr
><tr id="gr_svn524_1209"

><td id="1209"><a href="#1209">1209</a></td></tr
><tr id="gr_svn524_1210"

><td id="1210"><a href="#1210">1210</a></td></tr
><tr id="gr_svn524_1211"

><td id="1211"><a href="#1211">1211</a></td></tr
><tr id="gr_svn524_1212"

><td id="1212"><a href="#1212">1212</a></td></tr
><tr id="gr_svn524_1213"

><td id="1213"><a href="#1213">1213</a></td></tr
><tr id="gr_svn524_1214"

><td id="1214"><a href="#1214">1214</a></td></tr
><tr id="gr_svn524_1215"

><td id="1215"><a href="#1215">1215</a></td></tr
><tr id="gr_svn524_1216"

><td id="1216"><a href="#1216">1216</a></td></tr
><tr id="gr_svn524_1217"

><td id="1217"><a href="#1217">1217</a></td></tr
><tr id="gr_svn524_1218"

><td id="1218"><a href="#1218">1218</a></td></tr
><tr id="gr_svn524_1219"

><td id="1219"><a href="#1219">1219</a></td></tr
><tr id="gr_svn524_1220"

><td id="1220"><a href="#1220">1220</a></td></tr
><tr id="gr_svn524_1221"

><td id="1221"><a href="#1221">1221</a></td></tr
><tr id="gr_svn524_1222"

><td id="1222"><a href="#1222">1222</a></td></tr
><tr id="gr_svn524_1223"

><td id="1223"><a href="#1223">1223</a></td></tr
><tr id="gr_svn524_1224"

><td id="1224"><a href="#1224">1224</a></td></tr
><tr id="gr_svn524_1225"

><td id="1225"><a href="#1225">1225</a></td></tr
><tr id="gr_svn524_1226"

><td id="1226"><a href="#1226">1226</a></td></tr
><tr id="gr_svn524_1227"

><td id="1227"><a href="#1227">1227</a></td></tr
><tr id="gr_svn524_1228"

><td id="1228"><a href="#1228">1228</a></td></tr
><tr id="gr_svn524_1229"

><td id="1229"><a href="#1229">1229</a></td></tr
><tr id="gr_svn524_1230"

><td id="1230"><a href="#1230">1230</a></td></tr
><tr id="gr_svn524_1231"

><td id="1231"><a href="#1231">1231</a></td></tr
><tr id="gr_svn524_1232"

><td id="1232"><a href="#1232">1232</a></td></tr
><tr id="gr_svn524_1233"

><td id="1233"><a href="#1233">1233</a></td></tr
><tr id="gr_svn524_1234"

><td id="1234"><a href="#1234">1234</a></td></tr
><tr id="gr_svn524_1235"

><td id="1235"><a href="#1235">1235</a></td></tr
><tr id="gr_svn524_1236"

><td id="1236"><a href="#1236">1236</a></td></tr
><tr id="gr_svn524_1237"

><td id="1237"><a href="#1237">1237</a></td></tr
><tr id="gr_svn524_1238"

><td id="1238"><a href="#1238">1238</a></td></tr
><tr id="gr_svn524_1239"

><td id="1239"><a href="#1239">1239</a></td></tr
><tr id="gr_svn524_1240"

><td id="1240"><a href="#1240">1240</a></td></tr
><tr id="gr_svn524_1241"

><td id="1241"><a href="#1241">1241</a></td></tr
><tr id="gr_svn524_1242"

><td id="1242"><a href="#1242">1242</a></td></tr
><tr id="gr_svn524_1243"

><td id="1243"><a href="#1243">1243</a></td></tr
><tr id="gr_svn524_1244"

><td id="1244"><a href="#1244">1244</a></td></tr
><tr id="gr_svn524_1245"

><td id="1245"><a href="#1245">1245</a></td></tr
><tr id="gr_svn524_1246"

><td id="1246"><a href="#1246">1246</a></td></tr
><tr id="gr_svn524_1247"

><td id="1247"><a href="#1247">1247</a></td></tr
><tr id="gr_svn524_1248"

><td id="1248"><a href="#1248">1248</a></td></tr
><tr id="gr_svn524_1249"

><td id="1249"><a href="#1249">1249</a></td></tr
><tr id="gr_svn524_1250"

><td id="1250"><a href="#1250">1250</a></td></tr
><tr id="gr_svn524_1251"

><td id="1251"><a href="#1251">1251</a></td></tr
><tr id="gr_svn524_1252"

><td id="1252"><a href="#1252">1252</a></td></tr
><tr id="gr_svn524_1253"

><td id="1253"><a href="#1253">1253</a></td></tr
><tr id="gr_svn524_1254"

><td id="1254"><a href="#1254">1254</a></td></tr
><tr id="gr_svn524_1255"

><td id="1255"><a href="#1255">1255</a></td></tr
><tr id="gr_svn524_1256"

><td id="1256"><a href="#1256">1256</a></td></tr
><tr id="gr_svn524_1257"

><td id="1257"><a href="#1257">1257</a></td></tr
><tr id="gr_svn524_1258"

><td id="1258"><a href="#1258">1258</a></td></tr
><tr id="gr_svn524_1259"

><td id="1259"><a href="#1259">1259</a></td></tr
><tr id="gr_svn524_1260"

><td id="1260"><a href="#1260">1260</a></td></tr
><tr id="gr_svn524_1261"

><td id="1261"><a href="#1261">1261</a></td></tr
><tr id="gr_svn524_1262"

><td id="1262"><a href="#1262">1262</a></td></tr
><tr id="gr_svn524_1263"

><td id="1263"><a href="#1263">1263</a></td></tr
><tr id="gr_svn524_1264"

><td id="1264"><a href="#1264">1264</a></td></tr
><tr id="gr_svn524_1265"

><td id="1265"><a href="#1265">1265</a></td></tr
><tr id="gr_svn524_1266"

><td id="1266"><a href="#1266">1266</a></td></tr
><tr id="gr_svn524_1267"

><td id="1267"><a href="#1267">1267</a></td></tr
><tr id="gr_svn524_1268"

><td id="1268"><a href="#1268">1268</a></td></tr
><tr id="gr_svn524_1269"

><td id="1269"><a href="#1269">1269</a></td></tr
><tr id="gr_svn524_1270"

><td id="1270"><a href="#1270">1270</a></td></tr
><tr id="gr_svn524_1271"

><td id="1271"><a href="#1271">1271</a></td></tr
><tr id="gr_svn524_1272"

><td id="1272"><a href="#1272">1272</a></td></tr
><tr id="gr_svn524_1273"

><td id="1273"><a href="#1273">1273</a></td></tr
><tr id="gr_svn524_1274"

><td id="1274"><a href="#1274">1274</a></td></tr
><tr id="gr_svn524_1275"

><td id="1275"><a href="#1275">1275</a></td></tr
><tr id="gr_svn524_1276"

><td id="1276"><a href="#1276">1276</a></td></tr
><tr id="gr_svn524_1277"

><td id="1277"><a href="#1277">1277</a></td></tr
><tr id="gr_svn524_1278"

><td id="1278"><a href="#1278">1278</a></td></tr
><tr id="gr_svn524_1279"

><td id="1279"><a href="#1279">1279</a></td></tr
><tr id="gr_svn524_1280"

><td id="1280"><a href="#1280">1280</a></td></tr
><tr id="gr_svn524_1281"

><td id="1281"><a href="#1281">1281</a></td></tr
><tr id="gr_svn524_1282"

><td id="1282"><a href="#1282">1282</a></td></tr
><tr id="gr_svn524_1283"

><td id="1283"><a href="#1283">1283</a></td></tr
><tr id="gr_svn524_1284"

><td id="1284"><a href="#1284">1284</a></td></tr
><tr id="gr_svn524_1285"

><td id="1285"><a href="#1285">1285</a></td></tr
><tr id="gr_svn524_1286"

><td id="1286"><a href="#1286">1286</a></td></tr
><tr id="gr_svn524_1287"

><td id="1287"><a href="#1287">1287</a></td></tr
><tr id="gr_svn524_1288"

><td id="1288"><a href="#1288">1288</a></td></tr
><tr id="gr_svn524_1289"

><td id="1289"><a href="#1289">1289</a></td></tr
><tr id="gr_svn524_1290"

><td id="1290"><a href="#1290">1290</a></td></tr
><tr id="gr_svn524_1291"

><td id="1291"><a href="#1291">1291</a></td></tr
><tr id="gr_svn524_1292"

><td id="1292"><a href="#1292">1292</a></td></tr
><tr id="gr_svn524_1293"

><td id="1293"><a href="#1293">1293</a></td></tr
><tr id="gr_svn524_1294"

><td id="1294"><a href="#1294">1294</a></td></tr
><tr id="gr_svn524_1295"

><td id="1295"><a href="#1295">1295</a></td></tr
><tr id="gr_svn524_1296"

><td id="1296"><a href="#1296">1296</a></td></tr
><tr id="gr_svn524_1297"

><td id="1297"><a href="#1297">1297</a></td></tr
><tr id="gr_svn524_1298"

><td id="1298"><a href="#1298">1298</a></td></tr
><tr id="gr_svn524_1299"

><td id="1299"><a href="#1299">1299</a></td></tr
><tr id="gr_svn524_1300"

><td id="1300"><a href="#1300">1300</a></td></tr
><tr id="gr_svn524_1301"

><td id="1301"><a href="#1301">1301</a></td></tr
><tr id="gr_svn524_1302"

><td id="1302"><a href="#1302">1302</a></td></tr
><tr id="gr_svn524_1303"

><td id="1303"><a href="#1303">1303</a></td></tr
><tr id="gr_svn524_1304"

><td id="1304"><a href="#1304">1304</a></td></tr
><tr id="gr_svn524_1305"

><td id="1305"><a href="#1305">1305</a></td></tr
><tr id="gr_svn524_1306"

><td id="1306"><a href="#1306">1306</a></td></tr
><tr id="gr_svn524_1307"

><td id="1307"><a href="#1307">1307</a></td></tr
><tr id="gr_svn524_1308"

><td id="1308"><a href="#1308">1308</a></td></tr
><tr id="gr_svn524_1309"

><td id="1309"><a href="#1309">1309</a></td></tr
><tr id="gr_svn524_1310"

><td id="1310"><a href="#1310">1310</a></td></tr
><tr id="gr_svn524_1311"

><td id="1311"><a href="#1311">1311</a></td></tr
><tr id="gr_svn524_1312"

><td id="1312"><a href="#1312">1312</a></td></tr
><tr id="gr_svn524_1313"

><td id="1313"><a href="#1313">1313</a></td></tr
><tr id="gr_svn524_1314"

><td id="1314"><a href="#1314">1314</a></td></tr
><tr id="gr_svn524_1315"

><td id="1315"><a href="#1315">1315</a></td></tr
><tr id="gr_svn524_1316"

><td id="1316"><a href="#1316">1316</a></td></tr
><tr id="gr_svn524_1317"

><td id="1317"><a href="#1317">1317</a></td></tr
><tr id="gr_svn524_1318"

><td id="1318"><a href="#1318">1318</a></td></tr
><tr id="gr_svn524_1319"

><td id="1319"><a href="#1319">1319</a></td></tr
><tr id="gr_svn524_1320"

><td id="1320"><a href="#1320">1320</a></td></tr
><tr id="gr_svn524_1321"

><td id="1321"><a href="#1321">1321</a></td></tr
><tr id="gr_svn524_1322"

><td id="1322"><a href="#1322">1322</a></td></tr
><tr id="gr_svn524_1323"

><td id="1323"><a href="#1323">1323</a></td></tr
><tr id="gr_svn524_1324"

><td id="1324"><a href="#1324">1324</a></td></tr
><tr id="gr_svn524_1325"

><td id="1325"><a href="#1325">1325</a></td></tr
><tr id="gr_svn524_1326"

><td id="1326"><a href="#1326">1326</a></td></tr
><tr id="gr_svn524_1327"

><td id="1327"><a href="#1327">1327</a></td></tr
><tr id="gr_svn524_1328"

><td id="1328"><a href="#1328">1328</a></td></tr
><tr id="gr_svn524_1329"

><td id="1329"><a href="#1329">1329</a></td></tr
><tr id="gr_svn524_1330"

><td id="1330"><a href="#1330">1330</a></td></tr
><tr id="gr_svn524_1331"

><td id="1331"><a href="#1331">1331</a></td></tr
><tr id="gr_svn524_1332"

><td id="1332"><a href="#1332">1332</a></td></tr
><tr id="gr_svn524_1333"

><td id="1333"><a href="#1333">1333</a></td></tr
><tr id="gr_svn524_1334"

><td id="1334"><a href="#1334">1334</a></td></tr
><tr id="gr_svn524_1335"

><td id="1335"><a href="#1335">1335</a></td></tr
><tr id="gr_svn524_1336"

><td id="1336"><a href="#1336">1336</a></td></tr
><tr id="gr_svn524_1337"

><td id="1337"><a href="#1337">1337</a></td></tr
><tr id="gr_svn524_1338"

><td id="1338"><a href="#1338">1338</a></td></tr
><tr id="gr_svn524_1339"

><td id="1339"><a href="#1339">1339</a></td></tr
><tr id="gr_svn524_1340"

><td id="1340"><a href="#1340">1340</a></td></tr
><tr id="gr_svn524_1341"

><td id="1341"><a href="#1341">1341</a></td></tr
><tr id="gr_svn524_1342"

><td id="1342"><a href="#1342">1342</a></td></tr
><tr id="gr_svn524_1343"

><td id="1343"><a href="#1343">1343</a></td></tr
><tr id="gr_svn524_1344"

><td id="1344"><a href="#1344">1344</a></td></tr
><tr id="gr_svn524_1345"

><td id="1345"><a href="#1345">1345</a></td></tr
><tr id="gr_svn524_1346"

><td id="1346"><a href="#1346">1346</a></td></tr
><tr id="gr_svn524_1347"

><td id="1347"><a href="#1347">1347</a></td></tr
><tr id="gr_svn524_1348"

><td id="1348"><a href="#1348">1348</a></td></tr
><tr id="gr_svn524_1349"

><td id="1349"><a href="#1349">1349</a></td></tr
><tr id="gr_svn524_1350"

><td id="1350"><a href="#1350">1350</a></td></tr
><tr id="gr_svn524_1351"

><td id="1351"><a href="#1351">1351</a></td></tr
><tr id="gr_svn524_1352"

><td id="1352"><a href="#1352">1352</a></td></tr
><tr id="gr_svn524_1353"

><td id="1353"><a href="#1353">1353</a></td></tr
><tr id="gr_svn524_1354"

><td id="1354"><a href="#1354">1354</a></td></tr
><tr id="gr_svn524_1355"

><td id="1355"><a href="#1355">1355</a></td></tr
><tr id="gr_svn524_1356"

><td id="1356"><a href="#1356">1356</a></td></tr
><tr id="gr_svn524_1357"

><td id="1357"><a href="#1357">1357</a></td></tr
><tr id="gr_svn524_1358"

><td id="1358"><a href="#1358">1358</a></td></tr
><tr id="gr_svn524_1359"

><td id="1359"><a href="#1359">1359</a></td></tr
><tr id="gr_svn524_1360"

><td id="1360"><a href="#1360">1360</a></td></tr
><tr id="gr_svn524_1361"

><td id="1361"><a href="#1361">1361</a></td></tr
><tr id="gr_svn524_1362"

><td id="1362"><a href="#1362">1362</a></td></tr
><tr id="gr_svn524_1363"

><td id="1363"><a href="#1363">1363</a></td></tr
><tr id="gr_svn524_1364"

><td id="1364"><a href="#1364">1364</a></td></tr
><tr id="gr_svn524_1365"

><td id="1365"><a href="#1365">1365</a></td></tr
><tr id="gr_svn524_1366"

><td id="1366"><a href="#1366">1366</a></td></tr
><tr id="gr_svn524_1367"

><td id="1367"><a href="#1367">1367</a></td></tr
><tr id="gr_svn524_1368"

><td id="1368"><a href="#1368">1368</a></td></tr
><tr id="gr_svn524_1369"

><td id="1369"><a href="#1369">1369</a></td></tr
><tr id="gr_svn524_1370"

><td id="1370"><a href="#1370">1370</a></td></tr
><tr id="gr_svn524_1371"

><td id="1371"><a href="#1371">1371</a></td></tr
><tr id="gr_svn524_1372"

><td id="1372"><a href="#1372">1372</a></td></tr
><tr id="gr_svn524_1373"

><td id="1373"><a href="#1373">1373</a></td></tr
><tr id="gr_svn524_1374"

><td id="1374"><a href="#1374">1374</a></td></tr
><tr id="gr_svn524_1375"

><td id="1375"><a href="#1375">1375</a></td></tr
><tr id="gr_svn524_1376"

><td id="1376"><a href="#1376">1376</a></td></tr
><tr id="gr_svn524_1377"

><td id="1377"><a href="#1377">1377</a></td></tr
><tr id="gr_svn524_1378"

><td id="1378"><a href="#1378">1378</a></td></tr
><tr id="gr_svn524_1379"

><td id="1379"><a href="#1379">1379</a></td></tr
><tr id="gr_svn524_1380"

><td id="1380"><a href="#1380">1380</a></td></tr
><tr id="gr_svn524_1381"

><td id="1381"><a href="#1381">1381</a></td></tr
><tr id="gr_svn524_1382"

><td id="1382"><a href="#1382">1382</a></td></tr
><tr id="gr_svn524_1383"

><td id="1383"><a href="#1383">1383</a></td></tr
><tr id="gr_svn524_1384"

><td id="1384"><a href="#1384">1384</a></td></tr
><tr id="gr_svn524_1385"

><td id="1385"><a href="#1385">1385</a></td></tr
><tr id="gr_svn524_1386"

><td id="1386"><a href="#1386">1386</a></td></tr
><tr id="gr_svn524_1387"

><td id="1387"><a href="#1387">1387</a></td></tr
><tr id="gr_svn524_1388"

><td id="1388"><a href="#1388">1388</a></td></tr
><tr id="gr_svn524_1389"

><td id="1389"><a href="#1389">1389</a></td></tr
><tr id="gr_svn524_1390"

><td id="1390"><a href="#1390">1390</a></td></tr
><tr id="gr_svn524_1391"

><td id="1391"><a href="#1391">1391</a></td></tr
><tr id="gr_svn524_1392"

><td id="1392"><a href="#1392">1392</a></td></tr
><tr id="gr_svn524_1393"

><td id="1393"><a href="#1393">1393</a></td></tr
><tr id="gr_svn524_1394"

><td id="1394"><a href="#1394">1394</a></td></tr
><tr id="gr_svn524_1395"

><td id="1395"><a href="#1395">1395</a></td></tr
><tr id="gr_svn524_1396"

><td id="1396"><a href="#1396">1396</a></td></tr
><tr id="gr_svn524_1397"

><td id="1397"><a href="#1397">1397</a></td></tr
><tr id="gr_svn524_1398"

><td id="1398"><a href="#1398">1398</a></td></tr
><tr id="gr_svn524_1399"

><td id="1399"><a href="#1399">1399</a></td></tr
><tr id="gr_svn524_1400"

><td id="1400"><a href="#1400">1400</a></td></tr
><tr id="gr_svn524_1401"

><td id="1401"><a href="#1401">1401</a></td></tr
><tr id="gr_svn524_1402"

><td id="1402"><a href="#1402">1402</a></td></tr
><tr id="gr_svn524_1403"

><td id="1403"><a href="#1403">1403</a></td></tr
><tr id="gr_svn524_1404"

><td id="1404"><a href="#1404">1404</a></td></tr
><tr id="gr_svn524_1405"

><td id="1405"><a href="#1405">1405</a></td></tr
><tr id="gr_svn524_1406"

><td id="1406"><a href="#1406">1406</a></td></tr
><tr id="gr_svn524_1407"

><td id="1407"><a href="#1407">1407</a></td></tr
><tr id="gr_svn524_1408"

><td id="1408"><a href="#1408">1408</a></td></tr
><tr id="gr_svn524_1409"

><td id="1409"><a href="#1409">1409</a></td></tr
><tr id="gr_svn524_1410"

><td id="1410"><a href="#1410">1410</a></td></tr
><tr id="gr_svn524_1411"

><td id="1411"><a href="#1411">1411</a></td></tr
><tr id="gr_svn524_1412"

><td id="1412"><a href="#1412">1412</a></td></tr
><tr id="gr_svn524_1413"

><td id="1413"><a href="#1413">1413</a></td></tr
><tr id="gr_svn524_1414"

><td id="1414"><a href="#1414">1414</a></td></tr
><tr id="gr_svn524_1415"

><td id="1415"><a href="#1415">1415</a></td></tr
><tr id="gr_svn524_1416"

><td id="1416"><a href="#1416">1416</a></td></tr
><tr id="gr_svn524_1417"

><td id="1417"><a href="#1417">1417</a></td></tr
><tr id="gr_svn524_1418"

><td id="1418"><a href="#1418">1418</a></td></tr
><tr id="gr_svn524_1419"

><td id="1419"><a href="#1419">1419</a></td></tr
><tr id="gr_svn524_1420"

><td id="1420"><a href="#1420">1420</a></td></tr
><tr id="gr_svn524_1421"

><td id="1421"><a href="#1421">1421</a></td></tr
><tr id="gr_svn524_1422"

><td id="1422"><a href="#1422">1422</a></td></tr
><tr id="gr_svn524_1423"

><td id="1423"><a href="#1423">1423</a></td></tr
><tr id="gr_svn524_1424"

><td id="1424"><a href="#1424">1424</a></td></tr
><tr id="gr_svn524_1425"

><td id="1425"><a href="#1425">1425</a></td></tr
><tr id="gr_svn524_1426"

><td id="1426"><a href="#1426">1426</a></td></tr
><tr id="gr_svn524_1427"

><td id="1427"><a href="#1427">1427</a></td></tr
><tr id="gr_svn524_1428"

><td id="1428"><a href="#1428">1428</a></td></tr
><tr id="gr_svn524_1429"

><td id="1429"><a href="#1429">1429</a></td></tr
><tr id="gr_svn524_1430"

><td id="1430"><a href="#1430">1430</a></td></tr
><tr id="gr_svn524_1431"

><td id="1431"><a href="#1431">1431</a></td></tr
><tr id="gr_svn524_1432"

><td id="1432"><a href="#1432">1432</a></td></tr
><tr id="gr_svn524_1433"

><td id="1433"><a href="#1433">1433</a></td></tr
><tr id="gr_svn524_1434"

><td id="1434"><a href="#1434">1434</a></td></tr
><tr id="gr_svn524_1435"

><td id="1435"><a href="#1435">1435</a></td></tr
><tr id="gr_svn524_1436"

><td id="1436"><a href="#1436">1436</a></td></tr
><tr id="gr_svn524_1437"

><td id="1437"><a href="#1437">1437</a></td></tr
><tr id="gr_svn524_1438"

><td id="1438"><a href="#1438">1438</a></td></tr
><tr id="gr_svn524_1439"

><td id="1439"><a href="#1439">1439</a></td></tr
><tr id="gr_svn524_1440"

><td id="1440"><a href="#1440">1440</a></td></tr
><tr id="gr_svn524_1441"

><td id="1441"><a href="#1441">1441</a></td></tr
><tr id="gr_svn524_1442"

><td id="1442"><a href="#1442">1442</a></td></tr
><tr id="gr_svn524_1443"

><td id="1443"><a href="#1443">1443</a></td></tr
><tr id="gr_svn524_1444"

><td id="1444"><a href="#1444">1444</a></td></tr
><tr id="gr_svn524_1445"

><td id="1445"><a href="#1445">1445</a></td></tr
><tr id="gr_svn524_1446"

><td id="1446"><a href="#1446">1446</a></td></tr
><tr id="gr_svn524_1447"

><td id="1447"><a href="#1447">1447</a></td></tr
><tr id="gr_svn524_1448"

><td id="1448"><a href="#1448">1448</a></td></tr
><tr id="gr_svn524_1449"

><td id="1449"><a href="#1449">1449</a></td></tr
><tr id="gr_svn524_1450"

><td id="1450"><a href="#1450">1450</a></td></tr
><tr id="gr_svn524_1451"

><td id="1451"><a href="#1451">1451</a></td></tr
><tr id="gr_svn524_1452"

><td id="1452"><a href="#1452">1452</a></td></tr
><tr id="gr_svn524_1453"

><td id="1453"><a href="#1453">1453</a></td></tr
><tr id="gr_svn524_1454"

><td id="1454"><a href="#1454">1454</a></td></tr
><tr id="gr_svn524_1455"

><td id="1455"><a href="#1455">1455</a></td></tr
><tr id="gr_svn524_1456"

><td id="1456"><a href="#1456">1456</a></td></tr
><tr id="gr_svn524_1457"

><td id="1457"><a href="#1457">1457</a></td></tr
><tr id="gr_svn524_1458"

><td id="1458"><a href="#1458">1458</a></td></tr
><tr id="gr_svn524_1459"

><td id="1459"><a href="#1459">1459</a></td></tr
><tr id="gr_svn524_1460"

><td id="1460"><a href="#1460">1460</a></td></tr
><tr id="gr_svn524_1461"

><td id="1461"><a href="#1461">1461</a></td></tr
><tr id="gr_svn524_1462"

><td id="1462"><a href="#1462">1462</a></td></tr
><tr id="gr_svn524_1463"

><td id="1463"><a href="#1463">1463</a></td></tr
><tr id="gr_svn524_1464"

><td id="1464"><a href="#1464">1464</a></td></tr
><tr id="gr_svn524_1465"

><td id="1465"><a href="#1465">1465</a></td></tr
><tr id="gr_svn524_1466"

><td id="1466"><a href="#1466">1466</a></td></tr
><tr id="gr_svn524_1467"

><td id="1467"><a href="#1467">1467</a></td></tr
><tr id="gr_svn524_1468"

><td id="1468"><a href="#1468">1468</a></td></tr
><tr id="gr_svn524_1469"

><td id="1469"><a href="#1469">1469</a></td></tr
><tr id="gr_svn524_1470"

><td id="1470"><a href="#1470">1470</a></td></tr
><tr id="gr_svn524_1471"

><td id="1471"><a href="#1471">1471</a></td></tr
><tr id="gr_svn524_1472"

><td id="1472"><a href="#1472">1472</a></td></tr
><tr id="gr_svn524_1473"

><td id="1473"><a href="#1473">1473</a></td></tr
><tr id="gr_svn524_1474"

><td id="1474"><a href="#1474">1474</a></td></tr
><tr id="gr_svn524_1475"

><td id="1475"><a href="#1475">1475</a></td></tr
><tr id="gr_svn524_1476"

><td id="1476"><a href="#1476">1476</a></td></tr
><tr id="gr_svn524_1477"

><td id="1477"><a href="#1477">1477</a></td></tr
><tr id="gr_svn524_1478"

><td id="1478"><a href="#1478">1478</a></td></tr
><tr id="gr_svn524_1479"

><td id="1479"><a href="#1479">1479</a></td></tr
><tr id="gr_svn524_1480"

><td id="1480"><a href="#1480">1480</a></td></tr
><tr id="gr_svn524_1481"

><td id="1481"><a href="#1481">1481</a></td></tr
><tr id="gr_svn524_1482"

><td id="1482"><a href="#1482">1482</a></td></tr
><tr id="gr_svn524_1483"

><td id="1483"><a href="#1483">1483</a></td></tr
><tr id="gr_svn524_1484"

><td id="1484"><a href="#1484">1484</a></td></tr
><tr id="gr_svn524_1485"

><td id="1485"><a href="#1485">1485</a></td></tr
><tr id="gr_svn524_1486"

><td id="1486"><a href="#1486">1486</a></td></tr
><tr id="gr_svn524_1487"

><td id="1487"><a href="#1487">1487</a></td></tr
><tr id="gr_svn524_1488"

><td id="1488"><a href="#1488">1488</a></td></tr
><tr id="gr_svn524_1489"

><td id="1489"><a href="#1489">1489</a></td></tr
><tr id="gr_svn524_1490"

><td id="1490"><a href="#1490">1490</a></td></tr
><tr id="gr_svn524_1491"

><td id="1491"><a href="#1491">1491</a></td></tr
><tr id="gr_svn524_1492"

><td id="1492"><a href="#1492">1492</a></td></tr
><tr id="gr_svn524_1493"

><td id="1493"><a href="#1493">1493</a></td></tr
><tr id="gr_svn524_1494"

><td id="1494"><a href="#1494">1494</a></td></tr
><tr id="gr_svn524_1495"

><td id="1495"><a href="#1495">1495</a></td></tr
><tr id="gr_svn524_1496"

><td id="1496"><a href="#1496">1496</a></td></tr
><tr id="gr_svn524_1497"

><td id="1497"><a href="#1497">1497</a></td></tr
><tr id="gr_svn524_1498"

><td id="1498"><a href="#1498">1498</a></td></tr
><tr id="gr_svn524_1499"

><td id="1499"><a href="#1499">1499</a></td></tr
><tr id="gr_svn524_1500"

><td id="1500"><a href="#1500">1500</a></td></tr
><tr id="gr_svn524_1501"

><td id="1501"><a href="#1501">1501</a></td></tr
><tr id="gr_svn524_1502"

><td id="1502"><a href="#1502">1502</a></td></tr
><tr id="gr_svn524_1503"

><td id="1503"><a href="#1503">1503</a></td></tr
><tr id="gr_svn524_1504"

><td id="1504"><a href="#1504">1504</a></td></tr
><tr id="gr_svn524_1505"

><td id="1505"><a href="#1505">1505</a></td></tr
><tr id="gr_svn524_1506"

><td id="1506"><a href="#1506">1506</a></td></tr
><tr id="gr_svn524_1507"

><td id="1507"><a href="#1507">1507</a></td></tr
><tr id="gr_svn524_1508"

><td id="1508"><a href="#1508">1508</a></td></tr
><tr id="gr_svn524_1509"

><td id="1509"><a href="#1509">1509</a></td></tr
><tr id="gr_svn524_1510"

><td id="1510"><a href="#1510">1510</a></td></tr
><tr id="gr_svn524_1511"

><td id="1511"><a href="#1511">1511</a></td></tr
><tr id="gr_svn524_1512"

><td id="1512"><a href="#1512">1512</a></td></tr
><tr id="gr_svn524_1513"

><td id="1513"><a href="#1513">1513</a></td></tr
><tr id="gr_svn524_1514"

><td id="1514"><a href="#1514">1514</a></td></tr
><tr id="gr_svn524_1515"

><td id="1515"><a href="#1515">1515</a></td></tr
><tr id="gr_svn524_1516"

><td id="1516"><a href="#1516">1516</a></td></tr
><tr id="gr_svn524_1517"

><td id="1517"><a href="#1517">1517</a></td></tr
><tr id="gr_svn524_1518"

><td id="1518"><a href="#1518">1518</a></td></tr
><tr id="gr_svn524_1519"

><td id="1519"><a href="#1519">1519</a></td></tr
><tr id="gr_svn524_1520"

><td id="1520"><a href="#1520">1520</a></td></tr
><tr id="gr_svn524_1521"

><td id="1521"><a href="#1521">1521</a></td></tr
><tr id="gr_svn524_1522"

><td id="1522"><a href="#1522">1522</a></td></tr
><tr id="gr_svn524_1523"

><td id="1523"><a href="#1523">1523</a></td></tr
><tr id="gr_svn524_1524"

><td id="1524"><a href="#1524">1524</a></td></tr
><tr id="gr_svn524_1525"

><td id="1525"><a href="#1525">1525</a></td></tr
><tr id="gr_svn524_1526"

><td id="1526"><a href="#1526">1526</a></td></tr
><tr id="gr_svn524_1527"

><td id="1527"><a href="#1527">1527</a></td></tr
><tr id="gr_svn524_1528"

><td id="1528"><a href="#1528">1528</a></td></tr
><tr id="gr_svn524_1529"

><td id="1529"><a href="#1529">1529</a></td></tr
><tr id="gr_svn524_1530"

><td id="1530"><a href="#1530">1530</a></td></tr
><tr id="gr_svn524_1531"

><td id="1531"><a href="#1531">1531</a></td></tr
><tr id="gr_svn524_1532"

><td id="1532"><a href="#1532">1532</a></td></tr
><tr id="gr_svn524_1533"

><td id="1533"><a href="#1533">1533</a></td></tr
><tr id="gr_svn524_1534"

><td id="1534"><a href="#1534">1534</a></td></tr
><tr id="gr_svn524_1535"

><td id="1535"><a href="#1535">1535</a></td></tr
><tr id="gr_svn524_1536"

><td id="1536"><a href="#1536">1536</a></td></tr
><tr id="gr_svn524_1537"

><td id="1537"><a href="#1537">1537</a></td></tr
><tr id="gr_svn524_1538"

><td id="1538"><a href="#1538">1538</a></td></tr
><tr id="gr_svn524_1539"

><td id="1539"><a href="#1539">1539</a></td></tr
><tr id="gr_svn524_1540"

><td id="1540"><a href="#1540">1540</a></td></tr
><tr id="gr_svn524_1541"

><td id="1541"><a href="#1541">1541</a></td></tr
><tr id="gr_svn524_1542"

><td id="1542"><a href="#1542">1542</a></td></tr
><tr id="gr_svn524_1543"

><td id="1543"><a href="#1543">1543</a></td></tr
><tr id="gr_svn524_1544"

><td id="1544"><a href="#1544">1544</a></td></tr
><tr id="gr_svn524_1545"

><td id="1545"><a href="#1545">1545</a></td></tr
><tr id="gr_svn524_1546"

><td id="1546"><a href="#1546">1546</a></td></tr
><tr id="gr_svn524_1547"

><td id="1547"><a href="#1547">1547</a></td></tr
><tr id="gr_svn524_1548"

><td id="1548"><a href="#1548">1548</a></td></tr
><tr id="gr_svn524_1549"

><td id="1549"><a href="#1549">1549</a></td></tr
><tr id="gr_svn524_1550"

><td id="1550"><a href="#1550">1550</a></td></tr
><tr id="gr_svn524_1551"

><td id="1551"><a href="#1551">1551</a></td></tr
><tr id="gr_svn524_1552"

><td id="1552"><a href="#1552">1552</a></td></tr
><tr id="gr_svn524_1553"

><td id="1553"><a href="#1553">1553</a></td></tr
><tr id="gr_svn524_1554"

><td id="1554"><a href="#1554">1554</a></td></tr
><tr id="gr_svn524_1555"

><td id="1555"><a href="#1555">1555</a></td></tr
><tr id="gr_svn524_1556"

><td id="1556"><a href="#1556">1556</a></td></tr
><tr id="gr_svn524_1557"

><td id="1557"><a href="#1557">1557</a></td></tr
><tr id="gr_svn524_1558"

><td id="1558"><a href="#1558">1558</a></td></tr
><tr id="gr_svn524_1559"

><td id="1559"><a href="#1559">1559</a></td></tr
><tr id="gr_svn524_1560"

><td id="1560"><a href="#1560">1560</a></td></tr
><tr id="gr_svn524_1561"

><td id="1561"><a href="#1561">1561</a></td></tr
><tr id="gr_svn524_1562"

><td id="1562"><a href="#1562">1562</a></td></tr
><tr id="gr_svn524_1563"

><td id="1563"><a href="#1563">1563</a></td></tr
><tr id="gr_svn524_1564"

><td id="1564"><a href="#1564">1564</a></td></tr
><tr id="gr_svn524_1565"

><td id="1565"><a href="#1565">1565</a></td></tr
><tr id="gr_svn524_1566"

><td id="1566"><a href="#1566">1566</a></td></tr
><tr id="gr_svn524_1567"

><td id="1567"><a href="#1567">1567</a></td></tr
><tr id="gr_svn524_1568"

><td id="1568"><a href="#1568">1568</a></td></tr
><tr id="gr_svn524_1569"

><td id="1569"><a href="#1569">1569</a></td></tr
><tr id="gr_svn524_1570"

><td id="1570"><a href="#1570">1570</a></td></tr
><tr id="gr_svn524_1571"

><td id="1571"><a href="#1571">1571</a></td></tr
><tr id="gr_svn524_1572"

><td id="1572"><a href="#1572">1572</a></td></tr
><tr id="gr_svn524_1573"

><td id="1573"><a href="#1573">1573</a></td></tr
><tr id="gr_svn524_1574"

><td id="1574"><a href="#1574">1574</a></td></tr
><tr id="gr_svn524_1575"

><td id="1575"><a href="#1575">1575</a></td></tr
><tr id="gr_svn524_1576"

><td id="1576"><a href="#1576">1576</a></td></tr
><tr id="gr_svn524_1577"

><td id="1577"><a href="#1577">1577</a></td></tr
><tr id="gr_svn524_1578"

><td id="1578"><a href="#1578">1578</a></td></tr
><tr id="gr_svn524_1579"

><td id="1579"><a href="#1579">1579</a></td></tr
><tr id="gr_svn524_1580"

><td id="1580"><a href="#1580">1580</a></td></tr
><tr id="gr_svn524_1581"

><td id="1581"><a href="#1581">1581</a></td></tr
><tr id="gr_svn524_1582"

><td id="1582"><a href="#1582">1582</a></td></tr
><tr id="gr_svn524_1583"

><td id="1583"><a href="#1583">1583</a></td></tr
><tr id="gr_svn524_1584"

><td id="1584"><a href="#1584">1584</a></td></tr
><tr id="gr_svn524_1585"

><td id="1585"><a href="#1585">1585</a></td></tr
><tr id="gr_svn524_1586"

><td id="1586"><a href="#1586">1586</a></td></tr
><tr id="gr_svn524_1587"

><td id="1587"><a href="#1587">1587</a></td></tr
><tr id="gr_svn524_1588"

><td id="1588"><a href="#1588">1588</a></td></tr
><tr id="gr_svn524_1589"

><td id="1589"><a href="#1589">1589</a></td></tr
><tr id="gr_svn524_1590"

><td id="1590"><a href="#1590">1590</a></td></tr
><tr id="gr_svn524_1591"

><td id="1591"><a href="#1591">1591</a></td></tr
><tr id="gr_svn524_1592"

><td id="1592"><a href="#1592">1592</a></td></tr
><tr id="gr_svn524_1593"

><td id="1593"><a href="#1593">1593</a></td></tr
><tr id="gr_svn524_1594"

><td id="1594"><a href="#1594">1594</a></td></tr
><tr id="gr_svn524_1595"

><td id="1595"><a href="#1595">1595</a></td></tr
><tr id="gr_svn524_1596"

><td id="1596"><a href="#1596">1596</a></td></tr
><tr id="gr_svn524_1597"

><td id="1597"><a href="#1597">1597</a></td></tr
><tr id="gr_svn524_1598"

><td id="1598"><a href="#1598">1598</a></td></tr
><tr id="gr_svn524_1599"

><td id="1599"><a href="#1599">1599</a></td></tr
><tr id="gr_svn524_1600"

><td id="1600"><a href="#1600">1600</a></td></tr
><tr id="gr_svn524_1601"

><td id="1601"><a href="#1601">1601</a></td></tr
><tr id="gr_svn524_1602"

><td id="1602"><a href="#1602">1602</a></td></tr
><tr id="gr_svn524_1603"

><td id="1603"><a href="#1603">1603</a></td></tr
><tr id="gr_svn524_1604"

><td id="1604"><a href="#1604">1604</a></td></tr
><tr id="gr_svn524_1605"

><td id="1605"><a href="#1605">1605</a></td></tr
><tr id="gr_svn524_1606"

><td id="1606"><a href="#1606">1606</a></td></tr
><tr id="gr_svn524_1607"

><td id="1607"><a href="#1607">1607</a></td></tr
><tr id="gr_svn524_1608"

><td id="1608"><a href="#1608">1608</a></td></tr
><tr id="gr_svn524_1609"

><td id="1609"><a href="#1609">1609</a></td></tr
><tr id="gr_svn524_1610"

><td id="1610"><a href="#1610">1610</a></td></tr
><tr id="gr_svn524_1611"

><td id="1611"><a href="#1611">1611</a></td></tr
><tr id="gr_svn524_1612"

><td id="1612"><a href="#1612">1612</a></td></tr
><tr id="gr_svn524_1613"

><td id="1613"><a href="#1613">1613</a></td></tr
><tr id="gr_svn524_1614"

><td id="1614"><a href="#1614">1614</a></td></tr
><tr id="gr_svn524_1615"

><td id="1615"><a href="#1615">1615</a></td></tr
><tr id="gr_svn524_1616"

><td id="1616"><a href="#1616">1616</a></td></tr
><tr id="gr_svn524_1617"

><td id="1617"><a href="#1617">1617</a></td></tr
><tr id="gr_svn524_1618"

><td id="1618"><a href="#1618">1618</a></td></tr
><tr id="gr_svn524_1619"

><td id="1619"><a href="#1619">1619</a></td></tr
><tr id="gr_svn524_1620"

><td id="1620"><a href="#1620">1620</a></td></tr
><tr id="gr_svn524_1621"

><td id="1621"><a href="#1621">1621</a></td></tr
><tr id="gr_svn524_1622"

><td id="1622"><a href="#1622">1622</a></td></tr
><tr id="gr_svn524_1623"

><td id="1623"><a href="#1623">1623</a></td></tr
><tr id="gr_svn524_1624"

><td id="1624"><a href="#1624">1624</a></td></tr
><tr id="gr_svn524_1625"

><td id="1625"><a href="#1625">1625</a></td></tr
><tr id="gr_svn524_1626"

><td id="1626"><a href="#1626">1626</a></td></tr
><tr id="gr_svn524_1627"

><td id="1627"><a href="#1627">1627</a></td></tr
><tr id="gr_svn524_1628"

><td id="1628"><a href="#1628">1628</a></td></tr
><tr id="gr_svn524_1629"

><td id="1629"><a href="#1629">1629</a></td></tr
><tr id="gr_svn524_1630"

><td id="1630"><a href="#1630">1630</a></td></tr
><tr id="gr_svn524_1631"

><td id="1631"><a href="#1631">1631</a></td></tr
><tr id="gr_svn524_1632"

><td id="1632"><a href="#1632">1632</a></td></tr
><tr id="gr_svn524_1633"

><td id="1633"><a href="#1633">1633</a></td></tr
><tr id="gr_svn524_1634"

><td id="1634"><a href="#1634">1634</a></td></tr
><tr id="gr_svn524_1635"

><td id="1635"><a href="#1635">1635</a></td></tr
><tr id="gr_svn524_1636"

><td id="1636"><a href="#1636">1636</a></td></tr
><tr id="gr_svn524_1637"

><td id="1637"><a href="#1637">1637</a></td></tr
><tr id="gr_svn524_1638"

><td id="1638"><a href="#1638">1638</a></td></tr
><tr id="gr_svn524_1639"

><td id="1639"><a href="#1639">1639</a></td></tr
><tr id="gr_svn524_1640"

><td id="1640"><a href="#1640">1640</a></td></tr
><tr id="gr_svn524_1641"

><td id="1641"><a href="#1641">1641</a></td></tr
><tr id="gr_svn524_1642"

><td id="1642"><a href="#1642">1642</a></td></tr
><tr id="gr_svn524_1643"

><td id="1643"><a href="#1643">1643</a></td></tr
><tr id="gr_svn524_1644"

><td id="1644"><a href="#1644">1644</a></td></tr
><tr id="gr_svn524_1645"

><td id="1645"><a href="#1645">1645</a></td></tr
><tr id="gr_svn524_1646"

><td id="1646"><a href="#1646">1646</a></td></tr
><tr id="gr_svn524_1647"

><td id="1647"><a href="#1647">1647</a></td></tr
><tr id="gr_svn524_1648"

><td id="1648"><a href="#1648">1648</a></td></tr
><tr id="gr_svn524_1649"

><td id="1649"><a href="#1649">1649</a></td></tr
><tr id="gr_svn524_1650"

><td id="1650"><a href="#1650">1650</a></td></tr
><tr id="gr_svn524_1651"

><td id="1651"><a href="#1651">1651</a></td></tr
><tr id="gr_svn524_1652"

><td id="1652"><a href="#1652">1652</a></td></tr
><tr id="gr_svn524_1653"

><td id="1653"><a href="#1653">1653</a></td></tr
><tr id="gr_svn524_1654"

><td id="1654"><a href="#1654">1654</a></td></tr
><tr id="gr_svn524_1655"

><td id="1655"><a href="#1655">1655</a></td></tr
><tr id="gr_svn524_1656"

><td id="1656"><a href="#1656">1656</a></td></tr
><tr id="gr_svn524_1657"

><td id="1657"><a href="#1657">1657</a></td></tr
><tr id="gr_svn524_1658"

><td id="1658"><a href="#1658">1658</a></td></tr
><tr id="gr_svn524_1659"

><td id="1659"><a href="#1659">1659</a></td></tr
><tr id="gr_svn524_1660"

><td id="1660"><a href="#1660">1660</a></td></tr
><tr id="gr_svn524_1661"

><td id="1661"><a href="#1661">1661</a></td></tr
><tr id="gr_svn524_1662"

><td id="1662"><a href="#1662">1662</a></td></tr
><tr id="gr_svn524_1663"

><td id="1663"><a href="#1663">1663</a></td></tr
><tr id="gr_svn524_1664"

><td id="1664"><a href="#1664">1664</a></td></tr
><tr id="gr_svn524_1665"

><td id="1665"><a href="#1665">1665</a></td></tr
><tr id="gr_svn524_1666"

><td id="1666"><a href="#1666">1666</a></td></tr
><tr id="gr_svn524_1667"

><td id="1667"><a href="#1667">1667</a></td></tr
><tr id="gr_svn524_1668"

><td id="1668"><a href="#1668">1668</a></td></tr
><tr id="gr_svn524_1669"

><td id="1669"><a href="#1669">1669</a></td></tr
><tr id="gr_svn524_1670"

><td id="1670"><a href="#1670">1670</a></td></tr
><tr id="gr_svn524_1671"

><td id="1671"><a href="#1671">1671</a></td></tr
><tr id="gr_svn524_1672"

><td id="1672"><a href="#1672">1672</a></td></tr
><tr id="gr_svn524_1673"

><td id="1673"><a href="#1673">1673</a></td></tr
><tr id="gr_svn524_1674"

><td id="1674"><a href="#1674">1674</a></td></tr
><tr id="gr_svn524_1675"

><td id="1675"><a href="#1675">1675</a></td></tr
><tr id="gr_svn524_1676"

><td id="1676"><a href="#1676">1676</a></td></tr
><tr id="gr_svn524_1677"

><td id="1677"><a href="#1677">1677</a></td></tr
><tr id="gr_svn524_1678"

><td id="1678"><a href="#1678">1678</a></td></tr
><tr id="gr_svn524_1679"

><td id="1679"><a href="#1679">1679</a></td></tr
><tr id="gr_svn524_1680"

><td id="1680"><a href="#1680">1680</a></td></tr
><tr id="gr_svn524_1681"

><td id="1681"><a href="#1681">1681</a></td></tr
><tr id="gr_svn524_1682"

><td id="1682"><a href="#1682">1682</a></td></tr
><tr id="gr_svn524_1683"

><td id="1683"><a href="#1683">1683</a></td></tr
><tr id="gr_svn524_1684"

><td id="1684"><a href="#1684">1684</a></td></tr
><tr id="gr_svn524_1685"

><td id="1685"><a href="#1685">1685</a></td></tr
><tr id="gr_svn524_1686"

><td id="1686"><a href="#1686">1686</a></td></tr
><tr id="gr_svn524_1687"

><td id="1687"><a href="#1687">1687</a></td></tr
><tr id="gr_svn524_1688"

><td id="1688"><a href="#1688">1688</a></td></tr
><tr id="gr_svn524_1689"

><td id="1689"><a href="#1689">1689</a></td></tr
><tr id="gr_svn524_1690"

><td id="1690"><a href="#1690">1690</a></td></tr
><tr id="gr_svn524_1691"

><td id="1691"><a href="#1691">1691</a></td></tr
><tr id="gr_svn524_1692"

><td id="1692"><a href="#1692">1692</a></td></tr
><tr id="gr_svn524_1693"

><td id="1693"><a href="#1693">1693</a></td></tr
><tr id="gr_svn524_1694"

><td id="1694"><a href="#1694">1694</a></td></tr
><tr id="gr_svn524_1695"

><td id="1695"><a href="#1695">1695</a></td></tr
><tr id="gr_svn524_1696"

><td id="1696"><a href="#1696">1696</a></td></tr
><tr id="gr_svn524_1697"

><td id="1697"><a href="#1697">1697</a></td></tr
><tr id="gr_svn524_1698"

><td id="1698"><a href="#1698">1698</a></td></tr
><tr id="gr_svn524_1699"

><td id="1699"><a href="#1699">1699</a></td></tr
><tr id="gr_svn524_1700"

><td id="1700"><a href="#1700">1700</a></td></tr
><tr id="gr_svn524_1701"

><td id="1701"><a href="#1701">1701</a></td></tr
><tr id="gr_svn524_1702"

><td id="1702"><a href="#1702">1702</a></td></tr
><tr id="gr_svn524_1703"

><td id="1703"><a href="#1703">1703</a></td></tr
><tr id="gr_svn524_1704"

><td id="1704"><a href="#1704">1704</a></td></tr
><tr id="gr_svn524_1705"

><td id="1705"><a href="#1705">1705</a></td></tr
><tr id="gr_svn524_1706"

><td id="1706"><a href="#1706">1706</a></td></tr
><tr id="gr_svn524_1707"

><td id="1707"><a href="#1707">1707</a></td></tr
><tr id="gr_svn524_1708"

><td id="1708"><a href="#1708">1708</a></td></tr
><tr id="gr_svn524_1709"

><td id="1709"><a href="#1709">1709</a></td></tr
><tr id="gr_svn524_1710"

><td id="1710"><a href="#1710">1710</a></td></tr
><tr id="gr_svn524_1711"

><td id="1711"><a href="#1711">1711</a></td></tr
><tr id="gr_svn524_1712"

><td id="1712"><a href="#1712">1712</a></td></tr
><tr id="gr_svn524_1713"

><td id="1713"><a href="#1713">1713</a></td></tr
><tr id="gr_svn524_1714"

><td id="1714"><a href="#1714">1714</a></td></tr
><tr id="gr_svn524_1715"

><td id="1715"><a href="#1715">1715</a></td></tr
><tr id="gr_svn524_1716"

><td id="1716"><a href="#1716">1716</a></td></tr
><tr id="gr_svn524_1717"

><td id="1717"><a href="#1717">1717</a></td></tr
><tr id="gr_svn524_1718"

><td id="1718"><a href="#1718">1718</a></td></tr
><tr id="gr_svn524_1719"

><td id="1719"><a href="#1719">1719</a></td></tr
><tr id="gr_svn524_1720"

><td id="1720"><a href="#1720">1720</a></td></tr
><tr id="gr_svn524_1721"

><td id="1721"><a href="#1721">1721</a></td></tr
><tr id="gr_svn524_1722"

><td id="1722"><a href="#1722">1722</a></td></tr
><tr id="gr_svn524_1723"

><td id="1723"><a href="#1723">1723</a></td></tr
><tr id="gr_svn524_1724"

><td id="1724"><a href="#1724">1724</a></td></tr
><tr id="gr_svn524_1725"

><td id="1725"><a href="#1725">1725</a></td></tr
><tr id="gr_svn524_1726"

><td id="1726"><a href="#1726">1726</a></td></tr
><tr id="gr_svn524_1727"

><td id="1727"><a href="#1727">1727</a></td></tr
><tr id="gr_svn524_1728"

><td id="1728"><a href="#1728">1728</a></td></tr
><tr id="gr_svn524_1729"

><td id="1729"><a href="#1729">1729</a></td></tr
><tr id="gr_svn524_1730"

><td id="1730"><a href="#1730">1730</a></td></tr
><tr id="gr_svn524_1731"

><td id="1731"><a href="#1731">1731</a></td></tr
><tr id="gr_svn524_1732"

><td id="1732"><a href="#1732">1732</a></td></tr
><tr id="gr_svn524_1733"

><td id="1733"><a href="#1733">1733</a></td></tr
><tr id="gr_svn524_1734"

><td id="1734"><a href="#1734">1734</a></td></tr
><tr id="gr_svn524_1735"

><td id="1735"><a href="#1735">1735</a></td></tr
><tr id="gr_svn524_1736"

><td id="1736"><a href="#1736">1736</a></td></tr
><tr id="gr_svn524_1737"

><td id="1737"><a href="#1737">1737</a></td></tr
><tr id="gr_svn524_1738"

><td id="1738"><a href="#1738">1738</a></td></tr
><tr id="gr_svn524_1739"

><td id="1739"><a href="#1739">1739</a></td></tr
><tr id="gr_svn524_1740"

><td id="1740"><a href="#1740">1740</a></td></tr
><tr id="gr_svn524_1741"

><td id="1741"><a href="#1741">1741</a></td></tr
><tr id="gr_svn524_1742"

><td id="1742"><a href="#1742">1742</a></td></tr
><tr id="gr_svn524_1743"

><td id="1743"><a href="#1743">1743</a></td></tr
><tr id="gr_svn524_1744"

><td id="1744"><a href="#1744">1744</a></td></tr
><tr id="gr_svn524_1745"

><td id="1745"><a href="#1745">1745</a></td></tr
><tr id="gr_svn524_1746"

><td id="1746"><a href="#1746">1746</a></td></tr
><tr id="gr_svn524_1747"

><td id="1747"><a href="#1747">1747</a></td></tr
><tr id="gr_svn524_1748"

><td id="1748"><a href="#1748">1748</a></td></tr
><tr id="gr_svn524_1749"

><td id="1749"><a href="#1749">1749</a></td></tr
><tr id="gr_svn524_1750"

><td id="1750"><a href="#1750">1750</a></td></tr
><tr id="gr_svn524_1751"

><td id="1751"><a href="#1751">1751</a></td></tr
><tr id="gr_svn524_1752"

><td id="1752"><a href="#1752">1752</a></td></tr
><tr id="gr_svn524_1753"

><td id="1753"><a href="#1753">1753</a></td></tr
><tr id="gr_svn524_1754"

><td id="1754"><a href="#1754">1754</a></td></tr
><tr id="gr_svn524_1755"

><td id="1755"><a href="#1755">1755</a></td></tr
><tr id="gr_svn524_1756"

><td id="1756"><a href="#1756">1756</a></td></tr
><tr id="gr_svn524_1757"

><td id="1757"><a href="#1757">1757</a></td></tr
><tr id="gr_svn524_1758"

><td id="1758"><a href="#1758">1758</a></td></tr
><tr id="gr_svn524_1759"

><td id="1759"><a href="#1759">1759</a></td></tr
><tr id="gr_svn524_1760"

><td id="1760"><a href="#1760">1760</a></td></tr
><tr id="gr_svn524_1761"

><td id="1761"><a href="#1761">1761</a></td></tr
><tr id="gr_svn524_1762"

><td id="1762"><a href="#1762">1762</a></td></tr
><tr id="gr_svn524_1763"

><td id="1763"><a href="#1763">1763</a></td></tr
><tr id="gr_svn524_1764"

><td id="1764"><a href="#1764">1764</a></td></tr
><tr id="gr_svn524_1765"

><td id="1765"><a href="#1765">1765</a></td></tr
><tr id="gr_svn524_1766"

><td id="1766"><a href="#1766">1766</a></td></tr
><tr id="gr_svn524_1767"

><td id="1767"><a href="#1767">1767</a></td></tr
><tr id="gr_svn524_1768"

><td id="1768"><a href="#1768">1768</a></td></tr
><tr id="gr_svn524_1769"

><td id="1769"><a href="#1769">1769</a></td></tr
><tr id="gr_svn524_1770"

><td id="1770"><a href="#1770">1770</a></td></tr
><tr id="gr_svn524_1771"

><td id="1771"><a href="#1771">1771</a></td></tr
><tr id="gr_svn524_1772"

><td id="1772"><a href="#1772">1772</a></td></tr
><tr id="gr_svn524_1773"

><td id="1773"><a href="#1773">1773</a></td></tr
><tr id="gr_svn524_1774"

><td id="1774"><a href="#1774">1774</a></td></tr
><tr id="gr_svn524_1775"

><td id="1775"><a href="#1775">1775</a></td></tr
><tr id="gr_svn524_1776"

><td id="1776"><a href="#1776">1776</a></td></tr
><tr id="gr_svn524_1777"

><td id="1777"><a href="#1777">1777</a></td></tr
><tr id="gr_svn524_1778"

><td id="1778"><a href="#1778">1778</a></td></tr
><tr id="gr_svn524_1779"

><td id="1779"><a href="#1779">1779</a></td></tr
><tr id="gr_svn524_1780"

><td id="1780"><a href="#1780">1780</a></td></tr
><tr id="gr_svn524_1781"

><td id="1781"><a href="#1781">1781</a></td></tr
><tr id="gr_svn524_1782"

><td id="1782"><a href="#1782">1782</a></td></tr
><tr id="gr_svn524_1783"

><td id="1783"><a href="#1783">1783</a></td></tr
><tr id="gr_svn524_1784"

><td id="1784"><a href="#1784">1784</a></td></tr
><tr id="gr_svn524_1785"

><td id="1785"><a href="#1785">1785</a></td></tr
><tr id="gr_svn524_1786"

><td id="1786"><a href="#1786">1786</a></td></tr
><tr id="gr_svn524_1787"

><td id="1787"><a href="#1787">1787</a></td></tr
><tr id="gr_svn524_1788"

><td id="1788"><a href="#1788">1788</a></td></tr
><tr id="gr_svn524_1789"

><td id="1789"><a href="#1789">1789</a></td></tr
><tr id="gr_svn524_1790"

><td id="1790"><a href="#1790">1790</a></td></tr
><tr id="gr_svn524_1791"

><td id="1791"><a href="#1791">1791</a></td></tr
><tr id="gr_svn524_1792"

><td id="1792"><a href="#1792">1792</a></td></tr
><tr id="gr_svn524_1793"

><td id="1793"><a href="#1793">1793</a></td></tr
><tr id="gr_svn524_1794"

><td id="1794"><a href="#1794">1794</a></td></tr
><tr id="gr_svn524_1795"

><td id="1795"><a href="#1795">1795</a></td></tr
><tr id="gr_svn524_1796"

><td id="1796"><a href="#1796">1796</a></td></tr
><tr id="gr_svn524_1797"

><td id="1797"><a href="#1797">1797</a></td></tr
><tr id="gr_svn524_1798"

><td id="1798"><a href="#1798">1798</a></td></tr
><tr id="gr_svn524_1799"

><td id="1799"><a href="#1799">1799</a></td></tr
><tr id="gr_svn524_1800"

><td id="1800"><a href="#1800">1800</a></td></tr
><tr id="gr_svn524_1801"

><td id="1801"><a href="#1801">1801</a></td></tr
><tr id="gr_svn524_1802"

><td id="1802"><a href="#1802">1802</a></td></tr
><tr id="gr_svn524_1803"

><td id="1803"><a href="#1803">1803</a></td></tr
><tr id="gr_svn524_1804"

><td id="1804"><a href="#1804">1804</a></td></tr
><tr id="gr_svn524_1805"

><td id="1805"><a href="#1805">1805</a></td></tr
><tr id="gr_svn524_1806"

><td id="1806"><a href="#1806">1806</a></td></tr
><tr id="gr_svn524_1807"

><td id="1807"><a href="#1807">1807</a></td></tr
><tr id="gr_svn524_1808"

><td id="1808"><a href="#1808">1808</a></td></tr
><tr id="gr_svn524_1809"

><td id="1809"><a href="#1809">1809</a></td></tr
><tr id="gr_svn524_1810"

><td id="1810"><a href="#1810">1810</a></td></tr
><tr id="gr_svn524_1811"

><td id="1811"><a href="#1811">1811</a></td></tr
><tr id="gr_svn524_1812"

><td id="1812"><a href="#1812">1812</a></td></tr
><tr id="gr_svn524_1813"

><td id="1813"><a href="#1813">1813</a></td></tr
><tr id="gr_svn524_1814"

><td id="1814"><a href="#1814">1814</a></td></tr
><tr id="gr_svn524_1815"

><td id="1815"><a href="#1815">1815</a></td></tr
><tr id="gr_svn524_1816"

><td id="1816"><a href="#1816">1816</a></td></tr
><tr id="gr_svn524_1817"

><td id="1817"><a href="#1817">1817</a></td></tr
><tr id="gr_svn524_1818"

><td id="1818"><a href="#1818">1818</a></td></tr
><tr id="gr_svn524_1819"

><td id="1819"><a href="#1819">1819</a></td></tr
><tr id="gr_svn524_1820"

><td id="1820"><a href="#1820">1820</a></td></tr
><tr id="gr_svn524_1821"

><td id="1821"><a href="#1821">1821</a></td></tr
><tr id="gr_svn524_1822"

><td id="1822"><a href="#1822">1822</a></td></tr
><tr id="gr_svn524_1823"

><td id="1823"><a href="#1823">1823</a></td></tr
><tr id="gr_svn524_1824"

><td id="1824"><a href="#1824">1824</a></td></tr
><tr id="gr_svn524_1825"

><td id="1825"><a href="#1825">1825</a></td></tr
><tr id="gr_svn524_1826"

><td id="1826"><a href="#1826">1826</a></td></tr
><tr id="gr_svn524_1827"

><td id="1827"><a href="#1827">1827</a></td></tr
><tr id="gr_svn524_1828"

><td id="1828"><a href="#1828">1828</a></td></tr
><tr id="gr_svn524_1829"

><td id="1829"><a href="#1829">1829</a></td></tr
><tr id="gr_svn524_1830"

><td id="1830"><a href="#1830">1830</a></td></tr
><tr id="gr_svn524_1831"

><td id="1831"><a href="#1831">1831</a></td></tr
><tr id="gr_svn524_1832"

><td id="1832"><a href="#1832">1832</a></td></tr
><tr id="gr_svn524_1833"

><td id="1833"><a href="#1833">1833</a></td></tr
><tr id="gr_svn524_1834"

><td id="1834"><a href="#1834">1834</a></td></tr
><tr id="gr_svn524_1835"

><td id="1835"><a href="#1835">1835</a></td></tr
><tr id="gr_svn524_1836"

><td id="1836"><a href="#1836">1836</a></td></tr
><tr id="gr_svn524_1837"

><td id="1837"><a href="#1837">1837</a></td></tr
><tr id="gr_svn524_1838"

><td id="1838"><a href="#1838">1838</a></td></tr
><tr id="gr_svn524_1839"

><td id="1839"><a href="#1839">1839</a></td></tr
><tr id="gr_svn524_1840"

><td id="1840"><a href="#1840">1840</a></td></tr
><tr id="gr_svn524_1841"

><td id="1841"><a href="#1841">1841</a></td></tr
><tr id="gr_svn524_1842"

><td id="1842"><a href="#1842">1842</a></td></tr
><tr id="gr_svn524_1843"

><td id="1843"><a href="#1843">1843</a></td></tr
><tr id="gr_svn524_1844"

><td id="1844"><a href="#1844">1844</a></td></tr
><tr id="gr_svn524_1845"

><td id="1845"><a href="#1845">1845</a></td></tr
><tr id="gr_svn524_1846"

><td id="1846"><a href="#1846">1846</a></td></tr
><tr id="gr_svn524_1847"

><td id="1847"><a href="#1847">1847</a></td></tr
><tr id="gr_svn524_1848"

><td id="1848"><a href="#1848">1848</a></td></tr
><tr id="gr_svn524_1849"

><td id="1849"><a href="#1849">1849</a></td></tr
><tr id="gr_svn524_1850"

><td id="1850"><a href="#1850">1850</a></td></tr
><tr id="gr_svn524_1851"

><td id="1851"><a href="#1851">1851</a></td></tr
><tr id="gr_svn524_1852"

><td id="1852"><a href="#1852">1852</a></td></tr
><tr id="gr_svn524_1853"

><td id="1853"><a href="#1853">1853</a></td></tr
><tr id="gr_svn524_1854"

><td id="1854"><a href="#1854">1854</a></td></tr
><tr id="gr_svn524_1855"

><td id="1855"><a href="#1855">1855</a></td></tr
><tr id="gr_svn524_1856"

><td id="1856"><a href="#1856">1856</a></td></tr
><tr id="gr_svn524_1857"

><td id="1857"><a href="#1857">1857</a></td></tr
><tr id="gr_svn524_1858"

><td id="1858"><a href="#1858">1858</a></td></tr
><tr id="gr_svn524_1859"

><td id="1859"><a href="#1859">1859</a></td></tr
><tr id="gr_svn524_1860"

><td id="1860"><a href="#1860">1860</a></td></tr
><tr id="gr_svn524_1861"

><td id="1861"><a href="#1861">1861</a></td></tr
><tr id="gr_svn524_1862"

><td id="1862"><a href="#1862">1862</a></td></tr
></table></pre>
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
</td>
<td id="lines">
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
<pre class="prettyprint lang-js"><table id="src_table_0"><tr
id=sl_svn524_1

><td class="source">(function(){d3.layout = {};<br></td></tr
><tr
id=sl_svn524_2

><td class="source">// Implements hierarchical edge bundling using Holten&#39;s algorithm. For each<br></td></tr
><tr
id=sl_svn524_3

><td class="source">// input link, a path is computed that travels through the tree, up the parent<br></td></tr
><tr
id=sl_svn524_4

><td class="source">// hierarchy to the least common ancestor, and then back down to the destination<br></td></tr
><tr
id=sl_svn524_5

><td class="source">// node. Each path is simply an array of nodes.<br></td></tr
><tr
id=sl_svn524_6

><td class="source">d3.layout.bundle = function() {<br></td></tr
><tr
id=sl_svn524_7

><td class="source">  return function(links) {<br></td></tr
><tr
id=sl_svn524_8

><td class="source">    var paths = [],<br></td></tr
><tr
id=sl_svn524_9

><td class="source">        i = -1,<br></td></tr
><tr
id=sl_svn524_10

><td class="source">        n = links.length;<br></td></tr
><tr
id=sl_svn524_11

><td class="source">    while (++i &lt; n) paths.push(d3_layout_bundlePath(links[i]));<br></td></tr
><tr
id=sl_svn524_12

><td class="source">    return paths;<br></td></tr
><tr
id=sl_svn524_13

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_14

><td class="source">};<br></td></tr
><tr
id=sl_svn524_15

><td class="source"><br></td></tr
><tr
id=sl_svn524_16

><td class="source">function d3_layout_bundlePath(link) {<br></td></tr
><tr
id=sl_svn524_17

><td class="source">  var start = link.source,<br></td></tr
><tr
id=sl_svn524_18

><td class="source">      end = link.target,<br></td></tr
><tr
id=sl_svn524_19

><td class="source">      lca = d3_layout_bundleLeastCommonAncestor(start, end),<br></td></tr
><tr
id=sl_svn524_20

><td class="source">      points = [start];<br></td></tr
><tr
id=sl_svn524_21

><td class="source">  while (start !== lca) {<br></td></tr
><tr
id=sl_svn524_22

><td class="source">    start = start.parent;<br></td></tr
><tr
id=sl_svn524_23

><td class="source">    points.push(start);<br></td></tr
><tr
id=sl_svn524_24

><td class="source">  }<br></td></tr
><tr
id=sl_svn524_25

><td class="source">  var k = points.length;<br></td></tr
><tr
id=sl_svn524_26

><td class="source">  while (end !== lca) {<br></td></tr
><tr
id=sl_svn524_27

><td class="source">    points.splice(k, 0, end);<br></td></tr
><tr
id=sl_svn524_28

><td class="source">    end = end.parent;<br></td></tr
><tr
id=sl_svn524_29

><td class="source">  }<br></td></tr
><tr
id=sl_svn524_30

><td class="source">  return points;<br></td></tr
><tr
id=sl_svn524_31

><td class="source">}<br></td></tr
><tr
id=sl_svn524_32

><td class="source"><br></td></tr
><tr
id=sl_svn524_33

><td class="source">function d3_layout_bundleAncestors(node) {<br></td></tr
><tr
id=sl_svn524_34

><td class="source">  var ancestors = [],<br></td></tr
><tr
id=sl_svn524_35

><td class="source">      parent = node.parent;<br></td></tr
><tr
id=sl_svn524_36

><td class="source">  while (parent != null) {<br></td></tr
><tr
id=sl_svn524_37

><td class="source">    ancestors.push(node);<br></td></tr
><tr
id=sl_svn524_38

><td class="source">    node = parent;<br></td></tr
><tr
id=sl_svn524_39

><td class="source">    parent = parent.parent;<br></td></tr
><tr
id=sl_svn524_40

><td class="source">  }<br></td></tr
><tr
id=sl_svn524_41

><td class="source">  ancestors.push(node);<br></td></tr
><tr
id=sl_svn524_42

><td class="source">  return ancestors;<br></td></tr
><tr
id=sl_svn524_43

><td class="source">}<br></td></tr
><tr
id=sl_svn524_44

><td class="source"><br></td></tr
><tr
id=sl_svn524_45

><td class="source">function d3_layout_bundleLeastCommonAncestor(a, b) {<br></td></tr
><tr
id=sl_svn524_46

><td class="source">  if (a === b) return a;<br></td></tr
><tr
id=sl_svn524_47

><td class="source">  var aNodes = d3_layout_bundleAncestors(a),<br></td></tr
><tr
id=sl_svn524_48

><td class="source">      bNodes = d3_layout_bundleAncestors(b),<br></td></tr
><tr
id=sl_svn524_49

><td class="source">      aNode = aNodes.pop(),<br></td></tr
><tr
id=sl_svn524_50

><td class="source">      bNode = bNodes.pop(),<br></td></tr
><tr
id=sl_svn524_51

><td class="source">      sharedNode = null;<br></td></tr
><tr
id=sl_svn524_52

><td class="source">  while (aNode === bNode) {<br></td></tr
><tr
id=sl_svn524_53

><td class="source">    sharedNode = aNode;<br></td></tr
><tr
id=sl_svn524_54

><td class="source">    aNode = aNodes.pop();<br></td></tr
><tr
id=sl_svn524_55

><td class="source">    bNode = bNodes.pop();<br></td></tr
><tr
id=sl_svn524_56

><td class="source">  }<br></td></tr
><tr
id=sl_svn524_57

><td class="source">  return sharedNode;<br></td></tr
><tr
id=sl_svn524_58

><td class="source">}<br></td></tr
><tr
id=sl_svn524_59

><td class="source">d3.layout.chord = function() {<br></td></tr
><tr
id=sl_svn524_60

><td class="source">  var chord = {},<br></td></tr
><tr
id=sl_svn524_61

><td class="source">      chords,<br></td></tr
><tr
id=sl_svn524_62

><td class="source">      groups,<br></td></tr
><tr
id=sl_svn524_63

><td class="source">      matrix,<br></td></tr
><tr
id=sl_svn524_64

><td class="source">      n,<br></td></tr
><tr
id=sl_svn524_65

><td class="source">      padding = 0,<br></td></tr
><tr
id=sl_svn524_66

><td class="source">      sortGroups,<br></td></tr
><tr
id=sl_svn524_67

><td class="source">      sortSubgroups,<br></td></tr
><tr
id=sl_svn524_68

><td class="source">      sortChords;<br></td></tr
><tr
id=sl_svn524_69

><td class="source"><br></td></tr
><tr
id=sl_svn524_70

><td class="source">  function relayout() {<br></td></tr
><tr
id=sl_svn524_71

><td class="source">    var subgroups = {},<br></td></tr
><tr
id=sl_svn524_72

><td class="source">        groupSums = [],<br></td></tr
><tr
id=sl_svn524_73

><td class="source">        groupIndex = d3.range(n),<br></td></tr
><tr
id=sl_svn524_74

><td class="source">        subgroupIndex = [],<br></td></tr
><tr
id=sl_svn524_75

><td class="source">        k,<br></td></tr
><tr
id=sl_svn524_76

><td class="source">        x,<br></td></tr
><tr
id=sl_svn524_77

><td class="source">        x0,<br></td></tr
><tr
id=sl_svn524_78

><td class="source">        i,<br></td></tr
><tr
id=sl_svn524_79

><td class="source">        j;<br></td></tr
><tr
id=sl_svn524_80

><td class="source"><br></td></tr
><tr
id=sl_svn524_81

><td class="source">    chords = [];<br></td></tr
><tr
id=sl_svn524_82

><td class="source">    groups = [];<br></td></tr
><tr
id=sl_svn524_83

><td class="source"><br></td></tr
><tr
id=sl_svn524_84

><td class="source">    // Compute the sum.<br></td></tr
><tr
id=sl_svn524_85

><td class="source">    k = 0, i = -1; while (++i &lt; n) {<br></td></tr
><tr
id=sl_svn524_86

><td class="source">      x = 0, j = -1; while (++j &lt; n) {<br></td></tr
><tr
id=sl_svn524_87

><td class="source">        x += matrix[i][j];<br></td></tr
><tr
id=sl_svn524_88

><td class="source">      }<br></td></tr
><tr
id=sl_svn524_89

><td class="source">      groupSums.push(x);<br></td></tr
><tr
id=sl_svn524_90

><td class="source">      subgroupIndex.push(d3.range(n));<br></td></tr
><tr
id=sl_svn524_91

><td class="source">      k += x;<br></td></tr
><tr
id=sl_svn524_92

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_93

><td class="source"><br></td></tr
><tr
id=sl_svn524_94

><td class="source">    // Sort groups…<br></td></tr
><tr
id=sl_svn524_95

><td class="source">    if (sortGroups) {<br></td></tr
><tr
id=sl_svn524_96

><td class="source">      groupIndex.sort(function(a, b) {<br></td></tr
><tr
id=sl_svn524_97

><td class="source">        return sortGroups(groupSums[a], groupSums[b]);<br></td></tr
><tr
id=sl_svn524_98

><td class="source">      });<br></td></tr
><tr
id=sl_svn524_99

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_100

><td class="source"><br></td></tr
><tr
id=sl_svn524_101

><td class="source">    // Sort subgroups…<br></td></tr
><tr
id=sl_svn524_102

><td class="source">    if (sortSubgroups) {<br></td></tr
><tr
id=sl_svn524_103

><td class="source">      subgroupIndex.forEach(function(d, i) {<br></td></tr
><tr
id=sl_svn524_104

><td class="source">        d.sort(function(a, b) {<br></td></tr
><tr
id=sl_svn524_105

><td class="source">          return sortSubgroups(matrix[i][a], matrix[i][b]);<br></td></tr
><tr
id=sl_svn524_106

><td class="source">        });<br></td></tr
><tr
id=sl_svn524_107

><td class="source">      });<br></td></tr
><tr
id=sl_svn524_108

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_109

><td class="source"><br></td></tr
><tr
id=sl_svn524_110

><td class="source">    // Convert the sum to scaling factor for [0, 2pi].<br></td></tr
><tr
id=sl_svn524_111

><td class="source">    // TODO Allow start and end angle to be specified.<br></td></tr
><tr
id=sl_svn524_112

><td class="source">    // TODO Allow padding to be specified as percentage?<br></td></tr
><tr
id=sl_svn524_113

><td class="source">    k = (2 * Math.PI - padding * n) / k;<br></td></tr
><tr
id=sl_svn524_114

><td class="source"><br></td></tr
><tr
id=sl_svn524_115

><td class="source">    // Compute the start and end angle for each group and subgroup.<br></td></tr
><tr
id=sl_svn524_116

><td class="source">    x = 0, i = -1; while (++i &lt; n) {<br></td></tr
><tr
id=sl_svn524_117

><td class="source">      x0 = x, j = -1; while (++j &lt; n) {<br></td></tr
><tr
id=sl_svn524_118

><td class="source">        var di = groupIndex[i],<br></td></tr
><tr
id=sl_svn524_119

><td class="source">            dj = subgroupIndex[i][j],<br></td></tr
><tr
id=sl_svn524_120

><td class="source">            v = matrix[di][dj];<br></td></tr
><tr
id=sl_svn524_121

><td class="source">        subgroups[di + &quot;-&quot; + dj] = {<br></td></tr
><tr
id=sl_svn524_122

><td class="source">          index: di,<br></td></tr
><tr
id=sl_svn524_123

><td class="source">          subindex: dj,<br></td></tr
><tr
id=sl_svn524_124

><td class="source">          startAngle: x,<br></td></tr
><tr
id=sl_svn524_125

><td class="source">          endAngle: x += v * k,<br></td></tr
><tr
id=sl_svn524_126

><td class="source">          value: v<br></td></tr
><tr
id=sl_svn524_127

><td class="source">        };<br></td></tr
><tr
id=sl_svn524_128

><td class="source">      }<br></td></tr
><tr
id=sl_svn524_129

><td class="source">      groups.push({<br></td></tr
><tr
id=sl_svn524_130

><td class="source">        index: di,<br></td></tr
><tr
id=sl_svn524_131

><td class="source">        startAngle: x0,<br></td></tr
><tr
id=sl_svn524_132

><td class="source">        endAngle: x,<br></td></tr
><tr
id=sl_svn524_133

><td class="source">        value: (x - x0) / k<br></td></tr
><tr
id=sl_svn524_134

><td class="source">      });<br></td></tr
><tr
id=sl_svn524_135

><td class="source">      x += padding;<br></td></tr
><tr
id=sl_svn524_136

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_137

><td class="source"><br></td></tr
><tr
id=sl_svn524_138

><td class="source">    // Generate chords for each (non-empty) subgroup-subgroup link.<br></td></tr
><tr
id=sl_svn524_139

><td class="source">    i = -1; while (++i &lt; n) {<br></td></tr
><tr
id=sl_svn524_140

><td class="source">      j = i - 1; while (++j &lt; n) {<br></td></tr
><tr
id=sl_svn524_141

><td class="source">        var source = subgroups[i + &quot;-&quot; + j],<br></td></tr
><tr
id=sl_svn524_142

><td class="source">            target = subgroups[j + &quot;-&quot; + i];<br></td></tr
><tr
id=sl_svn524_143

><td class="source">        if (source.value || target.value) {<br></td></tr
><tr
id=sl_svn524_144

><td class="source">          chords.push(source.value &lt; target.value<br></td></tr
><tr
id=sl_svn524_145

><td class="source">              ? {source: target, target: source}<br></td></tr
><tr
id=sl_svn524_146

><td class="source">              : {source: source, target: target});<br></td></tr
><tr
id=sl_svn524_147

><td class="source">        }<br></td></tr
><tr
id=sl_svn524_148

><td class="source">      }<br></td></tr
><tr
id=sl_svn524_149

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_150

><td class="source"><br></td></tr
><tr
id=sl_svn524_151

><td class="source">    if (sortChords) resort();<br></td></tr
><tr
id=sl_svn524_152

><td class="source">  }<br></td></tr
><tr
id=sl_svn524_153

><td class="source"><br></td></tr
><tr
id=sl_svn524_154

><td class="source">  function resort() {<br></td></tr
><tr
id=sl_svn524_155

><td class="source">    chords.sort(function(a, b) {<br></td></tr
><tr
id=sl_svn524_156

><td class="source">      return sortChords(a.target.value, b.target.value);<br></td></tr
><tr
id=sl_svn524_157

><td class="source">    });<br></td></tr
><tr
id=sl_svn524_158

><td class="source">  }<br></td></tr
><tr
id=sl_svn524_159

><td class="source"><br></td></tr
><tr
id=sl_svn524_160

><td class="source">  chord.matrix = function(x) {<br></td></tr
><tr
id=sl_svn524_161

><td class="source">    if (!arguments.length) return matrix;<br></td></tr
><tr
id=sl_svn524_162

><td class="source">    n = (matrix = x) &amp;&amp; matrix.length;<br></td></tr
><tr
id=sl_svn524_163

><td class="source">    chords = groups = null;<br></td></tr
><tr
id=sl_svn524_164

><td class="source">    return chord;<br></td></tr
><tr
id=sl_svn524_165

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_166

><td class="source"><br></td></tr
><tr
id=sl_svn524_167

><td class="source">  chord.padding = function(x) {<br></td></tr
><tr
id=sl_svn524_168

><td class="source">    if (!arguments.length) return padding;<br></td></tr
><tr
id=sl_svn524_169

><td class="source">    padding = x;<br></td></tr
><tr
id=sl_svn524_170

><td class="source">    chords = groups = null;<br></td></tr
><tr
id=sl_svn524_171

><td class="source">    return chord;<br></td></tr
><tr
id=sl_svn524_172

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_173

><td class="source"><br></td></tr
><tr
id=sl_svn524_174

><td class="source">  chord.sortGroups = function(x) {<br></td></tr
><tr
id=sl_svn524_175

><td class="source">    if (!arguments.length) return sortGroups;<br></td></tr
><tr
id=sl_svn524_176

><td class="source">    sortGroups = x;<br></td></tr
><tr
id=sl_svn524_177

><td class="source">    chords = groups = null;<br></td></tr
><tr
id=sl_svn524_178

><td class="source">    return chord;<br></td></tr
><tr
id=sl_svn524_179

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_180

><td class="source"><br></td></tr
><tr
id=sl_svn524_181

><td class="source">  chord.sortSubgroups = function(x) {<br></td></tr
><tr
id=sl_svn524_182

><td class="source">    if (!arguments.length) return sortSubgroups;<br></td></tr
><tr
id=sl_svn524_183

><td class="source">    sortSubgroups = x;<br></td></tr
><tr
id=sl_svn524_184

><td class="source">    chords = null;<br></td></tr
><tr
id=sl_svn524_185

><td class="source">    return chord;<br></td></tr
><tr
id=sl_svn524_186

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_187

><td class="source"><br></td></tr
><tr
id=sl_svn524_188

><td class="source">  chord.sortChords = function(x) {<br></td></tr
><tr
id=sl_svn524_189

><td class="source">    if (!arguments.length) return sortChords;<br></td></tr
><tr
id=sl_svn524_190

><td class="source">    sortChords = x;<br></td></tr
><tr
id=sl_svn524_191

><td class="source">    if (chords) resort();<br></td></tr
><tr
id=sl_svn524_192

><td class="source">    return chord;<br></td></tr
><tr
id=sl_svn524_193

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_194

><td class="source"><br></td></tr
><tr
id=sl_svn524_195

><td class="source">  chord.chords = function() {<br></td></tr
><tr
id=sl_svn524_196

><td class="source">    if (!chords) relayout();<br></td></tr
><tr
id=sl_svn524_197

><td class="source">    return chords;<br></td></tr
><tr
id=sl_svn524_198

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_199

><td class="source"><br></td></tr
><tr
id=sl_svn524_200

><td class="source">  chord.groups = function() {<br></td></tr
><tr
id=sl_svn524_201

><td class="source">    if (!groups) relayout();<br></td></tr
><tr
id=sl_svn524_202

><td class="source">    return groups;<br></td></tr
><tr
id=sl_svn524_203

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_204

><td class="source"><br></td></tr
><tr
id=sl_svn524_205

><td class="source">  return chord;<br></td></tr
><tr
id=sl_svn524_206

><td class="source">};<br></td></tr
><tr
id=sl_svn524_207

><td class="source">// A rudimentary force layout using Gauss-Seidel.<br></td></tr
><tr
id=sl_svn524_208

><td class="source">d3.layout.force = function() {<br></td></tr
><tr
id=sl_svn524_209

><td class="source">  var force = {},<br></td></tr
><tr
id=sl_svn524_210

><td class="source">      event = d3.dispatch(&quot;tick&quot;),<br></td></tr
><tr
id=sl_svn524_211

><td class="source">      size = [1, 1],<br></td></tr
><tr
id=sl_svn524_212

><td class="source">      drag,<br></td></tr
><tr
id=sl_svn524_213

><td class="source">      alpha,<br></td></tr
><tr
id=sl_svn524_214

><td class="source">      friction = .9,<br></td></tr
><tr
id=sl_svn524_215

><td class="source">      linkDistance = d3_layout_forceLinkDistance,<br></td></tr
><tr
id=sl_svn524_216

><td class="source">      linkStrength = d3_layout_forceLinkStrength,<br></td></tr
><tr
id=sl_svn524_217

><td class="source">      charge = -30,<br></td></tr
><tr
id=sl_svn524_218

><td class="source">      gravity = .1,<br></td></tr
><tr
id=sl_svn524_219

><td class="source">      theta = .8,<br></td></tr
><tr
id=sl_svn524_220

><td class="source">      interval,<br></td></tr
><tr
id=sl_svn524_221

><td class="source">      nodes = [],<br></td></tr
><tr
id=sl_svn524_222

><td class="source">      links = [],<br></td></tr
><tr
id=sl_svn524_223

><td class="source">      distances,<br></td></tr
><tr
id=sl_svn524_224

><td class="source">      strengths;<br></td></tr
><tr
id=sl_svn524_225

><td class="source"><br></td></tr
><tr
id=sl_svn524_226

><td class="source">  function repulse(node, kc) {<br></td></tr
><tr
id=sl_svn524_227

><td class="source">    return function(quad, x1, y1, x2, y2) {<br></td></tr
><tr
id=sl_svn524_228

><td class="source">      if (quad.point !== node) {<br></td></tr
><tr
id=sl_svn524_229

><td class="source">        var dx = quad.cx - node.x,<br></td></tr
><tr
id=sl_svn524_230

><td class="source">            dy = quad.cy - node.y,<br></td></tr
><tr
id=sl_svn524_231

><td class="source">            dn = 1 / Math.sqrt(dx * dx + dy * dy);<br></td></tr
><tr
id=sl_svn524_232

><td class="source"><br></td></tr
><tr
id=sl_svn524_233

><td class="source">        /* Barnes-Hut criterion. */<br></td></tr
><tr
id=sl_svn524_234

><td class="source">        if ((x2 - x1) * dn &lt; theta) {<br></td></tr
><tr
id=sl_svn524_235

><td class="source">          var k = kc * quad.count * dn * dn;<br></td></tr
><tr
id=sl_svn524_236

><td class="source">          node.x += dx * k;<br></td></tr
><tr
id=sl_svn524_237

><td class="source">          node.y += dy * k;<br></td></tr
><tr
id=sl_svn524_238

><td class="source">          return true;<br></td></tr
><tr
id=sl_svn524_239

><td class="source">        }<br></td></tr
><tr
id=sl_svn524_240

><td class="source"><br></td></tr
><tr
id=sl_svn524_241

><td class="source">        if (quad.point &amp;&amp; isFinite(dn)) {<br></td></tr
><tr
id=sl_svn524_242

><td class="source">          var k = kc * dn * dn;<br></td></tr
><tr
id=sl_svn524_243

><td class="source">          node.x += dx * k;<br></td></tr
><tr
id=sl_svn524_244

><td class="source">          node.y += dy * k;<br></td></tr
><tr
id=sl_svn524_245

><td class="source">        }<br></td></tr
><tr
id=sl_svn524_246

><td class="source">      }<br></td></tr
><tr
id=sl_svn524_247

><td class="source">    };<br></td></tr
><tr
id=sl_svn524_248

><td class="source">  }<br></td></tr
><tr
id=sl_svn524_249

><td class="source"><br></td></tr
><tr
id=sl_svn524_250

><td class="source">  function tick() {<br></td></tr
><tr
id=sl_svn524_251

><td class="source">    var n = nodes.length,<br></td></tr
><tr
id=sl_svn524_252

><td class="source">        m = links.length,<br></td></tr
><tr
id=sl_svn524_253

><td class="source">        q = d3.geom.quadtree(nodes),<br></td></tr
><tr
id=sl_svn524_254

><td class="source">        i, // current index<br></td></tr
><tr
id=sl_svn524_255

><td class="source">        o, // current object<br></td></tr
><tr
id=sl_svn524_256

><td class="source">        s, // current source<br></td></tr
><tr
id=sl_svn524_257

><td class="source">        t, // current target<br></td></tr
><tr
id=sl_svn524_258

><td class="source">        l, // current distance<br></td></tr
><tr
id=sl_svn524_259

><td class="source">        x, // x-distance<br></td></tr
><tr
id=sl_svn524_260

><td class="source">        y; // y-distance<br></td></tr
><tr
id=sl_svn524_261

><td class="source"><br></td></tr
><tr
id=sl_svn524_262

><td class="source">    // gauss-seidel relaxation for links<br></td></tr
><tr
id=sl_svn524_263

><td class="source">    for (i = 0; i &lt; m; ++i) {<br></td></tr
><tr
id=sl_svn524_264

><td class="source">      o = links[i];<br></td></tr
><tr
id=sl_svn524_265

><td class="source">      s = o.source;<br></td></tr
><tr
id=sl_svn524_266

><td class="source">      t = o.target;<br></td></tr
><tr
id=sl_svn524_267

><td class="source">      x = t.x - s.x;<br></td></tr
><tr
id=sl_svn524_268

><td class="source">      y = t.y - s.y;<br></td></tr
><tr
id=sl_svn524_269

><td class="source">      if (l = (x * x + y * y)) {<br></td></tr
><tr
id=sl_svn524_270

><td class="source">        l = alpha * strengths[i] * ((l = Math.sqrt(l)) - distances[i]) / l;<br></td></tr
><tr
id=sl_svn524_271

><td class="source">        x *= l;<br></td></tr
><tr
id=sl_svn524_272

><td class="source">        y *= l;<br></td></tr
><tr
id=sl_svn524_273

><td class="source">        t.x -= x / t.weight;<br></td></tr
><tr
id=sl_svn524_274

><td class="source">        t.y -= y / t.weight;<br></td></tr
><tr
id=sl_svn524_275

><td class="source">        s.x += x / s.weight;<br></td></tr
><tr
id=sl_svn524_276

><td class="source">        s.y += y / s.weight;<br></td></tr
><tr
id=sl_svn524_277

><td class="source">      }<br></td></tr
><tr
id=sl_svn524_278

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_279

><td class="source"><br></td></tr
><tr
id=sl_svn524_280

><td class="source">    // apply gravity forces<br></td></tr
><tr
id=sl_svn524_281

><td class="source">    var kg = alpha * gravity;<br></td></tr
><tr
id=sl_svn524_282

><td class="source">    x = size[0] / 2;<br></td></tr
><tr
id=sl_svn524_283

><td class="source">    y = size[1] / 2;<br></td></tr
><tr
id=sl_svn524_284

><td class="source">    i = -1; while (++i &lt; n) {<br></td></tr
><tr
id=sl_svn524_285

><td class="source">      o = nodes[i];<br></td></tr
><tr
id=sl_svn524_286

><td class="source">      o.x += (x - o.x) * kg;<br></td></tr
><tr
id=sl_svn524_287

><td class="source">      o.y += (y - o.y) * kg;<br></td></tr
><tr
id=sl_svn524_288

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_289

><td class="source"><br></td></tr
><tr
id=sl_svn524_290

><td class="source">    // compute quadtree center of mass<br></td></tr
><tr
id=sl_svn524_291

><td class="source">    d3_layout_forceAccumulate(q);<br></td></tr
><tr
id=sl_svn524_292

><td class="source"><br></td></tr
><tr
id=sl_svn524_293

><td class="source">    // apply charge forces<br></td></tr
><tr
id=sl_svn524_294

><td class="source">    var kc = alpha * charge;<br></td></tr
><tr
id=sl_svn524_295

><td class="source">    i = -1; while (++i &lt; n) {<br></td></tr
><tr
id=sl_svn524_296

><td class="source">      q.visit(repulse(nodes[i], kc));<br></td></tr
><tr
id=sl_svn524_297

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_298

><td class="source"><br></td></tr
><tr
id=sl_svn524_299

><td class="source">    // position verlet integration<br></td></tr
><tr
id=sl_svn524_300

><td class="source">    i = -1; while (++i &lt; n) {<br></td></tr
><tr
id=sl_svn524_301

><td class="source">      o = nodes[i];<br></td></tr
><tr
id=sl_svn524_302

><td class="source">      if (o.fixed) {<br></td></tr
><tr
id=sl_svn524_303

><td class="source">        o.x = o.px;<br></td></tr
><tr
id=sl_svn524_304

><td class="source">        o.y = o.py;<br></td></tr
><tr
id=sl_svn524_305

><td class="source">      } else {<br></td></tr
><tr
id=sl_svn524_306

><td class="source">        o.x -= (o.px - (o.px = o.x)) * friction;<br></td></tr
><tr
id=sl_svn524_307

><td class="source">        o.y -= (o.py - (o.py = o.y)) * friction;<br></td></tr
><tr
id=sl_svn524_308

><td class="source">      }<br></td></tr
><tr
id=sl_svn524_309

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_310

><td class="source"><br></td></tr
><tr
id=sl_svn524_311

><td class="source">    event.tick.dispatch({type: &quot;tick&quot;, alpha: alpha});<br></td></tr
><tr
id=sl_svn524_312

><td class="source"><br></td></tr
><tr
id=sl_svn524_313

><td class="source">    // simulated annealing, basically<br></td></tr
><tr
id=sl_svn524_314

><td class="source">    return (alpha *= .99) &lt; .005;<br></td></tr
><tr
id=sl_svn524_315

><td class="source">  }<br></td></tr
><tr
id=sl_svn524_316

><td class="source"><br></td></tr
><tr
id=sl_svn524_317

><td class="source">  force.on = function(type, listener) {<br></td></tr
><tr
id=sl_svn524_318

><td class="source">    event[type].add(listener);<br></td></tr
><tr
id=sl_svn524_319

><td class="source">    return force;<br></td></tr
><tr
id=sl_svn524_320

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_321

><td class="source"><br></td></tr
><tr
id=sl_svn524_322

><td class="source">  force.nodes = function(x) {<br></td></tr
><tr
id=sl_svn524_323

><td class="source">    if (!arguments.length) return nodes;<br></td></tr
><tr
id=sl_svn524_324

><td class="source">    nodes = x;<br></td></tr
><tr
id=sl_svn524_325

><td class="source">    return force;<br></td></tr
><tr
id=sl_svn524_326

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_327

><td class="source"><br></td></tr
><tr
id=sl_svn524_328

><td class="source">  force.links = function(x) {<br></td></tr
><tr
id=sl_svn524_329

><td class="source">    if (!arguments.length) return links;<br></td></tr
><tr
id=sl_svn524_330

><td class="source">    links = x;<br></td></tr
><tr
id=sl_svn524_331

><td class="source">    return force;<br></td></tr
><tr
id=sl_svn524_332

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_333

><td class="source"><br></td></tr
><tr
id=sl_svn524_334

><td class="source">  force.size = function(x) {<br></td></tr
><tr
id=sl_svn524_335

><td class="source">    if (!arguments.length) return size;<br></td></tr
><tr
id=sl_svn524_336

><td class="source">    size = x;<br></td></tr
><tr
id=sl_svn524_337

><td class="source">    return force;<br></td></tr
><tr
id=sl_svn524_338

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_339

><td class="source"><br></td></tr
><tr
id=sl_svn524_340

><td class="source">  force.linkDistance = function(x) {<br></td></tr
><tr
id=sl_svn524_341

><td class="source">    if (!arguments.length) return linkDistance;<br></td></tr
><tr
id=sl_svn524_342

><td class="source">    linkDistance = d3.functor(x);<br></td></tr
><tr
id=sl_svn524_343

><td class="source">    return force;<br></td></tr
><tr
id=sl_svn524_344

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_345

><td class="source"><br></td></tr
><tr
id=sl_svn524_346

><td class="source">  // For backwards-compatibility.<br></td></tr
><tr
id=sl_svn524_347

><td class="source">  force.distance = force.linkDistance;<br></td></tr
><tr
id=sl_svn524_348

><td class="source"><br></td></tr
><tr
id=sl_svn524_349

><td class="source">  force.linkStrength = function(x) {<br></td></tr
><tr
id=sl_svn524_350

><td class="source">    if (!arguments.length) return linkStrength;<br></td></tr
><tr
id=sl_svn524_351

><td class="source">    linkStrength = d3.functor(x);<br></td></tr
><tr
id=sl_svn524_352

><td class="source">    return force;<br></td></tr
><tr
id=sl_svn524_353

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_354

><td class="source"><br></td></tr
><tr
id=sl_svn524_355

><td class="source">  force.friction = function(x) {<br></td></tr
><tr
id=sl_svn524_356

><td class="source">    if (!arguments.length) return friction;<br></td></tr
><tr
id=sl_svn524_357

><td class="source">    friction = x;<br></td></tr
><tr
id=sl_svn524_358

><td class="source">    return force;<br></td></tr
><tr
id=sl_svn524_359

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_360

><td class="source"><br></td></tr
><tr
id=sl_svn524_361

><td class="source">  force.charge = function(x) {<br></td></tr
><tr
id=sl_svn524_362

><td class="source">    if (!arguments.length) return charge;<br></td></tr
><tr
id=sl_svn524_363

><td class="source">    charge = x;<br></td></tr
><tr
id=sl_svn524_364

><td class="source">    return force;<br></td></tr
><tr
id=sl_svn524_365

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_366

><td class="source"><br></td></tr
><tr
id=sl_svn524_367

><td class="source">  force.gravity = function(x) {<br></td></tr
><tr
id=sl_svn524_368

><td class="source">    if (!arguments.length) return gravity;<br></td></tr
><tr
id=sl_svn524_369

><td class="source">    gravity = x;<br></td></tr
><tr
id=sl_svn524_370

><td class="source">    return force;<br></td></tr
><tr
id=sl_svn524_371

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_372

><td class="source"><br></td></tr
><tr
id=sl_svn524_373

><td class="source">  force.theta = function(x) {<br></td></tr
><tr
id=sl_svn524_374

><td class="source">    if (!arguments.length) return theta;<br></td></tr
><tr
id=sl_svn524_375

><td class="source">    theta = x;<br></td></tr
><tr
id=sl_svn524_376

><td class="source">    return force;<br></td></tr
><tr
id=sl_svn524_377

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_378

><td class="source"><br></td></tr
><tr
id=sl_svn524_379

><td class="source">  force.start = function() {<br></td></tr
><tr
id=sl_svn524_380

><td class="source">    var i,<br></td></tr
><tr
id=sl_svn524_381

><td class="source">        j,<br></td></tr
><tr
id=sl_svn524_382

><td class="source">        n = nodes.length,<br></td></tr
><tr
id=sl_svn524_383

><td class="source">        m = links.length,<br></td></tr
><tr
id=sl_svn524_384

><td class="source">        w = size[0],<br></td></tr
><tr
id=sl_svn524_385

><td class="source">        h = size[1],<br></td></tr
><tr
id=sl_svn524_386

><td class="source">        neighbors,<br></td></tr
><tr
id=sl_svn524_387

><td class="source">        o;<br></td></tr
><tr
id=sl_svn524_388

><td class="source"><br></td></tr
><tr
id=sl_svn524_389

><td class="source">    for (i = 0; i &lt; n; ++i) {<br></td></tr
><tr
id=sl_svn524_390

><td class="source">      (o = nodes[i]).index = i;<br></td></tr
><tr
id=sl_svn524_391

><td class="source">      o.weight = 0;<br></td></tr
><tr
id=sl_svn524_392

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_393

><td class="source"><br></td></tr
><tr
id=sl_svn524_394

><td class="source">    distances = [];<br></td></tr
><tr
id=sl_svn524_395

><td class="source">    strengths = [];<br></td></tr
><tr
id=sl_svn524_396

><td class="source">    for (i = 0; i &lt; m; ++i) {<br></td></tr
><tr
id=sl_svn524_397

><td class="source">      o = links[i];<br></td></tr
><tr
id=sl_svn524_398

><td class="source">      if (typeof o.source == &quot;number&quot;) o.source = nodes[o.source];<br></td></tr
><tr
id=sl_svn524_399

><td class="source">      if (typeof o.target == &quot;number&quot;) o.target = nodes[o.target];<br></td></tr
><tr
id=sl_svn524_400

><td class="source">      distances[i] = linkDistance.call(this, o, i);<br></td></tr
><tr
id=sl_svn524_401

><td class="source">      strengths[i] = linkStrength.call(this, o, i);<br></td></tr
><tr
id=sl_svn524_402

><td class="source">      ++o.source.weight;<br></td></tr
><tr
id=sl_svn524_403

><td class="source">      ++o.target.weight;<br></td></tr
><tr
id=sl_svn524_404

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_405

><td class="source"><br></td></tr
><tr
id=sl_svn524_406

><td class="source">    for (i = 0; i &lt; n; ++i) {<br></td></tr
><tr
id=sl_svn524_407

><td class="source">      o = nodes[i];<br></td></tr
><tr
id=sl_svn524_408

><td class="source">      if (isNaN(o.x)) o.x = position(&quot;x&quot;, w);<br></td></tr
><tr
id=sl_svn524_409

><td class="source">      if (isNaN(o.y)) o.y = position(&quot;y&quot;, h);<br></td></tr
><tr
id=sl_svn524_410

><td class="source">      if (isNaN(o.px)) o.px = o.x;<br></td></tr
><tr
id=sl_svn524_411

><td class="source">      if (isNaN(o.py)) o.py = o.y;<br></td></tr
><tr
id=sl_svn524_412

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_413

><td class="source"><br></td></tr
><tr
id=sl_svn524_414

><td class="source">    // initialize node position based on first neighbor<br></td></tr
><tr
id=sl_svn524_415

><td class="source">    function position(dimension, size) {<br></td></tr
><tr
id=sl_svn524_416

><td class="source">      var neighbors = neighbor(i),<br></td></tr
><tr
id=sl_svn524_417

><td class="source">          j = -1,<br></td></tr
><tr
id=sl_svn524_418

><td class="source">          m = neighbors.length,<br></td></tr
><tr
id=sl_svn524_419

><td class="source">          x;<br></td></tr
><tr
id=sl_svn524_420

><td class="source">      while (++j &lt; m) if (!isNaN(x = neighbors[j][dimension])) return x;<br></td></tr
><tr
id=sl_svn524_421

><td class="source">      return Math.random() * size;<br></td></tr
><tr
id=sl_svn524_422

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_423

><td class="source"><br></td></tr
><tr
id=sl_svn524_424

><td class="source">    // initialize neighbors lazily<br></td></tr
><tr
id=sl_svn524_425

><td class="source">    function neighbor() {<br></td></tr
><tr
id=sl_svn524_426

><td class="source">      if (!neighbors) {<br></td></tr
><tr
id=sl_svn524_427

><td class="source">        neighbors = [];<br></td></tr
><tr
id=sl_svn524_428

><td class="source">        for (j = 0; j &lt; n; ++j) {<br></td></tr
><tr
id=sl_svn524_429

><td class="source">          neighbors[j] = [];<br></td></tr
><tr
id=sl_svn524_430

><td class="source">        }<br></td></tr
><tr
id=sl_svn524_431

><td class="source">        for (j = 0; j &lt; m; ++j) {<br></td></tr
><tr
id=sl_svn524_432

><td class="source">          var o = links[j];<br></td></tr
><tr
id=sl_svn524_433

><td class="source">          neighbors[o.source.index].push(o.target);<br></td></tr
><tr
id=sl_svn524_434

><td class="source">          neighbors[o.target.index].push(o.source);<br></td></tr
><tr
id=sl_svn524_435

><td class="source">        }<br></td></tr
><tr
id=sl_svn524_436

><td class="source">      }<br></td></tr
><tr
id=sl_svn524_437

><td class="source">      return neighbors[i];<br></td></tr
><tr
id=sl_svn524_438

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_439

><td class="source"><br></td></tr
><tr
id=sl_svn524_440

><td class="source">    return force.resume();<br></td></tr
><tr
id=sl_svn524_441

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_442

><td class="source"><br></td></tr
><tr
id=sl_svn524_443

><td class="source">  force.resume = function() {<br></td></tr
><tr
id=sl_svn524_444

><td class="source">    alpha = .1;<br></td></tr
><tr
id=sl_svn524_445

><td class="source">    d3.timer(tick);<br></td></tr
><tr
id=sl_svn524_446

><td class="source">    return force;<br></td></tr
><tr
id=sl_svn524_447

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_448

><td class="source"><br></td></tr
><tr
id=sl_svn524_449

><td class="source">  force.stop = function() {<br></td></tr
><tr
id=sl_svn524_450

><td class="source">    alpha = 0;<br></td></tr
><tr
id=sl_svn524_451

><td class="source">    return force;<br></td></tr
><tr
id=sl_svn524_452

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_453

><td class="source"><br></td></tr
><tr
id=sl_svn524_454

><td class="source">  // use `node.call(force.drag)` to make nodes draggable<br></td></tr
><tr
id=sl_svn524_455

><td class="source">  force.drag = function() {<br></td></tr
><tr
id=sl_svn524_456

><td class="source">    if (!drag) drag = d3.behavior.drag()<br></td></tr
><tr
id=sl_svn524_457

><td class="source">        .on(&quot;dragstart&quot;, dragstart)<br></td></tr
><tr
id=sl_svn524_458

><td class="source">        .on(&quot;drag&quot;, d3_layout_forceDrag)<br></td></tr
><tr
id=sl_svn524_459

><td class="source">        .on(&quot;dragend&quot;, d3_layout_forceDragEnd);<br></td></tr
><tr
id=sl_svn524_460

><td class="source"><br></td></tr
><tr
id=sl_svn524_461

><td class="source">    this.on(&quot;mouseover.force&quot;, d3_layout_forceDragOver)<br></td></tr
><tr
id=sl_svn524_462

><td class="source">        .on(&quot;mouseout.force&quot;, d3_layout_forceDragOut)<br></td></tr
><tr
id=sl_svn524_463

><td class="source">        .call(drag);<br></td></tr
><tr
id=sl_svn524_464

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_465

><td class="source"><br></td></tr
><tr
id=sl_svn524_466

><td class="source">  function dragstart(d) {<br></td></tr
><tr
id=sl_svn524_467

><td class="source">    d3_layout_forceDragOver(d3_layout_forceDragNode = d);<br></td></tr
><tr
id=sl_svn524_468

><td class="source">    d3_layout_forceDragForce = force;<br></td></tr
><tr
id=sl_svn524_469

><td class="source">  }<br></td></tr
><tr
id=sl_svn524_470

><td class="source"><br></td></tr
><tr
id=sl_svn524_471

><td class="source">  return force;<br></td></tr
><tr
id=sl_svn524_472

><td class="source">};<br></td></tr
><tr
id=sl_svn524_473

><td class="source"><br></td></tr
><tr
id=sl_svn524_474

><td class="source">var d3_layout_forceDragForce,<br></td></tr
><tr
id=sl_svn524_475

><td class="source">    d3_layout_forceDragNode;<br></td></tr
><tr
id=sl_svn524_476

><td class="source"><br></td></tr
><tr
id=sl_svn524_477

><td class="source">function d3_layout_forceDragOver(d) {<br></td></tr
><tr
id=sl_svn524_478

><td class="source">  d.fixed |= 2;<br></td></tr
><tr
id=sl_svn524_479

><td class="source">}<br></td></tr
><tr
id=sl_svn524_480

><td class="source"><br></td></tr
><tr
id=sl_svn524_481

><td class="source">function d3_layout_forceDragOut(d) {<br></td></tr
><tr
id=sl_svn524_482

><td class="source">  if (d !== d3_layout_forceDragNode) d.fixed &amp;= 1;<br></td></tr
><tr
id=sl_svn524_483

><td class="source">}<br></td></tr
><tr
id=sl_svn524_484

><td class="source"><br></td></tr
><tr
id=sl_svn524_485

><td class="source">function d3_layout_forceDragEnd() {<br></td></tr
><tr
id=sl_svn524_486

><td class="source">  d3_layout_forceDrag();<br></td></tr
><tr
id=sl_svn524_487

><td class="source">  d3_layout_forceDragNode.fixed &amp;= 1;<br></td></tr
><tr
id=sl_svn524_488

><td class="source">  d3_layout_forceDragForce = d3_layout_forceDragNode = null;<br></td></tr
><tr
id=sl_svn524_489

><td class="source">}<br></td></tr
><tr
id=sl_svn524_490

><td class="source"><br></td></tr
><tr
id=sl_svn524_491

><td class="source">function d3_layout_forceDrag() {<br></td></tr
><tr
id=sl_svn524_492

><td class="source">  d3_layout_forceDragNode.px += d3.event.dx;<br></td></tr
><tr
id=sl_svn524_493

><td class="source">  d3_layout_forceDragNode.py += d3.event.dy;<br></td></tr
><tr
id=sl_svn524_494

><td class="source">  d3_layout_forceDragForce.resume(); // restart annealing<br></td></tr
><tr
id=sl_svn524_495

><td class="source">}<br></td></tr
><tr
id=sl_svn524_496

><td class="source"><br></td></tr
><tr
id=sl_svn524_497

><td class="source">function d3_layout_forceAccumulate(quad) {<br></td></tr
><tr
id=sl_svn524_498

><td class="source">  var cx = 0,<br></td></tr
><tr
id=sl_svn524_499

><td class="source">      cy = 0;<br></td></tr
><tr
id=sl_svn524_500

><td class="source">  quad.count = 0;<br></td></tr
><tr
id=sl_svn524_501

><td class="source">  if (!quad.leaf) {<br></td></tr
><tr
id=sl_svn524_502

><td class="source">    var nodes = quad.nodes,<br></td></tr
><tr
id=sl_svn524_503

><td class="source">        n = nodes.length,<br></td></tr
><tr
id=sl_svn524_504

><td class="source">        i = -1,<br></td></tr
><tr
id=sl_svn524_505

><td class="source">        c;<br></td></tr
><tr
id=sl_svn524_506

><td class="source">    while (++i &lt; n) {<br></td></tr
><tr
id=sl_svn524_507

><td class="source">      c = nodes[i];<br></td></tr
><tr
id=sl_svn524_508

><td class="source">      if (c == null) continue;<br></td></tr
><tr
id=sl_svn524_509

><td class="source">      d3_layout_forceAccumulate(c);<br></td></tr
><tr
id=sl_svn524_510

><td class="source">      quad.count += c.count;<br></td></tr
><tr
id=sl_svn524_511

><td class="source">      cx += c.count * c.cx;<br></td></tr
><tr
id=sl_svn524_512

><td class="source">      cy += c.count * c.cy;<br></td></tr
><tr
id=sl_svn524_513

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_514

><td class="source">  }<br></td></tr
><tr
id=sl_svn524_515

><td class="source">  if (quad.point) {<br></td></tr
><tr
id=sl_svn524_516

><td class="source">    // jitter internal nodes that are coincident<br></td></tr
><tr
id=sl_svn524_517

><td class="source">    if (!quad.leaf) {<br></td></tr
><tr
id=sl_svn524_518

><td class="source">      quad.point.x += Math.random() - .5;<br></td></tr
><tr
id=sl_svn524_519

><td class="source">      quad.point.y += Math.random() - .5;<br></td></tr
><tr
id=sl_svn524_520

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_521

><td class="source">    quad.count++;<br></td></tr
><tr
id=sl_svn524_522

><td class="source">    cx += quad.point.x;<br></td></tr
><tr
id=sl_svn524_523

><td class="source">    cy += quad.point.y;<br></td></tr
><tr
id=sl_svn524_524

><td class="source">  }<br></td></tr
><tr
id=sl_svn524_525

><td class="source">  quad.cx = cx / quad.count;<br></td></tr
><tr
id=sl_svn524_526

><td class="source">  quad.cy = cy / quad.count;<br></td></tr
><tr
id=sl_svn524_527

><td class="source">}<br></td></tr
><tr
id=sl_svn524_528

><td class="source"><br></td></tr
><tr
id=sl_svn524_529

><td class="source">function d3_layout_forceLinkDistance(link) {<br></td></tr
><tr
id=sl_svn524_530

><td class="source">  return 20;<br></td></tr
><tr
id=sl_svn524_531

><td class="source">}<br></td></tr
><tr
id=sl_svn524_532

><td class="source"><br></td></tr
><tr
id=sl_svn524_533

><td class="source">function d3_layout_forceLinkStrength(link) {<br></td></tr
><tr
id=sl_svn524_534

><td class="source">  return 1;<br></td></tr
><tr
id=sl_svn524_535

><td class="source">}<br></td></tr
><tr
id=sl_svn524_536

><td class="source">d3.layout.partition = function() {<br></td></tr
><tr
id=sl_svn524_537

><td class="source">  var hierarchy = d3.layout.hierarchy(),<br></td></tr
><tr
id=sl_svn524_538

><td class="source">      size = [1, 1]; // width, height<br></td></tr
><tr
id=sl_svn524_539

><td class="source"><br></td></tr
><tr
id=sl_svn524_540

><td class="source">  function position(node, x, dx, dy) {<br></td></tr
><tr
id=sl_svn524_541

><td class="source">    var children = node.children;<br></td></tr
><tr
id=sl_svn524_542

><td class="source">    node.x = x;<br></td></tr
><tr
id=sl_svn524_543

><td class="source">    node.y = node.depth * dy;<br></td></tr
><tr
id=sl_svn524_544

><td class="source">    node.dx = dx;<br></td></tr
><tr
id=sl_svn524_545

><td class="source">    node.dy = dy;<br></td></tr
><tr
id=sl_svn524_546

><td class="source">    if (children) {<br></td></tr
><tr
id=sl_svn524_547

><td class="source">      var i = -1,<br></td></tr
><tr
id=sl_svn524_548

><td class="source">          n = children.length,<br></td></tr
><tr
id=sl_svn524_549

><td class="source">          c,<br></td></tr
><tr
id=sl_svn524_550

><td class="source">          d;<br></td></tr
><tr
id=sl_svn524_551

><td class="source">      dx = node.value ? dx / node.value : 0;<br></td></tr
><tr
id=sl_svn524_552

><td class="source">      while (++i &lt; n) {<br></td></tr
><tr
id=sl_svn524_553

><td class="source">        position(c = children[i], x, d = c.value * dx, dy);<br></td></tr
><tr
id=sl_svn524_554

><td class="source">        x += d;<br></td></tr
><tr
id=sl_svn524_555

><td class="source">      }<br></td></tr
><tr
id=sl_svn524_556

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_557

><td class="source">  }<br></td></tr
><tr
id=sl_svn524_558

><td class="source"><br></td></tr
><tr
id=sl_svn524_559

><td class="source">  function depth(node) {<br></td></tr
><tr
id=sl_svn524_560

><td class="source">    var children = node.children,<br></td></tr
><tr
id=sl_svn524_561

><td class="source">        d = 0;<br></td></tr
><tr
id=sl_svn524_562

><td class="source">    if (children) {<br></td></tr
><tr
id=sl_svn524_563

><td class="source">      var i = -1,<br></td></tr
><tr
id=sl_svn524_564

><td class="source">          n = children.length;<br></td></tr
><tr
id=sl_svn524_565

><td class="source">      while (++i &lt; n) d = Math.max(d, depth(children[i]));<br></td></tr
><tr
id=sl_svn524_566

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_567

><td class="source">    return 1 + d;<br></td></tr
><tr
id=sl_svn524_568

><td class="source">  }<br></td></tr
><tr
id=sl_svn524_569

><td class="source"><br></td></tr
><tr
id=sl_svn524_570

><td class="source">  function partition(d, i) {<br></td></tr
><tr
id=sl_svn524_571

><td class="source">    var nodes = hierarchy.call(this, d, i);<br></td></tr
><tr
id=sl_svn524_572

><td class="source">    position(nodes[0], 0, size[0], size[1] / depth(nodes[0]));<br></td></tr
><tr
id=sl_svn524_573

><td class="source">    return nodes;<br></td></tr
><tr
id=sl_svn524_574

><td class="source">  }<br></td></tr
><tr
id=sl_svn524_575

><td class="source"><br></td></tr
><tr
id=sl_svn524_576

><td class="source">  partition.size = function(x) {<br></td></tr
><tr
id=sl_svn524_577

><td class="source">    if (!arguments.length) return size;<br></td></tr
><tr
id=sl_svn524_578

><td class="source">    size = x;<br></td></tr
><tr
id=sl_svn524_579

><td class="source">    return partition;<br></td></tr
><tr
id=sl_svn524_580

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_581

><td class="source"><br></td></tr
><tr
id=sl_svn524_582

><td class="source">  return d3_layout_hierarchyRebind(partition, hierarchy);<br></td></tr
><tr
id=sl_svn524_583

><td class="source">};<br></td></tr
><tr
id=sl_svn524_584

><td class="source">d3.layout.pie = function() {<br></td></tr
><tr
id=sl_svn524_585

><td class="source">  var value = Number,<br></td></tr
><tr
id=sl_svn524_586

><td class="source">      sort = null,<br></td></tr
><tr
id=sl_svn524_587

><td class="source">      startAngle = 0,<br></td></tr
><tr
id=sl_svn524_588

><td class="source">      endAngle = 2 * Math.PI;<br></td></tr
><tr
id=sl_svn524_589

><td class="source"><br></td></tr
><tr
id=sl_svn524_590

><td class="source">  function pie(data, i) {<br></td></tr
><tr
id=sl_svn524_591

><td class="source"><br></td></tr
><tr
id=sl_svn524_592

><td class="source">    // Compute the start angle.<br></td></tr
><tr
id=sl_svn524_593

><td class="source">    var a = +(typeof startAngle === &quot;function&quot;<br></td></tr
><tr
id=sl_svn524_594

><td class="source">        ? startAngle.apply(this, arguments)<br></td></tr
><tr
id=sl_svn524_595

><td class="source">        : startAngle);<br></td></tr
><tr
id=sl_svn524_596

><td class="source"><br></td></tr
><tr
id=sl_svn524_597

><td class="source">    // Compute the angular range (end - start).<br></td></tr
><tr
id=sl_svn524_598

><td class="source">    var k = (typeof endAngle === &quot;function&quot;<br></td></tr
><tr
id=sl_svn524_599

><td class="source">        ? endAngle.apply(this, arguments)<br></td></tr
><tr
id=sl_svn524_600

><td class="source">        : endAngle) - startAngle;<br></td></tr
><tr
id=sl_svn524_601

><td class="source"><br></td></tr
><tr
id=sl_svn524_602

><td class="source">    // Optionally sort the data.<br></td></tr
><tr
id=sl_svn524_603

><td class="source">    var index = d3.range(data.length);<br></td></tr
><tr
id=sl_svn524_604

><td class="source">    if (sort != null) index.sort(function(i, j) {<br></td></tr
><tr
id=sl_svn524_605

><td class="source">      return sort(data[i], data[j]);<br></td></tr
><tr
id=sl_svn524_606

><td class="source">    });<br></td></tr
><tr
id=sl_svn524_607

><td class="source"><br></td></tr
><tr
id=sl_svn524_608

><td class="source">    // Compute the numeric values for each data element.<br></td></tr
><tr
id=sl_svn524_609

><td class="source">    var values = data.map(value);<br></td></tr
><tr
id=sl_svn524_610

><td class="source"><br></td></tr
><tr
id=sl_svn524_611

><td class="source">    // Convert k into a scale factor from value to angle, using the sum.<br></td></tr
><tr
id=sl_svn524_612

><td class="source">    k /= values.reduce(function(p, d) { return p + d; }, 0);<br></td></tr
><tr
id=sl_svn524_613

><td class="source"><br></td></tr
><tr
id=sl_svn524_614

><td class="source">    // Compute the arcs!<br></td></tr
><tr
id=sl_svn524_615

><td class="source">    var arcs = index.map(function(i) {<br></td></tr
><tr
id=sl_svn524_616

><td class="source">      return {<br></td></tr
><tr
id=sl_svn524_617

><td class="source">        data: data[i],<br></td></tr
><tr
id=sl_svn524_618

><td class="source">        value: d = values[i],<br></td></tr
><tr
id=sl_svn524_619

><td class="source">        startAngle: a,<br></td></tr
><tr
id=sl_svn524_620

><td class="source">        endAngle: a += d * k<br></td></tr
><tr
id=sl_svn524_621

><td class="source">      };<br></td></tr
><tr
id=sl_svn524_622

><td class="source">    });<br></td></tr
><tr
id=sl_svn524_623

><td class="source"><br></td></tr
><tr
id=sl_svn524_624

><td class="source">    // Return the arcs in the original data&#39;s order.<br></td></tr
><tr
id=sl_svn524_625

><td class="source">    return data.map(function(d, i) {<br></td></tr
><tr
id=sl_svn524_626

><td class="source">      return arcs[index[i]];<br></td></tr
><tr
id=sl_svn524_627

><td class="source">    });<br></td></tr
><tr
id=sl_svn524_628

><td class="source">  }<br></td></tr
><tr
id=sl_svn524_629

><td class="source"><br></td></tr
><tr
id=sl_svn524_630

><td class="source">  /**<br></td></tr
><tr
id=sl_svn524_631

><td class="source">   * Specifies the value function *x*, which returns a nonnegative numeric value<br></td></tr
><tr
id=sl_svn524_632

><td class="source">   * for each datum. The default value function is `Number`. The value function<br></td></tr
><tr
id=sl_svn524_633

><td class="source">   * is passed two arguments: the current datum and the current index.<br></td></tr
><tr
id=sl_svn524_634

><td class="source">   */<br></td></tr
><tr
id=sl_svn524_635

><td class="source">  pie.value = function(x) {<br></td></tr
><tr
id=sl_svn524_636

><td class="source">    if (!arguments.length) return value;<br></td></tr
><tr
id=sl_svn524_637

><td class="source">    value = x;<br></td></tr
><tr
id=sl_svn524_638

><td class="source">    return pie;<br></td></tr
><tr
id=sl_svn524_639

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_640

><td class="source"><br></td></tr
><tr
id=sl_svn524_641

><td class="source">  /**<br></td></tr
><tr
id=sl_svn524_642

><td class="source">   * Specifies a sort comparison operator *x*. The comparator is passed two data<br></td></tr
><tr
id=sl_svn524_643

><td class="source">   * elements from the data array, a and b; it returns a negative value if a is<br></td></tr
><tr
id=sl_svn524_644

><td class="source">   * less than b, a positive value if a is greater than b, and zero if a equals<br></td></tr
><tr
id=sl_svn524_645

><td class="source">   * b.<br></td></tr
><tr
id=sl_svn524_646

><td class="source">   */<br></td></tr
><tr
id=sl_svn524_647

><td class="source">  pie.sort = function(x) {<br></td></tr
><tr
id=sl_svn524_648

><td class="source">    if (!arguments.length) return sort;<br></td></tr
><tr
id=sl_svn524_649

><td class="source">    sort = x;<br></td></tr
><tr
id=sl_svn524_650

><td class="source">    return pie;<br></td></tr
><tr
id=sl_svn524_651

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_652

><td class="source"><br></td></tr
><tr
id=sl_svn524_653

><td class="source">  /**<br></td></tr
><tr
id=sl_svn524_654

><td class="source">   * Specifies the overall start angle of the pie chart. Defaults to 0. The<br></td></tr
><tr
id=sl_svn524_655

><td class="source">   * start angle can be specified either as a constant or as a function; in the<br></td></tr
><tr
id=sl_svn524_656

><td class="source">   * case of a function, it is evaluated once per array (as opposed to per<br></td></tr
><tr
id=sl_svn524_657

><td class="source">   * element).<br></td></tr
><tr
id=sl_svn524_658

><td class="source">   */<br></td></tr
><tr
id=sl_svn524_659

><td class="source">  pie.startAngle = function(x) {<br></td></tr
><tr
id=sl_svn524_660

><td class="source">    if (!arguments.length) return startAngle;<br></td></tr
><tr
id=sl_svn524_661

><td class="source">    startAngle = x;<br></td></tr
><tr
id=sl_svn524_662

><td class="source">    return pie;<br></td></tr
><tr
id=sl_svn524_663

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_664

><td class="source"><br></td></tr
><tr
id=sl_svn524_665

><td class="source">  /**<br></td></tr
><tr
id=sl_svn524_666

><td class="source">   * Specifies the overall end angle of the pie chart. Defaults to 2π. The<br></td></tr
><tr
id=sl_svn524_667

><td class="source">   * end angle can be specified either as a constant or as a function; in the<br></td></tr
><tr
id=sl_svn524_668

><td class="source">   * case of a function, it is evaluated once per array (as opposed to per<br></td></tr
><tr
id=sl_svn524_669

><td class="source">   * element).<br></td></tr
><tr
id=sl_svn524_670

><td class="source">   */<br></td></tr
><tr
id=sl_svn524_671

><td class="source">  pie.endAngle = function(x) {<br></td></tr
><tr
id=sl_svn524_672

><td class="source">    if (!arguments.length) return endAngle;<br></td></tr
><tr
id=sl_svn524_673

><td class="source">    endAngle = x;<br></td></tr
><tr
id=sl_svn524_674

><td class="source">    return pie;<br></td></tr
><tr
id=sl_svn524_675

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_676

><td class="source"><br></td></tr
><tr
id=sl_svn524_677

><td class="source">  return pie;<br></td></tr
><tr
id=sl_svn524_678

><td class="source">};<br></td></tr
><tr
id=sl_svn524_679

><td class="source">// data is two-dimensional array of x,y; we populate y0<br></td></tr
><tr
id=sl_svn524_680

><td class="source">d3.layout.stack = function() {<br></td></tr
><tr
id=sl_svn524_681

><td class="source">  var values = Object,<br></td></tr
><tr
id=sl_svn524_682

><td class="source">      order = d3_layout_stackOrders[&quot;default&quot;],<br></td></tr
><tr
id=sl_svn524_683

><td class="source">      offset = d3_layout_stackOffsets[&quot;zero&quot;],<br></td></tr
><tr
id=sl_svn524_684

><td class="source">      out = d3_layout_stackOut,<br></td></tr
><tr
id=sl_svn524_685

><td class="source">      x = d3_layout_stackX,<br></td></tr
><tr
id=sl_svn524_686

><td class="source">      y = d3_layout_stackY;<br></td></tr
><tr
id=sl_svn524_687

><td class="source"><br></td></tr
><tr
id=sl_svn524_688

><td class="source">  function stack(data, index) {<br></td></tr
><tr
id=sl_svn524_689

><td class="source"><br></td></tr
><tr
id=sl_svn524_690

><td class="source">    // Convert series to canonical two-dimensional representation.<br></td></tr
><tr
id=sl_svn524_691

><td class="source">    var series = data.map(function(d, i) {<br></td></tr
><tr
id=sl_svn524_692

><td class="source">      return values.call(stack, d, i);<br></td></tr
><tr
id=sl_svn524_693

><td class="source">    });<br></td></tr
><tr
id=sl_svn524_694

><td class="source"><br></td></tr
><tr
id=sl_svn524_695

><td class="source">    // Convert each series to canonical [[x,y]] representation.<br></td></tr
><tr
id=sl_svn524_696

><td class="source">    var points = series.map(function(d, i) {<br></td></tr
><tr
id=sl_svn524_697

><td class="source">      return d.map(function(v, i) {<br></td></tr
><tr
id=sl_svn524_698

><td class="source">        return [x.call(stack, v, i), y.call(stack, v, i)];<br></td></tr
><tr
id=sl_svn524_699

><td class="source">      });<br></td></tr
><tr
id=sl_svn524_700

><td class="source">    });<br></td></tr
><tr
id=sl_svn524_701

><td class="source"><br></td></tr
><tr
id=sl_svn524_702

><td class="source">    // Compute the order of series, and permute them.<br></td></tr
><tr
id=sl_svn524_703

><td class="source">    var orders = order.call(stack, points, index);<br></td></tr
><tr
id=sl_svn524_704

><td class="source">    series = d3.permute(series, orders);<br></td></tr
><tr
id=sl_svn524_705

><td class="source">    points = d3.permute(points, orders);<br></td></tr
><tr
id=sl_svn524_706

><td class="source"><br></td></tr
><tr
id=sl_svn524_707

><td class="source">    // Compute the baseline…<br></td></tr
><tr
id=sl_svn524_708

><td class="source">    var offsets = offset.call(stack, points, index);<br></td></tr
><tr
id=sl_svn524_709

><td class="source"><br></td></tr
><tr
id=sl_svn524_710

><td class="source">    // And propagate it to other series.<br></td></tr
><tr
id=sl_svn524_711

><td class="source">    var n = series.length,<br></td></tr
><tr
id=sl_svn524_712

><td class="source">        m = series[0].length,<br></td></tr
><tr
id=sl_svn524_713

><td class="source">        i,<br></td></tr
><tr
id=sl_svn524_714

><td class="source">        j,<br></td></tr
><tr
id=sl_svn524_715

><td class="source">        o;<br></td></tr
><tr
id=sl_svn524_716

><td class="source">    for (j = 0; j &lt; m; ++j) {<br></td></tr
><tr
id=sl_svn524_717

><td class="source">      out.call(stack, series[0][j], o = offsets[j], points[0][j][1]);<br></td></tr
><tr
id=sl_svn524_718

><td class="source">      for (i = 1; i &lt; n; ++i) {<br></td></tr
><tr
id=sl_svn524_719

><td class="source">        out.call(stack, series[i][j], o += points[i - 1][j][1], points[i][j][1]);<br></td></tr
><tr
id=sl_svn524_720

><td class="source">      }<br></td></tr
><tr
id=sl_svn524_721

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_722

><td class="source"><br></td></tr
><tr
id=sl_svn524_723

><td class="source">    return data;<br></td></tr
><tr
id=sl_svn524_724

><td class="source">  }<br></td></tr
><tr
id=sl_svn524_725

><td class="source"><br></td></tr
><tr
id=sl_svn524_726

><td class="source">  stack.values = function(x) {<br></td></tr
><tr
id=sl_svn524_727

><td class="source">    if (!arguments.length) return values;<br></td></tr
><tr
id=sl_svn524_728

><td class="source">    values = x;<br></td></tr
><tr
id=sl_svn524_729

><td class="source">    return stack;<br></td></tr
><tr
id=sl_svn524_730

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_731

><td class="source"><br></td></tr
><tr
id=sl_svn524_732

><td class="source">  stack.order = function(x) {<br></td></tr
><tr
id=sl_svn524_733

><td class="source">    if (!arguments.length) return order;<br></td></tr
><tr
id=sl_svn524_734

><td class="source">    order = typeof x === &quot;function&quot; ? x : d3_layout_stackOrders[x];<br></td></tr
><tr
id=sl_svn524_735

><td class="source">    return stack;<br></td></tr
><tr
id=sl_svn524_736

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_737

><td class="source"><br></td></tr
><tr
id=sl_svn524_738

><td class="source">  stack.offset = function(x) {<br></td></tr
><tr
id=sl_svn524_739

><td class="source">    if (!arguments.length) return offset;<br></td></tr
><tr
id=sl_svn524_740

><td class="source">    offset = typeof x === &quot;function&quot; ? x : d3_layout_stackOffsets[x];<br></td></tr
><tr
id=sl_svn524_741

><td class="source">    return stack;<br></td></tr
><tr
id=sl_svn524_742

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_743

><td class="source"><br></td></tr
><tr
id=sl_svn524_744

><td class="source">  stack.x = function(z) {<br></td></tr
><tr
id=sl_svn524_745

><td class="source">    if (!arguments.length) return x;<br></td></tr
><tr
id=sl_svn524_746

><td class="source">    x = z;<br></td></tr
><tr
id=sl_svn524_747

><td class="source">    return stack;<br></td></tr
><tr
id=sl_svn524_748

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_749

><td class="source"><br></td></tr
><tr
id=sl_svn524_750

><td class="source">  stack.y = function(z) {<br></td></tr
><tr
id=sl_svn524_751

><td class="source">    if (!arguments.length) return y;<br></td></tr
><tr
id=sl_svn524_752

><td class="source">    y = z;<br></td></tr
><tr
id=sl_svn524_753

><td class="source">    return stack;<br></td></tr
><tr
id=sl_svn524_754

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_755

><td class="source"><br></td></tr
><tr
id=sl_svn524_756

><td class="source">  stack.out = function(z) {<br></td></tr
><tr
id=sl_svn524_757

><td class="source">    if (!arguments.length) return out;<br></td></tr
><tr
id=sl_svn524_758

><td class="source">    out = z;<br></td></tr
><tr
id=sl_svn524_759

><td class="source">    return stack;<br></td></tr
><tr
id=sl_svn524_760

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_761

><td class="source"><br></td></tr
><tr
id=sl_svn524_762

><td class="source">  return stack;<br></td></tr
><tr
id=sl_svn524_763

><td class="source">}<br></td></tr
><tr
id=sl_svn524_764

><td class="source"><br></td></tr
><tr
id=sl_svn524_765

><td class="source">function d3_layout_stackX(d) {<br></td></tr
><tr
id=sl_svn524_766

><td class="source">  return d.x;<br></td></tr
><tr
id=sl_svn524_767

><td class="source">}<br></td></tr
><tr
id=sl_svn524_768

><td class="source"><br></td></tr
><tr
id=sl_svn524_769

><td class="source">function d3_layout_stackY(d) {<br></td></tr
><tr
id=sl_svn524_770

><td class="source">  return d.y;<br></td></tr
><tr
id=sl_svn524_771

><td class="source">}<br></td></tr
><tr
id=sl_svn524_772

><td class="source"><br></td></tr
><tr
id=sl_svn524_773

><td class="source">function d3_layout_stackOut(d, y0, y) {<br></td></tr
><tr
id=sl_svn524_774

><td class="source">  d.y0 = y0;<br></td></tr
><tr
id=sl_svn524_775

><td class="source">  d.y = y;<br></td></tr
><tr
id=sl_svn524_776

><td class="source">}<br></td></tr
><tr
id=sl_svn524_777

><td class="source"><br></td></tr
><tr
id=sl_svn524_778

><td class="source">var d3_layout_stackOrders = {<br></td></tr
><tr
id=sl_svn524_779

><td class="source"><br></td></tr
><tr
id=sl_svn524_780

><td class="source">  &quot;inside-out&quot;: function(data) {<br></td></tr
><tr
id=sl_svn524_781

><td class="source">    var n = data.length,<br></td></tr
><tr
id=sl_svn524_782

><td class="source">        i,<br></td></tr
><tr
id=sl_svn524_783

><td class="source">        j,<br></td></tr
><tr
id=sl_svn524_784

><td class="source">        max = data.map(d3_layout_stackMaxIndex),<br></td></tr
><tr
id=sl_svn524_785

><td class="source">        sums = data.map(d3_layout_stackReduceSum),<br></td></tr
><tr
id=sl_svn524_786

><td class="source">        index = d3.range(n).sort(function(a, b) { return max[a] - max[b]; }),<br></td></tr
><tr
id=sl_svn524_787

><td class="source">        top = 0,<br></td></tr
><tr
id=sl_svn524_788

><td class="source">        bottom = 0,<br></td></tr
><tr
id=sl_svn524_789

><td class="source">        tops = [],<br></td></tr
><tr
id=sl_svn524_790

><td class="source">        bottoms = [];<br></td></tr
><tr
id=sl_svn524_791

><td class="source">    for (i = 0; i &lt; n; ++i) {<br></td></tr
><tr
id=sl_svn524_792

><td class="source">      j = index[i];<br></td></tr
><tr
id=sl_svn524_793

><td class="source">      if (top &lt; bottom) {<br></td></tr
><tr
id=sl_svn524_794

><td class="source">        top += sums[j];<br></td></tr
><tr
id=sl_svn524_795

><td class="source">        tops.push(j);<br></td></tr
><tr
id=sl_svn524_796

><td class="source">      } else {<br></td></tr
><tr
id=sl_svn524_797

><td class="source">        bottom += sums[j];<br></td></tr
><tr
id=sl_svn524_798

><td class="source">        bottoms.push(j);<br></td></tr
><tr
id=sl_svn524_799

><td class="source">      }<br></td></tr
><tr
id=sl_svn524_800

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_801

><td class="source">    return bottoms.reverse().concat(tops);<br></td></tr
><tr
id=sl_svn524_802

><td class="source">  },<br></td></tr
><tr
id=sl_svn524_803

><td class="source"><br></td></tr
><tr
id=sl_svn524_804

><td class="source">  &quot;reverse&quot;: function(data) {<br></td></tr
><tr
id=sl_svn524_805

><td class="source">    return d3.range(data.length).reverse();<br></td></tr
><tr
id=sl_svn524_806

><td class="source">  },<br></td></tr
><tr
id=sl_svn524_807

><td class="source"><br></td></tr
><tr
id=sl_svn524_808

><td class="source">  &quot;default&quot;: function(data) {<br></td></tr
><tr
id=sl_svn524_809

><td class="source">    return d3.range(data.length);<br></td></tr
><tr
id=sl_svn524_810

><td class="source">  }<br></td></tr
><tr
id=sl_svn524_811

><td class="source"><br></td></tr
><tr
id=sl_svn524_812

><td class="source">};<br></td></tr
><tr
id=sl_svn524_813

><td class="source"><br></td></tr
><tr
id=sl_svn524_814

><td class="source">var d3_layout_stackOffsets = {<br></td></tr
><tr
id=sl_svn524_815

><td class="source"><br></td></tr
><tr
id=sl_svn524_816

><td class="source">  &quot;silhouette&quot;: function(data) {<br></td></tr
><tr
id=sl_svn524_817

><td class="source">    var n = data.length,<br></td></tr
><tr
id=sl_svn524_818

><td class="source">        m = data[0].length,<br></td></tr
><tr
id=sl_svn524_819

><td class="source">        sums = [],<br></td></tr
><tr
id=sl_svn524_820

><td class="source">        max = 0,<br></td></tr
><tr
id=sl_svn524_821

><td class="source">        i,<br></td></tr
><tr
id=sl_svn524_822

><td class="source">        j,<br></td></tr
><tr
id=sl_svn524_823

><td class="source">        o,<br></td></tr
><tr
id=sl_svn524_824

><td class="source">        y0 = [];<br></td></tr
><tr
id=sl_svn524_825

><td class="source">    for (j = 0; j &lt; m; ++j) {<br></td></tr
><tr
id=sl_svn524_826

><td class="source">      for (i = 0, o = 0; i &lt; n; i++) o += data[i][j][1];<br></td></tr
><tr
id=sl_svn524_827

><td class="source">      if (o &gt; max) max = o;<br></td></tr
><tr
id=sl_svn524_828

><td class="source">      sums.push(o);<br></td></tr
><tr
id=sl_svn524_829

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_830

><td class="source">    for (j = 0; j &lt; m; ++j) {<br></td></tr
><tr
id=sl_svn524_831

><td class="source">      y0[j] = (max - sums[j]) / 2;<br></td></tr
><tr
id=sl_svn524_832

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_833

><td class="source">    return y0;<br></td></tr
><tr
id=sl_svn524_834

><td class="source">  },<br></td></tr
><tr
id=sl_svn524_835

><td class="source"><br></td></tr
><tr
id=sl_svn524_836

><td class="source">  &quot;wiggle&quot;: function(data) {<br></td></tr
><tr
id=sl_svn524_837

><td class="source">    var n = data.length,<br></td></tr
><tr
id=sl_svn524_838

><td class="source">        x = data[0],<br></td></tr
><tr
id=sl_svn524_839

><td class="source">        m = x.length,<br></td></tr
><tr
id=sl_svn524_840

><td class="source">        max = 0,<br></td></tr
><tr
id=sl_svn524_841

><td class="source">        i,<br></td></tr
><tr
id=sl_svn524_842

><td class="source">        j,<br></td></tr
><tr
id=sl_svn524_843

><td class="source">        k,<br></td></tr
><tr
id=sl_svn524_844

><td class="source">        s1,<br></td></tr
><tr
id=sl_svn524_845

><td class="source">        s2,<br></td></tr
><tr
id=sl_svn524_846

><td class="source">        s3,<br></td></tr
><tr
id=sl_svn524_847

><td class="source">        dx,<br></td></tr
><tr
id=sl_svn524_848

><td class="source">        o,<br></td></tr
><tr
id=sl_svn524_849

><td class="source">        o0,<br></td></tr
><tr
id=sl_svn524_850

><td class="source">        y0 = [];<br></td></tr
><tr
id=sl_svn524_851

><td class="source">    y0[0] = o = o0 = 0;<br></td></tr
><tr
id=sl_svn524_852

><td class="source">    for (j = 1; j &lt; m; ++j) {<br></td></tr
><tr
id=sl_svn524_853

><td class="source">      for (i = 0, s1 = 0; i &lt; n; ++i) s1 += data[i][j][1];<br></td></tr
><tr
id=sl_svn524_854

><td class="source">      for (i = 0, s2 = 0, dx = x[j][0] - x[j - 1][0]; i &lt; n; ++i) {<br></td></tr
><tr
id=sl_svn524_855

><td class="source">        for (k = 0, s3 = (data[i][j][1] - data[i][j - 1][1]) / (2 * dx); k &lt; i; ++k) {<br></td></tr
><tr
id=sl_svn524_856

><td class="source">          s3 += (data[k][j][1] - data[k][j - 1][1]) / dx;<br></td></tr
><tr
id=sl_svn524_857

><td class="source">        }<br></td></tr
><tr
id=sl_svn524_858

><td class="source">        s2 += s3 * data[i][j][1];<br></td></tr
><tr
id=sl_svn524_859

><td class="source">      }<br></td></tr
><tr
id=sl_svn524_860

><td class="source">      y0[j] = o -= s1 ? s2 / s1 * dx : 0;<br></td></tr
><tr
id=sl_svn524_861

><td class="source">      if (o &lt; o0) o0 = o;<br></td></tr
><tr
id=sl_svn524_862

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_863

><td class="source">    for (j = 0; j &lt; m; ++j) y0[j] -= o0;<br></td></tr
><tr
id=sl_svn524_864

><td class="source">    return y0;<br></td></tr
><tr
id=sl_svn524_865

><td class="source">  },<br></td></tr
><tr
id=sl_svn524_866

><td class="source"><br></td></tr
><tr
id=sl_svn524_867

><td class="source">  &quot;expand&quot;: function(data) {<br></td></tr
><tr
id=sl_svn524_868

><td class="source">    var n = data.length,<br></td></tr
><tr
id=sl_svn524_869

><td class="source">        m = data[0].length,<br></td></tr
><tr
id=sl_svn524_870

><td class="source">        k = 1 / n,<br></td></tr
><tr
id=sl_svn524_871

><td class="source">        i,<br></td></tr
><tr
id=sl_svn524_872

><td class="source">        j,<br></td></tr
><tr
id=sl_svn524_873

><td class="source">        o,<br></td></tr
><tr
id=sl_svn524_874

><td class="source">        y0 = [];<br></td></tr
><tr
id=sl_svn524_875

><td class="source">    for (j = 0; j &lt; m; ++j) {<br></td></tr
><tr
id=sl_svn524_876

><td class="source">      for (i = 0, o = 0; i &lt; n; i++) o += data[i][j][1];<br></td></tr
><tr
id=sl_svn524_877

><td class="source">      if (o) for (i = 0; i &lt; n; i++) data[i][j][1] /= o;<br></td></tr
><tr
id=sl_svn524_878

><td class="source">      else for (i = 0; i &lt; n; i++) data[i][j][1] = k;<br></td></tr
><tr
id=sl_svn524_879

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_880

><td class="source">    for (j = 0; j &lt; m; ++j) y0[j] = 0;<br></td></tr
><tr
id=sl_svn524_881

><td class="source">    return y0;<br></td></tr
><tr
id=sl_svn524_882

><td class="source">  },<br></td></tr
><tr
id=sl_svn524_883

><td class="source"><br></td></tr
><tr
id=sl_svn524_884

><td class="source">  &quot;zero&quot;: function(data) {<br></td></tr
><tr
id=sl_svn524_885

><td class="source">    var j = -1,<br></td></tr
><tr
id=sl_svn524_886

><td class="source">        m = data[0].length,<br></td></tr
><tr
id=sl_svn524_887

><td class="source">        y0 = [];<br></td></tr
><tr
id=sl_svn524_888

><td class="source">    while (++j &lt; m) y0[j] = 0;<br></td></tr
><tr
id=sl_svn524_889

><td class="source">    return y0;<br></td></tr
><tr
id=sl_svn524_890

><td class="source">  }<br></td></tr
><tr
id=sl_svn524_891

><td class="source"><br></td></tr
><tr
id=sl_svn524_892

><td class="source">};<br></td></tr
><tr
id=sl_svn524_893

><td class="source"><br></td></tr
><tr
id=sl_svn524_894

><td class="source">function d3_layout_stackMaxIndex(array) {<br></td></tr
><tr
id=sl_svn524_895

><td class="source">  var i = 1,<br></td></tr
><tr
id=sl_svn524_896

><td class="source">      j = 0,<br></td></tr
><tr
id=sl_svn524_897

><td class="source">      v = array[0][1],<br></td></tr
><tr
id=sl_svn524_898

><td class="source">      k,<br></td></tr
><tr
id=sl_svn524_899

><td class="source">      n = array.length;<br></td></tr
><tr
id=sl_svn524_900

><td class="source">  for (; i &lt; n; ++i) {<br></td></tr
><tr
id=sl_svn524_901

><td class="source">    if ((k = array[i][1]) &gt; v) {<br></td></tr
><tr
id=sl_svn524_902

><td class="source">      j = i;<br></td></tr
><tr
id=sl_svn524_903

><td class="source">      v = k;<br></td></tr
><tr
id=sl_svn524_904

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_905

><td class="source">  }<br></td></tr
><tr
id=sl_svn524_906

><td class="source">  return j;<br></td></tr
><tr
id=sl_svn524_907

><td class="source">}<br></td></tr
><tr
id=sl_svn524_908

><td class="source"><br></td></tr
><tr
id=sl_svn524_909

><td class="source">function d3_layout_stackReduceSum(d) {<br></td></tr
><tr
id=sl_svn524_910

><td class="source">  return d.reduce(d3_layout_stackSum, 0);<br></td></tr
><tr
id=sl_svn524_911

><td class="source">}<br></td></tr
><tr
id=sl_svn524_912

><td class="source"><br></td></tr
><tr
id=sl_svn524_913

><td class="source">function d3_layout_stackSum(p, d) {<br></td></tr
><tr
id=sl_svn524_914

><td class="source">  return p + d[1];<br></td></tr
><tr
id=sl_svn524_915

><td class="source">}<br></td></tr
><tr
id=sl_svn524_916

><td class="source">d3.layout.histogram = function() {<br></td></tr
><tr
id=sl_svn524_917

><td class="source">  var frequency = true,<br></td></tr
><tr
id=sl_svn524_918

><td class="source">      valuer = Number,<br></td></tr
><tr
id=sl_svn524_919

><td class="source">      ranger = d3_layout_histogramRange,<br></td></tr
><tr
id=sl_svn524_920

><td class="source">      binner = d3_layout_histogramBinSturges;<br></td></tr
><tr
id=sl_svn524_921

><td class="source"><br></td></tr
><tr
id=sl_svn524_922

><td class="source">  function histogram(data, i) {<br></td></tr
><tr
id=sl_svn524_923

><td class="source">    var bins = [],<br></td></tr
><tr
id=sl_svn524_924

><td class="source">        values = data.map(valuer, this),<br></td></tr
><tr
id=sl_svn524_925

><td class="source">        range = ranger.call(this, values, i),<br></td></tr
><tr
id=sl_svn524_926

><td class="source">        thresholds = binner.call(this, range, values, i),<br></td></tr
><tr
id=sl_svn524_927

><td class="source">        bin,<br></td></tr
><tr
id=sl_svn524_928

><td class="source">        i = -1,<br></td></tr
><tr
id=sl_svn524_929

><td class="source">        n = values.length,<br></td></tr
><tr
id=sl_svn524_930

><td class="source">        m = thresholds.length - 1,<br></td></tr
><tr
id=sl_svn524_931

><td class="source">        k = frequency ? 1 : 1 / n,<br></td></tr
><tr
id=sl_svn524_932

><td class="source">        x;<br></td></tr
><tr
id=sl_svn524_933

><td class="source"><br></td></tr
><tr
id=sl_svn524_934

><td class="source">    // Initialize the bins.<br></td></tr
><tr
id=sl_svn524_935

><td class="source">    while (++i &lt; m) {<br></td></tr
><tr
id=sl_svn524_936

><td class="source">      bin = bins[i] = [];<br></td></tr
><tr
id=sl_svn524_937

><td class="source">      bin.dx = thresholds[i + 1] - (bin.x = thresholds[i]);<br></td></tr
><tr
id=sl_svn524_938

><td class="source">      bin.y = 0;<br></td></tr
><tr
id=sl_svn524_939

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_940

><td class="source"><br></td></tr
><tr
id=sl_svn524_941

><td class="source">    // Fill the bins, ignoring values outside the range.<br></td></tr
><tr
id=sl_svn524_942

><td class="source">    i = -1; while(++i &lt; n) {<br></td></tr
><tr
id=sl_svn524_943

><td class="source">      x = values[i];<br></td></tr
><tr
id=sl_svn524_944

><td class="source">      if ((x &gt;= range[0]) &amp;&amp; (x &lt;= range[1])) {<br></td></tr
><tr
id=sl_svn524_945

><td class="source">        bin = bins[d3.bisect(thresholds, x, 1, m) - 1];<br></td></tr
><tr
id=sl_svn524_946

><td class="source">        bin.y += k;<br></td></tr
><tr
id=sl_svn524_947

><td class="source">        bin.push(data[i]);<br></td></tr
><tr
id=sl_svn524_948

><td class="source">      }<br></td></tr
><tr
id=sl_svn524_949

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_950

><td class="source"><br></td></tr
><tr
id=sl_svn524_951

><td class="source">    return bins;<br></td></tr
><tr
id=sl_svn524_952

><td class="source">  }<br></td></tr
><tr
id=sl_svn524_953

><td class="source"><br></td></tr
><tr
id=sl_svn524_954

><td class="source">  // Specifies how to extract a value from the associated data. The default<br></td></tr
><tr
id=sl_svn524_955

><td class="source">  // value function is `Number`, which is equivalent to the identity function.<br></td></tr
><tr
id=sl_svn524_956

><td class="source">  histogram.value = function(x) {<br></td></tr
><tr
id=sl_svn524_957

><td class="source">    if (!arguments.length) return valuer;<br></td></tr
><tr
id=sl_svn524_958

><td class="source">    valuer = x;<br></td></tr
><tr
id=sl_svn524_959

><td class="source">    return histogram;<br></td></tr
><tr
id=sl_svn524_960

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_961

><td class="source"><br></td></tr
><tr
id=sl_svn524_962

><td class="source">  // Specifies the range of the histogram. Values outside the specified range<br></td></tr
><tr
id=sl_svn524_963

><td class="source">  // will be ignored. The argument `x` may be specified either as a two-element<br></td></tr
><tr
id=sl_svn524_964

><td class="source">  // array representing the minimum and maximum value of the range, or as a<br></td></tr
><tr
id=sl_svn524_965

><td class="source">  // function that returns the range given the array of values and the current<br></td></tr
><tr
id=sl_svn524_966

><td class="source">  // index `i`. The default range is the extent (minimum and maximum) of the<br></td></tr
><tr
id=sl_svn524_967

><td class="source">  // values.<br></td></tr
><tr
id=sl_svn524_968

><td class="source">  histogram.range = function(x) {<br></td></tr
><tr
id=sl_svn524_969

><td class="source">    if (!arguments.length) return ranger;<br></td></tr
><tr
id=sl_svn524_970

><td class="source">    ranger = d3.functor(x);<br></td></tr
><tr
id=sl_svn524_971

><td class="source">    return histogram;<br></td></tr
><tr
id=sl_svn524_972

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_973

><td class="source"><br></td></tr
><tr
id=sl_svn524_974

><td class="source">  // Specifies how to bin values in the histogram. The argument `x` may be<br></td></tr
><tr
id=sl_svn524_975

><td class="source">  // specified as a number, in which case the range of values will be split<br></td></tr
><tr
id=sl_svn524_976

><td class="source">  // uniformly into the given number of bins. Or, `x` may be an array of<br></td></tr
><tr
id=sl_svn524_977

><td class="source">  // threshold values, defining the bins; the specified array must contain the<br></td></tr
><tr
id=sl_svn524_978

><td class="source">  // rightmost (upper) value, thus specifying n + 1 values for n bins. Or, `x`<br></td></tr
><tr
id=sl_svn524_979

><td class="source">  // may be a function which is evaluated, being passed the range, the array of<br></td></tr
><tr
id=sl_svn524_980

><td class="source">  // values, and the current index `i`, returning an array of thresholds. The<br></td></tr
><tr
id=sl_svn524_981

><td class="source">  // default bin function will divide the values into uniform bins using<br></td></tr
><tr
id=sl_svn524_982

><td class="source">  // Sturges&#39; formula.<br></td></tr
><tr
id=sl_svn524_983

><td class="source">  histogram.bins = function(x) {<br></td></tr
><tr
id=sl_svn524_984

><td class="source">    if (!arguments.length) return binner;<br></td></tr
><tr
id=sl_svn524_985

><td class="source">    binner = typeof x === &quot;number&quot;<br></td></tr
><tr
id=sl_svn524_986

><td class="source">        ? function(range) { return d3_layout_histogramBinFixed(range, x); }<br></td></tr
><tr
id=sl_svn524_987

><td class="source">        : d3.functor(x);<br></td></tr
><tr
id=sl_svn524_988

><td class="source">    return histogram;<br></td></tr
><tr
id=sl_svn524_989

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_990

><td class="source"><br></td></tr
><tr
id=sl_svn524_991

><td class="source">  // Specifies whether the histogram&#39;s `y` value is a count (frequency) or a<br></td></tr
><tr
id=sl_svn524_992

><td class="source">  // probability (density). The default value is true.<br></td></tr
><tr
id=sl_svn524_993

><td class="source">  histogram.frequency = function(x) {<br></td></tr
><tr
id=sl_svn524_994

><td class="source">    if (!arguments.length) return frequency;<br></td></tr
><tr
id=sl_svn524_995

><td class="source">    frequency = !!x;<br></td></tr
><tr
id=sl_svn524_996

><td class="source">    return histogram;<br></td></tr
><tr
id=sl_svn524_997

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_998

><td class="source"><br></td></tr
><tr
id=sl_svn524_999

><td class="source">  return histogram;<br></td></tr
><tr
id=sl_svn524_1000

><td class="source">};<br></td></tr
><tr
id=sl_svn524_1001

><td class="source"><br></td></tr
><tr
id=sl_svn524_1002

><td class="source">function d3_layout_histogramBinSturges(range, values) {<br></td></tr
><tr
id=sl_svn524_1003

><td class="source">  return d3_layout_histogramBinFixed(range, Math.ceil(Math.log(values.length) / Math.LN2 + 1));<br></td></tr
><tr
id=sl_svn524_1004

><td class="source">}<br></td></tr
><tr
id=sl_svn524_1005

><td class="source"><br></td></tr
><tr
id=sl_svn524_1006

><td class="source">function d3_layout_histogramBinFixed(range, n) {<br></td></tr
><tr
id=sl_svn524_1007

><td class="source">  var x = -1,<br></td></tr
><tr
id=sl_svn524_1008

><td class="source">      b = +range[0],<br></td></tr
><tr
id=sl_svn524_1009

><td class="source">      m = (range[1] - b) / n,<br></td></tr
><tr
id=sl_svn524_1010

><td class="source">      f = [];<br></td></tr
><tr
id=sl_svn524_1011

><td class="source">  while (++x &lt;= n) f[x] = m * x + b;<br></td></tr
><tr
id=sl_svn524_1012

><td class="source">  return f;<br></td></tr
><tr
id=sl_svn524_1013

><td class="source">}<br></td></tr
><tr
id=sl_svn524_1014

><td class="source"><br></td></tr
><tr
id=sl_svn524_1015

><td class="source">function d3_layout_histogramRange(values) {<br></td></tr
><tr
id=sl_svn524_1016

><td class="source">  return [d3.min(values), d3.max(values)];<br></td></tr
><tr
id=sl_svn524_1017

><td class="source">}<br></td></tr
><tr
id=sl_svn524_1018

><td class="source">d3.layout.hierarchy = function() {<br></td></tr
><tr
id=sl_svn524_1019

><td class="source">  var sort = d3_layout_hierarchySort,<br></td></tr
><tr
id=sl_svn524_1020

><td class="source">      children = d3_layout_hierarchyChildren,<br></td></tr
><tr
id=sl_svn524_1021

><td class="source">      value = d3_layout_hierarchyValue;<br></td></tr
><tr
id=sl_svn524_1022

><td class="source"><br></td></tr
><tr
id=sl_svn524_1023

><td class="source">  // Recursively compute the node depth and value.<br></td></tr
><tr
id=sl_svn524_1024

><td class="source">  // Also converts the data representation into a standard hierarchy structure.<br></td></tr
><tr
id=sl_svn524_1025

><td class="source">  function recurse(data, depth, nodes) {<br></td></tr
><tr
id=sl_svn524_1026

><td class="source">    var childs = children.call(hierarchy, data, depth),<br></td></tr
><tr
id=sl_svn524_1027

><td class="source">        node = d3_layout_hierarchyInline ? data : {data: data};<br></td></tr
><tr
id=sl_svn524_1028

><td class="source">    node.depth = depth;<br></td></tr
><tr
id=sl_svn524_1029

><td class="source">    nodes.push(node);<br></td></tr
><tr
id=sl_svn524_1030

><td class="source">    if (childs) {<br></td></tr
><tr
id=sl_svn524_1031

><td class="source">      var i = -1,<br></td></tr
><tr
id=sl_svn524_1032

><td class="source">          n = childs.length,<br></td></tr
><tr
id=sl_svn524_1033

><td class="source">          c = node.children = [],<br></td></tr
><tr
id=sl_svn524_1034

><td class="source">          v = 0,<br></td></tr
><tr
id=sl_svn524_1035

><td class="source">          j = depth + 1;<br></td></tr
><tr
id=sl_svn524_1036

><td class="source">      while (++i &lt; n) {<br></td></tr
><tr
id=sl_svn524_1037

><td class="source">        d = recurse(childs[i], j, nodes);<br></td></tr
><tr
id=sl_svn524_1038

><td class="source">        d.parent = node;<br></td></tr
><tr
id=sl_svn524_1039

><td class="source">        c.push(d);<br></td></tr
><tr
id=sl_svn524_1040

><td class="source">        v += d.value;<br></td></tr
><tr
id=sl_svn524_1041

><td class="source">      }<br></td></tr
><tr
id=sl_svn524_1042

><td class="source">      if (sort) c.sort(sort);<br></td></tr
><tr
id=sl_svn524_1043

><td class="source">      if (value) node.value = v;<br></td></tr
><tr
id=sl_svn524_1044

><td class="source">    } else if (value) {<br></td></tr
><tr
id=sl_svn524_1045

><td class="source">      node.value = +value.call(hierarchy, data, depth) || 0;<br></td></tr
><tr
id=sl_svn524_1046

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_1047

><td class="source">    return node;<br></td></tr
><tr
id=sl_svn524_1048

><td class="source">  }<br></td></tr
><tr
id=sl_svn524_1049

><td class="source"><br></td></tr
><tr
id=sl_svn524_1050

><td class="source">  // Recursively re-evaluates the node value.<br></td></tr
><tr
id=sl_svn524_1051

><td class="source">  function revalue(node, depth) {<br></td></tr
><tr
id=sl_svn524_1052

><td class="source">    var children = node.children,<br></td></tr
><tr
id=sl_svn524_1053

><td class="source">        v = 0;<br></td></tr
><tr
id=sl_svn524_1054

><td class="source">    if (children) {<br></td></tr
><tr
id=sl_svn524_1055

><td class="source">      var i = -1,<br></td></tr
><tr
id=sl_svn524_1056

><td class="source">          n = children.length,<br></td></tr
><tr
id=sl_svn524_1057

><td class="source">          j = depth + 1;<br></td></tr
><tr
id=sl_svn524_1058

><td class="source">      while (++i &lt; n) v += revalue(children[i], j);<br></td></tr
><tr
id=sl_svn524_1059

><td class="source">    } else if (value) {<br></td></tr
><tr
id=sl_svn524_1060

><td class="source">      v = +value.call(hierarchy, d3_layout_hierarchyInline ? node : node.data, depth) || 0;<br></td></tr
><tr
id=sl_svn524_1061

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_1062

><td class="source">    if (value) node.value = v;<br></td></tr
><tr
id=sl_svn524_1063

><td class="source">    return v;<br></td></tr
><tr
id=sl_svn524_1064

><td class="source">  }<br></td></tr
><tr
id=sl_svn524_1065

><td class="source"><br></td></tr
><tr
id=sl_svn524_1066

><td class="source">  function hierarchy(d) {<br></td></tr
><tr
id=sl_svn524_1067

><td class="source">    var nodes = [];<br></td></tr
><tr
id=sl_svn524_1068

><td class="source">    recurse(d, 0, nodes);<br></td></tr
><tr
id=sl_svn524_1069

><td class="source">    return nodes;<br></td></tr
><tr
id=sl_svn524_1070

><td class="source">  }<br></td></tr
><tr
id=sl_svn524_1071

><td class="source"><br></td></tr
><tr
id=sl_svn524_1072

><td class="source">  hierarchy.sort = function(x) {<br></td></tr
><tr
id=sl_svn524_1073

><td class="source">    if (!arguments.length) return sort;<br></td></tr
><tr
id=sl_svn524_1074

><td class="source">    sort = x;<br></td></tr
><tr
id=sl_svn524_1075

><td class="source">    return hierarchy;<br></td></tr
><tr
id=sl_svn524_1076

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_1077

><td class="source"><br></td></tr
><tr
id=sl_svn524_1078

><td class="source">  hierarchy.children = function(x) {<br></td></tr
><tr
id=sl_svn524_1079

><td class="source">    if (!arguments.length) return children;<br></td></tr
><tr
id=sl_svn524_1080

><td class="source">    children = x;<br></td></tr
><tr
id=sl_svn524_1081

><td class="source">    return hierarchy;<br></td></tr
><tr
id=sl_svn524_1082

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_1083

><td class="source"><br></td></tr
><tr
id=sl_svn524_1084

><td class="source">  hierarchy.value = function(x) {<br></td></tr
><tr
id=sl_svn524_1085

><td class="source">    if (!arguments.length) return value;<br></td></tr
><tr
id=sl_svn524_1086

><td class="source">    value = x;<br></td></tr
><tr
id=sl_svn524_1087

><td class="source">    return hierarchy;<br></td></tr
><tr
id=sl_svn524_1088

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_1089

><td class="source"><br></td></tr
><tr
id=sl_svn524_1090

><td class="source">  // Re-evaluates the `value` property for the specified hierarchy.<br></td></tr
><tr
id=sl_svn524_1091

><td class="source">  hierarchy.revalue = function(root) {<br></td></tr
><tr
id=sl_svn524_1092

><td class="source">    revalue(root, 0);<br></td></tr
><tr
id=sl_svn524_1093

><td class="source">    return root;<br></td></tr
><tr
id=sl_svn524_1094

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_1095

><td class="source"><br></td></tr
><tr
id=sl_svn524_1096

><td class="source">  return hierarchy;<br></td></tr
><tr
id=sl_svn524_1097

><td class="source">};<br></td></tr
><tr
id=sl_svn524_1098

><td class="source"><br></td></tr
><tr
id=sl_svn524_1099

><td class="source">// A method assignment helper for hierarchy subclasses.<br></td></tr
><tr
id=sl_svn524_1100

><td class="source">function d3_layout_hierarchyRebind(object, hierarchy) {<br></td></tr
><tr
id=sl_svn524_1101

><td class="source">  object.sort = d3.rebind(object, hierarchy.sort);<br></td></tr
><tr
id=sl_svn524_1102

><td class="source">  object.children = d3.rebind(object, hierarchy.children);<br></td></tr
><tr
id=sl_svn524_1103

><td class="source">  object.links = d3_layout_hierarchyLinks;<br></td></tr
><tr
id=sl_svn524_1104

><td class="source">  object.value = d3.rebind(object, hierarchy.value);<br></td></tr
><tr
id=sl_svn524_1105

><td class="source"><br></td></tr
><tr
id=sl_svn524_1106

><td class="source">  // If the new API is used, enabling inlining.<br></td></tr
><tr
id=sl_svn524_1107

><td class="source">  object.nodes = function(d) {<br></td></tr
><tr
id=sl_svn524_1108

><td class="source">    d3_layout_hierarchyInline = true;<br></td></tr
><tr
id=sl_svn524_1109

><td class="source">    return (object.nodes = object)(d);<br></td></tr
><tr
id=sl_svn524_1110

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_1111

><td class="source"><br></td></tr
><tr
id=sl_svn524_1112

><td class="source">  return object;<br></td></tr
><tr
id=sl_svn524_1113

><td class="source">}<br></td></tr
><tr
id=sl_svn524_1114

><td class="source"><br></td></tr
><tr
id=sl_svn524_1115

><td class="source">function d3_layout_hierarchyChildren(d) {<br></td></tr
><tr
id=sl_svn524_1116

><td class="source">  return d.children;<br></td></tr
><tr
id=sl_svn524_1117

><td class="source">}<br></td></tr
><tr
id=sl_svn524_1118

><td class="source"><br></td></tr
><tr
id=sl_svn524_1119

><td class="source">function d3_layout_hierarchyValue(d) {<br></td></tr
><tr
id=sl_svn524_1120

><td class="source">  return d.value;<br></td></tr
><tr
id=sl_svn524_1121

><td class="source">}<br></td></tr
><tr
id=sl_svn524_1122

><td class="source"><br></td></tr
><tr
id=sl_svn524_1123

><td class="source">function d3_layout_hierarchySort(a, b) {<br></td></tr
><tr
id=sl_svn524_1124

><td class="source">  return b.value - a.value;<br></td></tr
><tr
id=sl_svn524_1125

><td class="source">}<br></td></tr
><tr
id=sl_svn524_1126

><td class="source"><br></td></tr
><tr
id=sl_svn524_1127

><td class="source">// Returns an array source+target objects for the specified nodes.<br></td></tr
><tr
id=sl_svn524_1128

><td class="source">function d3_layout_hierarchyLinks(nodes) {<br></td></tr
><tr
id=sl_svn524_1129

><td class="source">  return d3.merge(nodes.map(function(parent) {<br></td></tr
><tr
id=sl_svn524_1130

><td class="source">    return (parent.children || []).map(function(child) {<br></td></tr
><tr
id=sl_svn524_1131

><td class="source">      return {source: parent, target: child};<br></td></tr
><tr
id=sl_svn524_1132

><td class="source">    });<br></td></tr
><tr
id=sl_svn524_1133

><td class="source">  }));<br></td></tr
><tr
id=sl_svn524_1134

><td class="source">}<br></td></tr
><tr
id=sl_svn524_1135

><td class="source"><br></td></tr
><tr
id=sl_svn524_1136

><td class="source">// For backwards-compatibility, don&#39;t enable inlining by default.<br></td></tr
><tr
id=sl_svn524_1137

><td class="source">var d3_layout_hierarchyInline = false;<br></td></tr
><tr
id=sl_svn524_1138

><td class="source">d3.layout.pack = function() {<br></td></tr
><tr
id=sl_svn524_1139

><td class="source">  var hierarchy = d3.layout.hierarchy().sort(d3_layout_packSort),<br></td></tr
><tr
id=sl_svn524_1140

><td class="source">      size = [1, 1];<br></td></tr
><tr
id=sl_svn524_1141

><td class="source"><br></td></tr
><tr
id=sl_svn524_1142

><td class="source">  function pack(d, i) {<br></td></tr
><tr
id=sl_svn524_1143

><td class="source">    var nodes = hierarchy.call(this, d, i),<br></td></tr
><tr
id=sl_svn524_1144

><td class="source">        root = nodes[0];<br></td></tr
><tr
id=sl_svn524_1145

><td class="source"><br></td></tr
><tr
id=sl_svn524_1146

><td class="source">    // Recursively compute the layout.<br></td></tr
><tr
id=sl_svn524_1147

><td class="source">    root.x = 0;<br></td></tr
><tr
id=sl_svn524_1148

><td class="source">    root.y = 0;<br></td></tr
><tr
id=sl_svn524_1149

><td class="source">    d3_layout_packTree(root);<br></td></tr
><tr
id=sl_svn524_1150

><td class="source"><br></td></tr
><tr
id=sl_svn524_1151

><td class="source">    // Scale the layout to fit the requested size.<br></td></tr
><tr
id=sl_svn524_1152

><td class="source">    var w = size[0],<br></td></tr
><tr
id=sl_svn524_1153

><td class="source">        h = size[1],<br></td></tr
><tr
id=sl_svn524_1154

><td class="source">        k = 1 / Math.max(2 * root.r / w, 2 * root.r / h);<br></td></tr
><tr
id=sl_svn524_1155

><td class="source">    d3_layout_packTransform(root, w / 2, h / 2, k);<br></td></tr
><tr
id=sl_svn524_1156

><td class="source"><br></td></tr
><tr
id=sl_svn524_1157

><td class="source">    return nodes;<br></td></tr
><tr
id=sl_svn524_1158

><td class="source">  }<br></td></tr
><tr
id=sl_svn524_1159

><td class="source"><br></td></tr
><tr
id=sl_svn524_1160

><td class="source">  pack.size = function(x) {<br></td></tr
><tr
id=sl_svn524_1161

><td class="source">    if (!arguments.length) return size;<br></td></tr
><tr
id=sl_svn524_1162

><td class="source">    size = x;<br></td></tr
><tr
id=sl_svn524_1163

><td class="source">    return pack;<br></td></tr
><tr
id=sl_svn524_1164

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_1165

><td class="source"><br></td></tr
><tr
id=sl_svn524_1166

><td class="source">  return d3_layout_hierarchyRebind(pack, hierarchy);<br></td></tr
><tr
id=sl_svn524_1167

><td class="source">};<br></td></tr
><tr
id=sl_svn524_1168

><td class="source"><br></td></tr
><tr
id=sl_svn524_1169

><td class="source">function d3_layout_packSort(a, b) {<br></td></tr
><tr
id=sl_svn524_1170

><td class="source">  return a.value - b.value;<br></td></tr
><tr
id=sl_svn524_1171

><td class="source">}<br></td></tr
><tr
id=sl_svn524_1172

><td class="source"><br></td></tr
><tr
id=sl_svn524_1173

><td class="source">function d3_layout_packInsert(a, b) {<br></td></tr
><tr
id=sl_svn524_1174

><td class="source">  var c = a._pack_next;<br></td></tr
><tr
id=sl_svn524_1175

><td class="source">  a._pack_next = b;<br></td></tr
><tr
id=sl_svn524_1176

><td class="source">  b._pack_prev = a;<br></td></tr
><tr
id=sl_svn524_1177

><td class="source">  b._pack_next = c;<br></td></tr
><tr
id=sl_svn524_1178

><td class="source">  c._pack_prev = b;<br></td></tr
><tr
id=sl_svn524_1179

><td class="source">}<br></td></tr
><tr
id=sl_svn524_1180

><td class="source"><br></td></tr
><tr
id=sl_svn524_1181

><td class="source">function d3_layout_packSplice(a, b) {<br></td></tr
><tr
id=sl_svn524_1182

><td class="source">  a._pack_next = b;<br></td></tr
><tr
id=sl_svn524_1183

><td class="source">  b._pack_prev = a;<br></td></tr
><tr
id=sl_svn524_1184

><td class="source">}<br></td></tr
><tr
id=sl_svn524_1185

><td class="source"><br></td></tr
><tr
id=sl_svn524_1186

><td class="source">function d3_layout_packIntersects(a, b) {<br></td></tr
><tr
id=sl_svn524_1187

><td class="source">  var dx = b.x - a.x,<br></td></tr
><tr
id=sl_svn524_1188

><td class="source">      dy = b.y - a.y,<br></td></tr
><tr
id=sl_svn524_1189

><td class="source">      dr = a.r + b.r;<br></td></tr
><tr
id=sl_svn524_1190

><td class="source">  return (dr * dr - dx * dx - dy * dy) &gt; .001; // within epsilon<br></td></tr
><tr
id=sl_svn524_1191

><td class="source">}<br></td></tr
><tr
id=sl_svn524_1192

><td class="source"><br></td></tr
><tr
id=sl_svn524_1193

><td class="source">function d3_layout_packCircle(nodes) {<br></td></tr
><tr
id=sl_svn524_1194

><td class="source">  var xMin = Infinity,<br></td></tr
><tr
id=sl_svn524_1195

><td class="source">      xMax = -Infinity,<br></td></tr
><tr
id=sl_svn524_1196

><td class="source">      yMin = Infinity,<br></td></tr
><tr
id=sl_svn524_1197

><td class="source">      yMax = -Infinity,<br></td></tr
><tr
id=sl_svn524_1198

><td class="source">      n = nodes.length,<br></td></tr
><tr
id=sl_svn524_1199

><td class="source">      a, b, c, j, k;<br></td></tr
><tr
id=sl_svn524_1200

><td class="source"><br></td></tr
><tr
id=sl_svn524_1201

><td class="source">  function bound(node) {<br></td></tr
><tr
id=sl_svn524_1202

><td class="source">    xMin = Math.min(node.x - node.r, xMin);<br></td></tr
><tr
id=sl_svn524_1203

><td class="source">    xMax = Math.max(node.x + node.r, xMax);<br></td></tr
><tr
id=sl_svn524_1204

><td class="source">    yMin = Math.min(node.y - node.r, yMin);<br></td></tr
><tr
id=sl_svn524_1205

><td class="source">    yMax = Math.max(node.y + node.r, yMax);<br></td></tr
><tr
id=sl_svn524_1206

><td class="source">  }<br></td></tr
><tr
id=sl_svn524_1207

><td class="source"><br></td></tr
><tr
id=sl_svn524_1208

><td class="source">  // Create node links.<br></td></tr
><tr
id=sl_svn524_1209

><td class="source">  nodes.forEach(d3_layout_packLink);<br></td></tr
><tr
id=sl_svn524_1210

><td class="source"><br></td></tr
><tr
id=sl_svn524_1211

><td class="source">  // Create first node.<br></td></tr
><tr
id=sl_svn524_1212

><td class="source">  a = nodes[0];<br></td></tr
><tr
id=sl_svn524_1213

><td class="source">  a.x = -a.r;<br></td></tr
><tr
id=sl_svn524_1214

><td class="source">  a.y = 0;<br></td></tr
><tr
id=sl_svn524_1215

><td class="source">  bound(a);<br></td></tr
><tr
id=sl_svn524_1216

><td class="source"><br></td></tr
><tr
id=sl_svn524_1217

><td class="source">  // Create second node.<br></td></tr
><tr
id=sl_svn524_1218

><td class="source">  if (n &gt; 1) {<br></td></tr
><tr
id=sl_svn524_1219

><td class="source">    b = nodes[1];<br></td></tr
><tr
id=sl_svn524_1220

><td class="source">    b.x = b.r;<br></td></tr
><tr
id=sl_svn524_1221

><td class="source">    b.y = 0;<br></td></tr
><tr
id=sl_svn524_1222

><td class="source">    bound(b);<br></td></tr
><tr
id=sl_svn524_1223

><td class="source"><br></td></tr
><tr
id=sl_svn524_1224

><td class="source">    // Create third node and build chain.<br></td></tr
><tr
id=sl_svn524_1225

><td class="source">    if (n &gt; 2) {<br></td></tr
><tr
id=sl_svn524_1226

><td class="source">      c = nodes[2];<br></td></tr
><tr
id=sl_svn524_1227

><td class="source">      d3_layout_packPlace(a, b, c);<br></td></tr
><tr
id=sl_svn524_1228

><td class="source">      bound(c);<br></td></tr
><tr
id=sl_svn524_1229

><td class="source">      d3_layout_packInsert(a, c);<br></td></tr
><tr
id=sl_svn524_1230

><td class="source">      a._pack_prev = c;<br></td></tr
><tr
id=sl_svn524_1231

><td class="source">      d3_layout_packInsert(c, b);<br></td></tr
><tr
id=sl_svn524_1232

><td class="source">      b = a._pack_next;<br></td></tr
><tr
id=sl_svn524_1233

><td class="source"><br></td></tr
><tr
id=sl_svn524_1234

><td class="source">      // Now iterate through the rest.<br></td></tr
><tr
id=sl_svn524_1235

><td class="source">      for (var i = 3; i &lt; n; i++) {<br></td></tr
><tr
id=sl_svn524_1236

><td class="source">        d3_layout_packPlace(a, b, c = nodes[i]);<br></td></tr
><tr
id=sl_svn524_1237

><td class="source"><br></td></tr
><tr
id=sl_svn524_1238

><td class="source">        // Search for the closest intersection.<br></td></tr
><tr
id=sl_svn524_1239

><td class="source">        var isect = 0, s1 = 1, s2 = 1;<br></td></tr
><tr
id=sl_svn524_1240

><td class="source">        for (j = b._pack_next; j !== b; j = j._pack_next, s1++) {<br></td></tr
><tr
id=sl_svn524_1241

><td class="source">          if (d3_layout_packIntersects(j, c)) {<br></td></tr
><tr
id=sl_svn524_1242

><td class="source">            isect = 1;<br></td></tr
><tr
id=sl_svn524_1243

><td class="source">            break;<br></td></tr
><tr
id=sl_svn524_1244

><td class="source">          }<br></td></tr
><tr
id=sl_svn524_1245

><td class="source">        }<br></td></tr
><tr
id=sl_svn524_1246

><td class="source">        if (isect == 1) {<br></td></tr
><tr
id=sl_svn524_1247

><td class="source">          for (k = a._pack_prev; k !== j._pack_prev; k = k._pack_prev, s2++) {<br></td></tr
><tr
id=sl_svn524_1248

><td class="source">            if (d3_layout_packIntersects(k, c)) {<br></td></tr
><tr
id=sl_svn524_1249

><td class="source">              if (s2 &lt; s1) {<br></td></tr
><tr
id=sl_svn524_1250

><td class="source">                isect = -1;<br></td></tr
><tr
id=sl_svn524_1251

><td class="source">                j = k;<br></td></tr
><tr
id=sl_svn524_1252

><td class="source">              }<br></td></tr
><tr
id=sl_svn524_1253

><td class="source">              break;<br></td></tr
><tr
id=sl_svn524_1254

><td class="source">            }<br></td></tr
><tr
id=sl_svn524_1255

><td class="source">          }<br></td></tr
><tr
id=sl_svn524_1256

><td class="source">        }<br></td></tr
><tr
id=sl_svn524_1257

><td class="source"><br></td></tr
><tr
id=sl_svn524_1258

><td class="source">        // Update node chain.<br></td></tr
><tr
id=sl_svn524_1259

><td class="source">        if (isect == 0) {<br></td></tr
><tr
id=sl_svn524_1260

><td class="source">          d3_layout_packInsert(a, c);<br></td></tr
><tr
id=sl_svn524_1261

><td class="source">          b = c;<br></td></tr
><tr
id=sl_svn524_1262

><td class="source">          bound(c);<br></td></tr
><tr
id=sl_svn524_1263

><td class="source">        } else if (isect &gt; 0) {<br></td></tr
><tr
id=sl_svn524_1264

><td class="source">          d3_layout_packSplice(a, j);<br></td></tr
><tr
id=sl_svn524_1265

><td class="source">          b = j;<br></td></tr
><tr
id=sl_svn524_1266

><td class="source">          i--;<br></td></tr
><tr
id=sl_svn524_1267

><td class="source">        } else { // isect &lt; 0<br></td></tr
><tr
id=sl_svn524_1268

><td class="source">          d3_layout_packSplice(j, b);<br></td></tr
><tr
id=sl_svn524_1269

><td class="source">          a = j;<br></td></tr
><tr
id=sl_svn524_1270

><td class="source">          i--;<br></td></tr
><tr
id=sl_svn524_1271

><td class="source">        }<br></td></tr
><tr
id=sl_svn524_1272

><td class="source">      }<br></td></tr
><tr
id=sl_svn524_1273

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_1274

><td class="source">  }<br></td></tr
><tr
id=sl_svn524_1275

><td class="source"><br></td></tr
><tr
id=sl_svn524_1276

><td class="source">  // Re-center the circles and return the encompassing radius.<br></td></tr
><tr
id=sl_svn524_1277

><td class="source">  var cx = (xMin + xMax) / 2,<br></td></tr
><tr
id=sl_svn524_1278

><td class="source">      cy = (yMin + yMax) / 2,<br></td></tr
><tr
id=sl_svn524_1279

><td class="source">      cr = 0;<br></td></tr
><tr
id=sl_svn524_1280

><td class="source">  for (var i = 0; i &lt; n; i++) {<br></td></tr
><tr
id=sl_svn524_1281

><td class="source">    var node = nodes[i];<br></td></tr
><tr
id=sl_svn524_1282

><td class="source">    node.x -= cx;<br></td></tr
><tr
id=sl_svn524_1283

><td class="source">    node.y -= cy;<br></td></tr
><tr
id=sl_svn524_1284

><td class="source">    cr = Math.max(cr, node.r + Math.sqrt(node.x * node.x + node.y * node.y));<br></td></tr
><tr
id=sl_svn524_1285

><td class="source">  }<br></td></tr
><tr
id=sl_svn524_1286

><td class="source"><br></td></tr
><tr
id=sl_svn524_1287

><td class="source">  // Remove node links.<br></td></tr
><tr
id=sl_svn524_1288

><td class="source">  nodes.forEach(d3_layout_packUnlink);<br></td></tr
><tr
id=sl_svn524_1289

><td class="source"><br></td></tr
><tr
id=sl_svn524_1290

><td class="source">  return cr;<br></td></tr
><tr
id=sl_svn524_1291

><td class="source">}<br></td></tr
><tr
id=sl_svn524_1292

><td class="source"><br></td></tr
><tr
id=sl_svn524_1293

><td class="source">function d3_layout_packLink(node) {<br></td></tr
><tr
id=sl_svn524_1294

><td class="source">  node._pack_next = node._pack_prev = node;<br></td></tr
><tr
id=sl_svn524_1295

><td class="source">}<br></td></tr
><tr
id=sl_svn524_1296

><td class="source"><br></td></tr
><tr
id=sl_svn524_1297

><td class="source">function d3_layout_packUnlink(node) {<br></td></tr
><tr
id=sl_svn524_1298

><td class="source">  delete node._pack_next;<br></td></tr
><tr
id=sl_svn524_1299

><td class="source">  delete node._pack_prev;<br></td></tr
><tr
id=sl_svn524_1300

><td class="source">}<br></td></tr
><tr
id=sl_svn524_1301

><td class="source"><br></td></tr
><tr
id=sl_svn524_1302

><td class="source">function d3_layout_packTree(node) {<br></td></tr
><tr
id=sl_svn524_1303

><td class="source">  var children = node.children;<br></td></tr
><tr
id=sl_svn524_1304

><td class="source">  if (children) {<br></td></tr
><tr
id=sl_svn524_1305

><td class="source">    children.forEach(d3_layout_packTree);<br></td></tr
><tr
id=sl_svn524_1306

><td class="source">    node.r = d3_layout_packCircle(children);<br></td></tr
><tr
id=sl_svn524_1307

><td class="source">  } else {<br></td></tr
><tr
id=sl_svn524_1308

><td class="source">    node.r = Math.sqrt(node.value);<br></td></tr
><tr
id=sl_svn524_1309

><td class="source">  }<br></td></tr
><tr
id=sl_svn524_1310

><td class="source">}<br></td></tr
><tr
id=sl_svn524_1311

><td class="source"><br></td></tr
><tr
id=sl_svn524_1312

><td class="source">function d3_layout_packTransform(node, x, y, k) {<br></td></tr
><tr
id=sl_svn524_1313

><td class="source">  var children = node.children;<br></td></tr
><tr
id=sl_svn524_1314

><td class="source">  node.x = (x += k * node.x);<br></td></tr
><tr
id=sl_svn524_1315

><td class="source">  node.y = (y += k * node.y);<br></td></tr
><tr
id=sl_svn524_1316

><td class="source">  node.r *= k;<br></td></tr
><tr
id=sl_svn524_1317

><td class="source">  if (children) {<br></td></tr
><tr
id=sl_svn524_1318

><td class="source">    var i = -1, n = children.length;<br></td></tr
><tr
id=sl_svn524_1319

><td class="source">    while (++i &lt; n) d3_layout_packTransform(children[i], x, y, k);<br></td></tr
><tr
id=sl_svn524_1320

><td class="source">  }<br></td></tr
><tr
id=sl_svn524_1321

><td class="source">}<br></td></tr
><tr
id=sl_svn524_1322

><td class="source"><br></td></tr
><tr
id=sl_svn524_1323

><td class="source">function d3_layout_packPlace(a, b, c) {<br></td></tr
><tr
id=sl_svn524_1324

><td class="source">  var da = b.r + c.r,<br></td></tr
><tr
id=sl_svn524_1325

><td class="source">      db = a.r + c.r,<br></td></tr
><tr
id=sl_svn524_1326

><td class="source">      dx = b.x - a.x,<br></td></tr
><tr
id=sl_svn524_1327

><td class="source">      dy = b.y - a.y,<br></td></tr
><tr
id=sl_svn524_1328

><td class="source">      dc = Math.sqrt(dx * dx + dy * dy),<br></td></tr
><tr
id=sl_svn524_1329

><td class="source">      cos = (db * db + dc * dc - da * da) / (2 * db * dc),<br></td></tr
><tr
id=sl_svn524_1330

><td class="source">      theta = Math.acos(cos),<br></td></tr
><tr
id=sl_svn524_1331

><td class="source">      x = cos * db,<br></td></tr
><tr
id=sl_svn524_1332

><td class="source">      h = Math.sin(theta) * db;<br></td></tr
><tr
id=sl_svn524_1333

><td class="source">  dx /= dc;<br></td></tr
><tr
id=sl_svn524_1334

><td class="source">  dy /= dc;<br></td></tr
><tr
id=sl_svn524_1335

><td class="source">  c.x = a.x + x * dx + h * dy;<br></td></tr
><tr
id=sl_svn524_1336

><td class="source">  c.y = a.y + x * dy - h * dx;<br></td></tr
><tr
id=sl_svn524_1337

><td class="source">}<br></td></tr
><tr
id=sl_svn524_1338

><td class="source">// Implements a hierarchical layout using the cluster (or dendogram) algorithm.<br></td></tr
><tr
id=sl_svn524_1339

><td class="source">d3.layout.cluster = function() {<br></td></tr
><tr
id=sl_svn524_1340

><td class="source">  var hierarchy = d3.layout.hierarchy().sort(null).value(null),<br></td></tr
><tr
id=sl_svn524_1341

><td class="source">      separation = d3_layout_treeSeparation,<br></td></tr
><tr
id=sl_svn524_1342

><td class="source">      size = [1, 1]; // width, height<br></td></tr
><tr
id=sl_svn524_1343

><td class="source"><br></td></tr
><tr
id=sl_svn524_1344

><td class="source">  function cluster(d, i) {<br></td></tr
><tr
id=sl_svn524_1345

><td class="source">    var nodes = hierarchy.call(this, d, i),<br></td></tr
><tr
id=sl_svn524_1346

><td class="source">        root = nodes[0],<br></td></tr
><tr
id=sl_svn524_1347

><td class="source">        previousNode,<br></td></tr
><tr
id=sl_svn524_1348

><td class="source">        x = 0,<br></td></tr
><tr
id=sl_svn524_1349

><td class="source">        kx,<br></td></tr
><tr
id=sl_svn524_1350

><td class="source">        ky;<br></td></tr
><tr
id=sl_svn524_1351

><td class="source"><br></td></tr
><tr
id=sl_svn524_1352

><td class="source">    // First walk, computing the initial x &amp; y values.<br></td></tr
><tr
id=sl_svn524_1353

><td class="source">    d3_layout_treeVisitAfter(root, function(node) {<br></td></tr
><tr
id=sl_svn524_1354

><td class="source">      if (node.children) {<br></td></tr
><tr
id=sl_svn524_1355

><td class="source">        node.x = d3_layout_clusterX(node.children);<br></td></tr
><tr
id=sl_svn524_1356

><td class="source">        node.y = d3_layout_clusterY(node.children);<br></td></tr
><tr
id=sl_svn524_1357

><td class="source">      } else {<br></td></tr
><tr
id=sl_svn524_1358

><td class="source">        node.x = previousNode ? x += separation(node, previousNode) : 0;<br></td></tr
><tr
id=sl_svn524_1359

><td class="source">        node.y = 0;<br></td></tr
><tr
id=sl_svn524_1360

><td class="source">        previousNode = node;<br></td></tr
><tr
id=sl_svn524_1361

><td class="source">      }<br></td></tr
><tr
id=sl_svn524_1362

><td class="source">    });<br></td></tr
><tr
id=sl_svn524_1363

><td class="source"><br></td></tr
><tr
id=sl_svn524_1364

><td class="source">    // Compute the left-most, right-most, and depth-most nodes for extents.<br></td></tr
><tr
id=sl_svn524_1365

><td class="source">    var left = d3_layout_clusterLeft(root),<br></td></tr
><tr
id=sl_svn524_1366

><td class="source">        right = d3_layout_clusterRight(root),<br></td></tr
><tr
id=sl_svn524_1367

><td class="source">        x0 = left.x - separation(left, right) / 2,<br></td></tr
><tr
id=sl_svn524_1368

><td class="source">        x1 = right.x + separation(right, left) / 2;<br></td></tr
><tr
id=sl_svn524_1369

><td class="source"><br></td></tr
><tr
id=sl_svn524_1370

><td class="source">    // Second walk, normalizing x &amp; y to the desired size.<br></td></tr
><tr
id=sl_svn524_1371

><td class="source">    d3_layout_treeVisitAfter(root, function(node) {<br></td></tr
><tr
id=sl_svn524_1372

><td class="source">      node.x = (node.x - x0) / (x1 - x0) * size[0];<br></td></tr
><tr
id=sl_svn524_1373

><td class="source">      node.y = (1 - node.y / root.y) * size[1];<br></td></tr
><tr
id=sl_svn524_1374

><td class="source">    });<br></td></tr
><tr
id=sl_svn524_1375

><td class="source"><br></td></tr
><tr
id=sl_svn524_1376

><td class="source">    return nodes;<br></td></tr
><tr
id=sl_svn524_1377

><td class="source">  }<br></td></tr
><tr
id=sl_svn524_1378

><td class="source"><br></td></tr
><tr
id=sl_svn524_1379

><td class="source">  cluster.separation = function(x) {<br></td></tr
><tr
id=sl_svn524_1380

><td class="source">    if (!arguments.length) return separation;<br></td></tr
><tr
id=sl_svn524_1381

><td class="source">    separation = x;<br></td></tr
><tr
id=sl_svn524_1382

><td class="source">    return cluster;<br></td></tr
><tr
id=sl_svn524_1383

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_1384

><td class="source"><br></td></tr
><tr
id=sl_svn524_1385

><td class="source">  cluster.size = function(x) {<br></td></tr
><tr
id=sl_svn524_1386

><td class="source">    if (!arguments.length) return size;<br></td></tr
><tr
id=sl_svn524_1387

><td class="source">    size = x;<br></td></tr
><tr
id=sl_svn524_1388

><td class="source">    return cluster;<br></td></tr
><tr
id=sl_svn524_1389

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_1390

><td class="source"><br></td></tr
><tr
id=sl_svn524_1391

><td class="source">  return d3_layout_hierarchyRebind(cluster, hierarchy);<br></td></tr
><tr
id=sl_svn524_1392

><td class="source">};<br></td></tr
><tr
id=sl_svn524_1393

><td class="source"><br></td></tr
><tr
id=sl_svn524_1394

><td class="source">function d3_layout_clusterY(children) {<br></td></tr
><tr
id=sl_svn524_1395

><td class="source">  return 1 + d3.max(children, function(child) {<br></td></tr
><tr
id=sl_svn524_1396

><td class="source">    return child.y;<br></td></tr
><tr
id=sl_svn524_1397

><td class="source">  });<br></td></tr
><tr
id=sl_svn524_1398

><td class="source">}<br></td></tr
><tr
id=sl_svn524_1399

><td class="source"><br></td></tr
><tr
id=sl_svn524_1400

><td class="source">function d3_layout_clusterX(children) {<br></td></tr
><tr
id=sl_svn524_1401

><td class="source">  return children.reduce(function(x, child) {<br></td></tr
><tr
id=sl_svn524_1402

><td class="source">    return x + child.x;<br></td></tr
><tr
id=sl_svn524_1403

><td class="source">  }, 0) / children.length;<br></td></tr
><tr
id=sl_svn524_1404

><td class="source">}<br></td></tr
><tr
id=sl_svn524_1405

><td class="source"><br></td></tr
><tr
id=sl_svn524_1406

><td class="source">function d3_layout_clusterLeft(node) {<br></td></tr
><tr
id=sl_svn524_1407

><td class="source">  var children = node.children;<br></td></tr
><tr
id=sl_svn524_1408

><td class="source">  return children ? d3_layout_clusterLeft(children[0]) : node;<br></td></tr
><tr
id=sl_svn524_1409

><td class="source">}<br></td></tr
><tr
id=sl_svn524_1410

><td class="source"><br></td></tr
><tr
id=sl_svn524_1411

><td class="source">function d3_layout_clusterRight(node) {<br></td></tr
><tr
id=sl_svn524_1412

><td class="source">  var children = node.children;<br></td></tr
><tr
id=sl_svn524_1413

><td class="source">  return children ? d3_layout_clusterRight(children[children.length - 1]) : node;<br></td></tr
><tr
id=sl_svn524_1414

><td class="source">}<br></td></tr
><tr
id=sl_svn524_1415

><td class="source">// Node-link tree diagram using the Reingold-Tilford &quot;tidy&quot; algorithm<br></td></tr
><tr
id=sl_svn524_1416

><td class="source">d3.layout.tree = function() {<br></td></tr
><tr
id=sl_svn524_1417

><td class="source">  var hierarchy = d3.layout.hierarchy().sort(null).value(null),<br></td></tr
><tr
id=sl_svn524_1418

><td class="source">      separation = d3_layout_treeSeparation,<br></td></tr
><tr
id=sl_svn524_1419

><td class="source">      size = [1, 1]; // width, height<br></td></tr
><tr
id=sl_svn524_1420

><td class="source"><br></td></tr
><tr
id=sl_svn524_1421

><td class="source">  function tree(d, i) {<br></td></tr
><tr
id=sl_svn524_1422

><td class="source">    var nodes = hierarchy.call(this, d, i),<br></td></tr
><tr
id=sl_svn524_1423

><td class="source">        root = nodes[0];<br></td></tr
><tr
id=sl_svn524_1424

><td class="source"><br></td></tr
><tr
id=sl_svn524_1425

><td class="source">    function firstWalk(node, previousSibling) {<br></td></tr
><tr
id=sl_svn524_1426

><td class="source">      var children = node.children,<br></td></tr
><tr
id=sl_svn524_1427

><td class="source">          layout = node._tree;<br></td></tr
><tr
id=sl_svn524_1428

><td class="source">      if (children &amp;&amp; (n = children.length)) {<br></td></tr
><tr
id=sl_svn524_1429

><td class="source">        var n,<br></td></tr
><tr
id=sl_svn524_1430

><td class="source">            firstChild = children[0],<br></td></tr
><tr
id=sl_svn524_1431

><td class="source">            previousChild,<br></td></tr
><tr
id=sl_svn524_1432

><td class="source">            ancestor = firstChild,<br></td></tr
><tr
id=sl_svn524_1433

><td class="source">            child,<br></td></tr
><tr
id=sl_svn524_1434

><td class="source">            i = -1;<br></td></tr
><tr
id=sl_svn524_1435

><td class="source">        while (++i &lt; n) {<br></td></tr
><tr
id=sl_svn524_1436

><td class="source">          child = children[i];<br></td></tr
><tr
id=sl_svn524_1437

><td class="source">          firstWalk(child, previousChild);<br></td></tr
><tr
id=sl_svn524_1438

><td class="source">          ancestor = apportion(child, previousChild, ancestor);<br></td></tr
><tr
id=sl_svn524_1439

><td class="source">          previousChild = child;<br></td></tr
><tr
id=sl_svn524_1440

><td class="source">        }<br></td></tr
><tr
id=sl_svn524_1441

><td class="source">        d3_layout_treeShift(node);<br></td></tr
><tr
id=sl_svn524_1442

><td class="source">        var midpoint = .5 * (firstChild._tree.prelim + child._tree.prelim);<br></td></tr
><tr
id=sl_svn524_1443

><td class="source">        if (previousSibling) {<br></td></tr
><tr
id=sl_svn524_1444

><td class="source">          layout.prelim = previousSibling._tree.prelim + separation(node, previousSibling);<br></td></tr
><tr
id=sl_svn524_1445

><td class="source">          layout.mod = layout.prelim - midpoint;<br></td></tr
><tr
id=sl_svn524_1446

><td class="source">        } else {<br></td></tr
><tr
id=sl_svn524_1447

><td class="source">          layout.prelim = midpoint;<br></td></tr
><tr
id=sl_svn524_1448

><td class="source">        }<br></td></tr
><tr
id=sl_svn524_1449

><td class="source">      } else {<br></td></tr
><tr
id=sl_svn524_1450

><td class="source">        if (previousSibling) {<br></td></tr
><tr
id=sl_svn524_1451

><td class="source">          layout.prelim = previousSibling._tree.prelim + separation(node, previousSibling);<br></td></tr
><tr
id=sl_svn524_1452

><td class="source">        }<br></td></tr
><tr
id=sl_svn524_1453

><td class="source">      }<br></td></tr
><tr
id=sl_svn524_1454

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_1455

><td class="source"><br></td></tr
><tr
id=sl_svn524_1456

><td class="source">    function secondWalk(node, x) {<br></td></tr
><tr
id=sl_svn524_1457

><td class="source">      node.x = node._tree.prelim + x;<br></td></tr
><tr
id=sl_svn524_1458

><td class="source">      var children = node.children;<br></td></tr
><tr
id=sl_svn524_1459

><td class="source">      if (children) {<br></td></tr
><tr
id=sl_svn524_1460

><td class="source">        var i = -1,<br></td></tr
><tr
id=sl_svn524_1461

><td class="source">            n = children.length;<br></td></tr
><tr
id=sl_svn524_1462

><td class="source">        x += node._tree.mod;<br></td></tr
><tr
id=sl_svn524_1463

><td class="source">        while (++i &lt; n) {<br></td></tr
><tr
id=sl_svn524_1464

><td class="source">          secondWalk(children[i], x);<br></td></tr
><tr
id=sl_svn524_1465

><td class="source">        }<br></td></tr
><tr
id=sl_svn524_1466

><td class="source">      }<br></td></tr
><tr
id=sl_svn524_1467

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_1468

><td class="source"><br></td></tr
><tr
id=sl_svn524_1469

><td class="source">    function apportion(node, previousSibling, ancestor) {<br></td></tr
><tr
id=sl_svn524_1470

><td class="source">      if (previousSibling) {<br></td></tr
><tr
id=sl_svn524_1471

><td class="source">        var vip = node,<br></td></tr
><tr
id=sl_svn524_1472

><td class="source">            vop = node,<br></td></tr
><tr
id=sl_svn524_1473

><td class="source">            vim = previousSibling,<br></td></tr
><tr
id=sl_svn524_1474

><td class="source">            vom = node.parent.children[0],<br></td></tr
><tr
id=sl_svn524_1475

><td class="source">            sip = vip._tree.mod,<br></td></tr
><tr
id=sl_svn524_1476

><td class="source">            sop = vop._tree.mod,<br></td></tr
><tr
id=sl_svn524_1477

><td class="source">            sim = vim._tree.mod,<br></td></tr
><tr
id=sl_svn524_1478

><td class="source">            som = vom._tree.mod,<br></td></tr
><tr
id=sl_svn524_1479

><td class="source">            shift;<br></td></tr
><tr
id=sl_svn524_1480

><td class="source">        while (vim = d3_layout_treeRight(vim), vip = d3_layout_treeLeft(vip), vim &amp;&amp; vip) {<br></td></tr
><tr
id=sl_svn524_1481

><td class="source">          vom = d3_layout_treeLeft(vom);<br></td></tr
><tr
id=sl_svn524_1482

><td class="source">          vop = d3_layout_treeRight(vop);<br></td></tr
><tr
id=sl_svn524_1483

><td class="source">          vop._tree.ancestor = node;<br></td></tr
><tr
id=sl_svn524_1484

><td class="source">          shift = vim._tree.prelim + sim - vip._tree.prelim - sip + separation(vim, vip);<br></td></tr
><tr
id=sl_svn524_1485

><td class="source">          if (shift &gt; 0) {<br></td></tr
><tr
id=sl_svn524_1486

><td class="source">            d3_layout_treeMove(d3_layout_treeAncestor(vim, node, ancestor), node, shift);<br></td></tr
><tr
id=sl_svn524_1487

><td class="source">            sip += shift;<br></td></tr
><tr
id=sl_svn524_1488

><td class="source">            sop += shift;<br></td></tr
><tr
id=sl_svn524_1489

><td class="source">          }<br></td></tr
><tr
id=sl_svn524_1490

><td class="source">          sim += vim._tree.mod;<br></td></tr
><tr
id=sl_svn524_1491

><td class="source">          sip += vip._tree.mod;<br></td></tr
><tr
id=sl_svn524_1492

><td class="source">          som += vom._tree.mod;<br></td></tr
><tr
id=sl_svn524_1493

><td class="source">          sop += vop._tree.mod;<br></td></tr
><tr
id=sl_svn524_1494

><td class="source">        }<br></td></tr
><tr
id=sl_svn524_1495

><td class="source">        if (vim &amp;&amp; !d3_layout_treeRight(vop)) {<br></td></tr
><tr
id=sl_svn524_1496

><td class="source">          vop._tree.thread = vim;<br></td></tr
><tr
id=sl_svn524_1497

><td class="source">          vop._tree.mod += sim - sop;<br></td></tr
><tr
id=sl_svn524_1498

><td class="source">        }<br></td></tr
><tr
id=sl_svn524_1499

><td class="source">        if (vip &amp;&amp; !d3_layout_treeLeft(vom)) {<br></td></tr
><tr
id=sl_svn524_1500

><td class="source">          vom._tree.thread = vip;<br></td></tr
><tr
id=sl_svn524_1501

><td class="source">          vom._tree.mod += sip - som;<br></td></tr
><tr
id=sl_svn524_1502

><td class="source">          ancestor = node;<br></td></tr
><tr
id=sl_svn524_1503

><td class="source">        }<br></td></tr
><tr
id=sl_svn524_1504

><td class="source">      }<br></td></tr
><tr
id=sl_svn524_1505

><td class="source">      return ancestor;<br></td></tr
><tr
id=sl_svn524_1506

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_1507

><td class="source"><br></td></tr
><tr
id=sl_svn524_1508

><td class="source">    // Initialize temporary layout variables.<br></td></tr
><tr
id=sl_svn524_1509

><td class="source">    d3_layout_treeVisitAfter(root, function(node, previousSibling) {<br></td></tr
><tr
id=sl_svn524_1510

><td class="source">      node._tree = {<br></td></tr
><tr
id=sl_svn524_1511

><td class="source">        ancestor: node,<br></td></tr
><tr
id=sl_svn524_1512

><td class="source">        prelim: 0,<br></td></tr
><tr
id=sl_svn524_1513

><td class="source">        mod: 0,<br></td></tr
><tr
id=sl_svn524_1514

><td class="source">        change: 0,<br></td></tr
><tr
id=sl_svn524_1515

><td class="source">        shift: 0,<br></td></tr
><tr
id=sl_svn524_1516

><td class="source">        number: previousSibling ? previousSibling._tree.number + 1 : 0<br></td></tr
><tr
id=sl_svn524_1517

><td class="source">      };<br></td></tr
><tr
id=sl_svn524_1518

><td class="source">    });<br></td></tr
><tr
id=sl_svn524_1519

><td class="source"><br></td></tr
><tr
id=sl_svn524_1520

><td class="source">    // Compute the layout using Buchheim et al.&#39;s algorithm.<br></td></tr
><tr
id=sl_svn524_1521

><td class="source">    firstWalk(root);<br></td></tr
><tr
id=sl_svn524_1522

><td class="source">    secondWalk(root, -root._tree.prelim);<br></td></tr
><tr
id=sl_svn524_1523

><td class="source"><br></td></tr
><tr
id=sl_svn524_1524

><td class="source">    // Compute the left-most, right-most, and depth-most nodes for extents.<br></td></tr
><tr
id=sl_svn524_1525

><td class="source">    var left = d3_layout_treeSearch(root, d3_layout_treeLeftmost),<br></td></tr
><tr
id=sl_svn524_1526

><td class="source">        right = d3_layout_treeSearch(root, d3_layout_treeRightmost),<br></td></tr
><tr
id=sl_svn524_1527

><td class="source">        deep = d3_layout_treeSearch(root, d3_layout_treeDeepest),<br></td></tr
><tr
id=sl_svn524_1528

><td class="source">        x0 = left.x - separation(left, right) / 2,<br></td></tr
><tr
id=sl_svn524_1529

><td class="source">        x1 = right.x + separation(right, left) / 2,<br></td></tr
><tr
id=sl_svn524_1530

><td class="source">        y1 = deep.depth || 1;<br></td></tr
><tr
id=sl_svn524_1531

><td class="source"><br></td></tr
><tr
id=sl_svn524_1532

><td class="source">    // Clear temporary layout variables; transform x and y.<br></td></tr
><tr
id=sl_svn524_1533

><td class="source">    d3_layout_treeVisitAfter(root, function(node) {<br></td></tr
><tr
id=sl_svn524_1534

><td class="source">      node.x = (node.x - x0) / (x1 - x0) * size[0];<br></td></tr
><tr
id=sl_svn524_1535

><td class="source">      node.y = node.depth / y1 * size[1];<br></td></tr
><tr
id=sl_svn524_1536

><td class="source">      delete node._tree;<br></td></tr
><tr
id=sl_svn524_1537

><td class="source">    });<br></td></tr
><tr
id=sl_svn524_1538

><td class="source"><br></td></tr
><tr
id=sl_svn524_1539

><td class="source">    return nodes;<br></td></tr
><tr
id=sl_svn524_1540

><td class="source">  }<br></td></tr
><tr
id=sl_svn524_1541

><td class="source"><br></td></tr
><tr
id=sl_svn524_1542

><td class="source">  tree.separation = function(x) {<br></td></tr
><tr
id=sl_svn524_1543

><td class="source">    if (!arguments.length) return separation;<br></td></tr
><tr
id=sl_svn524_1544

><td class="source">    separation = x;<br></td></tr
><tr
id=sl_svn524_1545

><td class="source">    return tree;<br></td></tr
><tr
id=sl_svn524_1546

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_1547

><td class="source"><br></td></tr
><tr
id=sl_svn524_1548

><td class="source">  tree.size = function(x) {<br></td></tr
><tr
id=sl_svn524_1549

><td class="source">    if (!arguments.length) return size;<br></td></tr
><tr
id=sl_svn524_1550

><td class="source">    size = x;<br></td></tr
><tr
id=sl_svn524_1551

><td class="source">    return tree;<br></td></tr
><tr
id=sl_svn524_1552

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_1553

><td class="source"><br></td></tr
><tr
id=sl_svn524_1554

><td class="source">  return d3_layout_hierarchyRebind(tree, hierarchy);<br></td></tr
><tr
id=sl_svn524_1555

><td class="source">};<br></td></tr
><tr
id=sl_svn524_1556

><td class="source"><br></td></tr
><tr
id=sl_svn524_1557

><td class="source">function d3_layout_treeSeparation(a, b) {<br></td></tr
><tr
id=sl_svn524_1558

><td class="source">  return a.parent == b.parent ? 1 : 2;<br></td></tr
><tr
id=sl_svn524_1559

><td class="source">}<br></td></tr
><tr
id=sl_svn524_1560

><td class="source"><br></td></tr
><tr
id=sl_svn524_1561

><td class="source">// function d3_layout_treeSeparationRadial(a, b) {<br></td></tr
><tr
id=sl_svn524_1562

><td class="source">//   return (a.parent == b.parent ? 1 : 2) / a.depth;<br></td></tr
><tr
id=sl_svn524_1563

><td class="source">// }<br></td></tr
><tr
id=sl_svn524_1564

><td class="source"><br></td></tr
><tr
id=sl_svn524_1565

><td class="source">function d3_layout_treeLeft(node) {<br></td></tr
><tr
id=sl_svn524_1566

><td class="source">  return node.children ? node.children[0] : node._tree.thread;<br></td></tr
><tr
id=sl_svn524_1567

><td class="source">}<br></td></tr
><tr
id=sl_svn524_1568

><td class="source"><br></td></tr
><tr
id=sl_svn524_1569

><td class="source">function d3_layout_treeRight(node) {<br></td></tr
><tr
id=sl_svn524_1570

><td class="source">  return node.children ? node.children[node.children.length - 1] : node._tree.thread;<br></td></tr
><tr
id=sl_svn524_1571

><td class="source">}<br></td></tr
><tr
id=sl_svn524_1572

><td class="source"><br></td></tr
><tr
id=sl_svn524_1573

><td class="source">function d3_layout_treeSearch(node, compare) {<br></td></tr
><tr
id=sl_svn524_1574

><td class="source">  var children = node.children;<br></td></tr
><tr
id=sl_svn524_1575

><td class="source">  if (children) {<br></td></tr
><tr
id=sl_svn524_1576

><td class="source">    var child,<br></td></tr
><tr
id=sl_svn524_1577

><td class="source">        n = children.length,<br></td></tr
><tr
id=sl_svn524_1578

><td class="source">        i = -1;<br></td></tr
><tr
id=sl_svn524_1579

><td class="source">    while (++i &lt; n) {<br></td></tr
><tr
id=sl_svn524_1580

><td class="source">      if (compare(child = d3_layout_treeSearch(children[i], compare), node) &gt; 0) {<br></td></tr
><tr
id=sl_svn524_1581

><td class="source">        node = child;<br></td></tr
><tr
id=sl_svn524_1582

><td class="source">      }<br></td></tr
><tr
id=sl_svn524_1583

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_1584

><td class="source">  }<br></td></tr
><tr
id=sl_svn524_1585

><td class="source">  return node;<br></td></tr
><tr
id=sl_svn524_1586

><td class="source">}<br></td></tr
><tr
id=sl_svn524_1587

><td class="source"><br></td></tr
><tr
id=sl_svn524_1588

><td class="source">function d3_layout_treeRightmost(a, b) {<br></td></tr
><tr
id=sl_svn524_1589

><td class="source">  return a.x - b.x;<br></td></tr
><tr
id=sl_svn524_1590

><td class="source">}<br></td></tr
><tr
id=sl_svn524_1591

><td class="source"><br></td></tr
><tr
id=sl_svn524_1592

><td class="source">function d3_layout_treeLeftmost(a, b) {<br></td></tr
><tr
id=sl_svn524_1593

><td class="source">  return b.x - a.x;<br></td></tr
><tr
id=sl_svn524_1594

><td class="source">}<br></td></tr
><tr
id=sl_svn524_1595

><td class="source"><br></td></tr
><tr
id=sl_svn524_1596

><td class="source">function d3_layout_treeDeepest(a, b) {<br></td></tr
><tr
id=sl_svn524_1597

><td class="source">  return a.depth - b.depth;<br></td></tr
><tr
id=sl_svn524_1598

><td class="source">}<br></td></tr
><tr
id=sl_svn524_1599

><td class="source"><br></td></tr
><tr
id=sl_svn524_1600

><td class="source">function d3_layout_treeVisitAfter(node, callback) {<br></td></tr
><tr
id=sl_svn524_1601

><td class="source">  function visit(node, previousSibling) {<br></td></tr
><tr
id=sl_svn524_1602

><td class="source">    var children = node.children;<br></td></tr
><tr
id=sl_svn524_1603

><td class="source">    if (children) {<br></td></tr
><tr
id=sl_svn524_1604

><td class="source">      var child,<br></td></tr
><tr
id=sl_svn524_1605

><td class="source">          previousChild = null,<br></td></tr
><tr
id=sl_svn524_1606

><td class="source">          i = -1,<br></td></tr
><tr
id=sl_svn524_1607

><td class="source">          n = children.length;<br></td></tr
><tr
id=sl_svn524_1608

><td class="source">      while (++i &lt; n) {<br></td></tr
><tr
id=sl_svn524_1609

><td class="source">        child = children[i];<br></td></tr
><tr
id=sl_svn524_1610

><td class="source">        visit(child, previousChild);<br></td></tr
><tr
id=sl_svn524_1611

><td class="source">        previousChild = child;<br></td></tr
><tr
id=sl_svn524_1612

><td class="source">      }<br></td></tr
><tr
id=sl_svn524_1613

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_1614

><td class="source">    callback(node, previousSibling);<br></td></tr
><tr
id=sl_svn524_1615

><td class="source">  }<br></td></tr
><tr
id=sl_svn524_1616

><td class="source">  visit(node, null);<br></td></tr
><tr
id=sl_svn524_1617

><td class="source">}<br></td></tr
><tr
id=sl_svn524_1618

><td class="source"><br></td></tr
><tr
id=sl_svn524_1619

><td class="source">function d3_layout_treeShift(node) {<br></td></tr
><tr
id=sl_svn524_1620

><td class="source">  var shift = 0,<br></td></tr
><tr
id=sl_svn524_1621

><td class="source">      change = 0,<br></td></tr
><tr
id=sl_svn524_1622

><td class="source">      children = node.children,<br></td></tr
><tr
id=sl_svn524_1623

><td class="source">      i = children.length,<br></td></tr
><tr
id=sl_svn524_1624

><td class="source">      child;<br></td></tr
><tr
id=sl_svn524_1625

><td class="source">  while (--i &gt;= 0) {<br></td></tr
><tr
id=sl_svn524_1626

><td class="source">    child = children[i]._tree;<br></td></tr
><tr
id=sl_svn524_1627

><td class="source">    child.prelim += shift;<br></td></tr
><tr
id=sl_svn524_1628

><td class="source">    child.mod += shift;<br></td></tr
><tr
id=sl_svn524_1629

><td class="source">    shift += child.shift + (change += child.change);<br></td></tr
><tr
id=sl_svn524_1630

><td class="source">  }<br></td></tr
><tr
id=sl_svn524_1631

><td class="source">}<br></td></tr
><tr
id=sl_svn524_1632

><td class="source"><br></td></tr
><tr
id=sl_svn524_1633

><td class="source">function d3_layout_treeMove(ancestor, node, shift) {<br></td></tr
><tr
id=sl_svn524_1634

><td class="source">  ancestor = ancestor._tree;<br></td></tr
><tr
id=sl_svn524_1635

><td class="source">  node = node._tree;<br></td></tr
><tr
id=sl_svn524_1636

><td class="source">  var change = shift / (node.number - ancestor.number);<br></td></tr
><tr
id=sl_svn524_1637

><td class="source">  ancestor.change += change;<br></td></tr
><tr
id=sl_svn524_1638

><td class="source">  node.change -= change;<br></td></tr
><tr
id=sl_svn524_1639

><td class="source">  node.shift += shift;<br></td></tr
><tr
id=sl_svn524_1640

><td class="source">  node.prelim += shift;<br></td></tr
><tr
id=sl_svn524_1641

><td class="source">  node.mod += shift;<br></td></tr
><tr
id=sl_svn524_1642

><td class="source">}<br></td></tr
><tr
id=sl_svn524_1643

><td class="source"><br></td></tr
><tr
id=sl_svn524_1644

><td class="source">function d3_layout_treeAncestor(vim, node, ancestor) {<br></td></tr
><tr
id=sl_svn524_1645

><td class="source">  return vim._tree.ancestor.parent == node.parent<br></td></tr
><tr
id=sl_svn524_1646

><td class="source">      ? vim._tree.ancestor<br></td></tr
><tr
id=sl_svn524_1647

><td class="source">      : ancestor;<br></td></tr
><tr
id=sl_svn524_1648

><td class="source">}<br></td></tr
><tr
id=sl_svn524_1649

><td class="source">// Squarified Treemaps by Mark Bruls, Kees Huizing, and Jarke J. van Wijk<br></td></tr
><tr
id=sl_svn524_1650

><td class="source">// Modified to support a target aspect ratio by Jeff Heer<br></td></tr
><tr
id=sl_svn524_1651

><td class="source">d3.layout.treemap = function() {<br></td></tr
><tr
id=sl_svn524_1652

><td class="source">  var hierarchy = d3.layout.hierarchy(),<br></td></tr
><tr
id=sl_svn524_1653

><td class="source">      round = Math.round,<br></td></tr
><tr
id=sl_svn524_1654

><td class="source">      size = [1, 1], // width, height<br></td></tr
><tr
id=sl_svn524_1655

><td class="source">      padding = null,<br></td></tr
><tr
id=sl_svn524_1656

><td class="source">      pad = d3_layout_treemapPadNull,<br></td></tr
><tr
id=sl_svn524_1657

><td class="source">      sticky = false,<br></td></tr
><tr
id=sl_svn524_1658

><td class="source">      stickies,<br></td></tr
><tr
id=sl_svn524_1659

><td class="source">      ratio = 0.5 * (1 + Math.sqrt(5)); // golden ratio<br></td></tr
><tr
id=sl_svn524_1660

><td class="source"><br></td></tr
><tr
id=sl_svn524_1661

><td class="source">  // Compute the area for each child based on value &amp; scale.<br></td></tr
><tr
id=sl_svn524_1662

><td class="source">  function scale(children, k) {<br></td></tr
><tr
id=sl_svn524_1663

><td class="source">    var i = -1,<br></td></tr
><tr
id=sl_svn524_1664

><td class="source">        n = children.length,<br></td></tr
><tr
id=sl_svn524_1665

><td class="source">        child,<br></td></tr
><tr
id=sl_svn524_1666

><td class="source">        area;<br></td></tr
><tr
id=sl_svn524_1667

><td class="source">    while (++i &lt; n) {<br></td></tr
><tr
id=sl_svn524_1668

><td class="source">      area = (child = children[i]).value * (k &lt; 0 ? 0 : k);<br></td></tr
><tr
id=sl_svn524_1669

><td class="source">      child.area = isNaN(area) || area &lt;= 0 ? 0 : area;<br></td></tr
><tr
id=sl_svn524_1670

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_1671

><td class="source">  }<br></td></tr
><tr
id=sl_svn524_1672

><td class="source"><br></td></tr
><tr
id=sl_svn524_1673

><td class="source">  // Recursively arranges the specified node&#39;s children into squarified rows.<br></td></tr
><tr
id=sl_svn524_1674

><td class="source">  function squarify(node) {<br></td></tr
><tr
id=sl_svn524_1675

><td class="source">    if (!node.children) return;<br></td></tr
><tr
id=sl_svn524_1676

><td class="source">    var rect = pad(node),<br></td></tr
><tr
id=sl_svn524_1677

><td class="source">        row = [],<br></td></tr
><tr
id=sl_svn524_1678

><td class="source">        children = node.children.slice(), // copy-on-write<br></td></tr
><tr
id=sl_svn524_1679

><td class="source">        child,<br></td></tr
><tr
id=sl_svn524_1680

><td class="source">        best = Infinity, // the best row score so far<br></td></tr
><tr
id=sl_svn524_1681

><td class="source">        score, // the current row score<br></td></tr
><tr
id=sl_svn524_1682

><td class="source">        u = Math.min(rect.dx, rect.dy), // initial orientation<br></td></tr
><tr
id=sl_svn524_1683

><td class="source">        n;<br></td></tr
><tr
id=sl_svn524_1684

><td class="source">    scale(children, rect.dx * rect.dy / node.value);<br></td></tr
><tr
id=sl_svn524_1685

><td class="source">    row.area = 0;<br></td></tr
><tr
id=sl_svn524_1686

><td class="source">    while ((n = children.length) &gt; 0) {<br></td></tr
><tr
id=sl_svn524_1687

><td class="source">      row.push(child = children[n - 1]);<br></td></tr
><tr
id=sl_svn524_1688

><td class="source">      row.area += child.area;<br></td></tr
><tr
id=sl_svn524_1689

><td class="source">      if ((score = worst(row, u)) &lt;= best) { // continue with this orientation<br></td></tr
><tr
id=sl_svn524_1690

><td class="source">        children.pop();<br></td></tr
><tr
id=sl_svn524_1691

><td class="source">        best = score;<br></td></tr
><tr
id=sl_svn524_1692

><td class="source">      } else { // abort, and try a different orientation<br></td></tr
><tr
id=sl_svn524_1693

><td class="source">        row.area -= row.pop().area;<br></td></tr
><tr
id=sl_svn524_1694

><td class="source">        position(row, u, rect, false);<br></td></tr
><tr
id=sl_svn524_1695

><td class="source">        u = Math.min(rect.dx, rect.dy);<br></td></tr
><tr
id=sl_svn524_1696

><td class="source">        row.length = row.area = 0;<br></td></tr
><tr
id=sl_svn524_1697

><td class="source">        best = Infinity;<br></td></tr
><tr
id=sl_svn524_1698

><td class="source">      }<br></td></tr
><tr
id=sl_svn524_1699

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_1700

><td class="source">    if (row.length) {<br></td></tr
><tr
id=sl_svn524_1701

><td class="source">      position(row, u, rect, true);<br></td></tr
><tr
id=sl_svn524_1702

><td class="source">      row.length = row.area = 0;<br></td></tr
><tr
id=sl_svn524_1703

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_1704

><td class="source">    node.children.forEach(squarify);<br></td></tr
><tr
id=sl_svn524_1705

><td class="source">  }<br></td></tr
><tr
id=sl_svn524_1706

><td class="source"><br></td></tr
><tr
id=sl_svn524_1707

><td class="source">  // Recursively resizes the specified node&#39;s children into existing rows.<br></td></tr
><tr
id=sl_svn524_1708

><td class="source">  // Preserves the existing layout!<br></td></tr
><tr
id=sl_svn524_1709

><td class="source">  function stickify(node) {<br></td></tr
><tr
id=sl_svn524_1710

><td class="source">    if (!node.children) return;<br></td></tr
><tr
id=sl_svn524_1711

><td class="source">    var rect = pad(node),<br></td></tr
><tr
id=sl_svn524_1712

><td class="source">        children = node.children.slice(), // copy-on-write<br></td></tr
><tr
id=sl_svn524_1713

><td class="source">        child,<br></td></tr
><tr
id=sl_svn524_1714

><td class="source">        row = [];<br></td></tr
><tr
id=sl_svn524_1715

><td class="source">    scale(children, rect.dx * rect.dy / node.value);<br></td></tr
><tr
id=sl_svn524_1716

><td class="source">    row.area = 0;<br></td></tr
><tr
id=sl_svn524_1717

><td class="source">    while (child = children.pop()) {<br></td></tr
><tr
id=sl_svn524_1718

><td class="source">      row.push(child);<br></td></tr
><tr
id=sl_svn524_1719

><td class="source">      row.area += child.area;<br></td></tr
><tr
id=sl_svn524_1720

><td class="source">      if (child.z != null) {<br></td></tr
><tr
id=sl_svn524_1721

><td class="source">        position(row, child.z ? rect.dx : rect.dy, rect, !children.length);<br></td></tr
><tr
id=sl_svn524_1722

><td class="source">        row.length = row.area = 0;<br></td></tr
><tr
id=sl_svn524_1723

><td class="source">      }<br></td></tr
><tr
id=sl_svn524_1724

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_1725

><td class="source">    node.children.forEach(stickify);<br></td></tr
><tr
id=sl_svn524_1726

><td class="source">  }<br></td></tr
><tr
id=sl_svn524_1727

><td class="source"><br></td></tr
><tr
id=sl_svn524_1728

><td class="source">  // Computes the score for the specified row, as the worst aspect ratio.<br></td></tr
><tr
id=sl_svn524_1729

><td class="source">  function worst(row, u) {<br></td></tr
><tr
id=sl_svn524_1730

><td class="source">    var s = row.area,<br></td></tr
><tr
id=sl_svn524_1731

><td class="source">        r,<br></td></tr
><tr
id=sl_svn524_1732

><td class="source">        rmax = 0,<br></td></tr
><tr
id=sl_svn524_1733

><td class="source">        rmin = Infinity,<br></td></tr
><tr
id=sl_svn524_1734

><td class="source">        i = -1,<br></td></tr
><tr
id=sl_svn524_1735

><td class="source">        n = row.length;<br></td></tr
><tr
id=sl_svn524_1736

><td class="source">    while (++i &lt; n) {<br></td></tr
><tr
id=sl_svn524_1737

><td class="source">      if (!(r = row[i].area)) continue;<br></td></tr
><tr
id=sl_svn524_1738

><td class="source">      if (r &lt; rmin) rmin = r;<br></td></tr
><tr
id=sl_svn524_1739

><td class="source">      if (r &gt; rmax) rmax = r;<br></td></tr
><tr
id=sl_svn524_1740

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_1741

><td class="source">    s *= s;<br></td></tr
><tr
id=sl_svn524_1742

><td class="source">    u *= u;<br></td></tr
><tr
id=sl_svn524_1743

><td class="source">    return s<br></td></tr
><tr
id=sl_svn524_1744

><td class="source">        ? Math.max((u * rmax * ratio) / s, s / (u * rmin * ratio))<br></td></tr
><tr
id=sl_svn524_1745

><td class="source">        : Infinity;<br></td></tr
><tr
id=sl_svn524_1746

><td class="source">  }<br></td></tr
><tr
id=sl_svn524_1747

><td class="source"><br></td></tr
><tr
id=sl_svn524_1748

><td class="source">  // Positions the specified row of nodes. Modifies `rect`.<br></td></tr
><tr
id=sl_svn524_1749

><td class="source">  function position(row, u, rect, flush) {<br></td></tr
><tr
id=sl_svn524_1750

><td class="source">    var i = -1,<br></td></tr
><tr
id=sl_svn524_1751

><td class="source">        n = row.length,<br></td></tr
><tr
id=sl_svn524_1752

><td class="source">        x = rect.x,<br></td></tr
><tr
id=sl_svn524_1753

><td class="source">        y = rect.y,<br></td></tr
><tr
id=sl_svn524_1754

><td class="source">        v = u ? round(row.area / u) : 0,<br></td></tr
><tr
id=sl_svn524_1755

><td class="source">        o;<br></td></tr
><tr
id=sl_svn524_1756

><td class="source">    if (u == rect.dx) { // horizontal subdivision<br></td></tr
><tr
id=sl_svn524_1757

><td class="source">      if (flush || v &gt; rect.dy) v = rect.dy; // over+underflow<br></td></tr
><tr
id=sl_svn524_1758

><td class="source">      while (++i &lt; n) {<br></td></tr
><tr
id=sl_svn524_1759

><td class="source">        o = row[i];<br></td></tr
><tr
id=sl_svn524_1760

><td class="source">        o.x = x;<br></td></tr
><tr
id=sl_svn524_1761

><td class="source">        o.y = y;<br></td></tr
><tr
id=sl_svn524_1762

><td class="source">        o.dy = v;<br></td></tr
><tr
id=sl_svn524_1763

><td class="source">        x += o.dx = v ? round(o.area / v) : 0;<br></td></tr
><tr
id=sl_svn524_1764

><td class="source">      }<br></td></tr
><tr
id=sl_svn524_1765

><td class="source">      o.z = true;<br></td></tr
><tr
id=sl_svn524_1766

><td class="source">      o.dx += rect.x + rect.dx - x; // rounding error<br></td></tr
><tr
id=sl_svn524_1767

><td class="source">      rect.y += v;<br></td></tr
><tr
id=sl_svn524_1768

><td class="source">      rect.dy -= v;<br></td></tr
><tr
id=sl_svn524_1769

><td class="source">    } else { // vertical subdivision<br></td></tr
><tr
id=sl_svn524_1770

><td class="source">      if (flush || v &gt; rect.dx) v = rect.dx; // over+underflow<br></td></tr
><tr
id=sl_svn524_1771

><td class="source">      while (++i &lt; n) {<br></td></tr
><tr
id=sl_svn524_1772

><td class="source">        o = row[i];<br></td></tr
><tr
id=sl_svn524_1773

><td class="source">        o.x = x;<br></td></tr
><tr
id=sl_svn524_1774

><td class="source">        o.y = y;<br></td></tr
><tr
id=sl_svn524_1775

><td class="source">        o.dx = v;<br></td></tr
><tr
id=sl_svn524_1776

><td class="source">        y += o.dy = v ? round(o.area / v) : 0;<br></td></tr
><tr
id=sl_svn524_1777

><td class="source">      }<br></td></tr
><tr
id=sl_svn524_1778

><td class="source">      o.z = false;<br></td></tr
><tr
id=sl_svn524_1779

><td class="source">      o.dy += rect.y + rect.dy - y; // rounding error<br></td></tr
><tr
id=sl_svn524_1780

><td class="source">      rect.x += v;<br></td></tr
><tr
id=sl_svn524_1781

><td class="source">      rect.dx -= v;<br></td></tr
><tr
id=sl_svn524_1782

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_1783

><td class="source">  }<br></td></tr
><tr
id=sl_svn524_1784

><td class="source"><br></td></tr
><tr
id=sl_svn524_1785

><td class="source">  function treemap(d) {<br></td></tr
><tr
id=sl_svn524_1786

><td class="source">    var nodes = stickies || hierarchy(d),<br></td></tr
><tr
id=sl_svn524_1787

><td class="source">        root = nodes[0];<br></td></tr
><tr
id=sl_svn524_1788

><td class="source">    root.x = 0;<br></td></tr
><tr
id=sl_svn524_1789

><td class="source">    root.y = 0;<br></td></tr
><tr
id=sl_svn524_1790

><td class="source">    root.dx = size[0];<br></td></tr
><tr
id=sl_svn524_1791

><td class="source">    root.dy = size[1];<br></td></tr
><tr
id=sl_svn524_1792

><td class="source">    if (stickies) hierarchy.revalue(root);<br></td></tr
><tr
id=sl_svn524_1793

><td class="source">    scale([root], root.dx * root.dy / root.value);<br></td></tr
><tr
id=sl_svn524_1794

><td class="source">    (stickies ? stickify : squarify)(root);<br></td></tr
><tr
id=sl_svn524_1795

><td class="source">    if (sticky) stickies = nodes;<br></td></tr
><tr
id=sl_svn524_1796

><td class="source">    return nodes;<br></td></tr
><tr
id=sl_svn524_1797

><td class="source">  }<br></td></tr
><tr
id=sl_svn524_1798

><td class="source"><br></td></tr
><tr
id=sl_svn524_1799

><td class="source">  treemap.size = function(x) {<br></td></tr
><tr
id=sl_svn524_1800

><td class="source">    if (!arguments.length) return size;<br></td></tr
><tr
id=sl_svn524_1801

><td class="source">    size = x;<br></td></tr
><tr
id=sl_svn524_1802

><td class="source">    return treemap;<br></td></tr
><tr
id=sl_svn524_1803

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_1804

><td class="source"><br></td></tr
><tr
id=sl_svn524_1805

><td class="source">  treemap.padding = function(x) {<br></td></tr
><tr
id=sl_svn524_1806

><td class="source">    if (!arguments.length) return padding;<br></td></tr
><tr
id=sl_svn524_1807

><td class="source"><br></td></tr
><tr
id=sl_svn524_1808

><td class="source">    function padFunction(node) {<br></td></tr
><tr
id=sl_svn524_1809

><td class="source">      var p = x.call(treemap, node, node.depth);<br></td></tr
><tr
id=sl_svn524_1810

><td class="source">      return p == null<br></td></tr
><tr
id=sl_svn524_1811

><td class="source">          ? d3_layout_treemapPadNull(node)<br></td></tr
><tr
id=sl_svn524_1812

><td class="source">          : d3_layout_treemapPad(node, typeof p === &quot;number&quot; ? [p, p, p, p] : p);<br></td></tr
><tr
id=sl_svn524_1813

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_1814

><td class="source"><br></td></tr
><tr
id=sl_svn524_1815

><td class="source">    function padConstant(node) {<br></td></tr
><tr
id=sl_svn524_1816

><td class="source">      return d3_layout_treemapPad(node, x);<br></td></tr
><tr
id=sl_svn524_1817

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_1818

><td class="source"><br></td></tr
><tr
id=sl_svn524_1819

><td class="source">    var type;<br></td></tr
><tr
id=sl_svn524_1820

><td class="source">    pad = (padding = x) == null ? d3_layout_treemapPadNull<br></td></tr
><tr
id=sl_svn524_1821

><td class="source">        : (type = typeof x) === &quot;function&quot; ? padFunction<br></td></tr
><tr
id=sl_svn524_1822

><td class="source">        : type === &quot;number&quot; ? (x = [x, x, x, x], padConstant)<br></td></tr
><tr
id=sl_svn524_1823

><td class="source">        : padConstant;<br></td></tr
><tr
id=sl_svn524_1824

><td class="source">    return treemap;<br></td></tr
><tr
id=sl_svn524_1825

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_1826

><td class="source"><br></td></tr
><tr
id=sl_svn524_1827

><td class="source">  treemap.round = function(x) {<br></td></tr
><tr
id=sl_svn524_1828

><td class="source">    if (!arguments.length) return round != Number;<br></td></tr
><tr
id=sl_svn524_1829

><td class="source">    round = x ? Math.round : Number;<br></td></tr
><tr
id=sl_svn524_1830

><td class="source">    return treemap;<br></td></tr
><tr
id=sl_svn524_1831

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_1832

><td class="source"><br></td></tr
><tr
id=sl_svn524_1833

><td class="source">  treemap.sticky = function(x) {<br></td></tr
><tr
id=sl_svn524_1834

><td class="source">    if (!arguments.length) return sticky;<br></td></tr
><tr
id=sl_svn524_1835

><td class="source">    sticky = x;<br></td></tr
><tr
id=sl_svn524_1836

><td class="source">    stickies = null;<br></td></tr
><tr
id=sl_svn524_1837

><td class="source">    return treemap;<br></td></tr
><tr
id=sl_svn524_1838

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_1839

><td class="source"><br></td></tr
><tr
id=sl_svn524_1840

><td class="source">  treemap.ratio = function(x) {<br></td></tr
><tr
id=sl_svn524_1841

><td class="source">    if (!arguments.length) return ratio;<br></td></tr
><tr
id=sl_svn524_1842

><td class="source">    ratio = x;<br></td></tr
><tr
id=sl_svn524_1843

><td class="source">    return treemap;<br></td></tr
><tr
id=sl_svn524_1844

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_1845

><td class="source"><br></td></tr
><tr
id=sl_svn524_1846

><td class="source">  return d3_layout_hierarchyRebind(treemap, hierarchy);<br></td></tr
><tr
id=sl_svn524_1847

><td class="source">};<br></td></tr
><tr
id=sl_svn524_1848

><td class="source"><br></td></tr
><tr
id=sl_svn524_1849

><td class="source">function d3_layout_treemapPadNull(node) {<br></td></tr
><tr
id=sl_svn524_1850

><td class="source">  return {x: node.x, y: node.y, dx: node.dx, dy: node.dy};<br></td></tr
><tr
id=sl_svn524_1851

><td class="source">}<br></td></tr
><tr
id=sl_svn524_1852

><td class="source"><br></td></tr
><tr
id=sl_svn524_1853

><td class="source">function d3_layout_treemapPad(node, padding) {<br></td></tr
><tr
id=sl_svn524_1854

><td class="source">  var x = node.x + padding[3],<br></td></tr
><tr
id=sl_svn524_1855

><td class="source">      y = node.y + padding[0],<br></td></tr
><tr
id=sl_svn524_1856

><td class="source">      dx = node.dx - padding[1] - padding[3],<br></td></tr
><tr
id=sl_svn524_1857

><td class="source">      dy = node.dy - padding[0] - padding[2];<br></td></tr
><tr
id=sl_svn524_1858

><td class="source">  if (dx &lt; 0) { x += dx / 2; dx = 0; }<br></td></tr
><tr
id=sl_svn524_1859

><td class="source">  if (dy &lt; 0) { y += dy / 2; dy = 0; }<br></td></tr
><tr
id=sl_svn524_1860

><td class="source">  return {x: x, y: y, dx: dx, dy: dy};<br></td></tr
><tr
id=sl_svn524_1861

><td class="source">}<br></td></tr
><tr
id=sl_svn524_1862

><td class="source">})();<br></td></tr
></table></pre>
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
</td>
</tr></table>

 
<script type="text/javascript">
 var lineNumUnderMouse = -1;
 
 function gutterOver(num) {
 gutterOut();
 var newTR = document.getElementById('gr_svn524_' + num);
 if (newTR) {
 newTR.className = 'undermouse';
 }
 lineNumUnderMouse = num;
 }
 function gutterOut() {
 if (lineNumUnderMouse != -1) {
 var oldTR = document.getElementById(
 'gr_svn524_' + lineNumUnderMouse);
 if (oldTR) {
 oldTR.className = '';
 }
 lineNumUnderMouse = -1;
 }
 }
 var numsGenState = {table_base_id: 'nums_table_'};
 var srcGenState = {table_base_id: 'src_table_'};
 var alignerRunning = false;
 var startOver = false;
 function setLineNumberHeights() {
 if (alignerRunning) {
 startOver = true;
 return;
 }
 numsGenState.chunk_id = 0;
 numsGenState.table = document.getElementById('nums_table_0');
 numsGenState.row_num = 0;
 if (!numsGenState.table) {
 return; // Silently exit if no file is present.
 }
 srcGenState.chunk_id = 0;
 srcGenState.table = document.getElementById('src_table_0');
 srcGenState.row_num = 0;
 alignerRunning = true;
 continueToSetLineNumberHeights();
 }
 function rowGenerator(genState) {
 if (genState.row_num < genState.table.rows.length) {
 var currentRow = genState.table.rows[genState.row_num];
 genState.row_num++;
 return currentRow;
 }
 var newTable = document.getElementById(
 genState.table_base_id + (genState.chunk_id + 1));
 if (newTable) {
 genState.chunk_id++;
 genState.row_num = 0;
 genState.table = newTable;
 return genState.table.rows[0];
 }
 return null;
 }
 var MAX_ROWS_PER_PASS = 1000;
 function continueToSetLineNumberHeights() {
 var rowsInThisPass = 0;
 var numRow = 1;
 var srcRow = 1;
 while (numRow && srcRow && rowsInThisPass < MAX_ROWS_PER_PASS) {
 numRow = rowGenerator(numsGenState);
 srcRow = rowGenerator(srcGenState);
 rowsInThisPass++;
 if (numRow && srcRow) {
 if (numRow.offsetHeight != srcRow.offsetHeight) {
 numRow.firstChild.style.height = srcRow.offsetHeight + 'px';
 }
 }
 }
 if (rowsInThisPass >= MAX_ROWS_PER_PASS) {
 setTimeout(continueToSetLineNumberHeights, 10);
 } else {
 alignerRunning = false;
 if (startOver) {
 startOver = false;
 setTimeout(setLineNumberHeights, 500);
 }
 }
 }
 function initLineNumberHeights() {
 // Do 2 complete passes, because there can be races
 // between this code and prettify.
 startOver = true;
 setTimeout(setLineNumberHeights, 250);
 window.onresize = setLineNumberHeights;
 }
 initLineNumberHeights();
</script>

 
 
 <div id="log">
 <div style="text-align:right">
 <a class="ifCollapse" href="#" onclick="_toggleMeta(this); return false">Show details</a>
 <a class="ifExpand" href="#" onclick="_toggleMeta(this); return false">Hide details</a>
 </div>
 <div class="ifExpand">
 
 
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="changelog">
 <p>Change log</p>
 <div>
 <a href="/p/phylografter/source/detail?spec=svn524&amp;r=524">r524</a>
 by richard.h.ree
 on Sep 2, 2011
 &nbsp; <a href="/p/phylografter/source/diff?spec=svn524&r=524&amp;format=side&amp;path=/branches/v2-dev/static/d3/d3.layout.js&amp;old_path=/branches/v2-dev/static/d3/d3.layout.js&amp;old=">Diff</a>
 </div>
 <pre>new files to test d3</pre>
 </div>
 
 
 
 
 
 
 <script type="text/javascript">
 var detail_url = '/p/phylografter/source/detail?r=524&spec=svn524';
 var publish_url = '/p/phylografter/source/detail?r=524&spec=svn524#publish';
 // describe the paths of this revision in javascript.
 var changed_paths = [];
 var changed_urls = [];
 
 changed_paths.push('/branches/v2-dev/controllers/d3.py');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/controllers/d3.py?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/databases/f4acbe45065f9a8a785b520a6fc5c499_taxon.table');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/databases/f4acbe45065f9a8a785b520a6fc5c499_taxon.table?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/models/A_define_tables.py');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/models/A_define_tables.py?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/modules/treeUtil.py');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/modules/treeUtil.py?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/d3.chart.js');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/d3.chart.js?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/d3.chart.min.js');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/d3.chart.min.js?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/d3.csv.js');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/d3.csv.js?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/d3.csv.min.js');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/d3.csv.min.js?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/d3.geo.js');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/d3.geo.js?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/d3.geo.min.js');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/d3.geo.min.js?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/d3.geom.js');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/d3.geom.js?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/d3.geom.min.js');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/d3.geom.min.js?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/d3.js');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/d3.js?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/d3.layout.js');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/d3.layout.js?r\x3d524\x26spec\x3dsvn524');
 
 var selected_path = '/branches/v2-dev/static/d3/d3.layout.js';
 
 
 changed_paths.push('/branches/v2-dev/static/d3/d3.layout.min.js');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/d3.layout.min.js?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/d3.min.js');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/d3.min.js?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/d3.time.js');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/d3.time.js?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/d3.time.min.js');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/d3.time.min.js?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/lib');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/lib?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/lib/colorbrewer');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/colorbrewer?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/lib/colorbrewer/LICENSE');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/colorbrewer/LICENSE?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/lib/colorbrewer/colorbrewer.css');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/colorbrewer/colorbrewer.css?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/lib/colorbrewer/colorbrewer.js');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/colorbrewer/colorbrewer.js?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/lib/jit');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/jit?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/lib/jit/LICENSE');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/jit/LICENSE?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/lib/jquery');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/jquery?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/lib/jquery-ui');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/jquery-ui?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/lib/jquery-ui/LICENSE');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/jquery-ui/LICENSE?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/lib/jquery-ui/images');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/jquery-ui/images?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/lib/jquery-ui/images/ui-bg_diagonals-thick_18_b81900_40x40.png');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/jquery-ui/images/ui-bg_diagonals-thick_18_b81900_40x40.png?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/lib/jquery-ui/images/ui-bg_diagonals-thick_20_666666_40x40.png');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/jquery-ui/images/ui-bg_diagonals-thick_20_666666_40x40.png?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/lib/jquery-ui/images/ui-bg_flat_10_000000_40x100.png');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/jquery-ui/images/ui-bg_flat_10_000000_40x100.png?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/lib/jquery-ui/images/ui-bg_glass_100_f6f6f6_1x400.png');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/jquery-ui/images/ui-bg_glass_100_f6f6f6_1x400.png?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/lib/jquery-ui/images/ui-bg_glass_100_fdf5ce_1x400.png');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/jquery-ui/images/ui-bg_glass_100_fdf5ce_1x400.png?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/lib/jquery-ui/images/ui-bg_glass_65_ffffff_1x400.png');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/jquery-ui/images/ui-bg_glass_65_ffffff_1x400.png?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/lib/jquery-ui/images/ui-bg_gloss-wave_35_f6a828_500x100.png');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/jquery-ui/images/ui-bg_gloss-wave_35_f6a828_500x100.png?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/lib/jquery-ui/images/ui-bg_highlight-soft_100_eeeeee_1x100.png');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/jquery-ui/images/ui-bg_highlight-soft_100_eeeeee_1x100.png?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/lib/jquery-ui/images/ui-bg_highlight-soft_75_ffe45c_1x100.png');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/jquery-ui/images/ui-bg_highlight-soft_75_ffe45c_1x100.png?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/lib/jquery-ui/images/ui-icons_222222_256x240.png');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/jquery-ui/images/ui-icons_222222_256x240.png?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/lib/jquery-ui/images/ui-icons_228ef1_256x240.png');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/jquery-ui/images/ui-icons_228ef1_256x240.png?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/lib/jquery-ui/images/ui-icons_ef8c08_256x240.png');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/jquery-ui/images/ui-icons_ef8c08_256x240.png?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/lib/jquery-ui/images/ui-icons_ffd27a_256x240.png');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/jquery-ui/images/ui-icons_ffd27a_256x240.png?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/lib/jquery-ui/images/ui-icons_ffffff_256x240.png');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/jquery-ui/images/ui-icons_ffffff_256x240.png?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/lib/jquery-ui/jquery-ui.css');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/jquery-ui/jquery-ui.css?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/lib/jquery-ui/jquery-ui.min.js');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/jquery-ui/jquery-ui.min.js?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/lib/jquery/LICENSE');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/jquery/LICENSE?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/lib/jquery/jquery.js');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/jquery/jquery.js?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/lib/jquery/jquery.min.js');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/jquery/jquery.min.js?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/lib/polymaps');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/polymaps?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/lib/polymaps/LICENSE');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/polymaps/LICENSE?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/lib/protovis');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/protovis?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/lib/protovis/LICENSE');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/protovis/LICENSE?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/lib/science');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/science?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/lib/science/LICENSE');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/science/LICENSE?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/lib/science/science.js');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/science/science.js?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/lib/science/science.min.js');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/science/science.min.js?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/lib/science/science.stats.js');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/science/science.stats.js?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/lib/science/science.stats.min.js');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/science/science.stats.min.js?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/lib/sizzle');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/sizzle?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/lib/sizzle/LICENSE');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/sizzle/LICENSE?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/lib/sizzle/sizzle.js');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/sizzle/sizzle.js?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/lib/sizzle/sizzle.min.js');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/sizzle/sizzle.min.js?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/plugin_treeViewer.js');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/plugin_treeViewer.js?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/views/d3');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/views/d3?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/views/d3/force.html');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/views/d3/force.html?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/views/d3/forcenodepos.json');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/views/d3/forcenodepos.json?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/views/d3/index.html');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/views/d3/index.html?r\x3d524\x26spec\x3dsvn524');
 
 
 function getCurrentPageIndex() {
 for (var i = 0; i < changed_paths.length; i++) {
 if (selected_path == changed_paths[i]) {
 return i;
 }
 }
 }
 function getNextPage() {
 var i = getCurrentPageIndex();
 if (i < changed_paths.length - 1) {
 return changed_urls[i + 1];
 }
 return null;
 }
 function getPreviousPage() {
 var i = getCurrentPageIndex();
 if (i > 0) {
 return changed_urls[i - 1];
 }
 return null;
 }
 function gotoNextPage() {
 var page = getNextPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoPreviousPage() {
 var page = getPreviousPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoDetailPage() {
 window.location = detail_url;
 }
 function gotoPublishPage() {
 window.location = publish_url;
 }
</script>

 
 <style type="text/css">
 #review_nav {
 border-top: 3px solid white;
 padding-top: 6px;
 margin-top: 1em;
 }
 #review_nav td {
 vertical-align: middle;
 }
 #review_nav select {
 margin: .5em 0;
 }
 </style>
 <div id="review_nav">
 <table><tr><td>Go to:&nbsp;</td><td>
 <select name="files_in_rev" onchange="window.location=this.value">
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/controllers/d3.py?r=524&amp;spec=svn524"
 
 >/branches/v2-dev/controllers/d3.py</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/databases/f4acbe45065f9a8a785b520a6fc5c499_taxon.table?r=524&amp;spec=svn524"
 
 >...9a8a785b520a6fc5c499_taxon.table</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/models/A_define_tables.py?r=524&amp;spec=svn524"
 
 >...v2-dev/models/A_define_tables.py</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/modules/treeUtil.py?r=524&amp;spec=svn524"
 
 >...nches/v2-dev/modules/treeUtil.py</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3?r=524&amp;spec=svn524"
 
 >/branches/v2-dev/static/d3</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/d3.chart.js?r=524&amp;spec=svn524"
 
 >...hes/v2-dev/static/d3/d3.chart.js</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/d3.chart.min.js?r=524&amp;spec=svn524"
 
 >...v2-dev/static/d3/d3.chart.min.js</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/d3.csv.js?r=524&amp;spec=svn524"
 
 >...nches/v2-dev/static/d3/d3.csv.js</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/d3.csv.min.js?r=524&amp;spec=svn524"
 
 >...s/v2-dev/static/d3/d3.csv.min.js</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/d3.geo.js?r=524&amp;spec=svn524"
 
 >...nches/v2-dev/static/d3/d3.geo.js</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/d3.geo.min.js?r=524&amp;spec=svn524"
 
 >...s/v2-dev/static/d3/d3.geo.min.js</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/d3.geom.js?r=524&amp;spec=svn524"
 
 >...ches/v2-dev/static/d3/d3.geom.js</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/d3.geom.min.js?r=524&amp;spec=svn524"
 
 >.../v2-dev/static/d3/d3.geom.min.js</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/d3.js?r=524&amp;spec=svn524"
 
 >/branches/v2-dev/static/d3/d3.js</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/d3.layout.js?r=524&amp;spec=svn524"
 selected="selected"
 >...es/v2-dev/static/d3/d3.layout.js</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/d3.layout.min.js?r=524&amp;spec=svn524"
 
 >...2-dev/static/d3/d3.layout.min.js</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/d3.min.js?r=524&amp;spec=svn524"
 
 >...nches/v2-dev/static/d3/d3.min.js</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/d3.time.js?r=524&amp;spec=svn524"
 
 >...ches/v2-dev/static/d3/d3.time.js</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/d3.time.min.js?r=524&amp;spec=svn524"
 
 >.../v2-dev/static/d3/d3.time.min.js</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/lib?r=524&amp;spec=svn524"
 
 >/branches/v2-dev/static/d3/lib</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/colorbrewer?r=524&amp;spec=svn524"
 
 >...v2-dev/static/d3/lib/colorbrewer</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/colorbrewer/LICENSE?r=524&amp;spec=svn524"
 
 >...tatic/d3/lib/colorbrewer/LICENSE</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/colorbrewer/colorbrewer.css?r=524&amp;spec=svn524"
 
 >.../lib/colorbrewer/colorbrewer.css</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/colorbrewer/colorbrewer.js?r=524&amp;spec=svn524"
 
 >...3/lib/colorbrewer/colorbrewer.js</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/jit?r=524&amp;spec=svn524"
 
 >/branches/v2-dev/static/d3/lib/jit</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/jit/LICENSE?r=524&amp;spec=svn524"
 
 >...v2-dev/static/d3/lib/jit/LICENSE</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/jquery?r=524&amp;spec=svn524"
 
 >...ches/v2-dev/static/d3/lib/jquery</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/jquery-ui?r=524&amp;spec=svn524"
 
 >...s/v2-dev/static/d3/lib/jquery-ui</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/jquery-ui/LICENSE?r=524&amp;spec=svn524"
 
 >.../static/d3/lib/jquery-ui/LICENSE</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/jquery-ui/images?r=524&amp;spec=svn524"
 
 >...v/static/d3/lib/jquery-ui/images</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/jquery-ui/images/ui-bg_diagonals-thick_18_b81900_40x40.png?r=524&amp;spec=svn524"
 
 >...gonals-thick_18_b81900_40x40.png</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/jquery-ui/images/ui-bg_diagonals-thick_20_666666_40x40.png?r=524&amp;spec=svn524"
 
 >...gonals-thick_20_666666_40x40.png</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/jquery-ui/images/ui-bg_flat_10_000000_40x100.png?r=524&amp;spec=svn524"
 
 >.../ui-bg_flat_10_000000_40x100.png</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/jquery-ui/images/ui-bg_glass_100_f6f6f6_1x400.png?r=524&amp;spec=svn524"
 
 >...ui-bg_glass_100_f6f6f6_1x400.png</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/jquery-ui/images/ui-bg_glass_100_fdf5ce_1x400.png?r=524&amp;spec=svn524"
 
 >...ui-bg_glass_100_fdf5ce_1x400.png</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/jquery-ui/images/ui-bg_glass_65_ffffff_1x400.png?r=524&amp;spec=svn524"
 
 >.../ui-bg_glass_65_ffffff_1x400.png</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/jquery-ui/images/ui-bg_gloss-wave_35_f6a828_500x100.png?r=524&amp;spec=svn524"
 
 >...gloss-wave_35_f6a828_500x100.png</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/jquery-ui/images/ui-bg_highlight-soft_100_eeeeee_1x100.png?r=524&amp;spec=svn524"
 
 >...hlight-soft_100_eeeeee_1x100.png</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/jquery-ui/images/ui-bg_highlight-soft_75_ffe45c_1x100.png?r=524&amp;spec=svn524"
 
 >...ghlight-soft_75_ffe45c_1x100.png</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/jquery-ui/images/ui-icons_222222_256x240.png?r=524&amp;spec=svn524"
 
 >...ages/ui-icons_222222_256x240.png</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/jquery-ui/images/ui-icons_228ef1_256x240.png?r=524&amp;spec=svn524"
 
 >...ages/ui-icons_228ef1_256x240.png</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/jquery-ui/images/ui-icons_ef8c08_256x240.png?r=524&amp;spec=svn524"
 
 >...ages/ui-icons_ef8c08_256x240.png</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/jquery-ui/images/ui-icons_ffd27a_256x240.png?r=524&amp;spec=svn524"
 
 >...ages/ui-icons_ffd27a_256x240.png</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/jquery-ui/images/ui-icons_ffffff_256x240.png?r=524&amp;spec=svn524"
 
 >...ages/ui-icons_ffffff_256x240.png</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/jquery-ui/jquery-ui.css?r=524&amp;spec=svn524"
 
 >...c/d3/lib/jquery-ui/jquery-ui.css</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/jquery-ui/jquery-ui.min.js?r=524&amp;spec=svn524"
 
 >...3/lib/jquery-ui/jquery-ui.min.js</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/jquery/LICENSE?r=524&amp;spec=svn524"
 
 >...dev/static/d3/lib/jquery/LICENSE</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/jquery/jquery.js?r=524&amp;spec=svn524"
 
 >...v/static/d3/lib/jquery/jquery.js</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/jquery/jquery.min.js?r=524&amp;spec=svn524"
 
 >...atic/d3/lib/jquery/jquery.min.js</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/polymaps?r=524&amp;spec=svn524"
 
 >...es/v2-dev/static/d3/lib/polymaps</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/polymaps/LICENSE?r=524&amp;spec=svn524"
 
 >...v/static/d3/lib/polymaps/LICENSE</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/protovis?r=524&amp;spec=svn524"
 
 >...es/v2-dev/static/d3/lib/protovis</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/protovis/LICENSE?r=524&amp;spec=svn524"
 
 >...v/static/d3/lib/protovis/LICENSE</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/science?r=524&amp;spec=svn524"
 
 >...hes/v2-dev/static/d3/lib/science</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/science/LICENSE?r=524&amp;spec=svn524"
 
 >...ev/static/d3/lib/science/LICENSE</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/science/science.js?r=524&amp;spec=svn524"
 
 >...static/d3/lib/science/science.js</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/science/science.min.js?r=524&amp;spec=svn524"
 
 >...ic/d3/lib/science/science.min.js</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/science/science.stats.js?r=524&amp;spec=svn524"
 
 >.../d3/lib/science/science.stats.js</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/science/science.stats.min.js?r=524&amp;spec=svn524"
 
 >...lib/science/science.stats.min.js</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/sizzle?r=524&amp;spec=svn524"
 
 >...ches/v2-dev/static/d3/lib/sizzle</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/sizzle/LICENSE?r=524&amp;spec=svn524"
 
 >...dev/static/d3/lib/sizzle/LICENSE</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/sizzle/sizzle.js?r=524&amp;spec=svn524"
 
 >...v/static/d3/lib/sizzle/sizzle.js</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/lib/sizzle/sizzle.min.js?r=524&amp;spec=svn524"
 
 >...atic/d3/lib/sizzle/sizzle.min.js</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/plugin_treeViewer.js?r=524&amp;spec=svn524"
 
 >...-dev/static/plugin_treeViewer.js</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/views/d3?r=524&amp;spec=svn524"
 
 >/branches/v2-dev/views/d3</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/views/d3/force.html?r=524&amp;spec=svn524"
 
 >...nches/v2-dev/views/d3/force.html</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/views/d3/forcenodepos.json?r=524&amp;spec=svn524"
 
 >...2-dev/views/d3/forcenodepos.json</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/views/d3/index.html?r=524&amp;spec=svn524"
 
 >...nches/v2-dev/views/d3/index.html</option>
 
 </select>
 </td></tr></table>
 
 
 



 
 </div>
 
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="older_bubble">
 <p>Older revisions</p>
 
 <a href="/p/phylografter/source/list?path=/branches/v2-dev/static/d3/d3.layout.js&start=524">All revisions of this file</a>
 </div>
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="fileinfo_bubble">
 <p>File info</p>
 
 <div>Size: 47070 bytes,
 1862 lines</div>
 
 <div><a href="//phylografter.googlecode.com/svn-history/r524/branches/v2-dev/static/d3/d3.layout.js">View raw file</a></div>
 </div>
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 </div>
 </div>


</div>

</div>
</div>

<script src="https://ssl.gstatic.com/codesite/ph/18133036155640238800/js/prettify/prettify.js"></script>
<script type="text/javascript">prettyPrint();</script>


<script src="https://ssl.gstatic.com/codesite/ph/18133036155640238800/js/source_file_scripts.js"></script>

 <script type="text/javascript" src="https://ssl.gstatic.com/codesite/ph/18133036155640238800/js/kibbles.js"></script>
 <script type="text/javascript">
 var lastStop = null;
 var initialized = false;
 
 function updateCursor(next, prev) {
 if (prev && prev.element) {
 prev.element.className = 'cursor_stop cursor_hidden';
 }
 if (next && next.element) {
 next.element.className = 'cursor_stop cursor';
 lastStop = next.index;
 }
 }
 
 function pubRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initialized) {
 reloadCursors();
 }
 }
 
 function draftRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initialized) {
 reloadCursors();
 }
 }
 
 function draftDestroyed(data) {
 updateCursorForCell(data.cellId, 'nocursor');
 if (initialized) {
 reloadCursors();
 }
 }
 function reloadCursors() {
 kibbles.skipper.reset();
 loadCursors();
 if (lastStop != null) {
 kibbles.skipper.setCurrentStop(lastStop);
 }
 }
 // possibly the simplest way to insert any newly added comments
 // is to update the class of the corresponding cursor row,
 // then refresh the entire list of rows.
 function updateCursorForCell(cellId, className) {
 var cell = document.getElementById(cellId);
 // we have to go two rows back to find the cursor location
 var row = getPreviousElement(cell.parentNode);
 row.className = className;
 }
 // returns the previous element, ignores text nodes.
 function getPreviousElement(e) {
 var element = e.previousSibling;
 if (element.nodeType == 3) {
 element = element.previousSibling;
 }
 if (element && element.tagName) {
 return element;
 }
 }
 function loadCursors() {
 // register our elements with skipper
 var elements = CR_getElements('*', 'cursor_stop');
 var len = elements.length;
 for (var i = 0; i < len; i++) {
 var element = elements[i]; 
 element.className = 'cursor_stop cursor_hidden';
 kibbles.skipper.append(element);
 }
 }
 function toggleComments() {
 CR_toggleCommentDisplay();
 reloadCursors();
 }
 function keysOnLoadHandler() {
 // setup skipper
 kibbles.skipper.addStopListener(
 kibbles.skipper.LISTENER_TYPE.PRE, updateCursor);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_top', 50);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_bottom', 100);
 // Register our keys
 kibbles.skipper.addFwdKey("n");
 kibbles.skipper.addRevKey("p");
 kibbles.keys.addKeyPressListener(
 'u', function() { window.location = detail_url; });
 kibbles.keys.addKeyPressListener(
 'r', function() { window.location = detail_url + '#publish'; });
 
 kibbles.keys.addKeyPressListener('j', gotoNextPage);
 kibbles.keys.addKeyPressListener('k', gotoPreviousPage);
 
 
 }
 </script>
<script src="https://ssl.gstatic.com/codesite/ph/18133036155640238800/js/code_review_scripts.js"></script>
<script type="text/javascript">
 function showPublishInstructions() {
 var element = document.getElementById('review_instr');
 if (element) {
 element.className = 'opened';
 }
 }
 var codereviews;
 function revsOnLoadHandler() {
 // register our source container with the commenting code
 var paths = {'svn524': '/branches/v2-dev/static/d3/d3.layout.js'}
 codereviews = CR_controller.setup(
 {"relativeBaseUrl": "", "assetVersionPath": "https://ssl.gstatic.com/codesite/ph/18133036155640238800", "domainName": null, "assetHostPath": "https://ssl.gstatic.com/codesite/ph", "projectName": "phylografter", "loggedInUserEmail": "giangtranbinh@gmail.com", "token": "ABZ6GAdHeB-b4aPykaBOmr8slaauDsWizw:1421231462947", "projectHomeUrl": "/p/phylografter", "profileUrl": "/u/giangtranbinh/"}, '', 'svn524', paths,
 CR_BrowseIntegrationFactory);
 
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_DRAFT_PLATE, showPublishInstructions);
 
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_PUB_PLATE, pubRevealed);
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_DRAFT_PLATE, draftRevealed);
 codereviews.registerActivityListener(CR_ActivityType.DISCARD_DRAFT_COMMENT, draftDestroyed);
 
 
 
 
 
 
 
 var initialized = true;
 reloadCursors();
 }
 window.onload = function() {keysOnLoadHandler(); revsOnLoadHandler();};

</script>
<script type="text/javascript" src="https://ssl.gstatic.com/codesite/ph/18133036155640238800/js/dit_scripts.js"></script>

 
 
 
 <script type="text/javascript" src="https://ssl.gstatic.com/codesite/ph/18133036155640238800/js/ph_core.js"></script>
 
 
 
 
</div> 

<div id="footer" dir="ltr">
 <div class="text">
 <a href="/projecthosting/terms.html">Terms</a> -
 <a href="http://www.google.com/privacy.html">Privacy</a> -
 <a href="/p/support/">Project Hosting Help</a>
 </div>
</div>
 <div class="hostedBy" style="margin-top: -20px;">
 <span style="vertical-align: top;">Powered by <a href="http://code.google.com/projecthosting/">Google Project Hosting</a></span>
 </div>

 
 


 
 </body>
</html>

