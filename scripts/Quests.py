import json

FILENAME = '../Aki_Data/Server/database/templates/quests.json'

def parse(filename):
    with open(filename, 'r') as f:
        quests = json.load(f)
        for quest in quests:
           quest_names = quests[quest]['QuestName']
           quest_reward = quests[quest]['rewards']['Success'][0]['value']

           new_quest_xp = float(quest_reward) * 3
           
           quests[quest]['rewards']['Success'][0]['value'] = str(new_quest_xp)

    with open('output/quests.json','w') as new:
        json.dump(quests, new)

parse(FILENAME)