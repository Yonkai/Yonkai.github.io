//Object constructor for rewards.
//There are 9 arguments to this constructor.
function RewardXRarityLevel(ID, rewardName, TypicalRewardQuestionMark, RewardRangeQuestionMark, MArray,GroupRollAndRange,TableRarityGroup,imageSrc,GEAPIValue) { 
  this.ID = ID;
  this.rewardName = rewardName;
  this.TypicalRewardQuestionMark = TypicalRewardQuestionMark;
  this.RewardRangeQuestionMark = RewardRangeQuestionMark;
  this.MArray = MArray;
  this.GroupRollAndRange = GroupRollAndRange;  
  this.TableRarityGroup = TableRarityGroup;
  this.imageSrc = imageSrc;
  this.GEAPIValue = GEAPIValue;    
};

// Mapped uncommon+common rewards
var MappedRewards = {
    Reward0Uncommon:new RewardXRarityLevel(0,"CoinsHigh",false,[5000,10000],false,false,3,'EasyRewards/Coins.gif',404),
    Reward1Uncommon:new RewardXRarityLevel(1,"Magic_Ammy_T",true,false,false,false,3,'EasyRewards/Magic_Ammy_T.png',404),
    Reward2Uncommon:new RewardXRarityLevel(2,"Guthix Vestment Top",true,false,false,false,3,'EasyRewards/Guthix_robe_top.png',404),
    Reward3Uncommon:new RewardXRarityLevel(3,"Guthix Vestmant Bottom",true,false,false,false,3,'EasyRewards/Guthix_robe_legs.png',404),
    Reward4Uncommon:new RewardXRarityLevel(4,"Saradomin_Vestmant_Top",true,false,false,false,3,'EasyRewards/Saradomin_robe_top.png',404),
    Reward5Uncommon:new RewardXRarityLevel(5,"Saradomin_Vestmant_Bottom",true,false,false,false,3,'EasyRewards/Saradomin_robe_legs.png',404),
    Reward6Uncommon:new RewardXRarityLevel(6,"Zamorak_Vestmant_Top",true,false,false,false,3,'EasyRewards/Zamorak_robe_top.png',404),
    Reward7Uncommon:new RewardXRarityLevel(7,"Zamorak_Vestmant_Bottom",true,false,false,false,3,'EasyRewards/Zamorak_robe_legs.png',404),
    Reward8Uncommon:new RewardXRarityLevel(8,"Armadyl_Vestmant_Top",true,false,false,false,3,'EasyRewards/Armadyl_robe_legs.png',404),
    Reward9Uncommon:new RewardXRarityLevel(9,"Armadyl_Vestmant_Bottom",true,false,false,false,3,'EasyRewards/Armadyl_robe_top.png',404),
    Reward10Uncommon:new RewardXRarityLevel(10,"Zaros_Vestmant_Top",true,false,false,false,3,'EasyRewards/Ancient_robe_top.png',404),
    Reward11Uncommon:new RewardXRarityLevel(11,"Zaros_Vestmant_Bottom",true,false,false,false,3,'EasyRewards/Ancient_robe_legs.png',404),
    Reward12Uncommon:new RewardXRarityLevel(12,"Bandos_Vestmant_Top",true,false,false,false,3,'EasyRewards/Bandos_robe_top.png',404),
    Reward13Uncommon:new RewardXRarityLevel(13,"Bandos_Vestmant_Bottom",true,false,false,false,3,'EasyRewards/Bandos_robe_legs.png',404),
    Reward14Uncommon:new RewardXRarityLevel(14,"Blue_Beret",true,false,false,true,3,'EasyRewards/Blue_beret.png',404),
    Reward15Uncommon:new RewardXRarityLevel(15,"White_Beret",true,false,false,true,3,'EasyRewards/White_beret.png',404),
    Reward16Uncommon:new RewardXRarityLevel(16,"Black_Beret",true,false,false,true,3,'EasyRewards/Black_beret.png',404),
    Reward17Uncommon:new RewardXRarityLevel(17,"Red_Beret",true,false,false,true,3,'EasyRewards/Red_beret.png',404),
    Reward18Uncommon:new RewardXRarityLevel(18,"Blue_Elegant_Shirt",true,false,false,false,3,'EasyRewards/Blue_elegant_shirt.png',404),
    Reward19Uncommon:new RewardXRarityLevel(19,"Blue_Elegant_Legs",true,false,false,false,3,'EasyRewards/Blue_elegant_legs.png',404),
    Reward20Uncommon:new RewardXRarityLevel(20,"Blue_Elegant_Blouse",true,false,false,false,3,'EasyRewards/Blue_elegant_blouse.png',404),
    Reward21Uncommon:new RewardXRarityLevel(21,"Blue_Elegant_Skirt",true,false,false,true,3,'EasyRewards/Blue_elegant_skirt.png',404),
    Reward22Uncommon:new RewardXRarityLevel(22,"Green_Elegant_Shirt",true,false,false,true,3,'EasyRewards/Green_elegant_shirt.png',404),
    Reward23Uncommon:new RewardXRarityLevel(23,"Green_Elegant_Legs",true,false,false,true,3,'EasyRewards/Green_elegant_legs.png',404),
    Reward24Uncommon:new RewardXRarityLevel(24,"Green_Elegant_Blouse",true,false,false,true,3,'EasyRewards/Green_elegant_blouse.png',404),
    Reward25Uncommon:new RewardXRarityLevel(25,"Green_Elegant_Skirt",true,false,false,true,3,'EasyRewards/Green_elegant_skirt.png',404),
    Reward26Uncommon:new RewardXRarityLevel(26,"Red_Elegant_Shirt",true,false,false,true,3,'EasyRewards/Red_elegant_shirt.png',404),
    Reward27Uncommon:new RewardXRarityLevel(27,"Red_Elegant_Legs",true,false,false,true,3,'EasyRewards/Red_elegant_legs.png',404),
    Reward28Uncommon:new RewardXRarityLevel(28,"Red_Elegant_Blouse",true,false,false,true,3,'EasyRewards/Red_elegant_blouse.png',404),
    Reward29Uncommon:new RewardXRarityLevel(29,"Red_Elegant_Skirt",true,false,false,true,3,'EasyRewards/Red_elegant_skirt.png',404),
    Reward30Uncommon:new RewardXRarityLevel(30,"Studded_Body_G",true,false,false,true,3,'EasyRewards/Studded_body_(g).png',404),
    Reward31Uncommon:new RewardXRarityLevel(31,"Studded_Legs_G",true,false,false,true,3,'EasyRewards/Studded_chaps_(g).png',404),
    Reward32Uncommon:new RewardXRarityLevel(32,"Studded_Body_T",true,false,false,true,3,'EasyRewards/Studded_body_(t).png',404),
    Reward33Uncommon:new RewardXRarityLevel(33,"Studded_Legs_T",true,false,false,true,3,'EasyRewards/Studded_chaps_(t).png',404),
    Reward34Uncommon:new RewardXRarityLevel(34,"Black_Helm_h1",true,false,false,true,3,'EasyRewards/Black_helm_(h1).png',404),
    Reward35Uncommon:new RewardXRarityLevel(35,"Black_Helm_h2",true,false,false,true,3,'EasyRewards/Black_helm_(h2).png',404),
    Reward36Uncommon:new RewardXRarityLevel(36,"Black_Helm_h3",true,false,false,true,3,'EasyRewards/Black_helm_(h3).png',404),
    Reward37Uncommon:new RewardXRarityLevel(37,"Black_Helm_h4",true,false,false,true,3,'EasyRewards/Black_helm_(h4).png',404),
    Reward38Uncommon:new RewardXRarityLevel(38,"Black_Helm_h5",true,false,false,true,3,'EasyRewards/Black_helm_(h5).png',404),
    Reward39Uncommon:new RewardXRarityLevel(39,"Black_Shield_h1",true,false,false,true,3,'EasyRewards/Black_shield_(h1).png',404),
    Reward40Uncommon:new RewardXRarityLevel(40,"Black_Shield_h2",true,false,false,true,3,'EasyRewards/Black_shield_(h2).png',404),
    Reward41Uncommon:new RewardXRarityLevel(41,"Black_Shield_h3",true,false,false,true,3,'EasyRewards/Black_shield_(h3).png',404),
    Reward42Uncommon:new RewardXRarityLevel(42,"Black_Shield_h4",true,false,false,true,3,'EasyRewards/Black_shield_(h4).png',404),
    Reward43Uncommon:new RewardXRarityLevel(43,"Black_Shield_h5",true,false,false,true,3,'EasyRewards/Black_shield_(h5).png',404),
    Reward44Uncommon:new RewardXRarityLevel(44,"Blue_Wizard_Hat_T",true,false,false,true,3,'EasyRewards/Blue_wizard_hat_(t).png',404),
    Reward45Uncommon:new RewardXRarityLevel(45,"Blue_Wizard_Robe_T",true,false,false,true,3,'EasyRewards/Blue_wizard_robe_(t).png',404),
    Reward46Uncommon:new RewardXRarityLevel(46,"Blue_Skirt_T",true,false,false,true,3,'EasyRewards/Blue_skirt_(t).png',404),
    Reward47Uncommon:new RewardXRarityLevel(47,"Blue_Wizard_Hat_G",true,false,false,true,3,'EasyRewards/Blue_wizard_hat_(g).png',404),
    Reward48Uncommon:new RewardXRarityLevel(48,"Blue_Wizard_Robe_G",true,false,false,true,3,'EasyRewards/Blue_wizard_robe_(g).png',404),
    Reward49Uncommon:new RewardXRarityLevel(49,"Blue_Skirt_G",true,false,false,true,3,'EasyRewards/Blue_skirt_(g).png',404),
    Reward50Uncommon:new RewardXRarityLevel(50,"Bronze_Helm_G",true,false,false,true,3,'EasyRewards/Bronze_full_helm_(g).png',404),
    Reward51Uncommon:new RewardXRarityLevel(51,"Bronze_Kiteshield_G",true,false,false,true,3,'EasyRewards/Bronze_kiteshield_(g).png',404),
    Reward52Uncommon:new RewardXRarityLevel(52,"Bronze_Platelegs_G",true,false,false,true,3,'EasyRewards/Bronze_platelegs_(g).png',404),
    Reward53Uncommon:new RewardXRarityLevel(53,"Bronze_Platebody_G",true,false,false,true,3,'EasyRewards/Bronze_platebody_(g).png',404),
    Reward54Uncommon:new RewardXRarityLevel(54,"Bronze_Helm_T",true,false,false,true,3,'EasyRewards//Bronze_full_helm_(t).png',404),
    Reward55Uncommon:new RewardXRarityLevel(55,"Bronze_Kiteshield_T",true,false,false,true,3,'EasyRewards/Bronze_kiteshield_(t).png',404),
    Reward56Uncommon:new RewardXRarityLevel(56,"Bronze_Platelegs_T",true,false,false,true,3,'EasyRewards/Bronze_platelegs_(t).png',404),
    Reward57Uncommon:new RewardXRarityLevel(57,"Bronze_Platebody_T",true,false,false,true,3,'EasyRewards/Bronze_platebody_(t).png',404),
    Reward58Uncommon:new RewardXRarityLevel(58,"Iron_Helm_G",true,false,false,true,3,'EasyRewards/Iron_full_helm_(g).png',404),
    Reward59Uncommon:new RewardXRarityLevel(59,"Iron_Kiteshield_G",true,false,false,true,3,'EasyRewards/Iron_kiteshield_(g).png',404),
    Reward60Uncommon:new RewardXRarityLevel(60,"Iron_Platelegs_G",true,false,false,true,3,'EasyRewards/Iron_platelegs_(g).png',404),
    Reward61Uncommon:new RewardXRarityLevel(61,"Iron_Platebody_G",true,false,false,true,3,'EasyRewards/Iron_platebody_(g).png',404),
    Reward62Uncommon:new RewardXRarityLevel(62,"Iron_Helm_T",true,false,false,true,3,'EasyRewards/Iron_full_helm_(t).png',404),
    Reward63Uncommon:new RewardXRarityLevel(63,"Iron_Kiteshield_T",true,false,false,true,3,'EasyRewards/Iron_kiteshield_(t).png',404),
    Reward64Uncommon:new RewardXRarityLevel(64,"Iron_Platelegs_T",true,false,false,true,3,'EasyRewards/Iron_platelegs_(t).png',404),
    Reward65Uncommon:new RewardXRarityLevel(65,"Iron_Platebody_T",true,false,false,true,3,'EasyRewards/Iron_platebody_(t).png',404),
    Reward66Uncommon:new RewardXRarityLevel(66,"Steel_Helm_G",true,false,false,true,3,'EasyRewards/Steel_full_helm_(g).png',404),
    Reward67Uncommon:new RewardXRarityLevel(67,"Steel_Kiteshield_G",true,false,false,true,3,'EasyRewards/Steel_kiteshield_(g).png',404),
    Reward68Uncommon:new RewardXRarityLevel(68,"Steel_Platelegs_G",true,false,false,true,3,'EasyRewards/Steel_platelegs_(g).png',404),
    Reward69Uncommon:new RewardXRarityLevel(69,"Steel_Platebody_G",true,false,false,true,3,'EasyRewards/Steel_platebody_(g).png',404),
    Reward70Uncommon:new RewardXRarityLevel(70,"Steel_Helm_T",true,false,false,true,3,'EasyRewards/Steel_full_helm_(t).png',404),
    Reward71Uncommon:new RewardXRarityLevel(71,"Steel_Kiteshield_T",true,false,false,true,3,'EasyRewards/Steel_kiteshield_(t).png',404),
    Reward72Uncommon:new RewardXRarityLevel(72,"Steel_Platelegs_T",true,false,false,true,3,'EasyRewards/Steel_platelegs_(t).png',404),
    Reward73Uncommon:new RewardXRarityLevel(73,"Steel_Platebody_T",true,false,false,true,3,'EasyRewards/Steel_platebody_(t).png',404),
    Reward74Uncommon:new RewardXRarityLevel(74,"Highwayman_Mask",true,false,false,true,3,'EasyRewards/Highwayman_mask.png',404),
    Reward75Uncommon:new RewardXRarityLevel(75,"Beanie",true,false,false,true,3,'EasyRewards/Beanie.png',404),
    Reward76Uncommon:new RewardXRarityLevel(76,"Bobs_Shirt_Black",true,false,false,true,3,'EasyRewards/Bobs_black_shirt.png',404),
    Reward77Uncommon:new RewardXRarityLevel(77,"Bobs_Shirt_Blue",true,false,false,true,3,'EasyRewards/Bobs_blue_shirt.png',404),
    Reward78Uncommon:new RewardXRarityLevel(78,"Bobs_Shirt_Green",true,false,false,true,3,'EasyRewards/Bobs_green_shirt.png',404),
    Reward79Uncommon:new RewardXRarityLevel(79,"Bobs_Shirt_Purple",true,false,false,true,3,'EasyRewards/Bobs_purple_shirt.png',404),
    Reward80Uncommon:new RewardXRarityLevel(80,"Bobs_Shirt_Red",true,false,false,true,3,'EasyRewards/Bobs_red_shirt.png',404),
    Reward81Uncommon:new RewardXRarityLevel(81,"Black_Cane",true,false,false,true,3,'EasyRewards/Black_cane.png',404),
    Reward82Uncommon:new RewardXRarityLevel(82,"Imp_Mask",true,false,false,true,3,'EasyRewards/Imp_mask.png',404),
    Reward83Uncommon:new RewardXRarityLevel(83,"Sleeping_Cap",true,false,false,true,3,'EasyRewards/Sleeping_cap.png',404),
    Reward84Uncommon:new RewardXRarityLevel(84,"Powered_Wig",true,false,false,true,3,'EasyRewards/A_Powdered_wig.png',404),
    Reward85Uncommon:new RewardXRarityLevel(85,"Pantaloons",true,false,false,true,3,'EasyRewards/Pantaloons.png',404),
    Reward86Uncommon:new RewardXRarityLevel(86,"Flared_Trousers",true,false,false,true,3,'EasyRewards/Flared_trousers.png',404),
    Reward87Uncommon:new RewardXRarityLevel(87,"Goblin_Mask",true,false,false,true,3,'EasyRewards/Goblin_mask.png',404),
    Reward88Uncommon:new RewardXRarityLevel(88,"Black_Platebody_T",true,false,false,true,3,'EasyRewards/Black_platebody_(t).png',404),
    Reward89Uncommon:new RewardXRarityLevel(89,"Team_Cape_i",true,false,false,true,3,'EasyRewards/Team_cape_i.png',404),
    Reward90Uncommon:new RewardXRarityLevel(90,"Team_Cape_X",true,false,false,true,3,'EasyRewards/Team_cape_x.png',404),
    Reward91Uncommon:new RewardXRarityLevel(91,"Team_Cape_Zero",true,false,false,true,3,'EasyRewards/Team_cape_zero.png',404),
    Reward92Uncommon:new RewardXRarityLevel(92,"Wooden Shield_G",true,false,false,true,3,'EasyRewards/Wooden_shield_(g).png',404),
    Reward93Uncommon:new RewardXRarityLevel(93,"Golden_Chefs_Hat",true,false,false,true,3,'EasyRewards/Golden_chefs_hat.png',404),
    Reward94Uncommon:new RewardXRarityLevel(94,"Golden_Apron",true,false,false,true,3,'EasyRewards/Golden_apron.png',404),
    Reward95Uncommon:new RewardXRarityLevel(95,"Gold_Trimmed_Monk_Top",true,false,false,true,3,'EasyRewards/Monks_robe_top_(g).png',404),
    Reward96Uncommon:new RewardXRarityLevel(96,"Gold_Trimmed_Monk_Bottom",true,false,false,true,3,'EasyRewards/Monks_robe_(g).png',404),
    Reward97Uncommon:new RewardXRarityLevel(97,"Holy_Blessing",true,false,false,true,3,'EasyRewards/Holy_blessing.png',404),
    Reward98Uncommon:new RewardXRarityLevel(98,"Unholy_Blessing",true,false,false,true,3,'EasyRewards/Unholy_blessing.png',404),
    Reward99Uncommon:new RewardXRarityLevel(99,"Peaceful_Blessing",true,false,false,true,3,'EasyRewards/Peaceful_blessing.png',404),
    Reward100Uncommon:new RewardXRarityLevel(100,"Honourable_Blessing",true,false,false,true,3,'EasyRewards/Honourable_blessing.png',404),
    Reward101Uncommon:new RewardXRarityLevel(101,"War_Blessing",true,false,false,true,3,'EasyRewards/War_blessing.png',404),
    Reward102Uncommon:new RewardXRarityLevel(102,"Zaros_Blessing",true,false,false,true,3,'EasyRewards/Ancient_blessing.png',404),
    Reward103Uncommon:new RewardXRarityLevel(103,"Charge_Jewerly",true,[3,6],false,true,3,'EasyRewards/Charge_dragonstone.png',404),
    Reward104Uncommon:new RewardXRarityLevel(104,"Black_Wizard_Hat_G",true,false,false,true,3,'EasyRewards/Black_wizard_hat_(g).png',404),
    Reward105Uncommon:new RewardXRarityLevel(105,"Black_Wizard_Robe_G",true,false,false,true,3,'EasyRewards/Black_wizard_robe_(g).png',404),
    Reward106Uncommon:new RewardXRarityLevel(106,"Black_Skirt_G",true,false,false,true,3,'EasyRewards/Black_skirt_(g).png',404),
    Reward107Uncommon:new RewardXRarityLevel(107,"Black_Wizard_Hat_T",true,false,false,true,3,'EasyRewards/Black_wizard_hat_(t).png',404),
    Reward108Uncommon:new RewardXRarityLevel(108,"Black_Wizard_Robe_T",true,false,false,true,3,'EasyRewards/Black_wizard_robe_(t).png',404),
    Reward109Uncommon:new RewardXRarityLevel(109,"Black_Helm_G",true,false,false,true,3,'EasyRewards/Black_full_helm_(g).png',404),
    Reward110Uncommon:new RewardXRarityLevel(110,"Black_Kiteshield_G",true,false,false,true,3,'EasyRewards/Black_kiteshield_(g).png',404),
    Reward111Uncommon:new RewardXRarityLevel(111,"Black_Platelegs_G",true,false,false,true,3,'EasyRewards/Black_platelegs_(g).png',404),
    Reward112Uncommon:new RewardXRarityLevel(112,"Black_Platebody_G",true,false,false,true,3,'EasyRewards/Black_platebody_(g).png',404),
    Reward113Uncommon:new RewardXRarityLevel(113,"Black_Helm_T",true,false,false,true,3,'EasyRewards/Black_full_helm_(t).png',404),
    Reward114Uncommon:new RewardXRarityLevel(114,"Black_Kiteshield_T",true,false,false,true,3,'EasyRewards/Black_kiteshield_(t).png',404),
    Reward115Uncommon:new RewardXRarityLevel(115,"Black_Platelegs_T",true,false,false,true,3,'EasyRewards/Black_platelegs_(t).png',404),
    Reward116Uncommon:new RewardXRarityLevel(116,"Black_Skirt_T",true,false,false,false,3,'EasyRewards/Black_skirt_(t).png',404),
    // add skirts
    
    // Begin Commmon Rewards
    Reward0Common:new RewardXRarityLevel(0,"CoinsLow",false,[50,1500],false,false,2, 'EasyRewards/Coins.gif',404),
    Reward1Common:new RewardXRarityLevel(1,"God_Page",false,false,[1,24],false,2,'EasyRewards/God_pages.gif',404),
    Reward2Common:new RewardXRarityLevel(2,"Teleport_Scrolls",false,[5,15],[1,11],true,2,'EasyRewards/Teleport_Scrolls.gif',404),
    Reward3Common:new RewardXRarityLevel(3,"Air_Runes",false,[30,50],false,false,2,'EasyRewards/Air_rune.png',404),
    Reward4Common:new RewardXRarityLevel(4,"Earth_Runes",false,[30,50],false,false,2,'EasyRewards/Earth_rune.png',404),
    Reward5Common:new RewardXRarityLevel(5,"Fire_Runes",false,[30,50],false,false,2,'EasyRewards/Fire_rune.png',404),
    Reward6Common:new RewardXRarityLevel(6,"Mind_Runes",false,[30,50],false,false,2,'EasyRewards/Mind_rune.png',404),
    Reward7Common:new RewardXRarityLevel(7,"Water_Runes",false,[30,50],false,false,2,'EasyRewards/Water_rune.png',404),
    Reward8Common:new RewardXRarityLevel(8,"Nature_Runes",false,[6,9],false,false,2,'EasyRewards/Nature_rune.png',404),
    Reward9Common:new RewardXRarityLevel(9,"Law_Runes",false,[6,9],false,false,2,'EasyRewards/Law_rune.png',404),
    Reward10Common:new RewardXRarityLevel(10,"Chaos_Runes",false,[6,9],false,false,2,'EasyRewards/Chaos_rune.png',404),
    Reward11Common:new RewardXRarityLevel(11,"Salmon",false,[6,9],false,false,2,'EasyRewards/Salmon.png',404),
    Reward12Common:new RewardXRarityLevel(12,"Trout",false,[6,9],false,false,2,'EasyRewards/Trout.png',404),
    Reward13Common:new RewardXRarityLevel(13,"Purple_Sweets",false,[6,9],false,false,2,'EasyRewards/Purple_sweets_10.png',404),
    Reward14Common:new RewardXRarityLevel(14,"Firelighters",false,[3,7],[1,5],true,2,'EasyRewards/Gnomish_firelighters.gif',404),
    Reward15Common:new RewardXRarityLevel(15,"Air_Staff",true,false,false,false,2,'EasyRewards/Staff_of_air.png',404),
    Reward16Common:new RewardXRarityLevel(16,"Earth_Staff",true,false,false,false,2,'EasyRewards/Staff_of_earth.png',404),
    Reward17Common:new RewardXRarityLevel(17,"Water_Staff",true,false,false,false,2,'EasyRewards/Staff_of_water.png',404),
    Reward18Common:new RewardXRarityLevel(18,"Fire_Staff",true,false,false,false,2,'EasyRewards/Staff_of_fire.png',404),
    Reward19Common:new RewardXRarityLevel(19,"Studded_Leahter_Body",true,false,false,false,2,'EasyRewards/Studded_body.png',404),
    Reward20Common:new RewardXRarityLevel(20,"Studded_Leather_Chaps",true,false,false,false,2,'EasyRewards/Studded_chaps.png',404),
    Reward21Common:new RewardXRarityLevel(21,"Coif",true,false,false,false,2,'EasyRewards/Coif.png',404),
    Reward22Common:new RewardXRarityLevel(22,"Willow_Comp_Bow",true,false,false,false,2,'EasyRewards/Willow_comp_bow.png',404),
    Reward23Common:new RewardXRarityLevel(23,"Willow_Short_Bow",true,false,false,false,2,'EasyRewards/Willow_shortbow.png',404),
    Reward24Common:new RewardXRarityLevel(24,"Willlow_Long_Bow",true,false,false,false,2,'EasyRewards/Willow_longbow.png',404),
    Reward25Common:new RewardXRarityLevel(25,"Steel_Pickaxe",true,false,false,false,2,'EasyRewards/Steel_pickaxe.png',404),
    Reward26Common:new RewardXRarityLevel(26,"Black_Pickaxe",true,false,false,false,2,'EasyRewards/Black_pickaxe.png',404),
    Reward27Common:new RewardXRarityLevel(27,"Amulet_Of_Magic",true,false,false,false,2,'EasyRewards/Amulet_of_magic.png',404),
    Reward28Common:new RewardXRarityLevel(28,"Black_helm",true,false,false,false,2,'EasyRewards/Black_full_helm.png',404),
    Reward29Common:new RewardXRarityLevel(29,"Black_Platebody",true,false,false,false,2,'EasyRewards/Black_platebody.png',404),
    Reward30Common:new RewardXRarityLevel(30,"Black_Platelegs",true,false,false,false,2,'EasyRewards/Black_platelegs.png',404),
    Reward31Common:new RewardXRarityLevel(31,"Black_Axe",true,false,false,false,2,'EasyRewards/Black_axe.png',404),
    Reward32Common:new RewardXRarityLevel(32,"Black_dagger",true,false,false,false,2,'EasyRewards/Black_dagger.png',404),
    Reward33Common:new RewardXRarityLevel(33,"Black_Long_Sword",true,false,false,false,2,'EasyRewards/Black_longsword.png',404),
    Reward34Common:new RewardXRarityLevel(34,"Black_Battleaxe",true,false,false,false,2,'EasyRewards/Black_battleaxe.png',404),
    // Hope I done.
};

// Function generates the reward count, rarity, position and ID and returns value in an array.
//TODO: After mapping rewards recalculate this, fix magic numbers.
//Note-to-Self: With below function changing the " to ' made the function work in PlaceRewards wtf lol research this.
function GenerateRewardsEasy() {
    var NumberOfRollsInClueScrollEasy =  Math.floor((Math.random() * 3)) + 2, EasyRewardPre = [], rollCount = 0;  
    
    for (;rollCount<NumberOfRollsInClueScrollEasy;rollCount++){
      var TableRollOneInEasy=((Math.floor(Math.random() * 37))+0); // Generated Number 0-36, represents the first table roll for the X reward value. There are two "Mover" table values.
      if(TableRollOneInEasy<=34){
          EasyRewardPre.push('Reward'+TableRollOneInEasy+'Common');
      }
        
      else if(TableRollOneInEasy>34){
       var TableRollTwoInEasy=((Math.floor(Math.random() * 117))+0);   
       EasyRewardPre.push('Reward'+TableRollTwoInEasy+'Uncommon');
      }
     
  }
    return EasyRewardPre;
}


// Parses the reward map and turns them into rewards on screen based on constructor values.
// This function is dependent on the GenerateRewardsEasy() function. See StackOVerflow for thing.
function PlaceRewards() {
    
    // Resets the image before each function call here. Remove->Place->Remove->Place etc.
    for(resetRewardsInContainer=0; resetRewardsInContainer<4; resetRewardsInContainer++){
           var RewardPositionReplaced = '#Placeholder' + resetRewardsInContainer;
              $(RewardPositionReplaced).attr("src",'Placeholder.png');
              $("#itemtext" + resetRewardsInContainer).text("...");
        }
    
    
    AwardArray = GenerateRewardsEasy();
    var RewardObjects = [];
    for(var i = 0; i < AwardArray.length; i++) {
        var RewardNumber = AwardArray[i];
        RewardObjects.push(MappedRewards[RewardNumber]);
        
        var Current = RewardObjects[i];
        var RewardPosition = '#Placeholder' + i;
        
        if(Current.TypicalRewardQuestionMark === true){
             console.log('Normal Reward');
             $(RewardPosition).attr("src",Current.imageSrc);
             $(RewardPosition).attr("alt",Current.rewardName);
            
        }
        
        else if (Array.isArray(Current.RewardRangeQuestionMark) && Array.isArray(Current.MArray)){
            console.log('Either teleport scrolls or firelighters');
            
            // Maths explanation: max-min = difference turned into range with 0-> difference plus the min. This gives an a number between the low and high value of the range array. Turn this into a function  if it gets too WET.
            // Repeat 1
            var RangeInRangePlusMArray = Current.RewardRangeQuestionMark[0]+(Math.floor((Math.random() * ((Current.RewardRangeQuestionMark[1] - Current.RewardRangeQuestionMark[0])+1))));
            // Repeat 2
            var MArrayInRangePlusMArray = Current.MArray[0]+(Math.floor((Math.random() * ((Current.MArray[1] - Current.MArray[0])+1))));
            
                if(Current.rewardName === "Firelighters"){
                     var FirelightersArray= ["Purple","Red","Blue","Green","White"];
                     var SelectedFireLighter = FirelightersArray[Math.floor(Math.random()*FirelightersArray.length)];
                      $("#itemtext" + i).text(SelectedFireLighter+" Firelighters "+RangeInRangePlusMArray+" count");
                }
                else if(Current.rewardName === "Teleport_Scrolls"){
                    var TeleportScrollsArray = ["Nardah","Digsite","Feldip hills","Lunar isle","Mort'ton","Pest Control", "Piscartoris", "Tai bwo wannai", "Elf camp","Mos le'harmless","Lumberyard"];
                    var TeleportScrollsArray = ["Nardah","Digsite","Feldip hills","Lunar isle","Mort'ton","Pest Control", "Piscartoris", "Tai bwo wannai", "Elf camp","Mos le'harmless","Lumberyard"];
                    var SelectedScroll = TeleportScrollsArray[Math.floor(Math.random()*TeleportScrollsArray.length)];
                     $("#itemtext" + i).text(SelectedScroll+" Scrolls "+RangeInRangePlusMArray+" count");
                }
            
                $(RewardPosition).attr("src",Current.imageSrc);
                $(RewardPosition).attr("alt",Current.rewardName);
        }
            
             
        
        else if (Array.isArray(Current.MArray)){
             console.log('God pages');
            // Repeat 3
             var MArrayRangeOnly = Current.MArray[0]+(Math.floor((Math.random() * ((Current.MArray[1] - Current.MArray[0])+1))));
             console.log('Page ' + MArrayRangeOnly);
             
            var PagesArray= ["Zamorak Page ","Saradomin Page", "Guthix Page", "Bandos Page", "Ancient Page", "Armadyl Page"];
            var SelectedPage = PagesArray[Math.floor(Math.random()*PagesArray.length)];
            
            $("#itemtext" + i).text(SelectedPage+" "+ (Math.floor((Math.random() * 4)) + 1));
             $(RewardPosition).attr("src",Current.imageSrc);
             $(RewardPosition).attr("alt",Current.rewardName);
            
        }
        
        else if (Array.isArray(Current.RewardRangeQuestionMark)){
            console.log('Reward range only.');
            
            // Repeat 4
            var RangeAmountRangeOnly = Current.RewardRangeQuestionMark[0]+(Math.floor((Math.random() * ((Current.RewardRangeQuestionMark[1] - Current.RewardRangeQuestionMark[0])+1))));
            
            console.log(RangeAmountRangeOnly);
            
            
            
             $("#itemtext" + i).text(Current.rewardName+ " " + RangeAmountRangeOnly + " count");
             $(RewardPosition).attr("src",Current.imageSrc);   
             $(RewardPosition).attr("alt",Current.rewardName);
        }
        
        else{
            console.log('Error');
        }
        
      
        
    }
    //typical reward, if MA+R, if R, if MA See blue inked sheet.
    console.log(RewardObjects);
    
}

