import requests
import json
from bs4 import BeautifulSoup
from utils import sort_dict, clear_parsed_numbers

page = requests.get(
    "https://www.mfcr.cz/cs/verejny-sektor/rizeni-statniho-dluhu/statistiky/struktura-a-vyvoj-statniho-dluhu")
soup = BeautifulSoup(page.content, 'html.parser')


def main():
    tables = soup.find_all('table')
    result_dict = {}

    for table in tables:
        table_data = parse_table(table)
        result_dict.update(table_data)

    sorted_data = sort_dict(result_dict)
    with open('./../../src/data/debt.json', 'w+') as file:
        json.dump(sorted_data, file)


def parse_table(table):
    head_rows = table.select('thead > tr:last-of-type th')
    head_row_texts = []
    body_row_texts = []
    result = {}

    for head_row in head_rows:
        head_row_text = head_row.get_text()
        if head_row_text != '\xa0' and head_row_text != '':
            head_row_texts.append(clear_parsed_numbers(head_row_text))

    body_rows = table.select('tbody > tr:first-of-type td')

    for body_row in body_rows:
        body_row_text = body_row.get_text()
        body_row_texts.append(clear_parsed_numbers(body_row_text))

    for i in range(len(body_row_texts)):
        result[head_row_texts[i]] = body_row_texts[i]

    return sort_dict(result)


if __name__ == "__main__":
    main()
