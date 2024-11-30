// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

contract TaskContract {
    struct Task {
        uint256 id;
        address username;
        string taskText;
        string importance; // Importance level (Low, Med, High)
        bool isDeleted;
    }

    Task[] private tasks;

    mapping(uint256 => address) taskToOwner;

    event AddTask(address recipient, uint256 taskId, string importance);
    event DeleteTask(uint256 taskId, bool isDeleted);

    function addTask(string memory taskText, string memory importance) external {
        uint256 taskId = tasks.length;
        tasks.push(Task(taskId, msg.sender, taskText, importance, false));
        taskToOwner[taskId] = msg.sender;
        emit AddTask(msg.sender, taskId, importance);
    }

    function getMyTasks() external view returns (Task[] memory) {
        uint256 counter = 0;
        for (uint256 i = 0; i < tasks.length; i++) {
            if (taskToOwner[i] == msg.sender && !tasks[i].isDeleted) {
                counter++;
            }
        }

        Task[] memory result = new Task[](counter);
        uint256 index = 0;
        for (uint256 i = 0; i < tasks.length; i++) {
            if (taskToOwner[i] == msg.sender && !tasks[i].isDeleted) {
                result[index] = tasks[i];
                index++;
            }
        }
        return result;
    }

    function deleteTask(uint256 taskId) external {
        require(taskToOwner[taskId] == msg.sender, "Not your task");
        tasks[taskId].isDeleted = true;
        emit DeleteTask(taskId, true);
    }
}
