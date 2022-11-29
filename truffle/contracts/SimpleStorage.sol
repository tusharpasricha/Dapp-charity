// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract charity{
    mapping(address=>uint) public donors; //donors[msg.sender]=100
    address public admin; 
    uint public minimumContribution;
    uint public deadline;
    uint public target;
    uint public collectedAmount;
    uint public noOfdonors;
    
    struct Request{
        string description;
        address payable recipient;
        uint value;
        bool completed;
        uint noOfVoters;
        mapping(address=>bool) voters;
    }
    mapping(uint=>Request) public requests;
    uint public numRequests;
    constructor(uint256 _target,uint _deadline){
        target=_target;
        deadline=block.timestamp+_deadline; //10sec + 3600sec (60*60)
        minimumContribution=100 wei;
        admin=msg.sender;
    }
    
    function sendEth() public payable{
        require(block.timestamp < deadline,"Deadline has passed");
        require(msg.value >=minimumContribution,"Minimum Contribution is not met");
        
        if(donors[msg.sender]==0){
            noOfdonors++;
        }
        donors[msg.sender]+=msg.value;
        collectedAmount+=msg.value;
    }
    function getContractBalance() public view returns(uint){
        return address(this).balance;
    }
    function refund() public{
        
        require(block.timestamp>deadline && collectedAmount<target,"You are not eligible for refund");
        require(donors[msg.sender]>0);
        address payable user=payable(msg.sender);
        user.transfer(donors[msg.sender]);
        donors[msg.sender]=0;
        
    }
    modifier onlyAdmin(){
        require(msg.sender==admin,"Only admin can calll this function");
        _;
    }
    function createRequests(string memory _description,address payable _recipient,uint _value) public onlyAdmin{
        Request storage newRequest = requests[numRequests];
        numRequests++;
        newRequest.description=_description;
        newRequest.recipient=_recipient;
        newRequest.value=_value;
        newRequest.completed=false;
        newRequest.noOfVoters=0;
    }
    function voteRequest(uint _requestNo) public{
        require(donors[msg.sender]>0,"YOu must be contributor");
        Request storage thisRequest=requests[_requestNo];
        require(thisRequest.voters[msg.sender]==false,"You have already voted");
        thisRequest.voters[msg.sender]=true;
        thisRequest.noOfVoters++;
    }
    function makePayment(uint _requestNo) public onlyAdmin{
        require(collectedAmount>=target);
        Request storage thisRequest=requests[_requestNo];
        require(thisRequest.completed==false,"The request has been completed");
        require(thisRequest.noOfVoters > noOfdonors/2,"Majority does not support");
        thisRequest.recipient.transfer(thisRequest.value);
        thisRequest.completed=true;
    }
}

