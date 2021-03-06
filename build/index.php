<?php
if (isset($_SERVER["QUERY_STRING"])) {
    $q = explode('-', $_SERVER["QUERY_STRING"]);
    if (count($q) == 14) {
        $itemDB = json_decode(file_get_contents("itemdb.json"), true);
        $hashedItems = [];
        foreach ($itemDB["itemDB"] as $item) {
            $hashedItems[$item["info"]["hash"]] = $item;
        }
        $itemHashes = array_slice($q, 0, 9);
        $powders = array_slice($q, 9, 5);
        $items = array_map(function($hash) {
            global $hashedItems;
            return $hashedItems[$hash];
        }, $itemHashes);
        $itemNames = array_map(function($item) {
            return $item["info"]["name"];
        }, $items);
        $socketCounts = array_map(function($item) {
            return $item["info"]["sockets"];
        }, $items);
        $powderCodes = str_split("0123456789ABCDEFGHJKLMNPQRSTUW");
        $powders = array_map(function($powderStr) {
            $powderChars = array_filter(str_split($powderStr), function($char) {
                global $powderCodes;
                return array_search($char, $powderCodes) !== false;
            });
            return array_map(function($powderChar) {
                global $powderCodes;
                $index = array_search($powderChar, $powderCodes);
                return ["E","T","W","F","A"][intdiv($index, 6)] . ($index % 6 + 1);
            }, $powderChars);
        }, $powders);
        $desc = "";
        $types = ["helmet", "chestplate", "leggings", "boots", "ring", "ring", "bracelet", "necklace"];
        for ($i = 0; $i < 9; ++$i) {
            $type = strtolower($items[$i]["info"]["type"]);
            if ($i != 8) {
                if ($type == $types[$i]) {
                    $desc .= $itemNames[$i];
                    if ($i < 4) {
                        if (count($powders[$i]) > 0 && $socketCounts[$i] > 0) {
                            $desc .= " [";
                            foreach ($powders[$i] as $key => $value) {
                                if ($key == $socketCounts[$i]) {
                                    break;
                                }
                                $desc .= $value . "-";
                            }
                            $desc[strlen($desc) - 1] = "]";
                        }
                    }
                }
                $desc .= "\n";
            } else {
                switch ($type) {
                    case "spear":
                    case "bow":
                    case "wand":
                    case "dagger":
                    case "relik":
                        $desc .= $itemNames[8];
                        if (count($powders[4]) > 0 && $socketCounts[8] > 0) {
                            $desc .= " [";
                            foreach ($powders[4] as $key => $value) {
                                if ($key == $socketCounts[8]) {
                                    break;
                                }
                                $desc .= $value . "-";
                            }
                            $desc[strlen($desc) - 1] = "]";
                        }
                        break;
                }
            }
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>It's 0x7cf! :: Builder</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="theme-color" content="#0277bd">
    <meta property="og:type" content="website">
    <meta property="og:title" content="It's 0x7cf! :: Builder">
    <meta property="og:url" content="https://its0x7.cf">
    <meta property="og:description" content="<?=$desc?$desc:"Wynncraft Build Calculator by 0x7cf, which calculates your build stats within a second."?>">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="It's 0x7cf!">
    <meta property="og:image" content="https://its0x7.cf/assets/img/icons/build.png">
    <link rel="stylesheet" href="https://bootswatch.com/3/darkly/bootstrap.css">
    <link href="https://fonts.googleapis.com/css?family=Mukta" rel="stylesheet">
    <link rel="stylesheet" href="/assets/css/main.css?1587836298813">
    <link rel="stylesheet" href="/assets/css/chosen.min.css?1587836298813">
    <script src="//d2wy8f7a9ursnm.cloudfront.net/v5/bugsnag.min.js"></script>
    <script>window.bugsnagClient = bugsnag('2af5e91dd7b8ce9f4ce76efe9bc657ed')</script>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="/assets/js/items_v3.js?1587836298813"></script>
    <script src="/assets/js/chosen.jquery.min.js?1587836298813"></script>
    <script src="/assets/js/common.js?1587836298813"></script>
    <script src="/assets/js/md5.min.js?1587836298813"></script>
    <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    <script>
        // sorry i need to pay for hosting
        (adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: "ca-pub-4994408094309865",
            enable_page_level_ads: true
        });
    </script>
    <script type="text/javascript">

    </script>
</head>
<body>
<nav class="navbar navbar-custom navbar-fixed-top">
    <div class="container">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"><span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span></button>
        <div class="navbar-header">
            <a class="navbar-brand navbar-customtext" href="/">It's 0x7cf!</a>
        </div>
        <ul class="nav navbar-nav navbar-collapse collapse">
            <li class="active"><a class="navbar-customtext" href="/map/" id="a0">Territory Map</a></li>
            <li class="active"><a class="navbar-customtext" href="/build/" id="a1">Builder</a></li>
        </ul>
    </div>
</nav>
<div class="container" id="content" style="padding-top: 50px;">
    <h2>Select your Items:</h2>
    <div id="helmet_select" class="col-md-3 col-sm-4 item_select">
        <p>Helmet:</p>
        <select>
            <option value="">-- None --</option>
        </select>
    </div>
    <div id="chestplate_select" class="col-md-3 col-sm-4 item_select">
        <p>Chestplate:</p>
        <select>
            <option value="">-- None --</option>
        </select>
    </div>
    <div id="leggings_select" class="col-md-3 col-sm-4 item_select">
        <p>Leggings:</p>
        <select>
            <option value="">-- None --</option>
        </select>
    </div>
    <div id="boots_select" class="col-md-3 col-sm-4 item_select">
        <p>Boots:</p>
        <select>
            <option value="">-- None --</option>
        </select>
    </div>
    <div id="ring0_select" class="col-md-3 col-sm-4 item_select">
        <p>Ring 1:</p>
        <select>
            <option value="">-- None --</option>
        </select>
    </div>
    <div id="ring1_select" class="col-md-3 col-sm-4 item_select">
        <p>Ring 2:</p>
        <select>
            <option value="">-- None --</option>
        </select>
    </div>
    <div id="bracelet_select" class="col-md-3 col-sm-4 item_select">
        <p>Bracelet:</p>
        <select>
            <option value="">-- None --</option>
        </select>
    </div>
    <div id="necklace_select" class="col-md-3 col-sm-4 item_select">
        <p>Necklace:</p>
        <select>
            <option value="">-- None --</option>
        </select>
    </div>
    <div id="weapon_select" class="col-md-3 col-sm-4 item_select">
        <p>Weapon:</p>
        <select>
            <option value="">-- None --</option>
        </select>
    </div>
    <div class="w-100"></div>
    <h2>Apply Powders:</h2>
    <div style="overflow-x: auto">
        <table id="helmet_table" class="item_table">
            <tr>
                <td>
                    <div class="item_div" id="helmet_div"></div>
                </td>
                <td>
                    <div class="powder_div" id="helmet_powders">
                        <div>
                            <p class="large item_name"></p>
                            <div class="powder_list"></div>
                        </div>
                        <div class="powder_choices">
                            <p>Click to add a powder:</p>
                            <table>
                                <tr>
                                    <td><span class="powder powder_f6"></span></td>
                                    <td><span class="powder powder_f5"></span></td>
                                    <td><span class="powder powder_f4"></span></td>
                                    <td><span class="powder powder_f3"></span></td>
                                    <td><span class="powder powder_f2"></span></td>
                                    <td><span class="powder powder_f1"></span></td>
                                </tr>
                                <tr>
                                    <td><span class="powder powder_w6"></span></td>
                                    <td><span class="powder powder_w5"></span></td>
                                    <td><span class="powder powder_w4"></span></td>
                                    <td><span class="powder powder_w3"></span></td>
                                    <td><span class="powder powder_w2"></span></td>
                                    <td><span class="powder powder_w1"></span></td>
                                </tr>
                                <tr>
                                    <td><span class="powder powder_a6"></span></td>
                                    <td><span class="powder powder_a5"></span></td>
                                    <td><span class="powder powder_a4"></span></td>
                                    <td><span class="powder powder_a3"></span></td>
                                    <td><span class="powder powder_a2"></span></td>
                                    <td><span class="powder powder_a1"></span></td>
                                </tr>
                                <tr>
                                    <td><span class="powder powder_t6"></span></td>
                                    <td><span class="powder powder_t5"></span></td>
                                    <td><span class="powder powder_t4"></span></td>
                                    <td><span class="powder powder_t3"></span></td>
                                    <td><span class="powder powder_t2"></span></td>
                                    <td><span class="powder powder_t1"></span></td>
                                </tr>
                                <tr>
                                    <td><span class="powder powder_e6"></span></td>
                                    <td><span class="powder powder_e5"></span></td>
                                    <td><span class="powder powder_e4"></span></td>
                                    <td><span class="powder powder_e3"></span></td>
                                    <td><span class="powder powder_e2"></span></td>
                                    <td><span class="powder powder_e1"></span></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </td>
            </tr>
        </table>
    </div>
    <div style="overflow-x: auto">
        <table id="chestplate_table" class="item_table">
            <tr>
                <td>
                    <div class="item_div" id="chestplate_div"></div>
                </td>
                <td>
                    <div class="powder_div" id="chestplate_powders">
                        <div>
                            <p class="large item_name"></p>
                            <div class="powder_list"></div>
                        </div>
                        <div class="powder_choices">
                            <p>Click to add a powder:</p>
                            <table>
                                <tr>
                                    <td><span class="powder powder_f6"></span></td>
                                    <td><span class="powder powder_f5"></span></td>
                                    <td><span class="powder powder_f4"></span></td>
                                    <td><span class="powder powder_f3"></span></td>
                                    <td><span class="powder powder_f2"></span></td>
                                    <td><span class="powder powder_f1"></span></td>
                                </tr>
                                <tr>
                                    <td><span class="powder powder_w6"></span></td>
                                    <td><span class="powder powder_w5"></span></td>
                                    <td><span class="powder powder_w4"></span></td>
                                    <td><span class="powder powder_w3"></span></td>
                                    <td><span class="powder powder_w2"></span></td>
                                    <td><span class="powder powder_w1"></span></td>
                                </tr>
                                <tr>
                                    <td><span class="powder powder_a6"></span></td>
                                    <td><span class="powder powder_a5"></span></td>
                                    <td><span class="powder powder_a4"></span></td>
                                    <td><span class="powder powder_a3"></span></td>
                                    <td><span class="powder powder_a2"></span></td>
                                    <td><span class="powder powder_a1"></span></td>
                                </tr>
                                <tr>
                                    <td><span class="powder powder_t6"></span></td>
                                    <td><span class="powder powder_t5"></span></td>
                                    <td><span class="powder powder_t4"></span></td>
                                    <td><span class="powder powder_t3"></span></td>
                                    <td><span class="powder powder_t2"></span></td>
                                    <td><span class="powder powder_t1"></span></td>
                                </tr>
                                <tr>
                                    <td><span class="powder powder_e6"></span></td>
                                    <td><span class="powder powder_e5"></span></td>
                                    <td><span class="powder powder_e4"></span></td>
                                    <td><span class="powder powder_e3"></span></td>
                                    <td><span class="powder powder_e2"></span></td>
                                    <td><span class="powder powder_e1"></span></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </td>
            </tr>
        </table>
    </div>
    <div style="overflow-x: auto">
        <table id="leggings_table" class="item_table">
            <tr>
                <td>
                    <div class="item_div" id="leggings_div"></div>
                </td>
                <td>
                    <div class="powder_div" id="leggings_powders">
                        <div>
                            <p class="large item_name"></p>
                            <div class="powder_list"></div>
                        </div>
                        <div class="powder_choices">
                            <p>Click to add a powder:</p>
                            <table>
                                <tr>
                                    <td><span class="powder powder_f6"></span></td>
                                    <td><span class="powder powder_f5"></span></td>
                                    <td><span class="powder powder_f4"></span></td>
                                    <td><span class="powder powder_f3"></span></td>
                                    <td><span class="powder powder_f2"></span></td>
                                    <td><span class="powder powder_f1"></span></td>
                                </tr>
                                <tr>
                                    <td><span class="powder powder_w6"></span></td>
                                    <td><span class="powder powder_w5"></span></td>
                                    <td><span class="powder powder_w4"></span></td>
                                    <td><span class="powder powder_w3"></span></td>
                                    <td><span class="powder powder_w2"></span></td>
                                    <td><span class="powder powder_w1"></span></td>
                                </tr>
                                <tr>
                                    <td><span class="powder powder_a6"></span></td>
                                    <td><span class="powder powder_a5"></span></td>
                                    <td><span class="powder powder_a4"></span></td>
                                    <td><span class="powder powder_a3"></span></td>
                                    <td><span class="powder powder_a2"></span></td>
                                    <td><span class="powder powder_a1"></span></td>
                                </tr>
                                <tr>
                                    <td><span class="powder powder_t6"></span></td>
                                    <td><span class="powder powder_t5"></span></td>
                                    <td><span class="powder powder_t4"></span></td>
                                    <td><span class="powder powder_t3"></span></td>
                                    <td><span class="powder powder_t2"></span></td>
                                    <td><span class="powder powder_t1"></span></td>
                                </tr>
                                <tr>
                                    <td><span class="powder powder_e6"></span></td>
                                    <td><span class="powder powder_e5"></span></td>
                                    <td><span class="powder powder_e4"></span></td>
                                    <td><span class="powder powder_e3"></span></td>
                                    <td><span class="powder powder_e2"></span></td>
                                    <td><span class="powder powder_e1"></span></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </td>
            </tr>
        </table>
    </div>
    <div style="overflow-x: auto">
        <table id="boots_table" class="item_table">
            <tr>
                <td>
                    <div class="item_div" id="boots_div"></div>
                </td>
                <td>
                    <div class="powder_div" id="boots_powders">
                        <div>
                            <p class="large item_name"></p>
                            <div class="powder_list"></div>
                        </div>
                        <div class="powder_choices">
                            <p>Click to add a powder:</p>
                            <table>
                                <tr>
                                    <td><span class="powder powder_f6"></span></td>
                                    <td><span class="powder powder_f5"></span></td>
                                    <td><span class="powder powder_f4"></span></td>
                                    <td><span class="powder powder_f3"></span></td>
                                    <td><span class="powder powder_f2"></span></td>
                                    <td><span class="powder powder_f1"></span></td>
                                </tr>
                                <tr>
                                    <td><span class="powder powder_w6"></span></td>
                                    <td><span class="powder powder_w5"></span></td>
                                    <td><span class="powder powder_w4"></span></td>
                                    <td><span class="powder powder_w3"></span></td>
                                    <td><span class="powder powder_w2"></span></td>
                                    <td><span class="powder powder_w1"></span></td>
                                </tr>
                                <tr>
                                    <td><span class="powder powder_a6"></span></td>
                                    <td><span class="powder powder_a5"></span></td>
                                    <td><span class="powder powder_a4"></span></td>
                                    <td><span class="powder powder_a3"></span></td>
                                    <td><span class="powder powder_a2"></span></td>
                                    <td><span class="powder powder_a1"></span></td>
                                </tr>
                                <tr>
                                    <td><span class="powder powder_t6"></span></td>
                                    <td><span class="powder powder_t5"></span></td>
                                    <td><span class="powder powder_t4"></span></td>
                                    <td><span class="powder powder_t3"></span></td>
                                    <td><span class="powder powder_t2"></span></td>
                                    <td><span class="powder powder_t1"></span></td>
                                </tr>
                                <tr>
                                    <td><span class="powder powder_e6"></span></td>
                                    <td><span class="powder powder_e5"></span></td>
                                    <td><span class="powder powder_e4"></span></td>
                                    <td><span class="powder powder_e3"></span></td>
                                    <td><span class="powder powder_e2"></span></td>
                                    <td><span class="powder powder_e1"></span></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </td>
            </tr>
        </table>
    </div>
    <div style="overflow-x: auto">
        <table id="weapon_table" class="item_table">
            <tr>
                <td>
                    <div class="item_div" id="weapon_div"></div>
                </td>
                <td>
                    <div class="powder_div" id="weapon_powders">
                        <div>
                            <p class="large item_name"></p>
                            <div class="powder_list"></div>
                        </div>
                        <div class="powder_choices">
                            <p>Click to add a powder:</p>
                            <table>
                                <tr>
                                    <td><span class="powder powder_f6"></span></td>
                                    <td><span class="powder powder_f5"></span></td>
                                    <td><span class="powder powder_f4"></span></td>
                                    <td><span class="powder powder_f3"></span></td>
                                    <td><span class="powder powder_f2"></span></td>
                                    <td><span class="powder powder_f1"></span></td>
                                </tr>
                                <tr>
                                    <td><span class="powder powder_w6"></span></td>
                                    <td><span class="powder powder_w5"></span></td>
                                    <td><span class="powder powder_w4"></span></td>
                                    <td><span class="powder powder_w3"></span></td>
                                    <td><span class="powder powder_w2"></span></td>
                                    <td><span class="powder powder_w1"></span></td>
                                </tr>
                                <tr>
                                    <td><span class="powder powder_a6"></span></td>
                                    <td><span class="powder powder_a5"></span></td>
                                    <td><span class="powder powder_a4"></span></td>
                                    <td><span class="powder powder_a3"></span></td>
                                    <td><span class="powder powder_a2"></span></td>
                                    <td><span class="powder powder_a1"></span></td>
                                </tr>
                                <tr>
                                    <td><span class="powder powder_t6"></span></td>
                                    <td><span class="powder powder_t5"></span></td>
                                    <td><span class="powder powder_t4"></span></td>
                                    <td><span class="powder powder_t3"></span></td>
                                    <td><span class="powder powder_t2"></span></td>
                                    <td><span class="powder powder_t1"></span></td>
                                </tr>
                                <tr>
                                    <td><span class="powder powder_e6"></span></td>
                                    <td><span class="powder powder_e5"></span></td>
                                    <td><span class="powder powder_e4"></span></td>
                                    <td><span class="powder powder_e3"></span></td>
                                    <td><span class="powder powder_e2"></span></td>
                                    <td><span class="powder powder_e1"></span></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </td>
            </tr>
        </table>
    </div>
    <div class="item_select">
        <div class="col-md-8 col-sm-6" style="height: 45px;">
            <p class="" style="height: 45px;font-size: 32px;">Share your build: </p>
        </div>
        <div>
            <input id="link_box" style="color: #f0f0f0;background: #666666;padding: 10px 15px;height: 45px;" readonly>
            <button id="copy_btn" style="background: #666666;padding: 10px 15px;">Copy</button>
        </div>
    </div>
    <h2 id="sp_remaining">Assign Skill Points (200 remaining):</h2>
    <div id="skill_str" class="col-md-2 col-sm-2 item_select skill_box">
        Strength:<br>
        <label style="display: block;">
            <input class="sp_input" data-slot="0" type="number" max="100" value="0" min="0">
        </label>
    </div>
    <div id="skill_dex" class="col-md-2 col-sm-2 item_select skill_box">
        Dexterity:<br>
        <label style="display: block;">
            <input class="sp_input" data-slot="1" type="number" max="100" value="0" min="0">
        </label>
    </div>
    <div id="skill_int" class="col-md-2 col-sm-2 item_select skill_box">
        Intelligence:<br>
        <label style="display: block;">
            <input class="sp_input" data-slot="2" type="number" max="100" value="0" min="0">
        </label>
    </div>
    <div id="skill_def" class="col-md-2 col-sm-2 item_select skill_box">
        Defense:<br>
        <label style="display: block;">
            <input class="sp_input" data-slot="3" type="number" max="100" value="0" min="0">
        </label>
    </div>
    <div id="skill_agi" class="col-md-2 col-sm-2 item_select skill_box">
        Agility:<br>
        <label style="display: block;">
            <input class="sp_input" data-slot="4" type="number" max="100" value="0" min="0">
        </label>
    </div>
    <div class="col-md-2 col-sm-2 item_select skill_box" style="text-align: center;vertical-align: middle;padding-left: 0;">
        <button class="btn btn-primary reset_button">Reset</button>
    </div>
    <div class="w-100"></div>
    <h2>Your Items:</h2>
    <div id="item_list_box">

    </div>
    <h2>Build Stats:</h2>
    <div id="build_result">
        <fieldset id="build_req">
            <legend class="build_res_label">Requirements</legend>
            <div class="build_content"></div>
        </fieldset>
        <fieldset id="build_howto">
            <legend class="build_res_label">How To Wear</legend>
            <div class="build_content"></div>
        </fieldset>
        <fieldset id="build_defs">
            <legend class="build_res_label">Defenses</legend>
            <div class="build_content"></div>
        </fieldset>
        <fieldset id="build_ids">
            <legend class="build_res_label">Other Identifications</legend>
            <div class="build_content"></div>
        </fieldset>
        <fieldset id="build_dmg">
            <legend class="build_res_label">Damages</legend>
            <div class="build_content"></div>
        </fieldset>
    </div>
</div>
</body>
</html>
