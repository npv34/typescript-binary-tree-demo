import {Node} from "./Node";

export class TreeBinary {
    root: Node | null;

    constructor() {
        this.root = null;
    }

    /* Không xử dụng đệ quy */
    insertNode(data: number) {
        if (!this.root) {
            this.root = new Node(data);
            return this.root;
        } else {
            let node = new Node(data);
            let currentNode = this.root;

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

                } else if (data > currentNode.data) {
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
    }

    findNode(data: number) {
        let currentNode = this.root;

        while (currentNode) {
            if (data == currentNode.data) {
                return currentNode;
            } else if (data < currentNode.data) {
                currentNode = currentNode.left
            } else if (data > currentNode.data) {
                currentNode = currentNode.right;
            }
        }
        return null;
    }

    deleteNode(data: number) {
        // xoa node la
        let node = this.findNode(data);

    }

    isNodeLeap(node: Node) {
        return node.left == null && node.right == null
    }

    /* duyệt tree theo tiền thứ tự */
    readTree(node, level = 0) {
        if (node) {
            console.log(`level ${level}:` + node.data);
            if (node.left) {
                this.readTree(node.left, level + 1)
            }
            if (node.right) {
                this.readTree(node.right, level + 1)
            }
        }
    }
}
