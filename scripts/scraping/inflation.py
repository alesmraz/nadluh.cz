import requests
import json
from bs4 import BeautifulSoup
from utils import sort_dict, clear_parsed_numbers

page = requests.get(
    "https://www.czso.cz/csu/czso/mira_inflace")

soup = BeautifulSoup(page.content, 'html.parser')


def main():
    year_table = soup.select_one(
        '#column-1 .obsah table.tabulka:first-of-type')

    table_head_rows = year_table.select('thead tr:last-of-type th b')
    table_body_rows = year_table.select('thead ~ tbody tr td div')

    years_list = []
    inflation_list = []
    result = {}

    for row in table_head_rows:
        row_text = clear_parsed_numbers(row.get_text())
        if row_text != '\xa0' and row_text != '':
            years_list.append(make_full_year(row_text))

    for row in table_body_rows:
        row_text = clear_parsed_numbers(row.get_text())
        if row_text != '\xa0' and row_text != '':
            inflation_list.append(row_text)

    for i in range(len(inflation_list)):
        result[years_list[i]] = inflation_list[i]

    sorted_data = sort_dict(result)

    with open('./../../src/data/inflation.json', 'w+') as file:
        json.dump(sorted_data, file)


def make_full_year(part_of_year):
    return "20" + part_of_year


if __name__ == "__main__":
    main()
