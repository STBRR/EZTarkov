import json

FILENAME = '../Aki_Data/Server/database/templates/items.json'

def parse(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        items = json.load(f)
        for item in items:
            try:
                loot_exp = items[item]['_props']['LootExperience']
                examine_exp = items[item]['_props']['ExamineExperience']

                new_loot_exp = float(loot_exp) * 3
                new_examine_exp = float(examine_exp) * 3

                items[item]['_props']['LootExperience'] = int(new_loot_exp)
                items[item]['_props']['ExamineExperience'] = int(new_examine_exp)

            except KeyError:
                continue

    with open('output/items.json','w') as new:
        json.dump(items, new)
           
parse(FILENAME)