const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property({
        type: cc.Mask
    })
    myMask: cc.Mask = null;

    @property({
        displayName: "刮卡路径大小",
        min: 32
    })
    size: number = 32;

    onLoad () {
        this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchBegin, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
    }

    _onTouchBegin (event) {
        var point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
        this._addCircle(point);
    }

    _onTouchMoved (event) {
        var point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
        this._addCircle(point);
    }

    _onTouchEnd (event) {
        var point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
        this._addCircle(point);
    }

    _addCircle (point) {
        var stencil = this.myMask._clippingStencil;
        var color = cc.color(255, 255, 255, 0);
        stencil.drawPoly(this.myMask._calculateCircle(point,cc.p(50,50), 64), color, 0, color);
        cc.renderer.childrenOrderDirty = true;
    }
}
