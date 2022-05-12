"use strict";
exports.__esModule = true;
exports.TreeBinary = void 0;
var Node_1 = require("./Node");
var TreeBinary = /** @class */ (function () {
    function TreeBinary() {
        this.root = null;
    }
    /* Không xử dụng đệ quy */
    TreeBinary.prototype.insertNode = function (data) {
        if (!this.root) {
            this.root = new Node_1.Node(data);
            return this.root;
        }
        else {
            var node = new Node_1.Node(data);
            var currentNode = this.root;
            while (currentNode) {
                // so sánh giá trị currentNode với data
                if (data < currentNode.data) { // đi xét bên trái tree
                    /* nếu currentNode không có phần tử bên trái thì gán bên trái của
                        currentNode bằng node cần thêm
                     */
                    if (!currentNode.left) {
                        currentNode.left = node;
                        break;
                    }
                    // gán lại currentNode cho node bên trái
                    currentNode = currentNode.left;
                }
                else if (data > currentNode.data) {
                    if (!currentNode.right) {
                        currentNode.right = node;
                        break;
                    }
                    // gán lại currentNode cho node bên phải
                    currentNode = currentNode.right;
                }
            }
            return currentNode;
        }
    };
    TreeBinary.prototype.findNode = function (data) {
        var currentNode = this.root;
        while (currentNode) {
            if (data == currentNode.data) {
                return currentNode;
            }
            else if (data < currentNode.data) {
                currentNode = currentNode.left;
            }
            else if (data > currentNode.data) {
                currentNode = currentNode.right;
            }
        }
        return null;
    };
    TreeBinary.prototype.deleteNode = function (data) {
        // xoa node la
        var node = this.findNode(data);
    };
    TreeBinary.prototype.isNodeLeap = function (node) {
        return node.left == null && node.right == null;
    };
    /* duyệt tree theo tiền thứ tự */
    TreeBinary.prototype.readTree = function (node, level) {
        if (level === void 0) { level = 0; }
        if (node) {
            console.log("level ".concat(level, ":") + node.data);
            if (node.left) {
                this.readTree(node.left, level + 1);
            }
            if (node.right) {
                this.readTree(node.right, level + 1);
            }
        }
    };
    return TreeBinary;
}());
exports.TreeBinary = TreeBinary;
