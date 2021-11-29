export const templates = [
  {
    text: `Imagine that a company owns a server farm comprised of 10,000 computers use to maintain a database holding all of its client's account information. This company owns a warehouse building that contains all of these computers under one roof and has full control of each of these computers and all the information contained within them. This, however, provides a single point of failure. What happens if the electricity at that location goes out? Or its internet connection is severed? What if it burns to the ground? What if a bad actor erases everything with a single keystroke? In any case, the data is lost or corrupted.


    What a blockchain does, is to allow the data held in that database to be spread out among several network nodes at various locations. This not only creates redundancy, but also maintains the fidelity of the data stored therein: if somebody tries to alter a record at one instance of the database, the other nodes would not be altered and so would prevent a bad actor from doing so. If one user tampers with Bitcoin’s record of transactions, all other nodes would cross-reference each other and easily pinpoint the node with the incorrect information. This system helps to establish an exact and transparent order of events. This way, no one node within the network can alter information held within it.`,
  },
  {
    text: `Because of the decentralized nature of Bitcoin’s blockchain, all transactions can be transparently viewed by either having a personal node or by using blockchain explorers that allow anyone to see transactions occurring live. Each node has its own copy of the chain that gets updated as fresh blocks are confirmed and added. This means that if you wanted to, you could track Bitcoin wherever it goes. 

    For example, exchanges have been hacked in the past, where those who kept Bitcoin on the exchange lost everything. While the hacker may be entirely anonymous, the Bitcoins that they extracted are easily traceable. If the Bitcoins that were stolen in some of these hacks were to be moved or spent somewhere, it would be known.`,
  },
  {
    text: `Blockchain technology achieves decentralized security and trust in several ways. First, new blocks are always stored linearly and chronologically. That is, they are always added to the “end” of the blockchain. After a block has been added to the end of the blockchain, it is extremely difficult to go back and alter the contents of the block unless a majority of the network has reached a consensus to do so. That’s because each block contains its own hash, along with the hash of the block before it, as well as the previously mentioned time stamp. Hash codes are created by a mathematical function that turns digital information into a string of numbers and letters. If that information is edited in any way, the hash code changes as well.

    Let’s say a hacker, who also runs a node on a blockchain network, wants to alter a blockchain and steal cryptocurrency from everyone else. If they were to alter their own single copy, it would no longer align with everyone else's copy. When everyone else cross-references their copies against each other, they would see this one copy stand out and that hacker's version of the chain would be cast away as illegitimate.`,
  },
  {
    text: `Succeeding with such a hack would require that the hacker simultaneously control and alter 51% or more of the copies of the blockchain so that their new copy becomes the majority copy and thus, the agreed-upon chain. Such an attack would also require an immense amount of money and resources as they would need to redo all of the blocks because they would now have different timestamps and hash codes. 

    Due to the size of many cryptocurrency networks and how fast they are growing, the cost to pull off such a feat would probably be insurmountable. Not only would this be extremely expensive, but it would also likely be fruitless. Doing such a thing would not go unnoticed, as network members would see such drastic alterations to the blockchain. The network members would then "hard fork" off to a new version of the chain that has not been affected. This would cause the attacked version of the token to plummet in value, making the attack ultimately pointless as the bad actor has control of a worthless asset. The same would occur if the bad actor were to attack the new fork of Bitcoin. It is built this way so that taking part in the network is far more economically incentivized than attacking it.`,
  },
  {
    text: `Blockchain technology was first outlined in 1991 by Stuart Haber and W. Scott Stornetta, two researchers who wanted to implement a system where document timestamps could not be tampered with. But it wasn’t until almost two decades later, with the launch of Bitcoin in January 2009, that blockchain had its first real-world application.`,
  },
  {
    text: `Another important reason for using the element prop in v6 is that is reserved for nesting routes. This is one of people's favorite features from v3 and @reach/router, and we're bringing it back in v6.`,
  },
  {
    text: `Currently, there are tens of thousands of projects looking to implement blockchains in a variety of ways to help society other than just recording transactions. For example, to use blockchains as a way to vote securely in democratic elections. The nature of blockchain’s immutability means that fraudulent voting would become far more difficult to occur. For example, a voting system could work such that each citizen of a country would be issued a single cryptocurrency or token. Each candidate would then be given a specific wallet address, and the voters would send their token or crypto to whichever candidate's address they wish to vote for. The transparent and traceable nature of blockchain would eliminate the need for human vote counting as well as the ability of bad actors to tamper with physical ballots.`,
  },
];
