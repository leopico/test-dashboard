import styles from "./UserDashboard.module.css";
const UserDashboard = () => {
  return (
    <div className={styles.userdashboard}>
      <div className={styles.macbookAir1}>
        <div className={styles.path106Parent}>
          <img className={styles.path106Icon} alt="" src="/path106.svg" />
          <div className={styles.groupChild} />
          <img className={styles.groupItem} alt="" src="/student.png" />
          <div className={styles.materialSymbolslocationOnParent}>
            {/* <img
              className={styles.materialSymbolslocationOnIcon}
              alt=""
              src="/materialsymbolslocationon.svg"
            /> */}
            <div className={styles.lagosNigeria}>Lagos, Nigeria</div>
            <div className={styles.melissaPeters}>Melissa peters</div>
            <div className={styles.interiorDesigner}>
              <p className={styles.interiorDesigner1}>Interior designer</p>
            </div>
          </div>
          <div className={styles.groupParent}>
            <div className={styles.parent}>
              <div className={styles.div}>5</div>
              <div className={styles.level}>
                <p className={styles.interiorDesigner1}>level</p>
              </div>
            </div>
            <div className={styles.group}>
              <div className={styles.div1}>26</div>
              <div className={styles.friends}>friends</div>
            </div>
            <div className={styles.container}>
              <div className={styles.div2}>137</div>
              <div className={styles.trees}>trees</div>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.groupInner} />
            <div className={styles.editProfile}>Edit profile</div>
            <div className={styles.editProfile1}>Edit profile</div>
          </div>
        </div>
        <div className={styles.myForest}>My Forest</div>
        <img className={styles.macbookAir1Child} alt="" src="/line-2.svg" />
        <div className={styles.friendsParent}>
          <div className={styles.badges}>Friends</div>
          <div className={styles.lineDiv} />
        </div>
        <div className={styles.lineParent}>
          <div className={styles.lineDiv} />
          <div className={styles.badges}>Badges</div>
        </div>
        <div className={styles.imgAvatar}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
        </div>
      </div>
      <div className={styles.card2}>
        <div className={styles.card2Child} />
        <div className={styles.card2Item} />
        <img
          className={styles.virtualforesticon1}
          alt=""
          src="/virtualforesticon-1@2x.png"
        />
        <div className={styles.div3}>137</div>
        <div className={styles.totalTrees}>Total Trees</div>
      </div>
      <div className={styles.card3}>
        <div className={styles.card3Child} />
        <div className={styles.card2Item} />
        <img
          className={styles.virtualforesticon1}
          alt=""
          src="/virtualforesticon-11@2x.png"
        />
        <div className={styles.garden}>Garden</div>
        <div className={styles.totalTrees}>Current Stage</div>
      </div>
      <div className={styles.card4}>
        <div className={styles.card4Child} />
        <div className={styles.card2Item} />
        <img
          className={styles.virtualforesticon1}
          alt=""
          src="/virtualforesticon-1@2x.png"
        />
        <div className={styles.orchard}>Orchard</div>
        <div className={styles.nextStage}>Next Stage</div>
        <div className={styles.toGo}>263 to go</div>
      </div>
      <div className={styles.treesHealth}>
        <img className={styles.treesHealthChild} alt="" src="/group-314.svg" />
        <div className={styles.plantsHealth}>Plants’ Health</div>
        <div className={styles.optimum}>Optimum</div>
        <div className={styles.rectangleGroup}>
          <div className={styles.rectangleDiv} />
          <b className={styles.review}>Review</b>
        </div>
      </div>
      <div className={styles.contribution}>
        <div className={styles.contributionChild} />
        <div className={styles.towardsPlanters}>Towards Planters</div>
        <div className={styles.totalContribution}>{`Total Contribution `}</div>
        <b className={styles.b}>$169</b>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupChild2} />
          <b className={styles.breakdown}>Breakdown</b>
        </div>
      </div>
      <div className={styles.collectiblesEarned}>
        <div className={styles.collectiblesEarned1}>Collectibles Earned</div>
        <div className={styles.treeNft}>
          <div className={styles.treeNftChild} />
          <img
            className={styles.virtualforesticon13}
            alt=""
            src="/virtualforesticon-12@2x.png"
          />
          <div className={styles.treeNft1}>Tree NFT</div>
        </div>
        <div className={styles.gardenNft}>
          <div className={styles.gardenNftChild} />
          <img
            className={styles.virtualforesticon14}
            alt=""
            src="/virtualforesticon-13@2x.png"
          />
          <div className={styles.gardenNft1}>Garden NFT</div>
          <div className={styles.groupDiv}>
            <div className={styles.groupChild2} />
            <b className={styles.breakdown}>Mint Now</b>
          </div>
        </div>
      </div>
      <div className={styles.rewards}>
        <div className={styles.rewards1}> Rewards</div>
        <div className={styles.rewardsChild} />
        <div className={styles.totalCarbonOffset}>{`Total Carbon Offset `}</div>
        <b className={styles.t}>2.2 T</b>
      </div>
      <div className={styles.userdashboardChild} />
      <div className={styles.refiRewardsFrom}>ReFi Rewards From Next Level</div>
      <div className={styles.x6bd5d59a2aWrapper}>
        <div className={styles.x6bd5d59a2a}>0x6bd5d59a2a</div>
      </div>
      <img
        className={styles.greenCreativeGrowingSeedFoIcon}
        alt=""
        src="/green-creative-growing-seed-for-agriculture--farming--gardening-logoremovebgpreview-1@2x.png"
      />
    </div>
  );
};

export default UserDashboard;
