function DLA0(position0,url)
{

const entity = new Entity()
entity.addComponent(new BoxShape())

const transform = new Transform({ position: position0 })
entity.addComponent(transform)
let myMaterial=new Material()
myMaterial.albedoColor=new Color4(0,0,0,0)
entity.addComponent(myMaterial)
entity.addComponent(
new OnPointerDown(() => {
  openExternalURL(url)
})
)
engine.addEntity(entity)
}
export function DLA(building)
{



//building
this.animator = building.getComponent(Animator)

    /*const clipSwim = new AnimationState("floor0_5")
this.animator.addClip(clipSwim)
clipSwim.play()*/
    // Add animator component to the entity
    //building.addComponent(this.animator)
this.animator.addClip(new AnimationState("tokensocial",{layer:2})) ;
    this.animator.getClip("tokensocial").play();

    this.animator.addClip(new AnimationState("tokensocial.002",{layer:1})) ;
    this.animator.getClip("tokensocial.002").play();


    this.animator.addClip(new AnimationState("tokensocial.001",{layer:3})) ;
    this.animator.getClip("tokensocial.001").play();

    this.animator.addClip(new AnimationState("tokensocial.003",{layer:4})) ;
    this.animator.getClip("tokensocial.003").play();

DLA0(new Vector3(6, 0.9, 25.3), "https://www.digitalandarchitects.com/")
//DLA0(new Vector3(6, 0.9, 28.7),"https://www.instagram.com/metamall_dcl/")
//DLA0(new Vector3(6, 0.9, 32.3),"https://metamalldcl.com/")
//DLA0(new Vector3(6, 0.9, 35.8),"https://twitter.com/DclMeta")
//DLA0(new Vector3(6, 0.9, 39),"https://discord.com/invite/vkZdaU6RwZ")





}
