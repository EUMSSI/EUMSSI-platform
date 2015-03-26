



<!DOCTYPE html>
<html>
<head>
 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" >
 <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" >
 
 <meta name="ROBOTS" content="NOARCHIVE">
 
 <link rel="icon" type="image/vnd.microsoft.icon" href="https://ssl.gstatic.com/codesite/ph/images/phosting.ico">
 
 
 <script type="text/javascript">
 
 
 
 
 var codesite_token = "ABZ6GAejsblUREuf52AfbLjn-l3Fc7ADTQ:1421231411178";
 
 
 var CS_env = {"assetHostPath": "https://ssl.gstatic.com/codesite/ph", "domainName": null, "relativeBaseUrl": "", "token": "ABZ6GAejsblUREuf52AfbLjn-l3Fc7ADTQ:1421231411178", "projectHomeUrl": "/p/phylografter", "profileUrl": "/u/giangtranbinh/", "assetVersionPath": "https://ssl.gstatic.com/codesite/ph/18133036155640238800", "loggedInUserEmail": "giangtranbinh@gmail.com", "projectName": "phylografter"};
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
 
 
 <title>d3.geom.js - 
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
 | <a href="https://www.google.com/accounts/Logout?continue=https%3A%2F%2Fcode.google.com%2Fp%2Fphylografter%2Fsource%2Fbrowse%2Fbranches%2Fv2-dev%2Fstatic%2Fd3%2Fd3.geom.js%3Fr%3D524" 
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
 <span id="crumb_links" class="ifClosed"><a href="/p/phylografter/source/browse/branches/?r=524">branches</a><span class="sp">/&nbsp;</span><a href="/p/phylografter/source/browse/branches/v2-dev/?r=524">v2-dev</a><span class="sp">/&nbsp;</span><a href="/p/phylografter/source/browse/branches/v2-dev/static/?r=524">static</a><span class="sp">/&nbsp;</span><a href="/p/phylografter/source/browse/branches/v2-dev/static/d3/?r=524">d3</a><span class="sp">/&nbsp;</span>d3.geom.js</span>
 
 


 </td>
 
 
 <td nowrap="nowrap" width="33%" align="right">
 <table cellpadding="0" cellspacing="0" style="font-size: 100%"><tr>
 
 
 <td class="flipper"><b>r524</b></td>
 
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
></table></pre>
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
</td>
<td id="lines">
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
<pre class="prettyprint lang-js"><table id="src_table_0"><tr
id=sl_svn524_1

><td class="source">(function(){d3.geom = {};<br></td></tr
><tr
id=sl_svn524_2

><td class="source">/**<br></td></tr
><tr
id=sl_svn524_3

><td class="source"> * Computes a contour for a given input grid function using the &lt;a<br></td></tr
><tr
id=sl_svn524_4

><td class="source"> * href=&quot;http://en.wikipedia.org/wiki/Marching_squares&quot;&gt;marching<br></td></tr
><tr
id=sl_svn524_5

><td class="source"> * squares&lt;/a&gt; algorithm. Returns the contour polygon as an array of points.<br></td></tr
><tr
id=sl_svn524_6

><td class="source"> *<br></td></tr
><tr
id=sl_svn524_7

><td class="source"> * @param grid a two-input function(x, y) that returns true for values<br></td></tr
><tr
id=sl_svn524_8

><td class="source"> * inside the contour and false for values outside the contour.<br></td></tr
><tr
id=sl_svn524_9

><td class="source"> * @param start an optional starting point [x, y] on the grid.<br></td></tr
><tr
id=sl_svn524_10

><td class="source"> * @returns polygon [[x1, y1], [x2, y2], …]<br></td></tr
><tr
id=sl_svn524_11

><td class="source"> */<br></td></tr
><tr
id=sl_svn524_12

><td class="source">d3.geom.contour = function(grid, start) {<br></td></tr
><tr
id=sl_svn524_13

><td class="source">  var s = start || d3_geom_contourStart(grid), // starting point<br></td></tr
><tr
id=sl_svn524_14

><td class="source">      c = [],    // contour polygon<br></td></tr
><tr
id=sl_svn524_15

><td class="source">      x = s[0],  // current x position<br></td></tr
><tr
id=sl_svn524_16

><td class="source">      y = s[1],  // current y position<br></td></tr
><tr
id=sl_svn524_17

><td class="source">      dx = 0,    // next x direction<br></td></tr
><tr
id=sl_svn524_18

><td class="source">      dy = 0,    // next y direction<br></td></tr
><tr
id=sl_svn524_19

><td class="source">      pdx = NaN, // previous x direction<br></td></tr
><tr
id=sl_svn524_20

><td class="source">      pdy = NaN, // previous y direction<br></td></tr
><tr
id=sl_svn524_21

><td class="source">      i = 0;<br></td></tr
><tr
id=sl_svn524_22

><td class="source"><br></td></tr
><tr
id=sl_svn524_23

><td class="source">  do {<br></td></tr
><tr
id=sl_svn524_24

><td class="source">    // determine marching squares index<br></td></tr
><tr
id=sl_svn524_25

><td class="source">    i = 0;<br></td></tr
><tr
id=sl_svn524_26

><td class="source">    if (grid(x-1, y-1)) i += 1;<br></td></tr
><tr
id=sl_svn524_27

><td class="source">    if (grid(x,   y-1)) i += 2;<br></td></tr
><tr
id=sl_svn524_28

><td class="source">    if (grid(x-1, y  )) i += 4;<br></td></tr
><tr
id=sl_svn524_29

><td class="source">    if (grid(x,   y  )) i += 8;<br></td></tr
><tr
id=sl_svn524_30

><td class="source"><br></td></tr
><tr
id=sl_svn524_31

><td class="source">    // determine next direction<br></td></tr
><tr
id=sl_svn524_32

><td class="source">    if (i === 6) {<br></td></tr
><tr
id=sl_svn524_33

><td class="source">      dx = pdy === -1 ? -1 : 1;<br></td></tr
><tr
id=sl_svn524_34

><td class="source">      dy = 0;<br></td></tr
><tr
id=sl_svn524_35

><td class="source">    } else if (i === 9) {<br></td></tr
><tr
id=sl_svn524_36

><td class="source">      dx = 0;<br></td></tr
><tr
id=sl_svn524_37

><td class="source">      dy = pdx === 1 ? -1 : 1;<br></td></tr
><tr
id=sl_svn524_38

><td class="source">    } else {<br></td></tr
><tr
id=sl_svn524_39

><td class="source">      dx = d3_geom_contourDx[i];<br></td></tr
><tr
id=sl_svn524_40

><td class="source">      dy = d3_geom_contourDy[i];<br></td></tr
><tr
id=sl_svn524_41

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_42

><td class="source"><br></td></tr
><tr
id=sl_svn524_43

><td class="source">    // update contour polygon<br></td></tr
><tr
id=sl_svn524_44

><td class="source">    if (dx != pdx &amp;&amp; dy != pdy) {<br></td></tr
><tr
id=sl_svn524_45

><td class="source">      c.push([x, y]);<br></td></tr
><tr
id=sl_svn524_46

><td class="source">      pdx = dx;<br></td></tr
><tr
id=sl_svn524_47

><td class="source">      pdy = dy;<br></td></tr
><tr
id=sl_svn524_48

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_49

><td class="source"><br></td></tr
><tr
id=sl_svn524_50

><td class="source">    x += dx;<br></td></tr
><tr
id=sl_svn524_51

><td class="source">    y += dy;<br></td></tr
><tr
id=sl_svn524_52

><td class="source">  } while (s[0] != x || s[1] != y);<br></td></tr
><tr
id=sl_svn524_53

><td class="source"><br></td></tr
><tr
id=sl_svn524_54

><td class="source">  return c;<br></td></tr
><tr
id=sl_svn524_55

><td class="source">};<br></td></tr
><tr
id=sl_svn524_56

><td class="source"><br></td></tr
><tr
id=sl_svn524_57

><td class="source">// lookup tables for marching directions<br></td></tr
><tr
id=sl_svn524_58

><td class="source">var d3_geom_contourDx = [1, 0, 1, 1,-1, 0,-1, 1,0, 0,0,0,-1, 0,-1,NaN],<br></td></tr
><tr
id=sl_svn524_59

><td class="source">    d3_geom_contourDy = [0,-1, 0, 0, 0,-1, 0, 0,1,-1,1,1, 0,-1, 0,NaN];<br></td></tr
><tr
id=sl_svn524_60

><td class="source"><br></td></tr
><tr
id=sl_svn524_61

><td class="source">function d3_geom_contourStart(grid) {<br></td></tr
><tr
id=sl_svn524_62

><td class="source">  var x = 0,<br></td></tr
><tr
id=sl_svn524_63

><td class="source">      y = 0;<br></td></tr
><tr
id=sl_svn524_64

><td class="source"><br></td></tr
><tr
id=sl_svn524_65

><td class="source">  // search for a starting point; begin at origin<br></td></tr
><tr
id=sl_svn524_66

><td class="source">  // and proceed along outward-expanding diagonals<br></td></tr
><tr
id=sl_svn524_67

><td class="source">  while (true) {<br></td></tr
><tr
id=sl_svn524_68

><td class="source">    if (grid(x,y)) {<br></td></tr
><tr
id=sl_svn524_69

><td class="source">      return [x,y];<br></td></tr
><tr
id=sl_svn524_70

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_71

><td class="source">    if (x === 0) {<br></td></tr
><tr
id=sl_svn524_72

><td class="source">      x = y + 1;<br></td></tr
><tr
id=sl_svn524_73

><td class="source">      y = 0;<br></td></tr
><tr
id=sl_svn524_74

><td class="source">    } else {<br></td></tr
><tr
id=sl_svn524_75

><td class="source">      x = x - 1;<br></td></tr
><tr
id=sl_svn524_76

><td class="source">      y = y + 1;<br></td></tr
><tr
id=sl_svn524_77

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_78

><td class="source">  }<br></td></tr
><tr
id=sl_svn524_79

><td class="source">}<br></td></tr
><tr
id=sl_svn524_80

><td class="source">/**<br></td></tr
><tr
id=sl_svn524_81

><td class="source"> * Computes the 2D convex hull of a set of points using Graham&#39;s scanning<br></td></tr
><tr
id=sl_svn524_82

><td class="source"> * algorithm. The algorithm has been implemented as described in Cormen,<br></td></tr
><tr
id=sl_svn524_83

><td class="source"> * Leiserson, and Rivest&#39;s Introduction to Algorithms. The running time of<br></td></tr
><tr
id=sl_svn524_84

><td class="source"> * this algorithm is O(n log n), where n is the number of input points.<br></td></tr
><tr
id=sl_svn524_85

><td class="source"> *<br></td></tr
><tr
id=sl_svn524_86

><td class="source"> * @param vertices [[x1, y1], [x2, y2], …]<br></td></tr
><tr
id=sl_svn524_87

><td class="source"> * @returns polygon [[x1, y1], [x2, y2], …]<br></td></tr
><tr
id=sl_svn524_88

><td class="source"> */<br></td></tr
><tr
id=sl_svn524_89

><td class="source">d3.geom.hull = function(vertices) {<br></td></tr
><tr
id=sl_svn524_90

><td class="source">  if (vertices.length &lt; 3) return [];<br></td></tr
><tr
id=sl_svn524_91

><td class="source"><br></td></tr
><tr
id=sl_svn524_92

><td class="source">  var len = vertices.length,<br></td></tr
><tr
id=sl_svn524_93

><td class="source">      plen = len - 1,<br></td></tr
><tr
id=sl_svn524_94

><td class="source">      points = [],<br></td></tr
><tr
id=sl_svn524_95

><td class="source">      stack = [],<br></td></tr
><tr
id=sl_svn524_96

><td class="source">      i, j, h = 0, x1, y1, x2, y2, u, v, a, sp;<br></td></tr
><tr
id=sl_svn524_97

><td class="source"><br></td></tr
><tr
id=sl_svn524_98

><td class="source">  // find the starting ref point: leftmost point with the minimum y coord<br></td></tr
><tr
id=sl_svn524_99

><td class="source">  for (i=1; i&lt;len; ++i) {<br></td></tr
><tr
id=sl_svn524_100

><td class="source">    if (vertices[i][1] &lt; vertices[h][1]) {<br></td></tr
><tr
id=sl_svn524_101

><td class="source">      h = i;<br></td></tr
><tr
id=sl_svn524_102

><td class="source">    } else if (vertices[i][1] == vertices[h][1]) {<br></td></tr
><tr
id=sl_svn524_103

><td class="source">      h = (vertices[i][0] &lt; vertices[h][0] ? i : h);<br></td></tr
><tr
id=sl_svn524_104

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_105

><td class="source">  }<br></td></tr
><tr
id=sl_svn524_106

><td class="source"><br></td></tr
><tr
id=sl_svn524_107

><td class="source">  // calculate polar angles from ref point and sort<br></td></tr
><tr
id=sl_svn524_108

><td class="source">  for (i=0; i&lt;len; ++i) {<br></td></tr
><tr
id=sl_svn524_109

><td class="source">    if (i === h) continue;<br></td></tr
><tr
id=sl_svn524_110

><td class="source">    y1 = vertices[i][1] - vertices[h][1];<br></td></tr
><tr
id=sl_svn524_111

><td class="source">    x1 = vertices[i][0] - vertices[h][0];<br></td></tr
><tr
id=sl_svn524_112

><td class="source">    points.push({angle: Math.atan2(y1, x1), index: i});<br></td></tr
><tr
id=sl_svn524_113

><td class="source">  }<br></td></tr
><tr
id=sl_svn524_114

><td class="source">  points.sort(function(a, b) { return a.angle - b.angle; });<br></td></tr
><tr
id=sl_svn524_115

><td class="source"><br></td></tr
><tr
id=sl_svn524_116

><td class="source">  // toss out duplicate angles<br></td></tr
><tr
id=sl_svn524_117

><td class="source">  a = points[0].angle;<br></td></tr
><tr
id=sl_svn524_118

><td class="source">  v = points[0].index;<br></td></tr
><tr
id=sl_svn524_119

><td class="source">  u = 0;<br></td></tr
><tr
id=sl_svn524_120

><td class="source">  for (i=1; i&lt;plen; ++i) {<br></td></tr
><tr
id=sl_svn524_121

><td class="source">    j = points[i].index;<br></td></tr
><tr
id=sl_svn524_122

><td class="source">    if (a == points[i].angle) {<br></td></tr
><tr
id=sl_svn524_123

><td class="source">      // keep angle for point most distant from the reference<br></td></tr
><tr
id=sl_svn524_124

><td class="source">      x1 = vertices[v][0] - vertices[h][0];<br></td></tr
><tr
id=sl_svn524_125

><td class="source">      y1 = vertices[v][1] - vertices[h][1];<br></td></tr
><tr
id=sl_svn524_126

><td class="source">      x2 = vertices[j][0] - vertices[h][0];<br></td></tr
><tr
id=sl_svn524_127

><td class="source">      y2 = vertices[j][1] - vertices[h][1];<br></td></tr
><tr
id=sl_svn524_128

><td class="source">      if ((x1*x1 + y1*y1) &gt;= (x2*x2 + y2*y2)) {<br></td></tr
><tr
id=sl_svn524_129

><td class="source">        points[i].index = -1;<br></td></tr
><tr
id=sl_svn524_130

><td class="source">      } else {<br></td></tr
><tr
id=sl_svn524_131

><td class="source">        points[u].index = -1;<br></td></tr
><tr
id=sl_svn524_132

><td class="source">        a = points[i].angle;<br></td></tr
><tr
id=sl_svn524_133

><td class="source">        u = i;<br></td></tr
><tr
id=sl_svn524_134

><td class="source">        v = j;<br></td></tr
><tr
id=sl_svn524_135

><td class="source">      }<br></td></tr
><tr
id=sl_svn524_136

><td class="source">    } else {<br></td></tr
><tr
id=sl_svn524_137

><td class="source">      a = points[i].angle;<br></td></tr
><tr
id=sl_svn524_138

><td class="source">      u = i;<br></td></tr
><tr
id=sl_svn524_139

><td class="source">      v = j;<br></td></tr
><tr
id=sl_svn524_140

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_141

><td class="source">  }<br></td></tr
><tr
id=sl_svn524_142

><td class="source"><br></td></tr
><tr
id=sl_svn524_143

><td class="source">  // initialize the stack<br></td></tr
><tr
id=sl_svn524_144

><td class="source">  stack.push(h);<br></td></tr
><tr
id=sl_svn524_145

><td class="source">  for (i=0, j=0; i&lt;2; ++j) {<br></td></tr
><tr
id=sl_svn524_146

><td class="source">    if (points[j].index !== -1) {<br></td></tr
><tr
id=sl_svn524_147

><td class="source">      stack.push(points[j].index);<br></td></tr
><tr
id=sl_svn524_148

><td class="source">      i++;<br></td></tr
><tr
id=sl_svn524_149

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_150

><td class="source">  }<br></td></tr
><tr
id=sl_svn524_151

><td class="source">  sp = stack.length;<br></td></tr
><tr
id=sl_svn524_152

><td class="source"><br></td></tr
><tr
id=sl_svn524_153

><td class="source">  // do graham&#39;s scan<br></td></tr
><tr
id=sl_svn524_154

><td class="source">  for (; j&lt;plen; ++j) {<br></td></tr
><tr
id=sl_svn524_155

><td class="source">    if (points[j].index === -1) continue; // skip tossed out points<br></td></tr
><tr
id=sl_svn524_156

><td class="source">    while (!d3_geom_hullCCW(stack[sp-2], stack[sp-1], points[j].index, vertices)) {<br></td></tr
><tr
id=sl_svn524_157

><td class="source">      --sp;<br></td></tr
><tr
id=sl_svn524_158

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_159

><td class="source">    stack[sp++] = points[j].index;<br></td></tr
><tr
id=sl_svn524_160

><td class="source">  }<br></td></tr
><tr
id=sl_svn524_161

><td class="source"><br></td></tr
><tr
id=sl_svn524_162

><td class="source">  // construct the hull<br></td></tr
><tr
id=sl_svn524_163

><td class="source">  var poly = [];<br></td></tr
><tr
id=sl_svn524_164

><td class="source">  for (i=0; i&lt;sp; ++i) {<br></td></tr
><tr
id=sl_svn524_165

><td class="source">    poly.push(vertices[stack[i]]);<br></td></tr
><tr
id=sl_svn524_166

><td class="source">  }<br></td></tr
><tr
id=sl_svn524_167

><td class="source">  return poly;<br></td></tr
><tr
id=sl_svn524_168

><td class="source">}<br></td></tr
><tr
id=sl_svn524_169

><td class="source"><br></td></tr
><tr
id=sl_svn524_170

><td class="source">// are three points in counter-clockwise order?<br></td></tr
><tr
id=sl_svn524_171

><td class="source">function d3_geom_hullCCW(i1, i2, i3, v) {<br></td></tr
><tr
id=sl_svn524_172

><td class="source">  var t, a, b, c, d, e, f;<br></td></tr
><tr
id=sl_svn524_173

><td class="source">  t = v[i1]; a = t[0]; b = t[1];<br></td></tr
><tr
id=sl_svn524_174

><td class="source">  t = v[i2]; c = t[0]; d = t[1];<br></td></tr
><tr
id=sl_svn524_175

><td class="source">  t = v[i3]; e = t[0]; f = t[1];<br></td></tr
><tr
id=sl_svn524_176

><td class="source">  return ((f-b)*(c-a) - (d-b)*(e-a)) &gt; 0;<br></td></tr
><tr
id=sl_svn524_177

><td class="source">}<br></td></tr
><tr
id=sl_svn524_178

><td class="source">// Note: requires coordinates to be counterclockwise and convex!<br></td></tr
><tr
id=sl_svn524_179

><td class="source">d3.geom.polygon = function(coordinates) {<br></td></tr
><tr
id=sl_svn524_180

><td class="source"><br></td></tr
><tr
id=sl_svn524_181

><td class="source">  coordinates.area = function() {<br></td></tr
><tr
id=sl_svn524_182

><td class="source">    var i = 0,<br></td></tr
><tr
id=sl_svn524_183

><td class="source">        n = coordinates.length,<br></td></tr
><tr
id=sl_svn524_184

><td class="source">        a = coordinates[n - 1][0] * coordinates[0][1],<br></td></tr
><tr
id=sl_svn524_185

><td class="source">        b = coordinates[n - 1][1] * coordinates[0][0];<br></td></tr
><tr
id=sl_svn524_186

><td class="source">    while (++i &lt; n) {<br></td></tr
><tr
id=sl_svn524_187

><td class="source">      a += coordinates[i - 1][0] * coordinates[i][1];<br></td></tr
><tr
id=sl_svn524_188

><td class="source">      b += coordinates[i - 1][1] * coordinates[i][0];<br></td></tr
><tr
id=sl_svn524_189

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_190

><td class="source">    return (b - a) * .5;<br></td></tr
><tr
id=sl_svn524_191

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_192

><td class="source"><br></td></tr
><tr
id=sl_svn524_193

><td class="source">  coordinates.centroid = function(k) {<br></td></tr
><tr
id=sl_svn524_194

><td class="source">    var i = -1,<br></td></tr
><tr
id=sl_svn524_195

><td class="source">        n = coordinates.length - 1,<br></td></tr
><tr
id=sl_svn524_196

><td class="source">        x = 0,<br></td></tr
><tr
id=sl_svn524_197

><td class="source">        y = 0,<br></td></tr
><tr
id=sl_svn524_198

><td class="source">        a,<br></td></tr
><tr
id=sl_svn524_199

><td class="source">        b,<br></td></tr
><tr
id=sl_svn524_200

><td class="source">        c;<br></td></tr
><tr
id=sl_svn524_201

><td class="source">    if (!arguments.length) k = 1 / (6 * coordinates.area());<br></td></tr
><tr
id=sl_svn524_202

><td class="source">    while (++i &lt; n) {<br></td></tr
><tr
id=sl_svn524_203

><td class="source">      a = coordinates[i];<br></td></tr
><tr
id=sl_svn524_204

><td class="source">      b = coordinates[i + 1];<br></td></tr
><tr
id=sl_svn524_205

><td class="source">      c = a[0] * b[1] - b[0] * a[1];<br></td></tr
><tr
id=sl_svn524_206

><td class="source">      x += (a[0] + b[0]) * c;<br></td></tr
><tr
id=sl_svn524_207

><td class="source">      y += (a[1] + b[1]) * c;<br></td></tr
><tr
id=sl_svn524_208

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_209

><td class="source">    return [x * k, y * k];<br></td></tr
><tr
id=sl_svn524_210

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_211

><td class="source"><br></td></tr
><tr
id=sl_svn524_212

><td class="source">  // The Sutherland-Hodgman clipping algorithm.<br></td></tr
><tr
id=sl_svn524_213

><td class="source">  coordinates.clip = function(subject) {<br></td></tr
><tr
id=sl_svn524_214

><td class="source">    var input,<br></td></tr
><tr
id=sl_svn524_215

><td class="source">        i = -1,<br></td></tr
><tr
id=sl_svn524_216

><td class="source">        n = coordinates.length,<br></td></tr
><tr
id=sl_svn524_217

><td class="source">        j,<br></td></tr
><tr
id=sl_svn524_218

><td class="source">        m,<br></td></tr
><tr
id=sl_svn524_219

><td class="source">        a = coordinates[n - 1],<br></td></tr
><tr
id=sl_svn524_220

><td class="source">        b,<br></td></tr
><tr
id=sl_svn524_221

><td class="source">        c,<br></td></tr
><tr
id=sl_svn524_222

><td class="source">        d;<br></td></tr
><tr
id=sl_svn524_223

><td class="source">    while (++i &lt; n) {<br></td></tr
><tr
id=sl_svn524_224

><td class="source">      input = subject.slice();<br></td></tr
><tr
id=sl_svn524_225

><td class="source">      subject.length = 0;<br></td></tr
><tr
id=sl_svn524_226

><td class="source">      b = coordinates[i];<br></td></tr
><tr
id=sl_svn524_227

><td class="source">      c = input[(m = input.length) - 1];<br></td></tr
><tr
id=sl_svn524_228

><td class="source">      j = -1;<br></td></tr
><tr
id=sl_svn524_229

><td class="source">      while (++j &lt; m) {<br></td></tr
><tr
id=sl_svn524_230

><td class="source">        d = input[j];<br></td></tr
><tr
id=sl_svn524_231

><td class="source">        if (d3_geom_polygonInside(d, a, b)) {<br></td></tr
><tr
id=sl_svn524_232

><td class="source">          if (!d3_geom_polygonInside(c, a, b)) {<br></td></tr
><tr
id=sl_svn524_233

><td class="source">            subject.push(d3_geom_polygonIntersect(c, d, a, b));<br></td></tr
><tr
id=sl_svn524_234

><td class="source">          }<br></td></tr
><tr
id=sl_svn524_235

><td class="source">          subject.push(d);<br></td></tr
><tr
id=sl_svn524_236

><td class="source">        } else if (d3_geom_polygonInside(c, a, b)) {<br></td></tr
><tr
id=sl_svn524_237

><td class="source">          subject.push(d3_geom_polygonIntersect(c, d, a, b));<br></td></tr
><tr
id=sl_svn524_238

><td class="source">        }<br></td></tr
><tr
id=sl_svn524_239

><td class="source">        c = d;<br></td></tr
><tr
id=sl_svn524_240

><td class="source">      }<br></td></tr
><tr
id=sl_svn524_241

><td class="source">      a = b;<br></td></tr
><tr
id=sl_svn524_242

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_243

><td class="source">    return subject;<br></td></tr
><tr
id=sl_svn524_244

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_245

><td class="source"><br></td></tr
><tr
id=sl_svn524_246

><td class="source">  return coordinates;<br></td></tr
><tr
id=sl_svn524_247

><td class="source">};<br></td></tr
><tr
id=sl_svn524_248

><td class="source"><br></td></tr
><tr
id=sl_svn524_249

><td class="source">function d3_geom_polygonInside(p, a, b) {<br></td></tr
><tr
id=sl_svn524_250

><td class="source">  return (b[0] - a[0]) * (p[1] - a[1]) &lt; (b[1] - a[1]) * (p[0] - a[0]);<br></td></tr
><tr
id=sl_svn524_251

><td class="source">}<br></td></tr
><tr
id=sl_svn524_252

><td class="source"><br></td></tr
><tr
id=sl_svn524_253

><td class="source">// Intersect two infinite lines cd and ab.<br></td></tr
><tr
id=sl_svn524_254

><td class="source">function d3_geom_polygonIntersect(c, d, a, b) {<br></td></tr
><tr
id=sl_svn524_255

><td class="source">  var x1 = c[0], x2 = d[0], x3 = a[0], x4 = b[0],<br></td></tr
><tr
id=sl_svn524_256

><td class="source">      y1 = c[1], y2 = d[1], y3 = a[1], y4 = b[1],<br></td></tr
><tr
id=sl_svn524_257

><td class="source">      x13 = x1 - x3,<br></td></tr
><tr
id=sl_svn524_258

><td class="source">      x21 = x2 - x1,<br></td></tr
><tr
id=sl_svn524_259

><td class="source">      x43 = x4 - x3,<br></td></tr
><tr
id=sl_svn524_260

><td class="source">      y13 = y1 - y3,<br></td></tr
><tr
id=sl_svn524_261

><td class="source">      y21 = y2 - y1,<br></td></tr
><tr
id=sl_svn524_262

><td class="source">      y43 = y4 - y3,<br></td></tr
><tr
id=sl_svn524_263

><td class="source">      ua = (x43 * y13 - y43 * x13) / (y43 * x21 - x43 * y21);<br></td></tr
><tr
id=sl_svn524_264

><td class="source">  return [x1 + ua * x21, y1 + ua * y21];<br></td></tr
><tr
id=sl_svn524_265

><td class="source">}<br></td></tr
><tr
id=sl_svn524_266

><td class="source">// Adapted from Nicolas Garcia Belmonte&#39;s JIT implementation:<br></td></tr
><tr
id=sl_svn524_267

><td class="source">// http://blog.thejit.org/2010/02/12/voronoi-tessellation/<br></td></tr
><tr
id=sl_svn524_268

><td class="source">// http://blog.thejit.org/assets/voronoijs/voronoi.js<br></td></tr
><tr
id=sl_svn524_269

><td class="source">// See lib/jit/LICENSE for details.<br></td></tr
><tr
id=sl_svn524_270

><td class="source"><br></td></tr
><tr
id=sl_svn524_271

><td class="source">/**<br></td></tr
><tr
id=sl_svn524_272

><td class="source"> * @param vertices [[x1, y1], [x2, y2], …]<br></td></tr
><tr
id=sl_svn524_273

><td class="source"> * @returns polygons [[[x1, y1], [x2, y2], …], …]<br></td></tr
><tr
id=sl_svn524_274

><td class="source"> */<br></td></tr
><tr
id=sl_svn524_275

><td class="source">d3.geom.voronoi = function(vertices) {<br></td></tr
><tr
id=sl_svn524_276

><td class="source">  var polygons = vertices.map(function() { return []; });<br></td></tr
><tr
id=sl_svn524_277

><td class="source"><br></td></tr
><tr
id=sl_svn524_278

><td class="source">  // Note: we expect the caller to clip the polygons, if needed.<br></td></tr
><tr
id=sl_svn524_279

><td class="source">  d3_voronoi_tessellate(vertices, function(e) {<br></td></tr
><tr
id=sl_svn524_280

><td class="source">    var s1,<br></td></tr
><tr
id=sl_svn524_281

><td class="source">        s2,<br></td></tr
><tr
id=sl_svn524_282

><td class="source">        x1,<br></td></tr
><tr
id=sl_svn524_283

><td class="source">        x2,<br></td></tr
><tr
id=sl_svn524_284

><td class="source">        y1,<br></td></tr
><tr
id=sl_svn524_285

><td class="source">        y2;<br></td></tr
><tr
id=sl_svn524_286

><td class="source">    if (e.a === 1 &amp;&amp; e.b &gt;= 0) {<br></td></tr
><tr
id=sl_svn524_287

><td class="source">      s1 = e.ep.r;<br></td></tr
><tr
id=sl_svn524_288

><td class="source">      s2 = e.ep.l;<br></td></tr
><tr
id=sl_svn524_289

><td class="source">    } else {<br></td></tr
><tr
id=sl_svn524_290

><td class="source">      s1 = e.ep.l;<br></td></tr
><tr
id=sl_svn524_291

><td class="source">      s2 = e.ep.r;<br></td></tr
><tr
id=sl_svn524_292

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_293

><td class="source">    if (e.a === 1) {<br></td></tr
><tr
id=sl_svn524_294

><td class="source">      y1 = s1 ? s1.y : -1e6;<br></td></tr
><tr
id=sl_svn524_295

><td class="source">      x1 = e.c - e.b * y1;<br></td></tr
><tr
id=sl_svn524_296

><td class="source">      y2 = s2 ? s2.y : 1e6;<br></td></tr
><tr
id=sl_svn524_297

><td class="source">      x2 = e.c - e.b * y2;<br></td></tr
><tr
id=sl_svn524_298

><td class="source">    } else {<br></td></tr
><tr
id=sl_svn524_299

><td class="source">      x1 = s1 ? s1.x : -1e6;<br></td></tr
><tr
id=sl_svn524_300

><td class="source">      y1 = e.c - e.a * x1;<br></td></tr
><tr
id=sl_svn524_301

><td class="source">      x2 = s2 ? s2.x : 1e6;<br></td></tr
><tr
id=sl_svn524_302

><td class="source">      y2 = e.c - e.a * x2;<br></td></tr
><tr
id=sl_svn524_303

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_304

><td class="source">    var v1 = [x1, y1],<br></td></tr
><tr
id=sl_svn524_305

><td class="source">        v2 = [x2, y2];<br></td></tr
><tr
id=sl_svn524_306

><td class="source">    polygons[e.region.l.index].push(v1, v2);<br></td></tr
><tr
id=sl_svn524_307

><td class="source">    polygons[e.region.r.index].push(v1, v2);<br></td></tr
><tr
id=sl_svn524_308

><td class="source">  });<br></td></tr
><tr
id=sl_svn524_309

><td class="source"><br></td></tr
><tr
id=sl_svn524_310

><td class="source">  // Reconnect the polygon segments into counterclockwise loops.<br></td></tr
><tr
id=sl_svn524_311

><td class="source">  return polygons.map(function(polygon, i) {<br></td></tr
><tr
id=sl_svn524_312

><td class="source">    var cx = vertices[i][0],<br></td></tr
><tr
id=sl_svn524_313

><td class="source">        cy = vertices[i][1];<br></td></tr
><tr
id=sl_svn524_314

><td class="source">    polygon.forEach(function(v) {<br></td></tr
><tr
id=sl_svn524_315

><td class="source">      v.angle = Math.atan2(v[0] - cx, v[1] - cy);<br></td></tr
><tr
id=sl_svn524_316

><td class="source">    });<br></td></tr
><tr
id=sl_svn524_317

><td class="source">    return polygon.sort(function(a, b) {<br></td></tr
><tr
id=sl_svn524_318

><td class="source">      return a.angle - b.angle;<br></td></tr
><tr
id=sl_svn524_319

><td class="source">    }).filter(function(d, i) {<br></td></tr
><tr
id=sl_svn524_320

><td class="source">      return !i || (d.angle - polygon[i - 1].angle &gt; 1e-10);<br></td></tr
><tr
id=sl_svn524_321

><td class="source">    });<br></td></tr
><tr
id=sl_svn524_322

><td class="source">  });<br></td></tr
><tr
id=sl_svn524_323

><td class="source">};<br></td></tr
><tr
id=sl_svn524_324

><td class="source"><br></td></tr
><tr
id=sl_svn524_325

><td class="source">var d3_voronoi_opposite = {&quot;l&quot;: &quot;r&quot;, &quot;r&quot;: &quot;l&quot;};<br></td></tr
><tr
id=sl_svn524_326

><td class="source"><br></td></tr
><tr
id=sl_svn524_327

><td class="source">function d3_voronoi_tessellate(vertices, callback) {<br></td></tr
><tr
id=sl_svn524_328

><td class="source"><br></td></tr
><tr
id=sl_svn524_329

><td class="source">  var Sites = {<br></td></tr
><tr
id=sl_svn524_330

><td class="source">    list: vertices<br></td></tr
><tr
id=sl_svn524_331

><td class="source">      .map(function(v, i) {<br></td></tr
><tr
id=sl_svn524_332

><td class="source">        return {<br></td></tr
><tr
id=sl_svn524_333

><td class="source">          index: i,<br></td></tr
><tr
id=sl_svn524_334

><td class="source">          x: v[0],<br></td></tr
><tr
id=sl_svn524_335

><td class="source">          y: v[1]<br></td></tr
><tr
id=sl_svn524_336

><td class="source">        };<br></td></tr
><tr
id=sl_svn524_337

><td class="source">      })<br></td></tr
><tr
id=sl_svn524_338

><td class="source">      .sort(function(a, b) {<br></td></tr
><tr
id=sl_svn524_339

><td class="source">        return a.y &lt; b.y ? -1<br></td></tr
><tr
id=sl_svn524_340

><td class="source">          : a.y &gt; b.y ? 1<br></td></tr
><tr
id=sl_svn524_341

><td class="source">          : a.x &lt; b.x ? -1<br></td></tr
><tr
id=sl_svn524_342

><td class="source">          : a.x &gt; b.x ? 1<br></td></tr
><tr
id=sl_svn524_343

><td class="source">          : 0;<br></td></tr
><tr
id=sl_svn524_344

><td class="source">      }),<br></td></tr
><tr
id=sl_svn524_345

><td class="source">    bottomSite: null<br></td></tr
><tr
id=sl_svn524_346

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_347

><td class="source"><br></td></tr
><tr
id=sl_svn524_348

><td class="source">  var EdgeList = {<br></td></tr
><tr
id=sl_svn524_349

><td class="source">    list: [],<br></td></tr
><tr
id=sl_svn524_350

><td class="source">    leftEnd: null,<br></td></tr
><tr
id=sl_svn524_351

><td class="source">    rightEnd: null,<br></td></tr
><tr
id=sl_svn524_352

><td class="source"><br></td></tr
><tr
id=sl_svn524_353

><td class="source">    init: function() {<br></td></tr
><tr
id=sl_svn524_354

><td class="source">      EdgeList.leftEnd = EdgeList.createHalfEdge(null, &quot;l&quot;);<br></td></tr
><tr
id=sl_svn524_355

><td class="source">      EdgeList.rightEnd = EdgeList.createHalfEdge(null, &quot;l&quot;);<br></td></tr
><tr
id=sl_svn524_356

><td class="source">      EdgeList.leftEnd.r = EdgeList.rightEnd;<br></td></tr
><tr
id=sl_svn524_357

><td class="source">      EdgeList.rightEnd.l = EdgeList.leftEnd;<br></td></tr
><tr
id=sl_svn524_358

><td class="source">      EdgeList.list.unshift(EdgeList.leftEnd, EdgeList.rightEnd);<br></td></tr
><tr
id=sl_svn524_359

><td class="source">    },<br></td></tr
><tr
id=sl_svn524_360

><td class="source"><br></td></tr
><tr
id=sl_svn524_361

><td class="source">    createHalfEdge: function(edge, side) {<br></td></tr
><tr
id=sl_svn524_362

><td class="source">      return {<br></td></tr
><tr
id=sl_svn524_363

><td class="source">        edge: edge,<br></td></tr
><tr
id=sl_svn524_364

><td class="source">        side: side,<br></td></tr
><tr
id=sl_svn524_365

><td class="source">        vertex: null,<br></td></tr
><tr
id=sl_svn524_366

><td class="source">        &quot;l&quot;: null,<br></td></tr
><tr
id=sl_svn524_367

><td class="source">        &quot;r&quot;: null<br></td></tr
><tr
id=sl_svn524_368

><td class="source">      };<br></td></tr
><tr
id=sl_svn524_369

><td class="source">    },<br></td></tr
><tr
id=sl_svn524_370

><td class="source"><br></td></tr
><tr
id=sl_svn524_371

><td class="source">    insert: function(lb, he) {<br></td></tr
><tr
id=sl_svn524_372

><td class="source">      he.l = lb;<br></td></tr
><tr
id=sl_svn524_373

><td class="source">      he.r = lb.r;<br></td></tr
><tr
id=sl_svn524_374

><td class="source">      lb.r.l = he;<br></td></tr
><tr
id=sl_svn524_375

><td class="source">      lb.r = he;<br></td></tr
><tr
id=sl_svn524_376

><td class="source">    },<br></td></tr
><tr
id=sl_svn524_377

><td class="source"><br></td></tr
><tr
id=sl_svn524_378

><td class="source">    leftBound: function(p) {<br></td></tr
><tr
id=sl_svn524_379

><td class="source">      var he = EdgeList.leftEnd;<br></td></tr
><tr
id=sl_svn524_380

><td class="source">      do {<br></td></tr
><tr
id=sl_svn524_381

><td class="source">        he = he.r;<br></td></tr
><tr
id=sl_svn524_382

><td class="source">      } while (he != EdgeList.rightEnd &amp;&amp; Geom.rightOf(he, p));<br></td></tr
><tr
id=sl_svn524_383

><td class="source">      he = he.l;<br></td></tr
><tr
id=sl_svn524_384

><td class="source">      return he;<br></td></tr
><tr
id=sl_svn524_385

><td class="source">    },<br></td></tr
><tr
id=sl_svn524_386

><td class="source"><br></td></tr
><tr
id=sl_svn524_387

><td class="source">    del: function(he) {<br></td></tr
><tr
id=sl_svn524_388

><td class="source">      he.l.r = he.r;<br></td></tr
><tr
id=sl_svn524_389

><td class="source">      he.r.l = he.l;<br></td></tr
><tr
id=sl_svn524_390

><td class="source">      he.edge = null;<br></td></tr
><tr
id=sl_svn524_391

><td class="source">    },<br></td></tr
><tr
id=sl_svn524_392

><td class="source"><br></td></tr
><tr
id=sl_svn524_393

><td class="source">    right: function(he) {<br></td></tr
><tr
id=sl_svn524_394

><td class="source">      return he.r;<br></td></tr
><tr
id=sl_svn524_395

><td class="source">    },<br></td></tr
><tr
id=sl_svn524_396

><td class="source"><br></td></tr
><tr
id=sl_svn524_397

><td class="source">    left: function(he) {<br></td></tr
><tr
id=sl_svn524_398

><td class="source">      return he.l;<br></td></tr
><tr
id=sl_svn524_399

><td class="source">    },<br></td></tr
><tr
id=sl_svn524_400

><td class="source"><br></td></tr
><tr
id=sl_svn524_401

><td class="source">    leftRegion: function(he) {<br></td></tr
><tr
id=sl_svn524_402

><td class="source">      return he.edge == null<br></td></tr
><tr
id=sl_svn524_403

><td class="source">          ? Sites.bottomSite<br></td></tr
><tr
id=sl_svn524_404

><td class="source">          : he.edge.region[he.side];<br></td></tr
><tr
id=sl_svn524_405

><td class="source">    },<br></td></tr
><tr
id=sl_svn524_406

><td class="source"><br></td></tr
><tr
id=sl_svn524_407

><td class="source">    rightRegion: function(he) {<br></td></tr
><tr
id=sl_svn524_408

><td class="source">      return he.edge == null<br></td></tr
><tr
id=sl_svn524_409

><td class="source">          ? Sites.bottomSite<br></td></tr
><tr
id=sl_svn524_410

><td class="source">          : he.edge.region[d3_voronoi_opposite[he.side]];<br></td></tr
><tr
id=sl_svn524_411

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_412

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_413

><td class="source"><br></td></tr
><tr
id=sl_svn524_414

><td class="source">  var Geom = {<br></td></tr
><tr
id=sl_svn524_415

><td class="source"><br></td></tr
><tr
id=sl_svn524_416

><td class="source">    bisect: function(s1, s2) {<br></td></tr
><tr
id=sl_svn524_417

><td class="source">      var newEdge = {<br></td></tr
><tr
id=sl_svn524_418

><td class="source">        region: {&quot;l&quot;: s1, &quot;r&quot;: s2},<br></td></tr
><tr
id=sl_svn524_419

><td class="source">        ep: {&quot;l&quot;: null, &quot;r&quot;: null}<br></td></tr
><tr
id=sl_svn524_420

><td class="source">      };<br></td></tr
><tr
id=sl_svn524_421

><td class="source"><br></td></tr
><tr
id=sl_svn524_422

><td class="source">      var dx = s2.x - s1.x,<br></td></tr
><tr
id=sl_svn524_423

><td class="source">          dy = s2.y - s1.y,<br></td></tr
><tr
id=sl_svn524_424

><td class="source">          adx = dx &gt; 0 ? dx : -dx,<br></td></tr
><tr
id=sl_svn524_425

><td class="source">          ady = dy &gt; 0 ? dy : -dy;<br></td></tr
><tr
id=sl_svn524_426

><td class="source"><br></td></tr
><tr
id=sl_svn524_427

><td class="source">      newEdge.c = s1.x * dx + s1.y * dy<br></td></tr
><tr
id=sl_svn524_428

><td class="source">          + (dx * dx + dy * dy) * .5;<br></td></tr
><tr
id=sl_svn524_429

><td class="source"><br></td></tr
><tr
id=sl_svn524_430

><td class="source">      if (adx &gt; ady) {<br></td></tr
><tr
id=sl_svn524_431

><td class="source">        newEdge.a = 1;<br></td></tr
><tr
id=sl_svn524_432

><td class="source">        newEdge.b = dy / dx;<br></td></tr
><tr
id=sl_svn524_433

><td class="source">        newEdge.c /= dx;<br></td></tr
><tr
id=sl_svn524_434

><td class="source">      } else {<br></td></tr
><tr
id=sl_svn524_435

><td class="source">        newEdge.b = 1;<br></td></tr
><tr
id=sl_svn524_436

><td class="source">        newEdge.a = dx / dy;<br></td></tr
><tr
id=sl_svn524_437

><td class="source">        newEdge.c /= dy;<br></td></tr
><tr
id=sl_svn524_438

><td class="source">      }<br></td></tr
><tr
id=sl_svn524_439

><td class="source"><br></td></tr
><tr
id=sl_svn524_440

><td class="source">      return newEdge;<br></td></tr
><tr
id=sl_svn524_441

><td class="source">    },<br></td></tr
><tr
id=sl_svn524_442

><td class="source"><br></td></tr
><tr
id=sl_svn524_443

><td class="source">    intersect: function(el1, el2) {<br></td></tr
><tr
id=sl_svn524_444

><td class="source">      var e1 = el1.edge,<br></td></tr
><tr
id=sl_svn524_445

><td class="source">          e2 = el2.edge;<br></td></tr
><tr
id=sl_svn524_446

><td class="source">      if (!e1 || !e2 || (e1.region.r == e2.region.r)) {<br></td></tr
><tr
id=sl_svn524_447

><td class="source">        return null;<br></td></tr
><tr
id=sl_svn524_448

><td class="source">      }<br></td></tr
><tr
id=sl_svn524_449

><td class="source">      var d = (e1.a * e2.b) - (e1.b * e2.a);<br></td></tr
><tr
id=sl_svn524_450

><td class="source">      if (Math.abs(d) &lt; 1e-10) {<br></td></tr
><tr
id=sl_svn524_451

><td class="source">        return null;<br></td></tr
><tr
id=sl_svn524_452

><td class="source">      }<br></td></tr
><tr
id=sl_svn524_453

><td class="source">      var xint = (e1.c * e2.b - e2.c * e1.b) / d,<br></td></tr
><tr
id=sl_svn524_454

><td class="source">          yint = (e2.c * e1.a - e1.c * e2.a) / d,<br></td></tr
><tr
id=sl_svn524_455

><td class="source">          e1r = e1.region.r,<br></td></tr
><tr
id=sl_svn524_456

><td class="source">          e2r = e2.region.r,<br></td></tr
><tr
id=sl_svn524_457

><td class="source">          el,<br></td></tr
><tr
id=sl_svn524_458

><td class="source">          e;<br></td></tr
><tr
id=sl_svn524_459

><td class="source">      if ((e1r.y &lt; e2r.y) ||<br></td></tr
><tr
id=sl_svn524_460

><td class="source">         (e1r.y == e2r.y &amp;&amp; e1r.x &lt; e2r.x)) {<br></td></tr
><tr
id=sl_svn524_461

><td class="source">        el = el1;<br></td></tr
><tr
id=sl_svn524_462

><td class="source">        e = e1;<br></td></tr
><tr
id=sl_svn524_463

><td class="source">      } else {<br></td></tr
><tr
id=sl_svn524_464

><td class="source">        el = el2;<br></td></tr
><tr
id=sl_svn524_465

><td class="source">        e = e2;<br></td></tr
><tr
id=sl_svn524_466

><td class="source">      }<br></td></tr
><tr
id=sl_svn524_467

><td class="source">      var rightOfSite = (xint &gt;= e.region.r.x);<br></td></tr
><tr
id=sl_svn524_468

><td class="source">      if ((rightOfSite &amp;&amp; (el.side === &quot;l&quot;)) ||<br></td></tr
><tr
id=sl_svn524_469

><td class="source">        (!rightOfSite &amp;&amp; (el.side === &quot;r&quot;))) {<br></td></tr
><tr
id=sl_svn524_470

><td class="source">        return null;<br></td></tr
><tr
id=sl_svn524_471

><td class="source">      }<br></td></tr
><tr
id=sl_svn524_472

><td class="source">      return {<br></td></tr
><tr
id=sl_svn524_473

><td class="source">        x: xint,<br></td></tr
><tr
id=sl_svn524_474

><td class="source">        y: yint<br></td></tr
><tr
id=sl_svn524_475

><td class="source">      };<br></td></tr
><tr
id=sl_svn524_476

><td class="source">    },<br></td></tr
><tr
id=sl_svn524_477

><td class="source"><br></td></tr
><tr
id=sl_svn524_478

><td class="source">    rightOf: function(he, p) {<br></td></tr
><tr
id=sl_svn524_479

><td class="source">      var e = he.edge,<br></td></tr
><tr
id=sl_svn524_480

><td class="source">          topsite = e.region.r,<br></td></tr
><tr
id=sl_svn524_481

><td class="source">          rightOfSite = (p.x &gt; topsite.x);<br></td></tr
><tr
id=sl_svn524_482

><td class="source"><br></td></tr
><tr
id=sl_svn524_483

><td class="source">      if (rightOfSite &amp;&amp; (he.side === &quot;l&quot;)) {<br></td></tr
><tr
id=sl_svn524_484

><td class="source">        return 1;<br></td></tr
><tr
id=sl_svn524_485

><td class="source">      }<br></td></tr
><tr
id=sl_svn524_486

><td class="source">      if (!rightOfSite &amp;&amp; (he.side === &quot;r&quot;)) {<br></td></tr
><tr
id=sl_svn524_487

><td class="source">        return 0;<br></td></tr
><tr
id=sl_svn524_488

><td class="source">      }<br></td></tr
><tr
id=sl_svn524_489

><td class="source">      if (e.a === 1) {<br></td></tr
><tr
id=sl_svn524_490

><td class="source">        var dyp = p.y - topsite.y,<br></td></tr
><tr
id=sl_svn524_491

><td class="source">            dxp = p.x - topsite.x,<br></td></tr
><tr
id=sl_svn524_492

><td class="source">            fast = 0,<br></td></tr
><tr
id=sl_svn524_493

><td class="source">            above = 0;<br></td></tr
><tr
id=sl_svn524_494

><td class="source"><br></td></tr
><tr
id=sl_svn524_495

><td class="source">        if ((!rightOfSite &amp;&amp; (e.b &lt; 0)) ||<br></td></tr
><tr
id=sl_svn524_496

><td class="source">          (rightOfSite &amp;&amp; (e.b &gt;= 0))) {<br></td></tr
><tr
id=sl_svn524_497

><td class="source">          above = fast = (dyp &gt;= e.b * dxp);<br></td></tr
><tr
id=sl_svn524_498

><td class="source">        } else {<br></td></tr
><tr
id=sl_svn524_499

><td class="source">          above = ((p.x + p.y * e.b) &gt; e.c);<br></td></tr
><tr
id=sl_svn524_500

><td class="source">          if (e.b &lt; 0) {<br></td></tr
><tr
id=sl_svn524_501

><td class="source">            above = !above;<br></td></tr
><tr
id=sl_svn524_502

><td class="source">          }<br></td></tr
><tr
id=sl_svn524_503

><td class="source">          if (!above) {<br></td></tr
><tr
id=sl_svn524_504

><td class="source">            fast = 1;<br></td></tr
><tr
id=sl_svn524_505

><td class="source">          }<br></td></tr
><tr
id=sl_svn524_506

><td class="source">        }<br></td></tr
><tr
id=sl_svn524_507

><td class="source">        if (!fast) {<br></td></tr
><tr
id=sl_svn524_508

><td class="source">          var dxs = topsite.x - e.region.l.x;<br></td></tr
><tr
id=sl_svn524_509

><td class="source">          above = (e.b * (dxp * dxp - dyp * dyp)) &lt;<br></td></tr
><tr
id=sl_svn524_510

><td class="source">            (dxs * dyp * (1 + 2 * dxp / dxs + e.b * e.b));<br></td></tr
><tr
id=sl_svn524_511

><td class="source"><br></td></tr
><tr
id=sl_svn524_512

><td class="source">          if (e.b &lt; 0) {<br></td></tr
><tr
id=sl_svn524_513

><td class="source">            above = !above;<br></td></tr
><tr
id=sl_svn524_514

><td class="source">          }<br></td></tr
><tr
id=sl_svn524_515

><td class="source">        }<br></td></tr
><tr
id=sl_svn524_516

><td class="source">      } else /* e.b == 1 */ {<br></td></tr
><tr
id=sl_svn524_517

><td class="source">        var yl = e.c - e.a * p.x,<br></td></tr
><tr
id=sl_svn524_518

><td class="source">            t1 = p.y - yl,<br></td></tr
><tr
id=sl_svn524_519

><td class="source">            t2 = p.x - topsite.x,<br></td></tr
><tr
id=sl_svn524_520

><td class="source">            t3 = yl - topsite.y;<br></td></tr
><tr
id=sl_svn524_521

><td class="source"><br></td></tr
><tr
id=sl_svn524_522

><td class="source">        above = (t1 * t1) &gt; (t2 * t2 + t3 * t3);<br></td></tr
><tr
id=sl_svn524_523

><td class="source">      }<br></td></tr
><tr
id=sl_svn524_524

><td class="source">      return he.side === &quot;l&quot; ? above : !above;<br></td></tr
><tr
id=sl_svn524_525

><td class="source">    },<br></td></tr
><tr
id=sl_svn524_526

><td class="source"><br></td></tr
><tr
id=sl_svn524_527

><td class="source">    endPoint: function(edge, side, site) {<br></td></tr
><tr
id=sl_svn524_528

><td class="source">      edge.ep[side] = site;<br></td></tr
><tr
id=sl_svn524_529

><td class="source">      if (!edge.ep[d3_voronoi_opposite[side]]) return;<br></td></tr
><tr
id=sl_svn524_530

><td class="source">      callback(edge);<br></td></tr
><tr
id=sl_svn524_531

><td class="source">    },<br></td></tr
><tr
id=sl_svn524_532

><td class="source"><br></td></tr
><tr
id=sl_svn524_533

><td class="source">    distance: function(s, t) {<br></td></tr
><tr
id=sl_svn524_534

><td class="source">      var dx = s.x - t.x,<br></td></tr
><tr
id=sl_svn524_535

><td class="source">          dy = s.y - t.y;<br></td></tr
><tr
id=sl_svn524_536

><td class="source">      return Math.sqrt(dx * dx + dy * dy);<br></td></tr
><tr
id=sl_svn524_537

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_538

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_539

><td class="source"><br></td></tr
><tr
id=sl_svn524_540

><td class="source">  var EventQueue = {<br></td></tr
><tr
id=sl_svn524_541

><td class="source">    list: [],<br></td></tr
><tr
id=sl_svn524_542

><td class="source"><br></td></tr
><tr
id=sl_svn524_543

><td class="source">    insert: function(he, site, offset) {<br></td></tr
><tr
id=sl_svn524_544

><td class="source">      he.vertex = site;<br></td></tr
><tr
id=sl_svn524_545

><td class="source">      he.ystar = site.y + offset;<br></td></tr
><tr
id=sl_svn524_546

><td class="source">      for (var i=0, list=EventQueue.list, l=list.length; i&lt;l; i++) {<br></td></tr
><tr
id=sl_svn524_547

><td class="source">        var next = list[i];<br></td></tr
><tr
id=sl_svn524_548

><td class="source">        if (he.ystar &gt; next.ystar ||<br></td></tr
><tr
id=sl_svn524_549

><td class="source">          (he.ystar == next.ystar &amp;&amp;<br></td></tr
><tr
id=sl_svn524_550

><td class="source">          site.x &gt; next.vertex.x)) {<br></td></tr
><tr
id=sl_svn524_551

><td class="source">          continue;<br></td></tr
><tr
id=sl_svn524_552

><td class="source">        } else {<br></td></tr
><tr
id=sl_svn524_553

><td class="source">          break;<br></td></tr
><tr
id=sl_svn524_554

><td class="source">        }<br></td></tr
><tr
id=sl_svn524_555

><td class="source">      }<br></td></tr
><tr
id=sl_svn524_556

><td class="source">      list.splice(i, 0, he);<br></td></tr
><tr
id=sl_svn524_557

><td class="source">    },<br></td></tr
><tr
id=sl_svn524_558

><td class="source"><br></td></tr
><tr
id=sl_svn524_559

><td class="source">    del: function(he) {<br></td></tr
><tr
id=sl_svn524_560

><td class="source">      for (var i=0, ls=EventQueue.list, l=ls.length; i&lt;l &amp;&amp; (ls[i] != he); ++i) {}<br></td></tr
><tr
id=sl_svn524_561

><td class="source">      ls.splice(i, 1);<br></td></tr
><tr
id=sl_svn524_562

><td class="source">    },<br></td></tr
><tr
id=sl_svn524_563

><td class="source"><br></td></tr
><tr
id=sl_svn524_564

><td class="source">    empty: function() { return EventQueue.list.length === 0; },<br></td></tr
><tr
id=sl_svn524_565

><td class="source"><br></td></tr
><tr
id=sl_svn524_566

><td class="source">    nextEvent: function(he) {<br></td></tr
><tr
id=sl_svn524_567

><td class="source">      for (var i=0, ls=EventQueue.list, l=ls.length; i&lt;l; ++i) {<br></td></tr
><tr
id=sl_svn524_568

><td class="source">        if (ls[i] == he) return ls[i+1];<br></td></tr
><tr
id=sl_svn524_569

><td class="source">      }<br></td></tr
><tr
id=sl_svn524_570

><td class="source">      return null;<br></td></tr
><tr
id=sl_svn524_571

><td class="source">    },<br></td></tr
><tr
id=sl_svn524_572

><td class="source"><br></td></tr
><tr
id=sl_svn524_573

><td class="source">    min: function() {<br></td></tr
><tr
id=sl_svn524_574

><td class="source">      var elem = EventQueue.list[0];<br></td></tr
><tr
id=sl_svn524_575

><td class="source">      return {<br></td></tr
><tr
id=sl_svn524_576

><td class="source">        x: elem.vertex.x,<br></td></tr
><tr
id=sl_svn524_577

><td class="source">        y: elem.ystar<br></td></tr
><tr
id=sl_svn524_578

><td class="source">      };<br></td></tr
><tr
id=sl_svn524_579

><td class="source">    },<br></td></tr
><tr
id=sl_svn524_580

><td class="source"><br></td></tr
><tr
id=sl_svn524_581

><td class="source">    extractMin: function() {<br></td></tr
><tr
id=sl_svn524_582

><td class="source">      return EventQueue.list.shift();<br></td></tr
><tr
id=sl_svn524_583

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_584

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_585

><td class="source"><br></td></tr
><tr
id=sl_svn524_586

><td class="source">  EdgeList.init();<br></td></tr
><tr
id=sl_svn524_587

><td class="source">  Sites.bottomSite = Sites.list.shift();<br></td></tr
><tr
id=sl_svn524_588

><td class="source"><br></td></tr
><tr
id=sl_svn524_589

><td class="source">  var newSite = Sites.list.shift(), newIntStar;<br></td></tr
><tr
id=sl_svn524_590

><td class="source">  var lbnd, rbnd, llbnd, rrbnd, bisector;<br></td></tr
><tr
id=sl_svn524_591

><td class="source">  var bot, top, temp, p, v;<br></td></tr
><tr
id=sl_svn524_592

><td class="source">  var e, pm;<br></td></tr
><tr
id=sl_svn524_593

><td class="source"><br></td></tr
><tr
id=sl_svn524_594

><td class="source">  while (true) {<br></td></tr
><tr
id=sl_svn524_595

><td class="source">    if (!EventQueue.empty()) {<br></td></tr
><tr
id=sl_svn524_596

><td class="source">      newIntStar = EventQueue.min();<br></td></tr
><tr
id=sl_svn524_597

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_598

><td class="source">    if (newSite &amp;&amp; (EventQueue.empty()<br></td></tr
><tr
id=sl_svn524_599

><td class="source">      || newSite.y &lt; newIntStar.y<br></td></tr
><tr
id=sl_svn524_600

><td class="source">      || (newSite.y == newIntStar.y<br></td></tr
><tr
id=sl_svn524_601

><td class="source">      &amp;&amp; newSite.x &lt; newIntStar.x))) { //new site is smallest<br></td></tr
><tr
id=sl_svn524_602

><td class="source">      lbnd = EdgeList.leftBound(newSite);<br></td></tr
><tr
id=sl_svn524_603

><td class="source">      rbnd = EdgeList.right(lbnd);<br></td></tr
><tr
id=sl_svn524_604

><td class="source">      bot = EdgeList.rightRegion(lbnd);<br></td></tr
><tr
id=sl_svn524_605

><td class="source">      e = Geom.bisect(bot, newSite);<br></td></tr
><tr
id=sl_svn524_606

><td class="source">      bisector = EdgeList.createHalfEdge(e, &quot;l&quot;);<br></td></tr
><tr
id=sl_svn524_607

><td class="source">      EdgeList.insert(lbnd, bisector);<br></td></tr
><tr
id=sl_svn524_608

><td class="source">      p = Geom.intersect(lbnd, bisector);<br></td></tr
><tr
id=sl_svn524_609

><td class="source">      if (p) {<br></td></tr
><tr
id=sl_svn524_610

><td class="source">        EventQueue.del(lbnd);<br></td></tr
><tr
id=sl_svn524_611

><td class="source">        EventQueue.insert(lbnd, p, Geom.distance(p, newSite));<br></td></tr
><tr
id=sl_svn524_612

><td class="source">      }<br></td></tr
><tr
id=sl_svn524_613

><td class="source">      lbnd = bisector;<br></td></tr
><tr
id=sl_svn524_614

><td class="source">      bisector = EdgeList.createHalfEdge(e, &quot;r&quot;);<br></td></tr
><tr
id=sl_svn524_615

><td class="source">      EdgeList.insert(lbnd, bisector);<br></td></tr
><tr
id=sl_svn524_616

><td class="source">      p = Geom.intersect(bisector, rbnd);<br></td></tr
><tr
id=sl_svn524_617

><td class="source">      if (p) {<br></td></tr
><tr
id=sl_svn524_618

><td class="source">        EventQueue.insert(bisector, p, Geom.distance(p, newSite));<br></td></tr
><tr
id=sl_svn524_619

><td class="source">      }<br></td></tr
><tr
id=sl_svn524_620

><td class="source">      newSite = Sites.list.shift();<br></td></tr
><tr
id=sl_svn524_621

><td class="source">    } else if (!EventQueue.empty()) { //intersection is smallest<br></td></tr
><tr
id=sl_svn524_622

><td class="source">      lbnd = EventQueue.extractMin();<br></td></tr
><tr
id=sl_svn524_623

><td class="source">      llbnd = EdgeList.left(lbnd);<br></td></tr
><tr
id=sl_svn524_624

><td class="source">      rbnd = EdgeList.right(lbnd);<br></td></tr
><tr
id=sl_svn524_625

><td class="source">      rrbnd = EdgeList.right(rbnd);<br></td></tr
><tr
id=sl_svn524_626

><td class="source">      bot = EdgeList.leftRegion(lbnd);<br></td></tr
><tr
id=sl_svn524_627

><td class="source">      top = EdgeList.rightRegion(rbnd);<br></td></tr
><tr
id=sl_svn524_628

><td class="source">      v = lbnd.vertex;<br></td></tr
><tr
id=sl_svn524_629

><td class="source">      Geom.endPoint(lbnd.edge, lbnd.side, v);<br></td></tr
><tr
id=sl_svn524_630

><td class="source">      Geom.endPoint(rbnd.edge, rbnd.side, v);<br></td></tr
><tr
id=sl_svn524_631

><td class="source">      EdgeList.del(lbnd);<br></td></tr
><tr
id=sl_svn524_632

><td class="source">      EventQueue.del(rbnd);<br></td></tr
><tr
id=sl_svn524_633

><td class="source">      EdgeList.del(rbnd);<br></td></tr
><tr
id=sl_svn524_634

><td class="source">      pm = &quot;l&quot;;<br></td></tr
><tr
id=sl_svn524_635

><td class="source">      if (bot.y &gt; top.y) {<br></td></tr
><tr
id=sl_svn524_636

><td class="source">        temp = bot;<br></td></tr
><tr
id=sl_svn524_637

><td class="source">        bot = top;<br></td></tr
><tr
id=sl_svn524_638

><td class="source">        top = temp;<br></td></tr
><tr
id=sl_svn524_639

><td class="source">        pm = &quot;r&quot;;<br></td></tr
><tr
id=sl_svn524_640

><td class="source">      }<br></td></tr
><tr
id=sl_svn524_641

><td class="source">      e = Geom.bisect(bot, top);<br></td></tr
><tr
id=sl_svn524_642

><td class="source">      bisector = EdgeList.createHalfEdge(e, pm);<br></td></tr
><tr
id=sl_svn524_643

><td class="source">      EdgeList.insert(llbnd, bisector);<br></td></tr
><tr
id=sl_svn524_644

><td class="source">      Geom.endPoint(e, d3_voronoi_opposite[pm], v);<br></td></tr
><tr
id=sl_svn524_645

><td class="source">      p = Geom.intersect(llbnd, bisector);<br></td></tr
><tr
id=sl_svn524_646

><td class="source">      if (p) {<br></td></tr
><tr
id=sl_svn524_647

><td class="source">        EventQueue.del(llbnd);<br></td></tr
><tr
id=sl_svn524_648

><td class="source">        EventQueue.insert(llbnd, p, Geom.distance(p, bot));<br></td></tr
><tr
id=sl_svn524_649

><td class="source">      }<br></td></tr
><tr
id=sl_svn524_650

><td class="source">      p = Geom.intersect(bisector, rrbnd);<br></td></tr
><tr
id=sl_svn524_651

><td class="source">      if (p) {<br></td></tr
><tr
id=sl_svn524_652

><td class="source">        EventQueue.insert(bisector, p, Geom.distance(p, bot));<br></td></tr
><tr
id=sl_svn524_653

><td class="source">      }<br></td></tr
><tr
id=sl_svn524_654

><td class="source">    } else {<br></td></tr
><tr
id=sl_svn524_655

><td class="source">      break;<br></td></tr
><tr
id=sl_svn524_656

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_657

><td class="source">  }//end while<br></td></tr
><tr
id=sl_svn524_658

><td class="source"><br></td></tr
><tr
id=sl_svn524_659

><td class="source">  for (lbnd = EdgeList.right(EdgeList.leftEnd);<br></td></tr
><tr
id=sl_svn524_660

><td class="source">      lbnd != EdgeList.rightEnd;<br></td></tr
><tr
id=sl_svn524_661

><td class="source">      lbnd = EdgeList.right(lbnd)) {<br></td></tr
><tr
id=sl_svn524_662

><td class="source">    callback(lbnd.edge);<br></td></tr
><tr
id=sl_svn524_663

><td class="source">  }<br></td></tr
><tr
id=sl_svn524_664

><td class="source">}<br></td></tr
><tr
id=sl_svn524_665

><td class="source">/**<br></td></tr
><tr
id=sl_svn524_666

><td class="source">* @param vertices [[x1, y1], [x2, y2], …]<br></td></tr
><tr
id=sl_svn524_667

><td class="source">* @returns triangles [[[x1, y1], [x2, y2], [x3, y3]], …]<br></td></tr
><tr
id=sl_svn524_668

><td class="source"> */<br></td></tr
><tr
id=sl_svn524_669

><td class="source">d3.geom.delaunay = function(vertices) {<br></td></tr
><tr
id=sl_svn524_670

><td class="source">  var edges = vertices.map(function() { return []; }),<br></td></tr
><tr
id=sl_svn524_671

><td class="source">      triangles = [];<br></td></tr
><tr
id=sl_svn524_672

><td class="source"><br></td></tr
><tr
id=sl_svn524_673

><td class="source">  // Use the Voronoi tessellation to determine Delaunay edges.<br></td></tr
><tr
id=sl_svn524_674

><td class="source">  d3_voronoi_tessellate(vertices, function(e) {<br></td></tr
><tr
id=sl_svn524_675

><td class="source">    edges[e.region.l.index].push(vertices[e.region.r.index]);<br></td></tr
><tr
id=sl_svn524_676

><td class="source">  });<br></td></tr
><tr
id=sl_svn524_677

><td class="source"><br></td></tr
><tr
id=sl_svn524_678

><td class="source">  // Reconnect the edges into counterclockwise triangles.<br></td></tr
><tr
id=sl_svn524_679

><td class="source">  edges.forEach(function(edge, i) {<br></td></tr
><tr
id=sl_svn524_680

><td class="source">    var v = vertices[i],<br></td></tr
><tr
id=sl_svn524_681

><td class="source">        cx = v[0],<br></td></tr
><tr
id=sl_svn524_682

><td class="source">        cy = v[1];<br></td></tr
><tr
id=sl_svn524_683

><td class="source">    edge.forEach(function(v) {<br></td></tr
><tr
id=sl_svn524_684

><td class="source">      v.angle = Math.atan2(v[0] - cx, v[1] - cy);<br></td></tr
><tr
id=sl_svn524_685

><td class="source">    });<br></td></tr
><tr
id=sl_svn524_686

><td class="source">    edge.sort(function(a, b) {<br></td></tr
><tr
id=sl_svn524_687

><td class="source">      return a.angle - b.angle;<br></td></tr
><tr
id=sl_svn524_688

><td class="source">    });<br></td></tr
><tr
id=sl_svn524_689

><td class="source">    for (var j = 0, m = edge.length - 1; j &lt; m; j++) {<br></td></tr
><tr
id=sl_svn524_690

><td class="source">      triangles.push([v, edge[j], edge[j + 1]]);<br></td></tr
><tr
id=sl_svn524_691

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_692

><td class="source">  });<br></td></tr
><tr
id=sl_svn524_693

><td class="source"><br></td></tr
><tr
id=sl_svn524_694

><td class="source">  return triangles;<br></td></tr
><tr
id=sl_svn524_695

><td class="source">};<br></td></tr
><tr
id=sl_svn524_696

><td class="source">// Constructs a new quadtree for the specified array of points. A quadtree is a<br></td></tr
><tr
id=sl_svn524_697

><td class="source">// two-dimensional recursive spatial subdivision. This implementation uses<br></td></tr
><tr
id=sl_svn524_698

><td class="source">// square partitions, dividing each square into four equally-sized squares. Each<br></td></tr
><tr
id=sl_svn524_699

><td class="source">// point exists in a unique node; if multiple points are in the same position,<br></td></tr
><tr
id=sl_svn524_700

><td class="source">// some points may be stored on internal nodes rather than leaf nodes. Quadtrees<br></td></tr
><tr
id=sl_svn524_701

><td class="source">// can be used to accelerate various spatial operations, such as the Barnes-Hut<br></td></tr
><tr
id=sl_svn524_702

><td class="source">// approximation for computing n-body forces, or collision detection.<br></td></tr
><tr
id=sl_svn524_703

><td class="source">d3.geom.quadtree = function(points, x1, y1, x2, y2) {<br></td></tr
><tr
id=sl_svn524_704

><td class="source">  var p,<br></td></tr
><tr
id=sl_svn524_705

><td class="source">      i = -1,<br></td></tr
><tr
id=sl_svn524_706

><td class="source">      n = points.length;<br></td></tr
><tr
id=sl_svn524_707

><td class="source"><br></td></tr
><tr
id=sl_svn524_708

><td class="source">  // Type conversion for deprecated API.<br></td></tr
><tr
id=sl_svn524_709

><td class="source">  if (n &amp;&amp; isNaN(points[0].x)) points = points.map(d3_geom_quadtreePoint);<br></td></tr
><tr
id=sl_svn524_710

><td class="source"><br></td></tr
><tr
id=sl_svn524_711

><td class="source">  // Allow bounds to be specified explicitly.<br></td></tr
><tr
id=sl_svn524_712

><td class="source">  if (arguments.length &lt; 5) {<br></td></tr
><tr
id=sl_svn524_713

><td class="source">    if (arguments.length === 3) {<br></td></tr
><tr
id=sl_svn524_714

><td class="source">      y2 = x2 = y1;<br></td></tr
><tr
id=sl_svn524_715

><td class="source">      y1 = x1;<br></td></tr
><tr
id=sl_svn524_716

><td class="source">    } else {<br></td></tr
><tr
id=sl_svn524_717

><td class="source">      x1 = y1 = Infinity;<br></td></tr
><tr
id=sl_svn524_718

><td class="source">      x2 = y2 = -Infinity;<br></td></tr
><tr
id=sl_svn524_719

><td class="source"><br></td></tr
><tr
id=sl_svn524_720

><td class="source">      // Compute bounds.<br></td></tr
><tr
id=sl_svn524_721

><td class="source">      while (++i &lt; n) {<br></td></tr
><tr
id=sl_svn524_722

><td class="source">        p = points[i];<br></td></tr
><tr
id=sl_svn524_723

><td class="source">        if (p.x &lt; x1) x1 = p.x;<br></td></tr
><tr
id=sl_svn524_724

><td class="source">        if (p.y &lt; y1) y1 = p.y;<br></td></tr
><tr
id=sl_svn524_725

><td class="source">        if (p.x &gt; x2) x2 = p.x;<br></td></tr
><tr
id=sl_svn524_726

><td class="source">        if (p.y &gt; y2) y2 = p.y;<br></td></tr
><tr
id=sl_svn524_727

><td class="source">      }<br></td></tr
><tr
id=sl_svn524_728

><td class="source"><br></td></tr
><tr
id=sl_svn524_729

><td class="source">      // Squarify the bounds.<br></td></tr
><tr
id=sl_svn524_730

><td class="source">      var dx = x2 - x1,<br></td></tr
><tr
id=sl_svn524_731

><td class="source">          dy = y2 - y1;<br></td></tr
><tr
id=sl_svn524_732

><td class="source">      if (dx &gt; dy) y2 = y1 + dx;<br></td></tr
><tr
id=sl_svn524_733

><td class="source">      else x2 = x1 + dy;<br></td></tr
><tr
id=sl_svn524_734

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_735

><td class="source">  }<br></td></tr
><tr
id=sl_svn524_736

><td class="source"><br></td></tr
><tr
id=sl_svn524_737

><td class="source">  // Recursively inserts the specified point p at the node n or one of its<br></td></tr
><tr
id=sl_svn524_738

><td class="source">  // descendants. The bounds are defined by [x1, x2] and [y1, y2].<br></td></tr
><tr
id=sl_svn524_739

><td class="source">  function insert(n, p, x1, y1, x2, y2) {<br></td></tr
><tr
id=sl_svn524_740

><td class="source">    if (isNaN(p.x) || isNaN(p.y)) return; // ignore invalid points<br></td></tr
><tr
id=sl_svn524_741

><td class="source">    if (n.leaf) {<br></td></tr
><tr
id=sl_svn524_742

><td class="source">      var v = n.point;<br></td></tr
><tr
id=sl_svn524_743

><td class="source">      if (v) {<br></td></tr
><tr
id=sl_svn524_744

><td class="source">        // If the point at this leaf node is at the same position as the new<br></td></tr
><tr
id=sl_svn524_745

><td class="source">        // point we are adding, we leave the point associated with the<br></td></tr
><tr
id=sl_svn524_746

><td class="source">        // internal node while adding the new point to a child node. This<br></td></tr
><tr
id=sl_svn524_747

><td class="source">        // avoids infinite recursion.<br></td></tr
><tr
id=sl_svn524_748

><td class="source">        if ((Math.abs(v.x - p.x) + Math.abs(v.y - p.y)) &lt; .01) {<br></td></tr
><tr
id=sl_svn524_749

><td class="source">          insertChild(n, p, x1, y1, x2, y2);<br></td></tr
><tr
id=sl_svn524_750

><td class="source">        } else {<br></td></tr
><tr
id=sl_svn524_751

><td class="source">          n.point = null;<br></td></tr
><tr
id=sl_svn524_752

><td class="source">          insertChild(n, v, x1, y1, x2, y2);<br></td></tr
><tr
id=sl_svn524_753

><td class="source">          insertChild(n, p, x1, y1, x2, y2);<br></td></tr
><tr
id=sl_svn524_754

><td class="source">        }<br></td></tr
><tr
id=sl_svn524_755

><td class="source">      } else {<br></td></tr
><tr
id=sl_svn524_756

><td class="source">        n.point = p;<br></td></tr
><tr
id=sl_svn524_757

><td class="source">      }<br></td></tr
><tr
id=sl_svn524_758

><td class="source">    } else {<br></td></tr
><tr
id=sl_svn524_759

><td class="source">      insertChild(n, p, x1, y1, x2, y2);<br></td></tr
><tr
id=sl_svn524_760

><td class="source">    }<br></td></tr
><tr
id=sl_svn524_761

><td class="source">  }<br></td></tr
><tr
id=sl_svn524_762

><td class="source"><br></td></tr
><tr
id=sl_svn524_763

><td class="source">  // Recursively inserts the specified point p into a descendant of node n. The<br></td></tr
><tr
id=sl_svn524_764

><td class="source">  // bounds are defined by [x1, x2] and [y1, y2].<br></td></tr
><tr
id=sl_svn524_765

><td class="source">  function insertChild(n, p, x1, y1, x2, y2) {<br></td></tr
><tr
id=sl_svn524_766

><td class="source">    // Compute the split point, and the quadrant in which to insert p.<br></td></tr
><tr
id=sl_svn524_767

><td class="source">    var sx = (x1 + x2) * .5,<br></td></tr
><tr
id=sl_svn524_768

><td class="source">        sy = (y1 + y2) * .5,<br></td></tr
><tr
id=sl_svn524_769

><td class="source">        right = p.x &gt;= sx,<br></td></tr
><tr
id=sl_svn524_770

><td class="source">        bottom = p.y &gt;= sy,<br></td></tr
><tr
id=sl_svn524_771

><td class="source">        i = (bottom &lt;&lt; 1) + right;<br></td></tr
><tr
id=sl_svn524_772

><td class="source"><br></td></tr
><tr
id=sl_svn524_773

><td class="source">    // Recursively insert into the child node.<br></td></tr
><tr
id=sl_svn524_774

><td class="source">    n.leaf = false;<br></td></tr
><tr
id=sl_svn524_775

><td class="source">    n = n.nodes[i] || (n.nodes[i] = d3_geom_quadtreeNode());<br></td></tr
><tr
id=sl_svn524_776

><td class="source"><br></td></tr
><tr
id=sl_svn524_777

><td class="source">    // Update the bounds as we recurse.<br></td></tr
><tr
id=sl_svn524_778

><td class="source">    if (right) x1 = sx; else x2 = sx;<br></td></tr
><tr
id=sl_svn524_779

><td class="source">    if (bottom) y1 = sy; else y2 = sy;<br></td></tr
><tr
id=sl_svn524_780

><td class="source">    insert(n, p, x1, y1, x2, y2);<br></td></tr
><tr
id=sl_svn524_781

><td class="source">  }<br></td></tr
><tr
id=sl_svn524_782

><td class="source"><br></td></tr
><tr
id=sl_svn524_783

><td class="source">  // Create the root node.<br></td></tr
><tr
id=sl_svn524_784

><td class="source">  var root = d3_geom_quadtreeNode();<br></td></tr
><tr
id=sl_svn524_785

><td class="source"><br></td></tr
><tr
id=sl_svn524_786

><td class="source">  root.add = function(p) {<br></td></tr
><tr
id=sl_svn524_787

><td class="source">    insert(root, p, x1, y1, x2, y2);<br></td></tr
><tr
id=sl_svn524_788

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_789

><td class="source"><br></td></tr
><tr
id=sl_svn524_790

><td class="source">  root.visit = function(f) {<br></td></tr
><tr
id=sl_svn524_791

><td class="source">    d3_geom_quadtreeVisit(f, root, x1, y1, x2, y2);<br></td></tr
><tr
id=sl_svn524_792

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_793

><td class="source"><br></td></tr
><tr
id=sl_svn524_794

><td class="source">  // Insert all points.<br></td></tr
><tr
id=sl_svn524_795

><td class="source">  points.forEach(root.add);<br></td></tr
><tr
id=sl_svn524_796

><td class="source">  return root;<br></td></tr
><tr
id=sl_svn524_797

><td class="source">};<br></td></tr
><tr
id=sl_svn524_798

><td class="source"><br></td></tr
><tr
id=sl_svn524_799

><td class="source">function d3_geom_quadtreeNode() {<br></td></tr
><tr
id=sl_svn524_800

><td class="source">  return {<br></td></tr
><tr
id=sl_svn524_801

><td class="source">    leaf: true,<br></td></tr
><tr
id=sl_svn524_802

><td class="source">    nodes: [],<br></td></tr
><tr
id=sl_svn524_803

><td class="source">    point: null<br></td></tr
><tr
id=sl_svn524_804

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_805

><td class="source">}<br></td></tr
><tr
id=sl_svn524_806

><td class="source"><br></td></tr
><tr
id=sl_svn524_807

><td class="source">function d3_geom_quadtreeVisit(f, node, x1, y1, x2, y2) {<br></td></tr
><tr
id=sl_svn524_808

><td class="source">  if (!f(node, x1, y1, x2, y2)) {<br></td></tr
><tr
id=sl_svn524_809

><td class="source">    var sx = (x1 + x2) * .5,<br></td></tr
><tr
id=sl_svn524_810

><td class="source">        sy = (y1 + y2) * .5,<br></td></tr
><tr
id=sl_svn524_811

><td class="source">        children = node.nodes;<br></td></tr
><tr
id=sl_svn524_812

><td class="source">    if (children[0]) d3_geom_quadtreeVisit(f, children[0], x1, y1, sx, sy);<br></td></tr
><tr
id=sl_svn524_813

><td class="source">    if (children[1]) d3_geom_quadtreeVisit(f, children[1], sx, y1, x2, sy);<br></td></tr
><tr
id=sl_svn524_814

><td class="source">    if (children[2]) d3_geom_quadtreeVisit(f, children[2], x1, sy, sx, y2);<br></td></tr
><tr
id=sl_svn524_815

><td class="source">    if (children[3]) d3_geom_quadtreeVisit(f, children[3], sx, sy, x2, y2);<br></td></tr
><tr
id=sl_svn524_816

><td class="source">  }<br></td></tr
><tr
id=sl_svn524_817

><td class="source">}<br></td></tr
><tr
id=sl_svn524_818

><td class="source"><br></td></tr
><tr
id=sl_svn524_819

><td class="source">function d3_geom_quadtreePoint(p) {<br></td></tr
><tr
id=sl_svn524_820

><td class="source">  return {<br></td></tr
><tr
id=sl_svn524_821

><td class="source">    x: p[0],<br></td></tr
><tr
id=sl_svn524_822

><td class="source">    y: p[1]<br></td></tr
><tr
id=sl_svn524_823

><td class="source">  };<br></td></tr
><tr
id=sl_svn524_824

><td class="source">}<br></td></tr
><tr
id=sl_svn524_825

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
 &nbsp; <a href="/p/phylografter/source/diff?spec=svn524&r=524&amp;format=side&amp;path=/branches/v2-dev/static/d3/d3.geom.js&amp;old_path=/branches/v2-dev/static/d3/d3.geom.js&amp;old=">Diff</a>
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
 
 var selected_path = '/branches/v2-dev/static/d3/d3.geom.js';
 
 
 changed_paths.push('/branches/v2-dev/static/d3/d3.geom.min.js');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/d3.geom.min.js?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/d3.js');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/d3.js?r\x3d524\x26spec\x3dsvn524');
 
 
 changed_paths.push('/branches/v2-dev/static/d3/d3.layout.js');
 changed_urls.push('/p/phylografter/source/browse/branches/v2-dev/static/d3/d3.layout.js?r\x3d524\x26spec\x3dsvn524');
 
 
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
 selected="selected"
 >...ches/v2-dev/static/d3/d3.geom.js</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/d3.geom.min.js?r=524&amp;spec=svn524"
 
 >.../v2-dev/static/d3/d3.geom.min.js</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/d3.js?r=524&amp;spec=svn524"
 
 >/branches/v2-dev/static/d3/d3.js</option>
 
 <option value="/p/phylografter/source/browse/branches/v2-dev/static/d3/d3.layout.js?r=524&amp;spec=svn524"
 
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
 
 <a href="/p/phylografter/source/list?path=/branches/v2-dev/static/d3/d3.geom.js&start=524">All revisions of this file</a>
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
 
 <div>Size: 21664 bytes,
 825 lines</div>
 
 <div><a href="//phylografter.googlecode.com/svn-history/r524/branches/v2-dev/static/d3/d3.geom.js">View raw file</a></div>
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
 var paths = {'svn524': '/branches/v2-dev/static/d3/d3.geom.js'}
 codereviews = CR_controller.setup(
 {"assetHostPath": "https://ssl.gstatic.com/codesite/ph", "domainName": null, "relativeBaseUrl": "", "token": "ABZ6GAejsblUREuf52AfbLjn-l3Fc7ADTQ:1421231411178", "projectHomeUrl": "/p/phylografter", "profileUrl": "/u/giangtranbinh/", "assetVersionPath": "https://ssl.gstatic.com/codesite/ph/18133036155640238800", "loggedInUserEmail": "giangtranbinh@gmail.com", "projectName": "phylografter"}, '', 'svn524', paths,
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

