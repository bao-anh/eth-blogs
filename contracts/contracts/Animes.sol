// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

contract Animes {
  uint public animeCount = 0;
  
  struct Anime {
    uint id;
    string name;
    uint myRate;
    uint myanimelistRate;
    string description;
    uint dateDoneWatching;
    string[] tags;
    string status;
    string ending;
  }

  mapping(uint => Anime) public animes;

  function createAnime(
    string memory _name,
    uint _myRate,
    uint _myanimelistRate,
    string memory description,
    uint dateDoneWatching,
    string[] memory _tags,
    string memory _status,
    string memory _ending
  ) public {
    animeCount++;

    animes[animeCount] = Anime(
      animeCount,
      _name,
      _myRate,
      _myanimelistRate,
      description,
      dateDoneWatching,
      _tags,
      _status,
      _ending
    );
  }
}