/**
* このファイルを使って、独自の関数やブロックを定義してください。
* 詳しくはこちらを参照してください：https://makecode.microbit.org/blocks/custom
*/


/**
 * Custom blocks
 */
//% weight=150 color=#0fbc11 icon=""
namespace THK {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function モーター１の角度(n: number): void {
        // Add code here
        n = n * 0.8;
        kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, n)
        //kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, n)
    }

}// ここにコードを追加します
