Events.on(ClientLoadEvent, b => {
    var colorValue = Color.valueOf("ffde83");
    var colorValueSecondary = Color.valueOf("e8c15b");
  
    // spider
  
    UnitTypes.spiroct.weapons.get(0).bullet.hitColor = colorValue;
    UnitTypes.spiroct.weapons.get(1).bullet.hitColor = colorValue;
    UnitTypes.spiroct.weapons.get(2).bullet.hitColor = colorValue;
    UnitTypes.spiroct.weapons.get(3).bullet.hitColor = colorValue;
    UnitTypes.spiroct.weapons.get(0).bullet.color = colorValue;
    UnitTypes.spiroct.weapons.get(1).bullet.color = colorValue;
    UnitTypes.spiroct.weapons.get(2).bullet.color = colorValue;
    UnitTypes.spiroct.weapons.get(3).bullet.color = colorValue;
  
    UnitTypes.arkyid.weapons.get(0).bullet.hitColor = colorValue;
    UnitTypes.arkyid.weapons.get(1).bullet.hitColor = colorValue;
    UnitTypes.arkyid.weapons.get(2).bullet.hitColor = colorValue;
    UnitTypes.arkyid.weapons.get(3).bullet.hitColor = colorValue;
    UnitTypes.arkyid.weapons.get(4).bullet.hitColor = colorValue;
    UnitTypes.arkyid.weapons.get(5).bullet.hitColor = colorValue;
    UnitTypes.arkyid.weapons.get(0).bullet.color = colorValue;
    UnitTypes.arkyid.weapons.get(1).bullet.color = colorValue;
    UnitTypes.arkyid.weapons.get(2).bullet.color = colorValue;
    UnitTypes.arkyid.weapons.get(3).bullet.color = colorValue;
    UnitTypes.arkyid.weapons.get(4).bullet.color = colorValue;
    UnitTypes.arkyid.weapons.get(5).bullet.color = colorValue;
    UnitTypes.arkyid.weapons.get(6).bullet.frontColor = colorValue;
    UnitTypes.arkyid.weapons.get(6).bullet.lightningColor = colorValue;
    UnitTypes.arkyid.weapons.get(6).bullet.backColor = colorValueSecondary;
    UnitTypes.arkyid.weapons.get(6).bullet.trailColor = colorValueSecondary;
    UnitTypes.arkyid.weapons.get(7).bullet.frontColor = colorValue;
    UnitTypes.arkyid.weapons.get(7).bullet.lightningColor = colorValue;
    UnitTypes.arkyid.weapons.get(7).bullet.backColor = colorValueSecondary;
    UnitTypes.arkyid.weapons.get(7).bullet.trailColor = colorValueSecondary;
  
    UnitTypes.toxopid.weapons.get(0).bullet.fromColor = colorValue;
    UnitTypes.toxopid.weapons.get(0).bullet.toColor = colorValueSecondary;
    UnitTypes.toxopid.weapons.get(1).bullet.fromColor = colorValue;
    UnitTypes.toxopid.weapons.get(1).bullet.toColor = colorValueSecondary;
    UnitTypes.toxopid.weapons.get(2).bullet.frontColor = colorValue;
    UnitTypes.toxopid.weapons.get(2).bullet.lightningColor = colorValue;
    UnitTypes.toxopid.weapons.get(2).bullet.lightColor = colorValueSecondary;
    UnitTypes.toxopid.weapons.get(2).bullet.trailColor = colorValueSecondary;
    UnitTypes.toxopid.weapons.get(2).bullet.fragBullet.lightningColor = colorValue;
    UnitTypes.toxopid.weapons.get(2).bullet.fragBullet.backColor = colorValueSecondary;
    UnitTypes.toxopid.weapons.get(2).bullet.fragBullet.trailColor = colorValueSecondary;
    UnitTypes.toxopid.weapons.get(2).bullet.fragBullet.lightColor = colorValueSecondary;
    
    // nova tree
    
    UnitTypes.nova.weapons.get(0).bullet.backColor = colorValue;
    UnitTypes.nova.weapons.get(1).bullet.backColor = colorValue;
    
    UnitTypes.pulsar.weapons.get(0).bullet.lightningColor = colorValue;
    UnitTypes.pulsar.weapons.get(0).bullet.hitColor = colorValue;
    UnitTypes.pulsar.weapons.get(1).bullet.lightningColor = colorValue;
    UnitTypes.pulsar.weapons.get(1).bullet.hitColor = colorValue;
    
    UnitTypes.quasar.weapons.get(0).bullet.colors = [colorValue, colorValue, Color.valueOf("ffffff")];
    UnitTypes.quasar.weapons.get(1).bullet.colors = [colorValue, colorValue, Color.valueOf("ffffff")];
    
    UnitTypes.vela.weapons.get(0).bullet.colors = [colorValue, colorValue, colorValue, Color.valueOf("ffffff")];
    
    UnitTypes.corvus.weapons.get(0).bullet.colors = [colorValue, colorValue, Color.valueOf("ffffff")];
    UnitTypes.corvus.weapons.get(0).bullet.lightColor = colorValue;
    UnitTypes.corvus.weapons.get(0).bullet.lightningColor = colorValue;

    // support flyers
  
    UnitTypes.poly.weapons.get(0).bullet.backColor = colorValue;
    UnitTypes.poly.weapons.get(1).bullet.backColor = colorValue;
    UnitTypes.poly.weapons.get(0).bullet.trailColor = colorValue;
    UnitTypes.poly.weapons.get(1).bullet.trailColor = colorValue;
    
    UnitTypes.mega.weapons.get(0).bullet.backColor = colorValue;
    UnitTypes.mega.weapons.get(1).bullet.backColor = colorValue;
    UnitTypes.mega.weapons.get(2).bullet.backColor = colorValue;
    UnitTypes.mega.weapons.get(3).bullet.backColor = colorValue;
    
    UnitTypes.quad.weapons.get(0).bullet.backColor = colorValue;

    // green boats
    
    UnitTypes.retusa.weapons.get(1).bullet.backColor = colorValue;
    
    UnitTypes.cyerce.weapons.get(2).bullet.backColor = colorValue;
    UnitTypes.cyerce.weapons.get(3).bullet.backColor = colorValue;
    UnitTypes.cyerce.weapons.get(2).bullet.lightColor = colorValue;
    UnitTypes.cyerce.weapons.get(3).bullet.lightColor = colorValue;
    UnitTypes.cyerce.weapons.get(2).bullet.hitEffect.waveColor = colorValue;
    UnitTypes.cyerce.weapons.get(3).bullet.hitEffect.waveColor = colorValue;
    UnitTypes.cyerce.weapons.get(2).bullet.hitEffect.sparkColor = colorValue;
    UnitTypes.cyerce.weapons.get(3).bullet.hitEffect.sparkColor = colorValue;
    UnitTypes.cyerce.weapons.get(2).bullet.trailColor = colorValue;
    UnitTypes.cyerce.weapons.get(3).bullet.trailColor = colorValue;
    UnitTypes.cyerce.weapons.get(2).bullet.fragBullet.backColor = colorValue;
    UnitTypes.cyerce.weapons.get(3).bullet.fragBullet.backColor = colorValue;
    UnitTypes.cyerce.weapons.get(2).bullet.fragBullet.lightColor = colorValue;
    UnitTypes.cyerce.weapons.get(3).bullet.fragBullet.lightColor = colorValue;
    UnitTypes.cyerce.weapons.get(2).bullet.fragBullet.trailColor = colorValue;
    UnitTypes.cyerce.weapons.get(3).bullet.fragBullet.trailColor = colorValue;
  
    UnitTypes.navanax.weapons.get(0).bullet.colors = [colorValue, colorValue, colorValue, Color.valueOf("ffffff")];
    UnitTypes.navanax.weapons.get(1).bullet.colors = [colorValue, colorValue, colorValue, Color.valueOf("ffffff")];
    UnitTypes.navanax.weapons.get(2).bullet.colors = [colorValue, colorValue, colorValue, Color.valueOf("ffffff")];
    UnitTypes.navanax.weapons.get(3).bullet.colors = [colorValue, colorValue, colorValue, Color.valueOf("ffffff")];
    UnitTypes.navanax.weapons.get(4).bullet.backColor = colorValue;
    UnitTypes.navanax.weapons.get(4).bullet.trailColor = colorValue;
    UnitTypes.navanax.weapons.get(5).bullet.backColor = colorValue;
    UnitTypes.navanax.weapons.get(5).bullet.trailColor = colorValue;
});
